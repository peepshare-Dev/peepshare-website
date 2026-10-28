import fs from "node:fs";
import path from "node:path";
import postcss from "postcss";
import selectorParser from "postcss-selector-parser";

const root = process.cwd();
const pages = {
  "app/assets/css/pages/home.css": "page-home",
  "app/assets/css/pages/event.css": "page-event",
  "app/assets/css/pages/event-detail.css": "page-event-detail",
  "app/assets/css/pages/join.css": "page-join",
  "app/assets/css/pages/partner-shop.css": "page-partner-shop",
  "app/assets/css/pages/terms-and-conditions.css": "page-terms",
};

function isInsideKeyframes(rule) {
  for (let parent = rule.parent; parent; parent = parent.parent) {
    if (parent.type === "atrule" && /keyframes$/i.test(parent.name)) return true;
  }
  return false;
}

function scopeSelector(selector, className) {
  return selectorParser((selectors) => {
    selectors.each((item) => {
      const nodes = item.nodes;
      const isCurrentScope =
        nodes[0]?.type === "tag" &&
        nodes[0]?.value?.toLowerCase() === "html" &&
        nodes[1]?.type === "class" &&
        nodes[1]?.value === className;

      if (isCurrentScope) {
        nodes[0].remove();
        nodes[0].remove();
        if (nodes[0]?.type === "combinator") nodes[0].remove();
      }

      let rootPseudo;
      item.walkPseudos((node) => {
        if (!rootPseudo && node.value === ":root") rootPseudo = node;
      });
      if (rootPseudo) {
        const html = selectorParser.tag({ value: "html" });
        const routeClass = selectorParser.className({ value: className });
        rootPseudo.replaceWith(html, routeClass);
        return;
      }

      let htmlNode;
      item.walkTags((node) => {
        if (!htmlNode && node.value.toLowerCase() === "html") htmlNode = node;
      });
      if (htmlNode) {
        item.insertAfter(htmlNode, selectorParser.className({ value: className }));
        return;
      }

      if (item.nodes.length === 0) {
        item.append(selectorParser.tag({ value: "html" }));
        item.append(selectorParser.className({ value: className }));
        return;
      }

      // The partner form's class is on <main> itself, not on a child of it.
      if (
        className === "page-partner-shop" &&
        item.nodes[0]?.type === "class" &&
        item.nodes[0]?.value === "form-bg"
      ) {
        item.prepend(selectorParser.tag({ value: "main" }));
      }

      const firstTag = item.nodes.find((node) => node.type === "tag");
      const startsWithBody = firstTag?.value?.toLowerCase() === "body";
      const startsWithMain = firstTag?.value?.toLowerCase() === "main";

      if (startsWithBody) {
        const firstCombinator = item.nodes.find((node) => node.type === "combinator");
        if (firstCombinator) {
          item.insertAfter(firstCombinator, selectorParser.tag({ value: "main" }));
          item.insertAfter(firstCombinator.next(), selectorParser.combinator({ value: " " }));
        }
      }

      if (!startsWithBody && !startsWithMain) {
        item.prepend(selectorParser.combinator({ value: " " }));
        item.prepend(selectorParser.tag({ value: "main" }));
        item.prepend(selectorParser.combinator({ value: " " }));
      } else {
        item.prepend(selectorParser.combinator({ value: " " }));
      }
      item.prepend(selectorParser.className({ value: className }));
      item.prepend(selectorParser.tag({ value: "html" }));
    });
  }).processSync(selector);
}

for (const [relativePath, className] of Object.entries(pages)) {
  const filePath = path.join(root, relativePath);
  const css = fs.readFileSync(filePath, "utf8");
  const ast = postcss.parse(css, { from: filePath });

  ast.walkRules((rule) => {
    if (!rule.selector || isInsideKeyframes(rule)) return;
    rule.selector = scopeSelector(rule.selector, className);
  });

  fs.writeFileSync(filePath, ast.toString(), "utf8");
  console.log(`Scoped ${relativePath} to html.${className}`);
}

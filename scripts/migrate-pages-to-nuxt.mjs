import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");

const pages = [
  {
    source: "home/index.html",
    scope: "page-home",
    page: "app/pages/home/index.vue",
    css: "app/assets/css/pages/home.css",
    script: "public/legacy-scripts/home.js",
    title: "PEEP SHARE",
    description: "PEEP SHARE — Your life, all in one PEEP",
  },
  {
    source: "event/index.html",
    scope: "page-event",
    page: "app/pages/event/index.vue",
    css: "app/assets/css/pages/event.css",
    script: "public/legacy-scripts/event.js",
    title: "PEEP SHARE - Events",
    description: "กิจกรรมและอีเวนต์จาก PEEP SHARE",
  },
  {
    source: "event/detail/index.html",
    scope: "page-event-detail",
    page: "app/pages/event/detail/index.vue",
    css: "app/assets/css/pages/event-detail.css",
    title: "MONOMAX Premier League Watch Party — PEEP SHARE",
    description: "รายละเอียดกิจกรรม MONOMAX Premier League Watch Party จาก PEEP SHARE",
  },
  {
    source: "join/index.html",
    scope: "page-join",
    page: "app/pages/join/index.vue",
    css: "app/assets/css/pages/join.css",
    script: "public/legacy-scripts/join.js",
    title: "PEEP SHARE - Join With Us",
    description: "ร่วมเป็นพาร์ทเนอร์กับ PEEP SHARE",
  },
  {
    source: "terms-and-conditions/index.html",
    scope: "page-terms",
    page: "app/pages/terms-and-conditions/index.vue",
    css: "app/assets/css/pages/terms-and-conditions.css",
    externalScript: "terms-and-conditions/script.js",
    script: "public/legacy-scripts/terms-and-conditions.js",
    title: "Terms and Conditions — PEEP SHARE",
    description: "ข้อกำหนดและเงื่อนไข ประกาศความเป็นส่วนตัว และแนวทางปฏิบัติของชุมชน PEEP SHARE",
  },
  {
    source: "partner/shop/index.html",
    scope: "page-partner-shop",
    page: "app/pages/partner/shop/index.vue",
    css: "app/assets/css/pages/partner-shop.css",
    script: "public/legacy-scripts/partner-shop.mjs",
    module: true,
    tailwind: true,
    title: "Partner Shop — PEEP SHARE",
    description: "สมัครร้านค้า Partner Shop กับ PEEP SHARE",
  },
];

async function put(relativePath, content) {
  const output = resolve(root, relativePath);
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, content, "utf8");
}

function extractMain(html, source) {
  const match = html.match(/<main\b[\s\S]*?<\/main>/i);
  if (!match) throw new Error(`No <main> found in ${source}`);
  return match[0];
}

function extractStyles(html) {
  return [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)]
    .map((match) => match[1].trim())
    .join("\n\n");
}

function extractLastInlineScript(html, source) {
  const matches = [...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi)];
  if (!matches.length) throw new Error(`No inline script found in ${source}`);
  return matches.at(-1)[1].trim();
}

function pageSource(page, main) {
  const legacyCall = page.script
    ? `useLegacyPageScript("/legacy-scripts/${page.script.split("/").at(-1)}", ${Boolean(page.module)});`
    : "";
  const partnerHead = page.tailwind
    ? `\n    script: [\n      { innerHTML: \`window.tailwind = window.tailwind || {}; window.tailwind.config = { theme: { extend: { colors: { accent: \"#ff4d00\", ink: \"#131313\", paper: \"#ffffff\", mist: \"#f7f7f7\" }, fontFamily: { sans: [\"Noto Sans Thai\", \"sans-serif\"], display: [\"Noto Sans Thai\", \"sans-serif\"] } } } };\` },\n      { src: \"https://cdn.tailwindcss.com\" },\n    ],`
    : "";

  return `<script setup lang="ts">
useHead({
  htmlAttrs: { class: ${JSON.stringify(page.scope)} },
  title: ${JSON.stringify(page.title)},
  meta: [{ name: "description", content: ${JSON.stringify(page.description)} }],${partnerHead}
});

${legacyCall}
</script>

<template>
${main}
</template>
`;
}

for (const page of pages) {
  const html = await readFile(resolve(root, page.source), "utf8");
  await put(page.css, `${extractStyles(html)}\n`);
  await put(page.page, pageSource(page, extractMain(html, page.source)));

  if (page.script) {
    const script = page.externalScript
      ? await readFile(resolve(root, page.externalScript), "utf8")
      : extractLastInlineScript(html, page.source);
    const output = page.module ? `${script}\n` : `(() => {\n${script}\n})();\n`;
    await put(page.script, output);
  }
}

await put(
  "public/scripts/partner-validator.js",
  await readFile(resolve(root, "scripts/partner-validator.js"), "utf8"),
);

for (const name of ["header.css", "footer.css", "buttons.css"]) {
  await put(
    `app/assets/css/shared/${name}`,
    await readFile(resolve(root, `public/${name}`), "utf8"),
  );
}

await import("./scope-page-css.mjs");

console.log(`Migrated ${pages.length} pages to Nuxt.`);

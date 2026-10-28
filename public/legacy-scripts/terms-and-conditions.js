(() => {
const cache = new Map();
const tabButtons = [...document.querySelectorAll("[data-document]")];
const languageButtons = [...document.querySelectorAll("[data-language]")];
const allowedDocuments = tabButtons.map((button) => button.dataset.document);
const params = new URLSearchParams(window.location.search);
const requestedDocument = params.get("document");
const requestedLanguage = params.get("lang");

let activeDocument = allowedDocuments.includes(requestedDocument)
  ? requestedDocument
  : "community";
let activeLanguage = ["th", "en"].includes(requestedLanguage)
  ? requestedLanguage
  : localStorage.getItem("peepshare-legal-language") === "en"
    ? "en"
    : "th";
let renderId = 0;

const documentTitle = document.getElementById("documentTitle");
const lastUpdated = document.getElementById("lastUpdated");
const legalContent = document.getElementById("legalContent");
const legalDocument = document.getElementById("legalDocument");
const loadingState = document.getElementById("loadingState");

function getMetadata() {
  const documentButton = tabButtons.find(
    (button) => button.dataset.document === activeDocument,
  );
  const languageButton = languageButtons.find(
    (button) => button.dataset.language === activeLanguage,
  );
  const languageSuffix = activeLanguage === "en" ? "En" : "Th";

  return {
    title: documentButton.dataset[`title${languageSuffix}`],
    updated: documentButton.dataset[`updated${languageSuffix}`],
    loading: languageButton.dataset.loadingMessage,
    error: languageButton.dataset.errorMessage,
  };
}

function stripRepeatedHeading(html) {
  const template = document.createElement("template");
  template.innerHTML = html;
  const paragraphs = [...template.content.children];
  const dateIndex = paragraphs.findIndex((element) =>
    /Last (Edited|updated)|แก้ไขล่าสุด/i.test(element.textContent),
  );

  if (dateIndex >= 0) {
    paragraphs.slice(0, dateIndex + 1).forEach((element) => element.remove());
  }

  return template.innerHTML;
}

async function getDocument(documentName, language) {
  const key = `${documentName}-${language}`;
  if (cache.has(key)) return cache.get(key);

  const response = await fetch(`/legal-content/${key}.html`);
  if (!response.ok) throw new Error(`Unable to load ${key}`);

  const content = stripRepeatedHeading(await response.text());
  cache.set(key, content);
  return content;
}

function updateControls() {
  tabButtons.forEach((button) => {
    const isActive = button.dataset.document === activeDocument;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
    button.tabIndex = isActive ? 0 : -1;
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === activeLanguage;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  legalDocument.setAttribute("aria-labelledby", `tab-${activeDocument}`);
  document.documentElement.lang = activeLanguage;
}

function updateUrl() {
  const url = new URL(window.location.href);
  url.searchParams.set("document", activeDocument);
  url.searchParams.set("lang", activeLanguage);
  window.history.replaceState(null, "", url);
}

async function renderDocument({ focusContent = false } = {}) {
  const currentRender = ++renderId;
  const metadata = getMetadata();

  updateControls();
  updateUrl();
  localStorage.setItem("peepshare-legal-language", activeLanguage);

  documentTitle.textContent = metadata.title;
  lastUpdated.textContent = metadata.updated;
  loadingState.querySelector("p").textContent = metadata.loading;
  loadingState.hidden = false;
  legalContent.replaceChildren();
  legalDocument.setAttribute("aria-busy", "true");

  try {
    const html = await getDocument(activeDocument, activeLanguage);
    if (currentRender !== renderId) return;
    legalContent.innerHTML = html;
  } catch (error) {
    if (currentRender !== renderId) return;
    const message = document.createElement("p");
    message.className = "document-error";
    message.textContent = metadata.error;
    legalContent.append(message);
    console.error(error);
  } finally {
    if (currentRender === renderId) {
      loadingState.hidden = true;
      legalDocument.removeAttribute("aria-busy");
      if (focusContent) {
        legalDocument.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }
}

tabButtons.forEach((button, buttonIndex) => {
  button.addEventListener("click", () => {
    if (activeDocument === button.dataset.document) return;
    activeDocument = button.dataset.document;
    renderDocument({ focusContent: window.innerWidth < 641 });
  });

  button.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();

    let nextIndex = buttonIndex;
    if (event.key === "ArrowLeft") {
      nextIndex = (buttonIndex - 1 + tabButtons.length) % tabButtons.length;
    }
    if (event.key === "ArrowRight") {
      nextIndex = (buttonIndex + 1) % tabButtons.length;
    }
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabButtons.length - 1;
    tabButtons[nextIndex].focus();
    tabButtons[nextIndex].click();
  });
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (activeLanguage === button.dataset.language) return;
    activeLanguage = button.dataset.language;
    renderDocument();
  });
});

window.addEventListener("popstate", () => {
  const nextParams = new URLSearchParams(window.location.search);
  const nextDocument = nextParams.get("document");
  const nextLanguage = nextParams.get("lang");
  activeDocument = allowedDocuments.includes(nextDocument)
    ? nextDocument
    : "community";
  activeLanguage = ["th", "en"].includes(nextLanguage)
    ? nextLanguage
    : "th";
  renderDocument();
});

renderDocument();

})();

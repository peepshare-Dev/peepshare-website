<script setup lang="ts">
useHead({
  htmlAttrs: { class: "page-terms" },
  title: "Terms and Conditions — PEEP SHARE",
  meta: [{ name: "description", content: "ข้อกำหนดและเงื่อนไข ประกาศความเป็นส่วนตัว และแนวทางปฏิบัติของชุมชน PEEP SHARE" }],
});

useLegacyPageScript("/legacy-scripts/terms-and-conditions.js", false);
</script>

<template>
<main>
      <section class="title-hero">
        <div class="shell">
          <h1><span class="hero-prefix">Term and&nbsp;</span><span>Condition</span></h1>
        </div>
      </section>

      <section class="legal-section">
        <div class="shell legal-shell">
          <div class="document-tabs" role="tablist" aria-label="Legal documents">
            <button
              class="document-tab active"
              id="tab-community"
              type="button"
              role="tab"
              aria-selected="true"
              aria-controls="legalDocument"
              data-document="community"
              data-title-th="แนวทางปฏิบัติของชุมชน (Community Guidelines)"
              data-title-en="Community Guidelines"
              data-updated-th="แก้ไขล่าสุด : 31 สิงหาคม 2569"
              data-updated-en="Last Edited: August 31, 2026"
            >
              Community Guidelines
            </button>
            <button
              class="document-tab"
              id="tab-privacy"
              type="button"
              role="tab"
              aria-selected="false"
              aria-controls="legalDocument"
              data-document="privacy"
              data-title-th="ประกาศการคุ้มครองข้อมูลส่วนบุคคล สำหรับ PEEP SHARE"
              data-title-en="Privacy Notice for PEEP SHARE"
              data-updated-th="แก้ไขล่าสุด : 31 สิงหาคม 2569"
              data-updated-en="Last updated: August 31, 2026"
            >
              Privacy Notice
            </button>
            <button
              class="document-tab"
              id="tab-terms"
              type="button"
              role="tab"
              aria-selected="false"
              aria-controls="legalDocument"
              data-document="terms"
              data-title-th="ข้อกำหนดและเงื่อนไขการให้บริการทั่วไป"
              data-title-en="Terms and Conditions"
              data-updated-th="แก้ไขล่าสุด : 31 สิงหาคม 2569"
              data-updated-en="Last Edited: August 31, 2026"
            >
              Terms of Service
            </button>
          </div>

          <article
            class="legal-card"
            id="legalDocument"
            role="tabpanel"
            aria-labelledby="tab-community"
            aria-live="polite"
          >
            <div class="legal-card-header">
              <h2 id="documentTitle">แนวทางปฏิบัติของชุมชน (Community Guidelines)</h2>
              <div class="language-switch" role="group" aria-label="Language">
                <button
                  class="active"
                  type="button"
                  data-language="th"
                  data-loading-message="กำลังโหลดเอกสาร…"
                  data-error-message="ไม่สามารถโหลดเอกสารได้ กรุณาลองใหม่อีกครั้ง"
                  aria-pressed="true"
                >
                  TH
                </button>
                <button
                  type="button"
                  data-language="en"
                  data-loading-message="Loading document…"
                  data-error-message="The document could not be loaded. Please try again."
                  aria-pressed="false"
                >
                  EN
                </button>
              </div>
              <p class="last-updated" id="lastUpdated">แก้ไขล่าสุด : 31 สิงหาคม 2569</p>
            </div>

            <div class="loading-state" id="loadingState">
              <span></span>
              <p>กำลังโหลดเอกสาร…</p>
            </div>
            <div class="legal-content" id="legalContent"></div>
          </article>
        </div>
      </section>
    </main>
</template>

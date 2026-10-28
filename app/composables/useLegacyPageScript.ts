export function useLegacyPageScript(src?: string, module = false) {
  onMounted(async () => {
    if (!src) return;

    if (module) {
      await import(/* @vite-ignore */ `${src}?v=${Date.now()}`);
      return;
    }

    const script = document.createElement("script");
    script.src = `${src}?v=${Date.now()}`;
    script.dataset.pageScript = src;
    document.body.append(script);
  });
}

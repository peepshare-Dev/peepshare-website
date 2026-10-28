(() => {
const observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
          }),
        { threshold: 0.12 },
      );
      document
        .querySelectorAll(".reveal")
        .forEach((el) => observer.observe(el));
      const reviewsViewport = document.getElementById("reviewsViewport");
      const reviewsToggle = document.getElementById("reviewsToggle");
      reviewsToggle.addEventListener("click", () => {
        const expanded = reviewsViewport.classList.toggle("expanded");
        reviewsToggle.setAttribute("aria-expanded", String(expanded));
        reviewsToggle.textContent = expanded
          ? reviewsToggle.dataset.expandedLabel
          : reviewsToggle.dataset.collapsedLabel;
        if (!expanded)
          document
            .getElementById("reviews")
            .scrollIntoView({ behavior: "smooth", block: "start" });
      });
      const showcaseCarousel = document.getElementById("showcaseCarousel");
      const showcaseTrack = document.getElementById("showcaseTrack");
      const showcaseSlides = showcaseTrack.children.length;
      let showcaseIndex = 0;
      let swipeStart = 0;
      const showSlide = (index) => {
        showcaseIndex = (index + showcaseSlides) % showcaseSlides;
        showcaseTrack.style.transform = `translateX(-${showcaseIndex * 100}%)`;
      };
      document
        .getElementById("carouselPrev")
        .addEventListener("click", () => showSlide(showcaseIndex - 1));
      document
        .getElementById("carouselNext")
        .addEventListener("click", () => showSlide(showcaseIndex + 1));
      showcaseCarousel.addEventListener("pointerdown", (event) => {
        swipeStart = event.clientX;
      });
      showcaseCarousel.addEventListener("pointerup", (event) => {
        const distance = event.clientX - swipeStart;
        if (Math.abs(distance) > 45)
          showSlide(showcaseIndex + (distance < 0 ? 1 : -1));
      });
      const featurePanels = [
        ...document.querySelectorAll("[data-feature-panel]"),
      ];
      const featureImage = document.getElementById("featureImage");
      const featureImages = {
        chat: { src: "/assets/chat-tab.png", label: "Chat" },
        cloud: { src: "/assets/cloud-tab.svg", label: "Cloud" },
        translate: { src: "/assets/ai-tab.png", label: "AI Translate" },
        community: {
          src: "/assets/community-tab.png",
          label: "Community",
        },
        event: { src: "/assets/event-tab.png", label: "Event" },
        coupon: { src: "/assets/coupon-tab.png", label: "Coupon" },
        talk: { src: "/assets/talk-tab.png", label: "Talk" },
      };

      const featurePreloads = Object.values(featureImages).map(({ src }) => {
        const image = new Image();
        image.decoding = "async";
        image.src = src;
        image.decode?.().catch(() => {});
        return image;
      });

      document.querySelectorAll(".feature-tabs button").forEach((button) =>
        button.addEventListener("click", () => {
          const selectedFeature = button.dataset.feature;
          document
            .querySelector(".feature-tabs .active")
            .classList.remove("active");
          button.classList.add("active");
          featurePanels.forEach((panel) => {
            panel.hidden = panel.dataset.featurePanel !== selectedFeature;
          });
          featureImage.src = featureImages[selectedFeature].src;
          featureImage.alt = `PEEP SHARE ${featureImages[selectedFeature].label} feature`;
        }),
      );
      document.querySelectorAll(".faq details").forEach((details) => {
        const summary = details.querySelector("summary");
        summary.addEventListener("click", (event) => {
          event.preventDefault();
          if (details.dataset.animating === "true") return;

          const isOpening = !details.open;
          const startHeight = `${details.offsetHeight}px`;
          if (isOpening) details.open = true;
          const endHeight = `${isOpening ? details.scrollHeight : summary.offsetHeight}px`;

          if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
            details.open = isOpening;
            return;
          }

          details.dataset.animating = "true";
          const animation = details.animate(
            { height: [startHeight, endHeight] },
            { duration: 360, easing: "cubic-bezier(.22, 1, .36, 1)" },
          );
          animation.onfinish = () => {
            details.open = isOpening;
            details.style.height = "";
            delete details.dataset.animating;
          };
          animation.oncancel = () => {
            details.style.height = "";
            delete details.dataset.animating;
          };
        });
      });
})();

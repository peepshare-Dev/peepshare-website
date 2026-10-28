(() => {
const registrationGrid = document.querySelector(".registration-grid");
      const registrationCards = [...registrationGrid.querySelectorAll(".registration-step")];
      const registrationDots = [...document.querySelectorAll(".registration-pagination button")];
      let registrationScrollFrame;

      function setRegistrationStep(index) {
        registrationDots.forEach((dot, dotIndex) => {
          const active = dotIndex === index;
          dot.classList.toggle("active", active);
          if (active) dot.setAttribute("aria-current", "step");
          else dot.removeAttribute("aria-current");
        });
      }

      function updateRegistrationStep() {
        const gridCenter = registrationGrid.scrollLeft + registrationGrid.clientWidth / 2;
        const closestIndex = registrationCards.reduce((closest, card, index) => {
          const cardCenter = card.offsetLeft + card.offsetWidth / 2;
          const closestCenter =
            registrationCards[closest].offsetLeft + registrationCards[closest].offsetWidth / 2;
          return Math.abs(cardCenter - gridCenter) < Math.abs(closestCenter - gridCenter)
            ? index
            : closest;
        }, 0);
        setRegistrationStep(closestIndex);
      }

      registrationGrid.addEventListener(
        "scroll",
        () => {
          cancelAnimationFrame(registrationScrollFrame);
          registrationScrollFrame = requestAnimationFrame(updateRegistrationStep);
        },
        { passive: true },
      );
      registrationDots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
          const card = registrationCards[index];
          const left = card.offsetLeft - (registrationGrid.clientWidth - card.offsetWidth) / 2;
          registrationGrid.scrollTo({ left, behavior: "smooth" });
          setRegistrationStep(index);
        });
      });
      window.addEventListener("resize", updateRegistrationStep);
      updateRegistrationStep();
})();

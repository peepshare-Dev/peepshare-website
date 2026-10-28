(() => {
if (location.pathname === "/")
        history.replaceState(null, "", "/home" + location.hash);
      document.querySelectorAll(".faq details").forEach((d) => {
        const s = d.querySelector("summary");
        s.onclick = (e) => {
          e.preventDefault();
          if (d.dataset.busy) return;
          const open = !d.open,
            start = d.offsetHeight;
          if (open) d.open = true;
          const end = open ? d.scrollHeight : s.offsetHeight;
          d.dataset.busy = 1;
          const a = d.animate(
            { height: [start + "px", end + "px"] },
            { duration: 350, easing: "cubic-bezier(.22,1,.36,1)" },
          );
          a.onfinish = () => {
            d.open = open;
            delete d.dataset.busy;
          };
        };
      });
      const menuLinks = [
        ...document.querySelectorAll(".navlinks a,.mobile-menu a"),
      ];
      function cleanPath(path) {
        return path.replace(/\/$/, "") || "/";
      }
      function setActiveMenu() {
        const currentPath = cleanPath(location.pathname),
          hash = location.hash;
        menuLinks.forEach((link) => {
          const href = link.getAttribute("href"),
            isHash = href.startsWith("#"),
            active = isHash
              ? Boolean(hash) && href === hash
              : cleanPath(new URL(link.href, location.origin).pathname) ===
                currentPath;
          link.classList.toggle("active", active);
        });
      }
      menuLinks.forEach((link) =>
        link.addEventListener("click", () =>
          requestAnimationFrame(setActiveMenu),
        ),
      );
      window.addEventListener("hashchange", setActiveMenu);
      window.addEventListener("popstate", setActiveMenu);
      setActiveMenu();

      async function loadPartnerLogos() {
        const primary = document.getElementById("partnerLogosPrimary");
        const duplicate = document.getElementById("partnerLogosDuplicate");

        try {
          const response = await fetch("/api/logos");
          if (!response.ok) throw new Error("Unable to load partner logos");

          const { data } = await response.json();
          if (!Array.isArray(data) || data.length === 0) return;

          const renderLogos = () =>
            Array.from({ length: 4 }, () => data)
              .flat()
              .map(({ id, imagePath }) => {
                const item = document.createElement("span");
                item.className = "logo";

                const image = document.createElement("img");
                image.src = imagePath;
                image.alt = `Partner logo ${id}`;
                image.loading = "lazy";
                item.append(image);
                return item;
              });

          primary.replaceChildren(...renderLogos());
          duplicate.replaceChildren(...renderLogos());
        } catch (error) {
          console.error("Partner logos:", error.message);
        }
      }

      loadPartnerLogos();

      const benefitSlides = [
        {
          title: "ลูกค้าใหม่จากคนในพื้นที่",
          description:
            "ร้านของคุณจะปรากฏต่อผู้ใช้ที่เข้ามาหาคูปอง พร้อมรูป เมนู รายละเอียดร้านของคุณ เพิ่มโอกาสให้คนตัดสินใจเดินเข้าร้าน",
        },
        {
          title: "โปรโมทฟรี ไม่มีค่าคอมมิชชั่น",
          description:
            "ลงร้าน ลงเมนู และปล่อยดีลได้ไม่จำกัด โดยไม่มีข้อผูกมัดหรือเสียค่าคอมมิชชั่น กำไรทุกบาทยังอยู่กับร้านคุณ",
        },
        {
          title: "รู้ว่าลูกค้าชอบอะไร",
          items: [
            "แบรนด์เพิ่มการรับรู้และขยายฐานลูกค้า ช่วยให้แบรนด์เป็นที่รู้จักมากขึ้น พร้อมเข้าถึงกลุ่มลูกค้าใหม่ ๆ ที่หลากหลาย",
            "ติดตามความสนใจของลูกค้าได้ตลอด 24 ชั่วโมง ผ่านข้อมูลยอดเข้าชมร้านค้า สินค้า และบริการยอดนิยม",
            "วิเคราะห์ผลลัพธ์ผ่าน Dashboard ติดตามผลตอบรับของแต่ละดีล เพื่อนำข้อมูลไปวางแผนโปรโมชันให้ตรงกลุ่มเป้าหมายและตอบโจทย์ความต้องการของลูกค้าได้ดียิ่งขึ้น",
          ],
        },
      ];
      const benefitCard = document.querySelector(".benefit-slider");
      const benefitCount = document.getElementById("benefitCount");
      const benefitTitle = document.getElementById("benefitTitle");
      const benefitDescription = document.getElementById("benefitDescription");
      let benefitIndex = 0;
      function showBenefit(index) {
        benefitIndex = (index + benefitSlides.length) % benefitSlides.length;
        benefitCard.classList.add("is-changing");
        window.setTimeout(() => {
          const slide = benefitSlides[benefitIndex];
          benefitCount.textContent = `0${benefitIndex + 1} / 03`;
          benefitTitle.textContent = slide.title;
          if (slide.items) {
            const list = document.createElement("ol");
            slide.items.forEach((item) => {
              const listItem = document.createElement("li");
              listItem.textContent = item;
              list.append(listItem);
            });
            benefitDescription.replaceChildren(list);
          } else {
            benefitDescription.textContent = slide.description;
          }
          benefitCard.classList.remove("is-changing");
        }, 160);
      }
      document
        .getElementById("benefitPrev")
        .addEventListener("click", () => showBenefit(benefitIndex - 1));
      document
        .getElementById("benefitNext")
        .addEventListener("click", () => showBenefit(benefitIndex + 1));

      const couponGrid = document.querySelector(".coupon-grid");
      const couponCards = [...couponGrid.querySelectorAll(".coupon-step")];
      const couponDots = [
        ...document.querySelectorAll(".coupon-pagination button"),
      ];
      let couponScrollFrame;

      function setCouponStep(index) {
        couponDots.forEach((dot, dotIndex) => {
          const active = dotIndex === index;
          dot.classList.toggle("active", active);
          if (active) dot.setAttribute("aria-current", "step");
          else dot.removeAttribute("aria-current");
        });
      }

      function updateCouponStep() {
        if (window.innerWidth > 800) return;
        const gridCenter = couponGrid.scrollLeft + couponGrid.clientWidth / 2;
        const closestIndex = couponCards.reduce((closest, card, index) => {
          const cardCenter = card.offsetLeft + card.offsetWidth / 2;
          const closestCenter =
            couponCards[closest].offsetLeft +
            couponCards[closest].offsetWidth / 2;
          return Math.abs(cardCenter - gridCenter) <
            Math.abs(closestCenter - gridCenter)
            ? index
            : closest;
        }, 0);
        setCouponStep(closestIndex);
      }

      couponGrid.addEventListener(
        "scroll",
        () => {
          cancelAnimationFrame(couponScrollFrame);
          couponScrollFrame = requestAnimationFrame(updateCouponStep);
        },
        { passive: true },
      );
      couponDots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
          const card = couponCards[index];
          const left =
            card.offsetLeft - (couponGrid.clientWidth - card.offsetWidth) / 2;
          couponGrid.scrollTo({ left, behavior: "smooth" });
          setCouponStep(index);
        });
      });
      window.addEventListener("resize", updateCouponStep);
})();

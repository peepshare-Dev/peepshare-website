import {
        validatePartnerForm,
        watchPartnerFormValidity,
      } from "/scripts/partner-validator.js";
      document
        .getElementById("shopLogo")
        .addEventListener(
          "change",
          (e) =>
            (document.getElementById("logoName").textContent =
              e.target.files[0]?.name || "PNG, JPG (สูงสุด ~5MB)"),
        );
      document
        .getElementById("images")
        .addEventListener(
          "change",
          (e) =>
            (document.getElementById("imagesName").textContent = e.target.files
              .length
              ? `เลือกแล้ว ${e.target.files.length} รูป`
              : ""),
        );
      const webAppUrl =
        "https://script.google.com/macros/s/AKfycbwvUyUcCFcspjj61QOfZRqNdV07ncHD9Fyg6JMaHxVFhSgnkZyRiDEvWc-DEN900A-H/exec";
      const partnerFields = {
        shopName: "#shopName",
        location: "#location",
        openingHours: "#hours",
        contactName: "#contactName",
        phone: "#phone",
        category: "#category",
        channels: "#channels",
        promotion: "#promotion",
        details: "#details",
        consent: '[name="consent"]',
        logo: "#shopLogo",
        images: "#images",
      };
      const partnerForm = document.getElementById("shopForm");
      watchPartnerFormValidity(partnerForm, partnerFields);

      function fileToPayload(file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve({
            name: file.name,
            type: file.type,
            data: String(reader.result).split(",")[1],
          });
          reader.onerror = () => reject(new Error(`อ่านไฟล์ ${file.name} ไม่สำเร็จ`));
          reader.readAsDataURL(file);
        });
      }

      ["phone", "location"].forEach((id) => {
        document
          .getElementById(id)
          .addEventListener("input", (event) =>
            event.target.setCustomValidity(""),
          );
      });
      ["shopLogo", "images"].forEach((id) => {
        document
          .getElementById(id)
          .addEventListener("change", (event) =>
            event.target.setCustomValidity(""),
          );
      });

      partnerForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (!validatePartnerForm(form, partnerFields)) return;
        const button = form.querySelector('button[type="submit"]');
        const buttonLabel = button.querySelector(".submit-label");
        const status = document.getElementById("status");
        const payload = new URLSearchParams();
        for (const [name, value] of new FormData(form)) {
          if (typeof value === "string") payload.append(name, value);
        }
        button.disabled = true;
        buttonLabel.textContent = button.dataset.loadingLabel;
        status.classList.add("hidden");
        try {
          const logoFile = document.getElementById("shopLogo").files[0];
          const imageFiles = [...document.getElementById("images").files];
          payload.set("logoFile", JSON.stringify(await fileToPayload(logoFile)));
          payload.set("imageFiles", JSON.stringify(await Promise.all(imageFiles.map(fileToPayload))));
          await fetch(webAppUrl, {
            method: "POST",
            mode: "no-cors",
            body: payload,
          });
          status.textContent = status.dataset.successMessage;
          status.classList.remove("hidden", "bg-red-50", "text-red-700");
          status.classList.add("bg-green-50", "text-green-700");
          form.reset();
        } catch (error) {
          status.textContent = status.dataset.errorMessage;
          status.classList.remove("hidden", "bg-green-50", "text-green-700");
          status.classList.add("bg-red-50", "text-red-700");
        } finally {
          button.disabled = false;
          buttonLabel.textContent = button.dataset.idleLabel;
        }
      });

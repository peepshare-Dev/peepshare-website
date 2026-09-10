import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_IMAGE_TYPES = ["image/png", "image/jpeg"];
const REQUIRED_FIELDS = new Set([
  "shopName",
  "location",
  "openingHours",
  "contactName",
  "phone",
  "category",
  "channels",
  "promotion",
  "consent",
  "logo",
]);

const partnerSchema = z.object({
  shopName: z.string().trim().min(2, "กรุณากรอกชื่อร้านอย่างน้อย 2 ตัวอักษร"),
  location: z
    .string()
    .url("กรุณาใส่ลิงก์ Google Maps ที่ถูกต้อง")
    .refine((value) => {
      try {
        const url = new URL(value);
        const host = url.hostname.toLowerCase();
        return (
          host === "goo.gl" ||
          host === "maps.app.goo.gl" ||
          host.endsWith(".google.com")
        );
      } catch {
        return false;
      }
    }, "กรุณาใส่ลิงก์ Google Maps ที่ถูกต้อง"),
  openingHours: z.string().trim().min(1, "กรุณากรอกเวลาเปิด-ปิดร้าน"),
  contactName: z.string().trim().min(2, "กรุณากรอกชื่อผู้ติดต่อ"),
  phone: z
    .string()
    .transform((value) => value.replace(/[\s()-]/g, ""))
    .pipe(
      z
        .string()
        .regex(/^(?:\+66|0)\d{8,9}$/, "กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง เช่น 081-234-5678"),
    ),
  category: z.string().min(1, "กรุณาเลือกหมวดหมู่ร้านค้า"),
  channels: z.string().trim().min(1, "กรุณากรอกช่องทางติดต่อร้าน"),
  promotion: z.string().trim().min(1, "กรุณากรอกรายละเอียดโปรโมชั่น"),
  details: z.string(),
  consent: z.literal(true, { error: "กรุณายอมรับเงื่อนไขการสมัคร" }),
  logo: z
    .instanceof(File, { error: "กรุณาเลือกโลโก้ร้านค้า" })
    .refine((file) => ALLOWED_IMAGE_TYPES.includes(file.type), "โลโก้ต้องเป็นไฟล์ PNG หรือ JPG")
    .refine((file) => file.size <= MAX_FILE_SIZE, "โลโก้ต้องมีขนาดไม่เกิน 5MB"),
  images: z
    .array(z.instanceof(File))
    .max(10, "อัปโหลดรูปภาพร้านได้สูงสุด 10 รูป")
    .refine(
      (files) => files.every((file) => ALLOWED_IMAGE_TYPES.includes(file.type)),
      "รูปภาพทุกไฟล์ต้องเป็น PNG หรือ JPG",
    )
    .refine(
      (files) => files.every((file) => file.size <= MAX_FILE_SIZE),
      "รูปภาพแต่ละไฟล์ต้องมีขนาดไม่เกิน 5MB",
    ),
});

function getElements(form, fields) {
  return Object.fromEntries(
    Object.entries(fields).map(([key, selector]) => [key, form.querySelector(selector)]),
  );
}

function getFormData(elements) {
  return {
    shopName: elements.shopName.value,
    location: elements.location.value,
    openingHours: elements.openingHours.value,
    contactName: elements.contactName.value,
    phone: elements.phone.value,
    category: elements.category.value,
    channels: elements.channels.value,
    promotion: elements.promotion.value,
    details: elements.details.value,
    consent: elements.consent.checked,
    logo: elements.logo.files[0],
    images: [...elements.images.files],
  };
}

function addValidationStyles() {
  if (document.getElementById("partner-validation-styles")) return;
  const style = document.createElement("style");
  style.id = "partner-validation-styles";
  style.textContent = `
    .shop-field:focus,
    .field:focus {
      outline: none !important;
      box-shadow: none !important;
    }
    .partner-field-invalid {
      border-color: #ef4444 !important;
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.16) !important;
    }
    .partner-popup-backdrop {
      position: fixed;
      z-index: 9999;
      inset: 0;
      display: grid;
      place-items: center;
      padding: 24px;
      background: rgba(0, 0, 0, 0.55);
      backdrop-filter: blur(4px);
    }
    .partner-popup {
      width: min(100%, 420px);
      padding: 28px;
      border-radius: 20px;
      background: #ffffff;
      color: #171717;
      text-align: center;
      box-shadow: 0 24px 80px rgba(0, 0, 0, 0.28);
    }
    .partner-popup p {
      margin: 0 0 22px;
      font-size: 16px;
      font-weight: 600;
      line-height: 1.6;
    }
    .partner-popup button {
      min-width: 120px;
      padding: 11px 24px;
      border: 0;
      border-radius: 999px;
      background: #ff4d00;
      color: #ffffff;
      font: inherit;
      font-weight: 700;
      cursor: pointer;
    }
  `;
  document.head.append(style);
}

function getHighlightTarget(element) {
  if (element.matches('input[type="file"]')) {
    return document.querySelector(`label[for="${element.id}"]`) || element;
  }
  if (element.matches('input[type="checkbox"]')) {
    return element.closest("label") || element;
  }
  return element;
}

function setInvalidHighlight(element, isInvalid) {
  const target = getHighlightTarget(element);
  target.classList.toggle("partner-field-invalid", isInvalid);
  element.setAttribute("aria-invalid", String(isInvalid));
}

function hasUserValue(element) {
  if (element.matches('input[type="file"]')) return element.files.length > 0;
  if (element.matches('input[type="checkbox"]')) return element.checked;
  return element.value.trim() !== "";
}

function showPopup(message) {
  const backdrop = document.createElement("div");
  backdrop.className = "partner-popup-backdrop";
  backdrop.setAttribute("role", "alertdialog");
  backdrop.setAttribute("aria-modal", "true");
  backdrop.innerHTML = `
    <div class="partner-popup">
      <p></p>
      <button type="button">ตกลง</button>
    </div>
  `;
  backdrop.querySelector("p").textContent = message;
  const closeButton = backdrop.querySelector("button");
  const closePopup = () => backdrop.remove();
  closeButton.addEventListener("click", closePopup);
  backdrop.addEventListener("click", (event) => {
    if (event.target === backdrop) closePopup();
  });
  document.body.append(backdrop);
  closeButton.focus();
}

function watchFileSize(input) {
  input.addEventListener("change", () => {
    const oversizedFiles = [...input.files].filter(
      (file) => file.size > MAX_FILE_SIZE,
    );
    if (!oversizedFiles.length) return;

    showPopup("กรุณาเลือกไฟล์ใหม่ที่มีขนาดไม่เกิน 5 MB");
    input.value = "";
    input.setCustomValidity("");

    const fileNameLabel = input.multiple
      ? document.getElementById("shopImagesName") || document.getElementById("imagesName")
      : document.getElementById("shopLogoName") || document.getElementById("logoName");
    if (fileNameLabel) {
      fileNameLabel.textContent = input.multiple
        ? ""
        : "PNG, JPG (สูงสุด ~5MB)";
    }
  });
}

export function watchPartnerFormValidity(form, fields) {
  addValidationStyles();
  const elements = getElements(form, fields);
  const button = form.querySelector('button[type="submit"]');
  const touchedFields = new Set();

  watchFileSize(elements.logo);
  watchFileSize(elements.images);

  const updateButton = () => {
    Object.values(elements).forEach((element) => element?.setCustomValidity(""));
    const result = partnerSchema.safeParse(getFormData(elements));
    const invalidFields = new Set(
      result.success ? [] : result.error.issues.map((issue) => issue.path[0]),
    );

    REQUIRED_FIELDS.forEach((field) => {
      setInvalidHighlight(
        elements[field],
        touchedFields.has(field) &&
          hasUserValue(elements[field]) &&
          invalidFields.has(field),
      );
    });

    const isValid = result.success;
    button.disabled = !isValid;
    button.setAttribute("aria-disabled", String(!isValid));
    button.style.backgroundColor = isValid ? "#ff4d00" : "#f3a37d";
    button.style.color = "#ffffff";
    button.style.opacity = "1";
    button.style.cursor = isValid ? "pointer" : "not-allowed";
  };

  REQUIRED_FIELDS.forEach((field) => {
    const element = elements[field];
    const validatesOnChange = element.matches(
      'select, input[type="file"], input[type="checkbox"]',
    );
    element.addEventListener(validatesOnChange ? "change" : "input", () => {
      if (validatesOnChange) touchedFields.add(field);
      updateButton();
    });
    element.addEventListener("blur", () => {
      touchedFields.add(field);
      updateButton();
    });
  });

  form.addEventListener("input", updateButton);
  form.addEventListener("change", updateButton);
  form.addEventListener("reset", () => {
    touchedFields.clear();
    setTimeout(updateButton);
  });
  updateButton();
}

export function validatePartnerForm(form, fields) {
  const elements = getElements(form, fields);

  Object.values(elements).forEach((element) => element?.setCustomValidity(""));

  const result = partnerSchema.safeParse(getFormData(elements));

  if (result.success) return true;

  result.error.issues.forEach((issue) => {
    const element = elements[issue.path[0]];
    if (element && !element.validationMessage) {
      element.setCustomValidity(issue.message);
      const resetEvent =
        element.matches('input[type="file"], input[type="checkbox"], select')
          ? "change"
          : "input";
      element.addEventListener(
        resetEvent,
        () => element.setCustomValidity(""),
        { once: true },
      );
    }
  });
  form.reportValidity();
  return false;
}

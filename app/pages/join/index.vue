<script setup lang="ts">
useHead({
  htmlAttrs: { class: "page-join" },
  title: "PEEP SHARE - Join With Us",
  meta: [{ name: "description", content: "ร่วมเป็นพาร์ทเนอร์กับ PEEP SHARE" }],
});

useLegacyPageScript("/legacy-scripts/join.js", false);

type PartnerLogo = {
  id: number | string;
  imagePath: string;
};

const partnerLogos = ref<PartnerLogo[]>([]);
const repeatedPartnerLogos = computed(() =>
  Array.from({ length: 4 }, () => partnerLogos.value).flat(),
);

onMounted(async () => {
  try {
    const response = await fetch("/api/logos");
    if (!response.ok) throw new Error("Unable to load partner logos");
    const payload = await response.json();
    partnerLogos.value = Array.isArray(payload.data) ? payload.data : [];
  } catch (error) {
    console.error("Partner logos:", error);
  }
});
</script>

<template>
<main class="join-page">
      <section class="hero">
        <div class="hero-grid container">
          <div class="hero-art">
            <img
              class="phone"
              src="/assets/Frame22.svg"
              alt="PEEP SHARE application"
            />
          </div>
          <div class="hero-copy">
            <h1>
              Join With Us
              <span class="hero-subtitle">Become a Partner</span>
            </h1>
            <p>
              แบรนด์คุณมีของดี ให้ PEEP SHARE ช่วยบอกต่อ ไม่ว่าจะสินค้าบริการ<br />
              หรือโปรโมชันเด็ดๆ ก็เพิ่มโอกาสให้คนรู้จักแบรนด์คุณได้ง่ายๆ
            </p>
            <div class="buttons">
              <a class="btn primary" href="/partner/shop/"
                >ลงทะเบียนร้านค้าฟรี</a
              ><a class="btn secondary" href="#steps">ดูขั้นตอนการสมัคร</a>
            </div>
          </div>
        </div>
      </section>
      <section class="steps" id="steps">
        <div class="container">
          <h2>เปิดร้านบน PEEP SHARE ง่ายๆแค่ 3 ขั้นตอน</h2>
          <p>เพียง 3 ขั้นตอน PEEPS พร้อมพาคุณเจอลูกค้าใหม่</p>
          <div class="step-grid">
            <article class="step">
              <figure>
                <img src="/assets/Frame.svg" alt="สมัครใช้งาน" />
              </figure>
              <div>
                <h3>เริ่มลงทะเบียนร้านค้าฟรี</h3>
                <p>
                  สร้างโปรไฟล์ร้านค้าภายในไม่กี่นาที เพิ่มโลโก้ ดีล
                  และข้อมูลของร้านได้ทันที
                </p>
              </div>
            </article>
            <article class="step">
              <figure>
                <img src="/assets/Frame2.svg" alt="ตรวจสอบข้อมูล" />
              </figure>
              <div>
                <h3>โพสต์เมนูและดีล</h3>
                <p>
                  เพิ่มรายละเอียดโปรโมชันของคุณ
                  เผยแพร่สินค้าและบริการให้ลูกค้าเห็นได้ง่ายขึ้น
                </p>
              </div>
            </article>
            <article class="step">
              <figure>
                <img src="/assets/Frame3.svg" alt="เริ่มใช้งาน" />
              </figure>
              <div>
                <h3>ได้โพรโมทและเติบโตพร้อม PEEPS</h3>
                <p>
                  ลูกค้าจะรู้จักคุณมากขึ้น มีการแชร์ร้าน รีวิว
                  และเชิญชวนเพื่อนมาใช้บริการ
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section class="logos">
        <p>ร่วมเติบโตไปกับพาร์ทเนอร์ของเรา</p>
        <div class="track">
          <div class="set" id="partnerLogosPrimary">
            <span
              v-for="(logo, index) in repeatedPartnerLogos"
              :key="`primary-${logo.id}-${index}`"
              class="logo"
            >
              <img :src="logo.imagePath" :alt="`Partner logo ${logo.id}`" loading="lazy" />
            </span>
          </div>
          <div class="set" id="partnerLogosDuplicate" aria-hidden="true">
            <span
              v-for="(logo, index) in repeatedPartnerLogos"
              :key="`duplicate-${logo.id}-${index}`"
              class="logo"
            >
              <img :src="logo.imagePath" alt="" loading="lazy" />
            </span>
          </div>
        </div>
      </section>
      <section class="grow" id="grow">
        <div class="container">
          <p class="kicker">YOUR BENEFITS OUR PRIORITY</p>
          <h2 class="title">สิ่งที่คุณได้รับ คือสิ่งที่ PEEPS ให้ความสำคัญ</h2>
          <article class="feature benefit-slider">
            <div class="feature-img">
              <img
                id="benefitImage"
                src="/assets/Frame4.svg"
                alt="ลงทะเบียนร้านค้า"
              />
            </div>
            <div class="feature-copy">
              <span class="benefit-count" id="benefitCount">01 / 03</span>
              <h3 id="benefitTitle">ลูกค้าใหม่จากคนในพื้นที่</h3>
              <div class="benefit-description" id="benefitDescription">
                ร้านของคุณจะปรากฏต่อผู้ใช้ที่เข้ามาหาคูปอง พร้อมรูป เมนู
                รายละเอียดร้านของคุณ เพิ่มโอกาสให้คนตัดสินใจเดินเข้าร้าน
              </div>
              <div class="benefit-controls">
                <button
                  id="benefitPrev"
                  type="button"
                  aria-label="ประโยชน์ก่อนหน้า"
                >
                  <iconify-icon
                    icon="solar:alt-arrow-left-linear"
                    aria-hidden="true"
                  ></iconify-icon>
                </button>
                <button
                  id="benefitNext"
                  type="button"
                  aria-label="ประโยชน์ถัดไป"
                >
                  <iconify-icon
                    icon="solar:alt-arrow-right-linear"
                    aria-hidden="true"
                  ></iconify-icon>
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section class="coupon-steps" aria-labelledby="coupon-steps-title">
        <div class="container">
          <h2 id="coupon-steps-title">ขั้นตอนการใช้งาน <span>Coupon</span></h2>
          <ol class="coupon-grid">
            <li class="coupon-step">
              <div class="coupon-phone">
                <img
                  src="/assets/Group1597885525.svg"
                  alt="หน้า Community ในแอป PEEP SHARE"
                  loading="lazy"
                />
              </div>
              <div class="coupon-copy">
                <span class="coupon-number">1</span>
                <div>
                  <h3>เปิดแอป PEEP SHARE</h3>
                  <p>แล้วไปที่ COMMUNITY</p>
                </div>
              </div>
            </li>
            <li class="coupon-step">
              <div class="coupon-phone">
                <img
                  src="/assets/Group1597885526.svg"
                  alt="หน้าหมวดหมู่ Special Coupon"
                  loading="lazy"
                />
              </div>
              <div class="coupon-copy">
                <span class="coupon-number">2</span>
                <div>
                  <h3>เลือกหมวดหมู่</h3>
                  <p>Special Coupon</p>
                </div>
              </div>
            </li>
            <li class="coupon-step">
              <div class="coupon-phone">
                <img
                  src="/assets/Group1597885527.svg"
                  alt="หน้ารายละเอียดคูปองในแอป PEEP SHARE"
                  loading="lazy"
                />
              </div>
              <div class="coupon-copy">
                <span class="coupon-number">3</span>
                <div>
                  <h3>เลือกคูปองที่ต้องการ</h3>
                  <p>แล้วกดใช้งานคูปอง</p>
                </div>
              </div>
            </li>
            <li class="coupon-step">
              <div class="coupon-phone">
                <img
                  src="/assets/Group1597885528.svg"
                  alt="หน้าบาร์โค้ดสำหรับแลกรับคูปอง"
                  loading="lazy"
                />
              </div>
              <div class="coupon-copy">
                <span class="coupon-number">4</span>
                <div>
                  <h3>แสดงบาร์โค้ดจากนั้น</h3>
                  <p>กดปุ่มแลกรับคูปอง</p>
                </div>
              </div>
            </li>
          </ol>
          <nav
            class="coupon-pagination"
            aria-label="เลือกขั้นตอนการใช้งานคูปอง"
          >
            <button
              class="active"
              type="button"
              aria-label="ขั้นตอนที่ 1"
              aria-current="step"
            ></button>
            <button type="button" aria-label="ขั้นตอนที่ 2"></button>
            <button type="button" aria-label="ขั้นตอนที่ 3"></button>
            <button type="button" aria-label="ขั้นตอนที่ 4"></button>
          </nav>
        </div>
      </section>
      <section class="faq" id="faq">
        <div class="container">
          <h2>Help &amp; Frequently Asked Questions</h2>
          <details open>
            <summary>สร้างคูปองบน PEEP SHARE มีค่าใช้จ่ายไหม?</summary>
            <p>
              ไม่มีครับ การลงทะเบียนร้าน สร้างคูปอง
              และปล่อยโปรโมชันพื้นฐานใช้ฟรี ไม่มีค่าแรกเข้า ไม่มีค่ารายเดือน
              และไม่หักค่าคอมมิชชั่นจากยอดขายหน้าร้าน
              หากต้องการแพ็กเกจโปรโมทพิเศษเพิ่มเติม
              ทีมงานจะแจ้งรายละเอียดและราคาให้ทราบล่วงหน้าเสมอ
            </p>
          </details>
          <details>
            <summary>ตั้งคูปองแบบได้ได้บ้าง?</summary>
            <p>
              ตั้งได้ทั้งส่วนลดเป็นบาท ส่วนลดเป็นเปอร์เซ็นต์ ซื้อ 1 แถม 1
              และของแถมพิเศษ กำหนดวันเริ่ม–วันหมดอายุ จำนวนสิทธิ์
              และเงื่อนไขขั้นต่ำได้เอง
            </p>
          </details>
          <details>
            <summary>ลูกค้าใช้คูปองที่หน้าร้านอย่างไร?</summary>
            <p>
              ลูกค้ากดรับสิทธิ์คูปองในแอป แล้วแสดงโค้ดหรือ QR ที่หน้าร้าน
              พนักงานสแกนหรือกดยืนยันเพื่อตัดสิทธิ์ได้ทันที
              ระบบจะบันทึกการใช้คูปองให้อัตโนมัติและป้องกันการใช้ซ้ำ
            </p>
          </details>
          <details>
            <summary>ดูผลของคูปองแต่ละใบได้ที่ไหน?</summary>
            <p>ทางเราจัดส่งรายงานยอดให้ทุกสิ้นเดือน</p>
          </details>
        </div>
      </section>
      <section class="join" id="join">
        <div class="join-grid container">
          <div class="join-copy">
            <h2>พร้อมให้ลูกค้าเจอร้านคุณแล้วหรือยัง?</h2>
            <p>
              พร้อมแล้ว มากับ PEEPS ลงทะเบียนได้ฟรี ไม่มีค่าใช้จ่าย<br />
              เริ่มปล่อยดีลแรกของร้านคุณได้เลย
            </p>
            <a class="btn secondary" href="/partner/shop/"
              >ลงทะเบียนร้านค้าฟรี</a
            >
          </div>
          <img src="/assets/Mockup.png" alt="PEEP SHARE application" />
        </div>
      </section>
    </main>
</template>

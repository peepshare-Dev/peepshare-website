<script setup lang="ts">
useHead({
  htmlAttrs: { class: "page-home" },
  title: "PEEP SHARE",
  meta: [{ name: "description", content: "PEEP SHARE — Your life, all in one PEEP" }],
});

useLegacyPageScript("/legacy-scripts/home.js", false);
</script>

<template>
<main>
      <section class="hero" id="home">
        <div class="container hero-copy">
          <p class="eyebrow">Your Life All in One PEEP</p>
          <h1>Lifesync with <span class="accent">PEEP SHARE</span></h1>
          <p class="hero-subtitle">
            เพราะทุกอย่างล้วนมีความหมาย เชื่อมการสื่อสารให้ไร้รอยต่อ แชท แชร์
            และเก็บทุกความทรงจำด้วยคลาวด์ส่วนตัวฟรี 20 GB พร้อม AI ASSISTANT
            ที่ทำให้ทุกการเชื่อมต่อมีความหมายกว่าที่เคย
          </p>
          <div class="floating-card float-left">
            <div class="card-heading">
              <b>AI ASSISTANT</b><span class="card-badge">NEW</span>
            </div>
            <span
              >Your Smartest Little Helper ASK FIND DONE ให้ AI ASSISTANT
              ช่วยจัดการสิ่งที่คุณไม่อยากเสียเวลา
            </span>
          </div>
          <div class="floating-card float-right-top">
            <b>PEEP Chat</b
            ><span
              >One Conversation. Everything Connected. แชทง่าย ส่งข้อความ รูปภาพ
              หรือไฟล์ ส่งผิดก็ยกเลิกได้ฟรี พร้อมเก็บทุกอย่างบน Cloud</span
            >
          </div>
          <div class="floating-card float-right-bottom">
            <b>PEEP Comunity</b
            ><span
              >Find Your People เจอคนที่ชอบอะไรเหมือนคุณ
              รวมอีเวนต์และกิจกรรมที่คุณสนใจไว้ในที่เดียว
              สร้างพื้นที่ความสนุกในแบบของคุณ</span
            >
          </div>
          <img
            class="hero-device"
            src="/assets/Group1000002778.png"
            alt="PEEP SHARE mobile application"
          />
        </div>
      </section>
      <div class="ticker" aria-hidden="true">
        <div class="ticker-track">
          <div class="ticker-group">
            <span class="ticker-dot">•</span
            ><span class="ticker-item"
              >#YOUR LIFE YOUR PEOPLE YOUR PEEP SHARE</span
            >
            <span class="ticker-dot">•</span
            ><span class="ticker-item"
              >#LET'S PEEP SHARE KEEP YOUR MEMORIES</span
            >
            <span class="ticker-dot">•</span
            ><span class="ticker-item"
              >#YOUR LIFE YOUR PEOPLE YOUR PEEP SHARE</span
            >
            <span class="ticker-dot">•</span
            ><span class="ticker-item"
              >#LET'S PEEP SHARE KEEP YOUR MEMORIES</span
            >
            <span class="ticker-dot">•</span
            ><span class="ticker-item"
              >#YOUR LIFE YOUR PEOPLE YOUR PEEP SHARE</span
            >
            <span class="ticker-dot">•</span
            ><span class="ticker-item"
              >#LET'S PEEP SHARE KEEP YOUR MEMORIES</span
            >
          </div>
          <div class="ticker-group">
            <span class="ticker-dot">•</span
            ><span class="ticker-item"
              >#YOUR LIFE YOUR PEOPLE YOUR PEEP SHARE</span
            >
            <span class="ticker-dot">•</span
            ><span class="ticker-item"
              >#LET'S PEEP SHARE KEEP YOUR MEMORIES</span
            >
            <span class="ticker-dot">•</span
            ><span class="ticker-item"
              >#YOUR LIFE YOUR PEOPLE YOUR PEEP SHARE</span
            >
            <span class="ticker-dot">•</span
            ><span class="ticker-item"
              >#LET'S PEEP SHARE KEEP YOUR MEMORIES</span
            >
            <span class="ticker-dot">•</span
            ><span class="ticker-item"
              >#YOUR LIFE YOUR PEOPLE YOUR PEEP SHARE</span
            >
            <span class="ticker-dot">•</span
            ><span class="ticker-item"
              >#LET'S PEEP SHARE KEEP YOUR MEMORIES</span
            >
          </div>
        </div>
      </div>

      <section class="features" id="features">
        <div class="container reveal">
          <div class="feature-heading">
            <p class="eyebrow">[Feature]</p>
            <h2 class="section-title">
              Our all <span class="accent">FEATURES</span>
            </h2>
            <p class="feature-subtitle">One App Many Ways to Share</p>
          </div>
          <div class="feature-tabs" role="tablist">
            <button class="active" data-feature="chat">Chat</button
            ><button data-feature="cloud">Cloud</button
            ><button data-feature="translate">AI Translate</button
            ><button data-feature="community">Community</button
            ><button data-feature="event">Event</button
            ><button data-feature="coupon">Coupon</button
            ><button data-feature="talk">Talk</button>
          </div>
          <div class="feature-stage">
            <div class="feature-watermark" aria-hidden="true">
              PEEPS CLOUD • PEEPS CLOUD • PEEPS CLOUD • PEEPS CLOUD •
            </div>
            <img
              class="feature-image"
              id="featureImage"
              src="/assets/chat-tab.png"
              alt="PEEP SHARE Chat feature"
            />
            <div class="feature-copy">
              <p data-feature-panel="chat">
                <span>One Conversation. Everything Connected.</span>
                <span>แชท แชร์ และเก็บทุกเรื่องราวไว้ในที่เดียว</span>
                <span>รูปภาพ วิดีโอ และบทสนทนาสำคัญ ไม่ต้องกลัวหาย</span>
                <span>เพราะทุกความทรงจำยังอยู่บน Cloud และพร้อมให้คุณกลับมาเปิดดูได้ทุกเมื่อ</span>
              </p>
              <p data-feature-panel="cloud" hidden>
                <span>Keep Every Memory. Keep Every File.</span>
                <span>จัดเก็บรูปภาพ วิดีโอ และไฟล์สำคัญบน My Cloud พร้อมพื้นที่ฟรี 20GB</span>
                <span>ให้ทุกช่วงเวลาที่มีความหมายยังคงอยู่ และพร้อมให้คุณกลับมาเปิดดูได้ทุกเมื่อ</span>
                <span>เพราะทุกความทรงจำ…มีพื้นที่ของมัน</span>
              </p>
              <p data-feature-panel="translate" hidden>
                <span>Break Language Barriers. Connect Freely.</span>
                <span>เปิดประสบการณ์การสื่อสารกับผู้คนต่างภาษาได้อย่างมั่นใจ</span>
                <span>ด้วย AI Translate รองรับมากกว่า 20 ภาษา ช่วยแปลบทสนทนาให้เข้าใจง่ายและเป็นธรรมชาติ ให้ทุกการสื่อสารไร้ข้อจำกัด และทุกการเชื่อมต่อเป็นไปอย่างราบรื่น</span>
              </p>
              <p data-feature-panel="community" hidden>
                <span>Find Your People</span>
                <span>ค้นพบคอมมูนิตี้ที่ใช่ เชื่อมต่อกับคนคอเดียวกัน</span>
                <span>แลกเปลี่ยนไอเดีย แบ่งปันความสนใจ และสร้างมิตรภาพใหม่ ๆ</span>
                <span>เปิดโลกเรื่องราวใหม่ ๆ ในพื้นที่ที่เป็นคุณ</span>
              </p>
              <p data-feature-panel="event" hidden>
                <span>Find Your Next Experience</span>
                <span>ค้นพบอีเวนต์และกิจกรรมที่ตรงกับความสนใจของคุณ</span>
                <span>ลงทะเบียนเข้าร่วมได้สะดวกในที่เดียว</span>
                <span>เปิดประสบการณ์ใหม่ และสนุกกับกิจกรรมในแบบที่เป็นคุณ</span>
              </p>
              <p data-feature-panel="coupon" hidden>
                <span>More Deals. More Benefits.</span>
                <span>ค้นพบคูปอง ส่วนลด และสิทธิพิเศษจากพาร์ทเนอร์หลากหลายแบรนด์</span>
                <span>เข้าถึงข้อเสนอสำหรับสินค้าและบริการที่คุณสนใจได้ง่ายในที่เดียว</span>
                <span>ช้อปคุ้มกว่า รับสิทธิประโยชน์มากกว่าในทุกการเลือกของคุณ</span>
              </p>
              <p data-feature-panel="talk" hidden>
                <span>Stay Connected See Them Closer</span>
                <span>เชื่อมต่อกับคนสำคัญผ่านการโทรและวิดีโอคอลได้อย่างสะดวก</span>
                <span>ไม่ว่าจะอยู่ที่ไหน ก็พูดคุยและเห็นหน้ากันแบบเรียลไทม์</span>
                <span>แบ่งปันทุกช่วงเวลา ให้ทุกการสื่อสารรู้สึกใกล้กันมากขึ้น</span>
              </p>
              <div class="chips">
                <span class="chip">พื้นที่ที่รวม Digital Life ของคุณไว้ด้วยกัน</span>

            </div>
          </div>
        </div>
        </div>
      </section>

      <section class="reviews" id="reviews">
        <div class="container reveal">
          <div class="reviews-head">
            <h2 class="section-title">
              Customer <span class="accent">Review</span>
            </h2>
            <p class="reviews-subtitle">People are already Peeping In</p>
          </div>
          <div class="reviews-viewport" id="reviewsViewport">
            <div class="reviews-columns">
              <div class="review-column">
                <article class="review-card">
                  <p>วิดีโอคอลลื่น ต่างจากแอปอื่น ๆ มาก เสถียรสุด ๆ</p>
                  <div class="review-person">
                    <img src="/assets/solar_user-circle-bold.png" alt="" /><b
                      >M****</b
                    >
                  </div>
                </article>
                <article class="review-card medium">
                  <p>
                    คือแอปดี ฟีเจอร์น่ารักหมดทุกอย่าง แต่บางทีฝ่ายตรงข้ามส่งข้อความมาหาแล้วไม่ขึ้น
                    หรือข้อความหาย อยากให้แก้หน่อยค่ะ ส่วนฟอนต์และสติกเกอร์น่ารักมาก
                    มีแปลภาษาด้วย เริ่ด
                  </p>
                  <div class="review-person">
                    <img src="/assets/solar_user-circle-bold.png" alt="" /><b
                      >D*****</b
                    >
                  </div>
                </article>
                <article class="review-card tall">
                  <p>ชอบมากตอนแปลภาษา</p>
                  <div class="review-person">
                    <img src="/assets/solar_user-circle-bold.png" alt="" /><b
                      >A*******</b
                    >
                  </div>
                </article>
              </div>
              <div class="review-column">
                <article class="review-card tall">
                  <p>
                    แอปโคตรดีครับ ผมเอารูปภาพไปเก็บไว้ใน My Cloud
                    จากพื้นที่ 47GB ลดลงมาเหลือแค่ 42GB ถือว่าลดลงไปเยอะมาก ตั้ง 5GB แหนะ
                  </p>
                  <div class="review-person">
                    <img src="/assets/solar_user-circle-bold.png" alt="" /><b
                      >E******</b
                    >
                  </div>
                </article>
                <article class="review-card medium">
                  <p>เยี่ยมเลย เวลานี้ใช้งานดีทีเดียวครับ</p>
                  <div class="review-person">
                    <img src="/assets/solar_user-circle-bold.png" alt="" /><b
                      >L******</b
                    >
                  </div>
                </article>
                <article class="review-card medium">
                  <p>
                    ชอบแอปมากค่ะ อยากให้ที่ทำงานมาใช้แอปนี้เลย
                    แต่แอปยังไม่เสถียรเท่าไหร่ สติกเกอร์ฟรีหลายอันน่ารักมาก
                    การโทรและวิดีโอคอลไม่ติดปัญหาอะไรค่ะ แต่ตอนเพิ่มเพื่อนแอบหนืดนิดนึง
                  </p>
                  <div class="review-person">
                    <img src="/assets/solar_user-circle-bold.png" alt="" /><b
                      >K*****</b
                    >
                  </div>
                </article>
              </div>
              <div class="review-column">
                <article class="review-card">
                  <p>ได้รับข้อมูลชัดเจน ค้นหาง่าย สะดวก ปลอดภัย ไร้กังวล</p>
                  <div class="review-person">
                    <img src="/assets/solar_user-circle-bold.png" alt="" /><b
                      >H******</b
                    >
                  </div>
                </article>
                <article class="review-card">
                  <p>
                    ใช้งานง่าย ประหยัดเนื้อที่ได้เยอะ ชอบครับแอปนี้ 👍
                  </p>
                  <div class="review-person">
                    <img src="/assets/solar_user-circle-bold.png" alt="" /><b
                      >P*******</b
                    >
                  </div>
                </article>
                <article class="review-card medium">
                  <p>
                    ส่งรูป วิดีโอ และไฟล์ได้สะดวก เปิดดูย้อนหลังง่าย
                    ไม่ต้องคอยลบไฟล์บ่อย ๆ ใช้งานครบในแอปเดียวครับ
                  </p>
                  <div class="review-person">
                    <img src="/assets/solar_user-circle-bold.png" alt="" /><b
                      >S********</b
                    >
                  </div>
                </article>
              </div>
            </div>
            <div class="review-fade"></div>
            <div class="reviews-action">
              <button
                class="primary-btn"
                id="reviewsToggle"
                type="button"
                aria-expanded="false"
                data-collapsed-label="View all Reviews"
                data-expanded-label="Hide Reviews"
              >
                View all Reviews
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="download" id="download">
        <div class="container reveal">
          <h2 class="download-title">Download</h2>
          <p class="download-subtitle">Ready to Share Your Life ?</p>
          <div class="download-platforms">
            <div>
              <h3 class="platform-heading available">Available Now!</h3>
              <div class="platform-icons">
                <a
                  class="platform-icon"
                  href="https://open.peepshare.ai/Yxf0/nhogdpsa"
                  aria-label="Download on the App Store"
                  ><img src="/assets/Frame 15978847379.png" alt="" /></a
                ><a
                  class="platform-icon"
                  href="https://open.peepshare.ai/Yxf0/nhogdpsa"
                  aria-label="Download for Android"
                  ><img src="/assets/Frame 1597884735.png" alt=""
                /></a>
              </div>
            </div>
            <div>
              <h3 class="platform-heading">CREATE YOUR ACCOUNT</h3>
              <div class="platform-icons">
                <img
                  class="platform-image"
                  src="/assets/Frame15978847389.png"
                  alt="Windows coming soon"
                /><img
                  class="platform-image"
                  src="/assets/Frame1597884740.png"
                  alt="Desktop coming soon"
                />
              </div>
            </div>
          </div>
          <div class="download-grid">
            <img
              class="stats-image"
              src="/assets/Frame11.svg"
              alt="PEEP SHARE download statistics"
            />
            <div
              class="showcase-carousel"
              id="showcaseCarousel"
              aria-roledescription="carousel"
              aria-label="PEEP SHARE platform showcase"
            >
              <div class="showcase-track" id="showcaseTrack">
                  <img
                    src="/assets/Frame2147227450.svg"
                    alt="PEEP SHARE available across platforms"
                  />
                </div>
              <div class="carousel-controls">
                <button
                  class="carousel-btn"
                  id="carouselPrev"
                  type="button"
                  aria-label="Previous slide"
                >
                  ><iconify-icon
                    icon="solar:alt-arrow-left-linear"
                    aria-hidden="true"
                  ></iconify-icon></button
                ><button
                  class="carousel-btn"
                  id="carouselNext"
                  type="button"
                  aria-label="Next slide"
                >
                  <iconify-icon
                    icon="solar:alt-arrow-right-linear"
                    aria-hidden="true"
                  ></iconify-icon>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="faq" id="faq">
        <div class="container reveal">
          <h2>Help & Frequently Asked Questions</h2>
          <details open>
            <summary>What is PEEPSHARE?</summary>
            <p>
              PEEPSHARE แอปพลิเคชันที่จะทำให้ทุกการสื่อสารเป็นเรื่องที่ง่าย เป็นพื้นที่ปลอดภัยของทุกคน แชท โทร เก็บไฟล์ แชร์สิ่งที่ชอบกับคนอื่นๆ ด้วยฟีเจอร์ที่หลากหลาย และรองรับการแปลภาษา
              อีกจุดเด่นที่น่าสนใจเรามี AI คู่ใจช่วยเป็นเพื่อนคิดในทุกช่วงเวลาของการใช้แอป ให้คุณได้สนุกไปกับการใช้ PEEPS ในทุกวัน
            </p>
          </details>
          <details>
            <summary>What functions does PEEPSHARE offer?</summary>
            <p>
              PEEPSHARE รวมฟังก์ชัน Chat, Cloud, AI Translate, Community, Event,
              Coupon และ Talk เพื่อให้ทุกการเชื่อมต่ออยู่ในพื้นที่เดียวกัน
            </p>
          </details>
          <details>
            <summary>How does AI Assistant work?</summary>
            <p>
              AI Assistant ช่วยแปลภาษา สรุปเนื้อหา ค้นหาข้อมูล
              และสนับสนุนการสื่อสารโดยคำนึงถึงบริบทและความเป็นส่วนตัวของผู้ใช้งาน
            </p>
          </details>
          <details>
            <summary>Is my data secure?</summary>
            <p>
              ข้อมูลของคุณได้รับการปกป้องด้วยระบบรักษาความปลอดภัย
              การควบคุมสิทธิ์เข้าถึง
              และโครงสร้างคลาวด์ที่ออกแบบมาเพื่อความเป็นส่วนตัว
            </p>
          </details>
        </div>
      </section>
    </main>
</template>

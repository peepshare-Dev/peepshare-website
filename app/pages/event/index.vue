<script setup lang="ts">
useHead({
  htmlAttrs: { class: "page-event" },
  title: "PEEP SHARE - Events",
  meta: [{ name: "description", content: "กิจกรรมและอีเวนต์จาก PEEP SHARE" }],
});

useLegacyPageScript("/legacy-scripts/event.js", false);
</script>

<template>
<main>
      <section class="hero">
        <div class="container">
          <div class="hero-copy">
            <h1>MONOMAX :<br />PREMIER LEAGUE -<br />WATCH PARTY</h1>
            <p>
              พรีเมียร์ลีกฤดูกาลนี้... อังก์ดูอยู่บ้านคนเดียว!<br />ชวนเพื่อน
              ใส่เสื้อทีมโปรด แล้วมารวมพลังเชียร์สด
            </p>
            <div class="event-meta">
              <div class="event-meta-row">
                <iconify-icon icon="solar:calendar-bold" aria-hidden="true"></iconify-icon>
                <span>29 สิงหาคม 2026</span>
              </div>
              <div class="event-meta-row">
                <iconify-icon icon="solar:clock-circle-bold" aria-hidden="true"></iconify-icon>
                <span>18:30 - 21:00</span>
              </div>
              <div class="event-meta-row">
                <iconify-icon icon="solar:map-point-bold" aria-hidden="true"></iconify-icon>
                <span>MONO STUDIO แจ้งวัฒนะ</span>
              </div>
            </div>
            <div class="actions">
              <a class="orange-btn" href="/event/detail/">
                ดูรายละเอียด
                <iconify-icon icon="solar:arrow-right-linear" aria-hidden="true"></iconify-icon>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div class="dots"><i></i><i></i><i></i><i></i><i></i></div>
      <section class="events-area">
        <div class="container">
          <h2>กิจกรรมที่แนะนำ</h2>
          <div class="recommended">
            <article class="feature-event">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1100&q=85"
                alt="Community meetup"
              />
              <h3>PEEP Share Community Meetup 2026</h3>
              <p class="desc">
                งานรวมพลคอมมูนิตี้ PEEP Share ครั้งยิ่งใหญ่ พบกับกิจกรรมสุดพิเศษ
                แลกเปลี่ยนประสบการณ์กับผู้ใช้งานจริง
              </p>
              <div class="small-meta">
                <span class="meta-item"><iconify-icon icon="solar:calendar-bold" aria-hidden="true"></iconify-icon>12 ตุลาคม 2026</span>
                <span class="meta-item"><iconify-icon icon="solar:clock-circle-bold" aria-hidden="true"></iconify-icon>14:00 - 18:00</span>
                <span class="meta-item"><iconify-icon icon="solar:map-point-bold" aria-hidden="true"></iconify-icon>Samyan Mitrtown Hall</span>
              </div>
            </article>
            <div class="side-events">
              <article class="side-event">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=85"
                  alt="Workshop"
                />
                <div class="side-copy">
                  <h3>Workshop: เปิดร้านค้าบน PEEP Share</h3>
                  <p class="desc">
                    เรียนรู้วิธีสร้างหน้าร้านออนไลน์ ตั้งแต่เริ่มต้น
                    พร้อมเทคนิคการใช้คูปองและโปรโมชั่น
                  </p>
                  <div class="small-meta">
                    <span class="meta-item"><iconify-icon icon="solar:calendar-bold" aria-hidden="true"></iconify-icon>26 ตุลาคม 2026</span>
                    <span class="meta-item"><iconify-icon icon="solar:clock-circle-bold" aria-hidden="true"></iconify-icon>13:00 - 16:00</span>
                  </div>
                </div>
              </article>
              <article class="side-event">
                <img
                  src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=800&q=85"
                  alt="Creator night"
                />
                <div class="side-copy">
                  <h3>Creator Night — คืนของนักสร้างสรรค์</h3>
                  <p class="desc">
                    เปิดเวทีให้ครีเอเตอร์รุ่นใหม่มาแชร์ไอเดียและแรงบันดาลใจ
                  </p>
                  <div class="small-meta">
                    <span class="meta-item"><iconify-icon icon="solar:calendar-bold" aria-hidden="true"></iconify-icon>9 พฤศจิกายน 2026</span>
                    <span class="meta-item"><iconify-icon icon="solar:clock-circle-bold" aria-hidden="true"></iconify-icon>19:00 - 22:00</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div class="all-head">
            <h2>กิจกรรมทั้งหมด</h2>
            <label class="search-box">
              <iconify-icon
                class="search-icon"
                icon="solar:magnifer-outline"
                aria-hidden="true"
              ></iconify-icon>
              <input
                class="search"
                type="search"
                aria-label="ค้นหากิจกรรม"
                placeholder="ค้นหาชื่อกิจกรรม หรือ ประเภท"
              />
            </label>
          </div>
          <div class="event-grid" id="eventGrid">
            <article class="event-card">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&amp;fit=crop&amp;w=800&amp;q=82"
                alt="Smart Sharing: แชร์ไฟล์ปลอดภัยในยุคดิจิทัล"
              />
              <div class="event-info">
                <h3>Smart Sharing: แชร์ไฟล์ปลอดภัยในยุคดิจิทัล</h3>
                <div class="event-meta-row"><iconify-icon icon="solar:calendar-bold" aria-hidden="true"></iconify-icon><span>5 ตุลาคม 2026</span></div>
                <div class="event-meta-row"><iconify-icon icon="solar:clock-circle-bold" aria-hidden="true"></iconify-icon><span>10:00 - 12:30</span></div>
                <div class="event-meta-row"><iconify-icon icon="solar:map-point-bold" aria-hidden="true"></iconify-icon><span>Siam Paragon Hall</span></div>
              </div>
            </article>
            <article class="event-card">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&amp;fit=crop&amp;w=800&amp;q=82"
                alt="PEEP Share × Creator Camp"
              />
              <div class="event-info">
                <h3>PEEP Share × Creator Camp</h3>
                <div class="event-meta-row"><iconify-icon icon="solar:calendar-bold" aria-hidden="true"></iconify-icon><span>18 ตุลาคม 2026</span></div>
                <div class="event-meta-row"><iconify-icon icon="solar:clock-circle-bold" aria-hidden="true"></iconify-icon><span>13:00 - 17:00</span></div>
                <div class="event-meta-row"><iconify-icon icon="solar:map-point-bold" aria-hidden="true"></iconify-icon><span>ICON SIAM ชั้น 6</span></div>
              </div>
            </article>
            <article class="event-card">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&amp;fit=crop&amp;w=800&amp;q=82"
                alt="Cloud Storage Workshop: จัดการพื้นที่ให้เวิร์ค"
              />
              <div class="event-info">
                <h3>Cloud Storage Workshop: จัดการพื้นที่ให้เวิร์ค</h3>
                <div class="event-meta-row"><iconify-icon icon="solar:calendar-bold" aria-hidden="true"></iconify-icon><span>25 ตุลาคม 2026</span></div>
                <div class="event-meta-row"><iconify-icon icon="solar:clock-circle-bold" aria-hidden="true"></iconify-icon><span>14:00 - 16:00</span></div>
                <div class="event-meta-row"><iconify-icon icon="solar:map-point-bold" aria-hidden="true"></iconify-icon><span>AIS Design Center</span></div>
              </div>
            </article>
            <article class="event-card">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&amp;fit=crop&amp;w=800&amp;q=82"
                alt="AI Translate Masterclass สำหรับนักเดินทาง"
              />
              <div class="event-info">
                <h3>AI Translate Masterclass สำหรับนักเดินทาง</h3>
                <div class="event-meta-row"><iconify-icon icon="solar:calendar-bold" aria-hidden="true"></iconify-icon><span>2 พฤศจิกายน 2026</span></div>
                <div class="event-meta-row"><iconify-icon icon="solar:clock-circle-bold" aria-hidden="true"></iconify-icon><span>10:00 - 12:00</span></div>
                <div class="event-meta-row"><iconify-icon icon="solar:map-point-bold" aria-hidden="true"></iconify-icon><span>Central World ชั้น 4</span></div>
              </div>
            </article>
            <article class="event-card">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&amp;fit=crop&amp;w=800&amp;q=82"
                alt="PEEP Share Hackathon 2026"
              />
              <div class="event-info">
                <h3>PEEP Share Hackathon 2026</h3>
                <div class="event-meta-row"><iconify-icon icon="solar:calendar-bold" aria-hidden="true"></iconify-icon><span>15-16 พฤศจิกายน 2026</span></div>
                <div class="event-meta-row"><iconify-icon icon="solar:clock-circle-bold" aria-hidden="true"></iconify-icon><span>09:00 - 18:00</span></div>
                <div class="event-meta-row"><iconify-icon icon="solar:map-point-bold" aria-hidden="true"></iconify-icon><span>KX Knowledge Xchange</span></div>
              </div>
            </article>
            <article class="event-card">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&amp;fit=crop&amp;w=800&amp;q=82"
                alt="เทคนิคใช้คูปองเพิ่มยอดขายบน PEEP Share"
              />
              <div class="event-info">
                <h3>เทคนิคใช้คูปองเพิ่มยอดขายบน PEEP Share</h3>
                <div class="event-meta-row"><iconify-icon icon="solar:calendar-bold" aria-hidden="true"></iconify-icon><span>22 พฤศจิกายน 2026</span></div>
                <div class="event-meta-row"><iconify-icon icon="solar:clock-circle-bold" aria-hidden="true"></iconify-icon><span>18:00 - 20:30</span></div>
                <div class="event-meta-row"><iconify-icon icon="solar:map-point-bold" aria-hidden="true"></iconify-icon><span>The Commons ทองหล่อ</span></div>
              </div>
            </article>
          </div>
          <a class="more" href="#">ดูทั้งหมด</a>
        </div>
      </section>
      <section class="registration-steps" aria-labelledby="registration-title">
        <div class="container">
          <h2 id="registration-title">ขั้นตอนการลงทะเบียน <span>Event</span></h2>
          <ol class="registration-grid">
            <li class="registration-step">
              <div class="registration-phone">
                <img
                  src="/assets/Groupp1.svg"
                  alt="หน้ารวมกิจกรรมในแอป PEEP SHARE"
                  loading="lazy"
                />
              </div>
              <div class="registration-copy">
                <span class="registration-number">1</span>
                <div>
                  <h3>กด Cover Page หรือ Banner</h3>
                  <p>เพื่อลงทะเบียนเข้างาน</p>
                </div>
              </div>
            </li>
            <li class="registration-step">
              <div class="registration-phone">
                <img
                  src="/assets/Groupp2.svg"
                  alt="หน้ารายละเอียดกิจกรรมในแอป PEEP SHARE"
                  loading="lazy"
                />
              </div>
              <div class="registration-copy">
                <span class="registration-number">2</span>
                <div>
                  <h3>กดเข้าร่วม Event</h3>
                  <p>เพื่อลงทะเบียนเข้างาน</p>
                </div>
              </div>
            </li>
            <li class="registration-step">
              <div class="registration-phone">
                <img
                  src="/assets/Groupp3.svg"
                  alt="แบบฟอร์มลงทะเบียนกิจกรรมในแอป PEEP SHARE"
                  loading="lazy"
                />
              </div>
              <div class="registration-copy">
                <span class="registration-number">3</span>
                <div>
                  <h3>กรอกรายละเอียด</h3>
                  <p>และกดดำเนินการต่อ</p>
                </div>
              </div>
            </li>
            <li class="registration-step">
              <div class="registration-phone">
                <img
                  src="/assets/Groupp4.svg"
                  alt="บัตรเข้างานพร้อม QR Code ในแอป PEEP SHARE"
                  loading="lazy"
                />
              </div>
              <div class="registration-copy">
                <span class="registration-number">4</span>
                <div>
                  <h3>รับ Ticket QR Code</h3>
                  <p>เพื่อลงทะเบียนเข้างาน</p>
                </div>
              </div>
            </li>
          </ol>
          <nav class="registration-pagination" aria-label="เลือกขั้นตอนการลงทะเบียน">
            <button class="active" type="button" aria-label="ขั้นตอนที่ 1" aria-current="step"></button>
            <button type="button" aria-label="ขั้นตอนที่ 2"></button>
            <button type="button" aria-label="ขั้นตอนที่ 3"></button>
            <button type="button" aria-label="ขั้นตอนที่ 4"></button>
          </nav>
        </div>
      </section>
      <section class="join" id="download">
        <div class="container">
          <div class="join-head">
            <div class="join-title">
              Join Together<br /><small>[with]</small> <span>PEEP SHARE</span>
            </div>
            <div class="hashtag">#รวมตัวง่ายใครก็ทำได้</div>
          </div>
          <div class="app-showcase">
            <div class="phone-wrap">
              <img
                class="phone-image"
                src="/assets/1.png"
                alt="PEEP Share event booking details"
              />
            </div>
            <div class="app-copy">
              <span class="tag">PEEP Share Events</span>
              <h2>ค้นหากิจกรรม<br />ที่ใช่สำหรับคุณ</h2>
              <p class="desc">
                เข้าร่วมกิจกรรม Workshop, Meetup และ Community Event มากมาย<br />พร้อมพบเพื่อนใหม่และเรียนรู้สิ่งใหม่
                ๆ ไปด้วยกัน
              </p>
              <div class="stores">
                <a href="https://open.peepshare.ai/Yxf0/nhogdpsa" aria-label="Download on the App Store"><img
                  src="/assets/Frame15978847379.png"
                  alt="Download on the App Store"
                /></a><a href="https://open.peepshare.ai/Yxf0/nhogdpsa" aria-label="Download for Android"><img
                  src="/assets/Frame1597884735.png"
                  alt="Download for Android"
                /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
</template>

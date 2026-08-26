# Peepshare Website Design System

เอกสารนี้อธิบายสไตล์ที่ใช้งานจริงในหน้าแรกปัจจุบัน (`index.html`) ซึ่งสร้างด้วย Tailwind CSS ผ่าน CDN และ JavaScript แบบไม่ใช้ framework

## Design direction

- สไตล์ minimal creative agency เน้นพื้นที่ว่างและ typography ขนาดใหญ่
- ใช้โทนขาว ดำ และเทาเป็นพื้น โดยมีสีส้มเป็น accent หลัก
- ใช้มุมโค้งมากกับ card, section, image และปุ่มทรง pill
- สลับพื้นหลังสว่างกับ section สีดำเพื่อสร้าง contrast
- ใช้ภาพผลงานและภาพบุคคลเป็นองค์ประกอบสำคัญ

## Technology

- Tailwind CSS ผ่าน `https://cdn.tailwindcss.com`
- กำหนด theme ด้วย `tailwind.config` ภายใน `index.html`
- CSS เพิ่มเติมใช้เฉพาะ marquee, scroll reveal, FAQ และ tab state
- JavaScript ธรรมดาควบคุม mobile menu, clock, testimonial, tabs และ scroll animation

## Typography

| การใช้งาน | Font | Weight |
|---|---|---|
| Body และ UI | `Inter` | 400, 500, 600, 700 |
| Heading/display | `Space Grotesk` | 500, 600, 700 |
| Fallback | `ui-sans-serif`, `system-ui`, `sans-serif` | ตามระบบ |

- Hero: `text-4xl sm:text-6xl`, line-height `1.05`
- Section heading: `text-5xl sm:text-6xl` หรือ `sm:text-7xl`
- Card heading: `text-2xl` ถึง `text-4xl`
- Body: ขนาดมาตรฐานหรือ `text-lg`
- Label, metadata และ navigation: `text-sm`
- Marquee สำคัญ: `text-6xl sm:text-8xl`

## Color tokens

| Token | Hex | การใช้งาน |
|---|---|---|
| `accent` | `#ff4d00` | สีแบรนด์, คำเน้น, active state และ hover |
| `ink` | `#131313` | ข้อความหลัก, ปุ่มเข้ม และพื้นหลังเข้ม |
| `paper` | `#f0f0f0` | พื้นหลังหลักและ navbar |
| `mist` | `#dcdcdc` | พื้นหลังเทารอง |
| `black` | `#000000` | Section ที่ต้องการ contrast สูง |
| `white` | `#ffffff` | ข้อความและ control บนพื้นเข้ม |
| `gray-400`–`gray-600` | Tailwind defaults | ข้อความรองและ label |
| `green-400` | Tailwind default | จุดสถานะ Available for New Projects |

Opacity ที่ใช้บ่อยบนพื้นเข้มคือ `white/10`, `white/15`, `white/40`, `white/50`, `white/60` และ `white/80`

## Layout and responsive

- Mobile-first และใช้ breakpoint มาตรฐานของ Tailwind
- Container ใช้ `max-w-4xl`, `max-w-5xl`, `max-w-6xl` หรือ `max-w-7xl` ร่วมกับ `mx-auto`
- ระยะขอบแนวนอนมาตรฐาน `px-6`; section ใหญ่ใช้ `sm:px-10`
- ระยะแนวตั้งมาตรฐาน `py-24`
- Grid เปลี่ยนเป็นสองคอลัมน์ตั้งแต่ `md`
- Gap หลักอยู่ในช่วง `gap-4` ถึง `gap-12`

| Prefix | Minimum width |
|---|---:|
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |

## Shape and surface

- ปุ่มหลัก: `rounded-full`
- Card: `rounded-2xl` หรือ `rounded-3xl`
- Section สีเข้ม: `rounded-[32px]`
- Hero inline images: `rounded-2xl`
- เส้นแบ่ง: `border-black/5`, `border-black/10`, `border-white/10`
- Navbar: `bg-paper/80 backdrop-blur-md`
- Premium card: gradient `from-black via-black to-accent`

## Components

Primary button:

```html
class="rounded-full bg-ink text-white text-sm font-medium px-6 py-3 hover:bg-black transition-colors"
```

Light button บนพื้นเข้ม:

```html
class="rounded-full bg-white text-ink text-sm font-medium px-6 py-3 hover:bg-white/90"
```

Navigation link ใช้ `hover:text-ink transition-colors`; footer link ใช้ `hover:text-accent`

## Page structure

1. Availability status และ sticky navigation
2. Hero พร้อม display text และ inline images
3. Selected work collage
4. Client logo marquee
5. Why clients love us
6. Stats และ testimonial slider
7. Selected works บนพื้นดำ
8. Services tabs และ marquee
9. Founder profile
10. Awards
11. Pricing plans
12. FAQ accordion
13. Contact form บนพื้นดำ
14. Footer แบบ dark gradient

## Interaction and motion

### Scroll reveal

- เริ่มด้วย opacity `0` และ `translateY(24px)`
- เมื่อเข้าหน้าจอจะเป็น opacity `1` และกลับสู่ตำแหน่งเดิม
- ระยะเวลา `0.7s`, easing `ease`, IntersectionObserver threshold `0.15`

### Marquee

- Flex track กว้าง `max-content`
- เคลื่อนจาก `translateX(0)` ถึง `translateX(-50%)`
- ระยะเวลา `28s`, linear และวนซ้ำ
- class `reverse` ใช้กลับทิศทาง

### Other interactions

- Mobile navigation toggle class `hidden`
- Testimonial มี previous/next และ transition `duration-500`
- Services เปลี่ยนตาม tab และใช้จุดสีส้มแสดง active state
- FAQ ใช้ native `<details>` และหมุนเครื่องหมายบวก 45 องศาเมื่อเปิด
- Footer แสดงเวลา London และอัปเดตทุกวินาที

## Accessibility

- รูปที่มีความหมายต้องมี `alt`; รูปตกแต่งใช้ `alt=""`
- ปุ่ม icon-only ต้องมี `aria-label`
- Form field ต้องมี label และ input type ที่เหมาะสม
- รักษา contrast ระหว่างพื้นหลังสว่างและเข้ม
- Motion ใหม่ควรรองรับ `prefers-reduced-motion`

## Implementation rules

- ใช้ token `accent`, `ink`, `paper`, `mist` แทนการใส่ hex ซ้ำ
- ใช้ `font-display` สำหรับ heading และ `font-sans` สำหรับ body/UI
- รักษา container width, `px-6` และ vertical rhythm เดิมเมื่อเพิ่ม section
- Component ใหม่ควรใช้ radius และ button pattern ข้างต้น
- ไม่นำ class หรือ token จาก Framer export เดิมกลับมาใช้ เพราะหน้าแรกปัจจุบันเป็น Tailwind implementation

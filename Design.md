# PEEP SHARE Website Design System

เอกสารนี้อธิบายรูปแบบที่ใช้งานจริงในเว็บไซต์ PEEP SHARE ปัจจุบัน หน้าแรกอยู่ที่ `index.html` และสร้างด้วย HTML, CSS และ JavaScript โดยไม่ใช้ UI framework

## Design direction

- Dark technology lifestyle เน้นความทันสมัย ความเป็นส่วนตัว และการเชื่อมต่อ
- ใช้พื้นหลังดำเกือบสนิท ตัดด้วยสีส้มสดซึ่งเป็นสีหลักของแบรนด์
- ใช้ภาพผลิตภัณฑ์ขนาดใหญ่ แสงเรืองสีส้ม พื้นผิวโปร่งใส และข้อความสีขาว contrast สูง
- Heading ตัวหนา ขนาดใหญ่ และมี letter-spacing ติดกันเล็กน้อย
- Card ใช้มุมโค้ง ส่วน badge และ CTA หลักใช้รูปทรง pill
- Motion ต้องนุ่มนวลและมีจุดประสงค์ เช่น ticker, reveal, carousel และ FAQ

## Technology

- Semantic HTML5
- CSS และ CSS custom properties ภายใน `index.html`
- Vanilla JavaScript สำหรับ navigation, tabs, reviews, carousel, reveal และ FAQ
- Font หลักคือ `Inter` จาก Google Fonts
- Vite ใช้สำหรับ development server และ production build
- รูปภาพอ้างจาก `public/assets`
- หน้าแรกปัจจุบันไม่ใช้ Tailwind, Framer runtime หรือ component framework

## Core tokens

```css
:root {
  --bg: #090a0c;
  --surface: #111216;
  --surface-2: #17181d;
  --text: #f6f6f7;
  --muted: #8d8e94;
  --line: rgba(255, 255, 255, .1);
  --accent: #ff6500;
  --accent-2: #ff8a1f;
  --max: 1180px;
}
```

| Token | การใช้งาน |
|---|---|
| `--bg` | พื้นหลังหลัก |
| `--surface` | Card และพื้นผิวเข้มระดับแรก |
| `--surface-2` | Card และ control ที่ต้องแยกจากพื้นหลัง |
| `--text` | ข้อความหลักบนพื้นเข้ม |
| `--muted` | ข้อความรองและ navigation |
| `--line` | เส้นแบ่งและ border แบบบาง |
| `--accent` | สีแบรนด์ หัวข้อสำคัญ active state และ CTA |
| `--accent-2` | สี hover ของ CTA |
| `--max` | ความกว้างสูงสุดของ container หลัก |

## Typography

- Font: `Inter, Arial, sans-serif`
- Body: weight 400–500
- UI/navigation: weight 500–700
- Heading: weight 700–800
- Hero heading: `clamp(42px, 5.2vw, 68px)`, line-height `1`, letter-spacing `-.045em`
- Section heading: `clamp(34px, 5vw, 68px)`, line-height `.98`, letter-spacing `-.055em`
- Navigation: `12px`
- Body text: `12px–15px`, line-height `1.45–1.75`
- สีขาวใช้กับข้อความหลัก สีส้มใช้กับคำที่เน้น เช่น `PEEP SHARE`, `FEATURE`, `Review`

## Layout and responsive

- Container หลัก: `min(calc(100% - 40px), 1180px)` และจัดกึ่งกลาง
- FAQ/Footer กว้างสูงสุด `1080px`; Download กว้างสูงสุด `1000px`
- Section spacing บน desktop ประมาณ `76px–120px`
- Breakpoint หลักคือ tablet `820px` และ mobile `560px`
- Mobile ใช้ขอบแนวนอน `14px`; desktop ใช้ `20px`
- Grid หลายคอลัมน์ต้องยุบเมื่อพื้นที่ไม่พอ

## Header and navigation

- Header เป็น fixed พื้นหลัง `rgba(9,10,12,.78)` และ blur `18px`
- Navigation สูง `74px` บน desktop: logo ซ้าย, links กลาง, CTA ขวา
- Logo/ชื่อแบรนด์ทำหน้าที่กลับหน้าแรก
- เมนูปัจจุบัน: `Works`, `Services`, `About`, `Blog`, `Event`
- CTA ใช้พื้นส้ม ตัวอักษรขาว และทรง pill
- Mobile ใช้ปุ่ม menu และรายการแนวตั้ง

## Hero

- พื้นหลังดำร่วมกับ radial gradient สีส้มรอบภาพผลิตภัณฑ์
- Badge เหนือหัวข้อเป็น pill ขอบส้ม: `INTRODUCING PEEP SHARE`
- Heading บรรทัดเดียวบน desktop: `Lifesync with PEEP SHARE`
- `Lifesync with` สีขาว และ `PEEP SHARE` สีส้ม
- ภาพโทรศัพท์: `/assets/Group 1000002778.png`
- Floating cards ซ้อนกับโทรศัพท์และใช้ glass effect

### Floating card

```css
width: 309px;
min-height: 164px;
padding: 32px;
gap: 10px;
border: 3px solid #5e5e5e;
border-radius: 20px;
background: rgba(18, 19, 26, .68);
backdrop-filter: blur(8px);
box-shadow: 0 0 10px rgba(107, 107, 107, .25);
```

- มี `AI ASSISTANT`, `PEEP Chat` ด้านขวาบน และ `PEEP Chat` ด้านขวาล่าง
- Badge `NEW` อยู่หลังคำว่า `AI ASSISTANT` ในแถวเดียวกัน
- ซ่อน floating cards ที่ viewport ไม่เกิน `820px`

## Orange ticker

- พื้น `--accent`; ข้อความสีขาวตัวหนา
- ข้อความ: `#LIFESYNC TECHNOLOGY` และ `#PEEP SHARE REDESIGN 2026`
- คั่นด้วย `•` และใช้ gap `28px`
- Track มีข้อความเหมือนกันสองชุด เคลื่อนจาก `0` ถึง `-50%`
- แต่ละชุดต้องยาวกว่า viewport เพื่อไม่ให้เกิดช่องว่างระหว่าง animation

## Feature section

- Heading ชิดซ้าย: `[Feature]` และ `Our all FEATURE`
- Tabs: `Chat`, `Cloud`, `AI Translate`, `Community`, `Event`, `Coupon`, `Talk`
- Active tab ใช้ข้อความและจุดนำหน้าสีส้ม
- ภาพหลัก radius `18px` และมี glow สีส้ม
- คำอธิบายจัดกึ่งกลาง ส่วน tag ใช้ pill สีเทาเข้ม
- ข้อความพื้นหลังขนาดใหญ่เคลื่อนไหวแนวนอนต่อเนื่อง

## Customer reviews

- Masonry-style layout: desktop 3 คอลัมน์, tablet 2, mobile 1
- Card ใช้พื้น `#efeff3`, ข้อความเข้ม และ radius `16px`
- Gradient fade บอกว่ามี review ซ่อนอยู่
- `View all Reviews` แสดงทั้งหมดและเปลี่ยนเป็น `Hide Reviews`

## Download

- Heading `Download` ใช้ display size ขนาดใหญ่
- แบ่ง Available Now และ Coming Soon
- Platform icons ใช้รูปใน assets โดยไม่วาดกรอบ CSS ซ้ำ
- Stats อยู่ซ้าย; showcase carousel อยู่ขวา
- Carousel มี previous/next และรองรับ swipe
- Tablet/mobile ยุบเป็นหนึ่งคอลัมน์

## FAQ

- ใช้ native `<details>`/`<summary>`
- แต่ละรายการมีเส้นแบ่งสีขาวโปร่งใส
- ปิดใช้ `+`; เปิดใช้ `−` สีส้ม
- Smooth height animation `360ms`
- Easing: `cubic-bezier(.22, 1, .36, 1)`
- รองรับ `prefers-reduced-motion`

## Footer

- พื้นหลัง `#190a06` และมีเส้นแบ่งด้านบน
- Logo/แบรนด์อยู่ซ้าย; policy links อยู่ขวา
- Social icons เรียง Facebook, Instagram, TikTok
- Icon `57px × 57px`; gap `14px`
- Mobile เปลี่ยนเป็นหนึ่งคอลัมน์

## Shape and surface

- CTA/badge: radius `999px`
- Feature image: radius `18px`
- Floating card: radius `20px`
- Review card: radius `16px`
- เส้นทั่วไปใช้ `rgba(255,255,255,.1)`
- Glass surface ใช้พื้นโปร่งใสควบคู่กับ backdrop blur
- หลีกเลี่ยง shadow ที่สว่างหรือหนักเกินไป ยกเว้น glow รอบผลิตภัณฑ์

## Interaction and motion

- Scroll reveal: opacity `0` + `translateY(24px)` ไปสถานะปกติใน `.7s`
- Header เพิ่ม border เมื่อ scroll
- CTA hover ขยับขึ้น `2px` และใช้ `--accent-2`
- Feature tabs เปลี่ยนเนื้อหาโดยไม่โหลดหน้าใหม่
- Ticker/ข้อความพื้นหลังใช้ linear infinite animation
- Carousel ใช้ transform และ transition
- FAQ ใช้ smooth height animation
- Motion ทั้งหมดต้องมี reduced-motion fallback

## Accessibility

- รูปที่มีความหมายต้องมี `alt`; รูปตกแต่งใช้ `alt=""`
- ปุ่ม icon-only ต้องมี `aria-label`
- ใช้ `<button>` สำหรับ action และ `<a>` สำหรับ navigation
- Navigation ต้องรองรับ keyboard
- รักษา contrast บนพื้นหลังเข้ม
- ไม่ใช้สีเพียงอย่างเดียวเพื่อสื่อสถานะสำคัญ
- Interactive controls ต้องมี focus state ที่มองเห็นได้

## Implementation rules

- ใช้ token จาก `:root` ก่อนเพิ่มสีใหม่
- เก็บรูปใน `public/assets` และอ้างด้วย `/assets/...`
- Component ใหม่ต้องรักษา dark/orange visual language
- ใช้ `Inter` สำหรับ heading, body และ UI
- รักษา container width และ vertical rhythm เดิม
- ตรวจ responsive อย่างน้อยที่ desktop, `820px` และ `560px`
- Motion ใหม่ต้องไม่ทำให้ layout กระตุกและต้องรองรับ reduced motion
- ห้ามนำ style/runtime จาก Framer หรือ Agero กลับมาใช้
- หน้า Partner และ Partner Shop ควรใช้สี typography ปุ่ม และ spacing ที่สอดคล้องกับระบบนี้

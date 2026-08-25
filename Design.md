# Design.md — `index.html` (Peepshare Website)

> Design System ที่สกัดจากหน้าแรก (`index.html`) ซึ่ง export มาจาก Framer (เทมเพลต "Agero")

---

## Typography
- **Heading font:** `Cal Sans` (fallback: `Cal Sans Placeholder`, `sans-serif`)
- **Body font:** `Inter` / `Inter Display` (fallback: `Inter Placeholder`, `sans-serif`)
- ใช้ Framer's CSS variable system (`--framer-font-family`, `--framer-blockquote-font-family-*` ฯลฯ) เพื่อรองรับ style ที่ override ได้หลายชั้น

## Color Tokens (สกัดจาก CSS custom properties ในไฟล์)

| Token (ย่อ) | ค่าสี | การใช้งานโดยประมาณ |
|---|---|---|
| `--token-...-ac88bdb2` | `#000` | สีดำหลัก (พื้นหลัง dark section / ข้อความ) |
| `--token-...-486472f1` | `#131313` | ดำเข้ม (ข้อความ/ปุ่ม) |
| `--token-...-c8379602` | `#111` | ดำ (variant) |
| `--token-...-0c` (695fd4d5 / 05f35d53) | `#0c0c0c66` / `#0c0c0cd1` | ดำโปร่งแสง (overlay/backdrop) |
| `--token-...-0ed94250` | `#fff` | ขาวหลัก (ข้อความบนพื้นเข้ม) |
| `--token-...-79a6bc92` | `#dcdcdc` | เทาอ่อน (background body) |
| `--token-...-8724acf4` | `#f0f0f0` | เทาอ่อนมาก (navbar background) |
| `--token-...-23bf38ef` | `#5c5c5c` | เทากลาง (ข้อความรอง/secondary) |
| `--token-...-3bec1af9` | **`#ff4d00`** | 🔶 **สี Accent หลักของแบรนด์** (ส้ม-แดง ใช้เน้นคำสำคัญ/ปุ่ม) |
| `--token-...-dbfcc30d` | `#61c554` | เขียว (status dot "online/active" บน navbar) |

**สรุปโทนสี:** โมโนโครม (ขาว–ดำ–เทา) เป็นหลัก + accent สีส้ม (`#ff4d00`) เพียงสีเดียวสำหรับดึงจุดสนใจ (CTA, คำเน้น, hover state) — สไตล์ minimal/agency เน้นความคมและ contrast สูง

## Interaction / Motion
- ใช้ Framer Motion runtime (inline) สำหรับ:
  - Text reveal แบบ per-letter (`opacity: 0.001` → `1`, `blur(10px)` → `0`, `translateY(10px)` → `0`)
  - Navbar variants: `Open` / `Closed` / `Mobile-Closed` (hamburger menu มี state machine)
  - Card/slider variants (Logo Card1-6, Slider Card1-6, Testimonial Card1-3)
- Layout responsive ด้วย breakpoint ที่ Framer generate เป็น CSS class ตรง ๆ (ผสมกับ `.hidden-xxxx { display:none!important }` ต่อ breakpoint):
  - **Desktop:** `min-width: 1440px`
  - **Tablet:** `810px – 1439.98px`
  - **Mobile:** `max-width: 809.98px`

# Xuân Thì Café — Design Specification (Bước 2)

> Đầu vào: `research.md` (@researcher). Đầu ra cho @coder: token màu, typography, wireframe 5 section, quy tắc responsive + motion, checklist nghiệm thu.
> Phong cách chỉ đạo: **hoài niệm có kiểm soát** — nền giấy cũ, tương phản thấp, chữ serif cổ điển, một điểm vàng nắng. Không ornate, không "vintage filter" rẻ tiền.

---

## 1. Design tokens (CSS custom properties)

Đặt trong `:root` của `styles.css`. **Tên biến là hợp đồng** — coder dùng đúng tên này, không tự đổi.

```css
:root {
  /* — Nền & mặt giấy — */
  --color-bg:            #F3EDE0;  /* be giấy cũ — nền chính 60% */
  --color-bg-alt:        #EAE2D0;  /* be đậm hơn 1 bậc — nền section xen kẽ, card */
  --color-paper:         #FBF8F1;  /* sáng nhất — nền card menu, ô form */
  --color-surface-dark:  #3A2E24;  /* nâu rất trầm — footer/contact, overlay ảnh */

  /* — Chữ — */
  --color-ink:           #2E2A24;  /* body text — KHÔNG dùng #000 */
  --color-ink-soft:      #4A423A;  /* body thứ cấp, chữ trên nền tối */
  --color-muted:         #8C8577;  /* XEM LƯU Ý TƯƠNG PHẢN (§2) — chỉ caption ≥18px */
  --color-muted-ink:     #6E685B;  /* bản đủ tương phản của muted — caption nhỏ, meta */

  /* — Thương hiệu — */
  --color-primary:       #5B4636;  /* heading, khung, footer chữ */
  --color-secondary:     #6F7D5E;  /* xanh rêu — decoration, border, icon (kích thước lớn) */
  --color-secondary-ink: #4A5641;  /* rêu đậm — section label, link, text nhỏ cần AA */
  --color-accent:        #D9A441;  /* vàng nắng — CHỈ nền nút, gạch chân, trang trí */
  --color-accent-ink:    #8F6317;  /* vàng đậm — text giá tiền, số thứ tự, link hover */
  --color-soft:          #B96C50;  /* gạch phai — quote lớn, dấu trang trí */
  --color-soft-ink:      #9A4E33;  /* gạch phai đậm — text soft ở cỡ nhỏ */

  /* — Path & viền — */
  --color-border:        #DCD2BE;  /* hairline trên nền be */
  --color-border-strong: #C9BDA6;  /* viền card, hover border */

  /* — Font — */
  --font-display: "Playfair Display", "Cormorant Garamond", "Times New Roman", serif;
  --font-body:    "Be Vietnam Pro", "Lora", system-ui, -apple-system, sans-serif;

  /* — Khoảng cách (baseline 8px, dùng theo bậc) — */
  --sp-1: 4px;  --sp-2: 8px;  --sp-3: 16px; --sp-4: 24px;
  --sp-5: 32px; --sp-6: 48px; --sp-7: 64px; --sp-8: 96px; --sp-9: 128px;

  /* — Container & radius — */
  --container: 1180px;
  --container-narrow: 780px;
  --gutter: clamp(20px, 5vw, 56px);
  --radius-sm: 2px;   /* sắc gần như vuông — giữ chất giấy in cũ */
  --radius-md: 6px;
  --radius-pill: 999px;

  /* — Bóng rất nhẹ (film, không "app") — */
  --shadow-1: 0 1px 2px rgba(46,42,36,.06), 0 6px 20px rgba(46,42,36,.06);
  --shadow-2: 0 2px 6px rgba(46,42,36,.10), 0 18px 44px rgba(46,42,36,.10);

  /* — Motion — */
  --ease-out: cubic-bezier(.22,1,.36,1);
  --dur-fast: 240ms; --dur-base: 420ms; --dur-slow: 720ms;
}
```

**Tỷ lệ màu phải giữ:** 60% `--color-bg` — 25% nâu/rêu (`--color-primary`, `--color-secondary`) — 10% `--color-accent` — 5% `--color-soft`. Không quá 3 màu trong một khu vực. `--color-accent` là màu của **hành động**, không dùng cho heading.

---

## 2. Bảng kiểm tương phản (đã đo — WCAG)

Nhà vàng nắng `#D9A441` **không đủ tương phản làm chữ trên nền be** (1.93:1) → vì vậy bộ đôi `-ink` là bắt buộc, không "nâng cấp" thành chữ vàng nguyên bản.

| Cặp | Tỷ lệ | Kết luận |
|---|---|---|
| `--color-ink` trên `--color-bg` | 12.22 | ✅ AAA — body |
| `--color-primary` trên `--color-bg` | 7.58 | ✅ AAA — heading |
| `--color-accent-ink` trên `--color-bg` | 4.54 | ✅ AA — giá tiền, link |
| `--color-secondary-ink` trên `--color-bg` | 6.67 | ✅ AA+ — section label |
| `--color-muted-ink` trên `--color-bg` | 4.74 | ✅ AA — caption nhỏ |
| `--color-muted` trên `--color-bg` | 3.14 | ⚠️ chỉ dùng ≥18px bold / decoration |
| `--color-soft-ink` trên `--color-bg` | 5.13 | ✅ AA — quote cỡ nhỏ |
| `--color-soft` trên `--color-bg` | 3.38 | ⚠️ chỉ quote ≥28px |
| `--color-ink` trên `--color-accent` (nút CTA) | 6.34 | ✅ AAA — **chữ trên nút là `--color-ink`, không dùng chữ trắng** |
| `--color-bg` trên `--color-surface-dark` | 11.28 | ✅ AAA — footer |
| `--color-accent` trên `--color-surface-dark` | 5.85 | ✅ AA — CTA giá trên nền tối |
| `--color-muted-light` `#C9C0AE` trên nền tối | 7.29 | ✅ — meta footer |

Quy tắc chung: **chữ luôn dùng biến có hậu tố `-ink`** (hoặc `--color-ink`/`--color-primary`); biến nguyên bản (`--color-accent`, `--color-soft`, `--color-secondary`) chỉ cho nền, viền, icon, trang trí.

---

## 3. Typography

Font Google, có subset tiếng Việt đầy đủ dấu (đã chọn để không vỡ dấu thanh):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Be+Vietnam+Pro:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap" rel="stylesheet">
```

Scale dùng `clamp()` — fluid, không cần breakpoint font:

| Vai trò | Font / cỡ / leading / tracking |
|---|---|
| `h1` hero | `--font-display` 700 · `clamp(2.5rem, 1.6rem + 4.5vw, 4.5rem)` · lh 1.12 · ls −0.015em |
| `h2` section | `--font-display` 600 · `clamp(1.85rem, 1.3rem + 2.4vw, 2.9rem)` · lh 1.2 |
| `h3` card | `--font-display` 500 · 1.25–1.4rem · lh 1.35 |
| Section label (eyebrow) | `--font-body` 600 · 0.75rem · ls **0.22em** · UPPERCASE · `--color-secondary-ink` |
| Body | `--font-body` 400 · 1.0625rem (17px) · lh **1.75** · `--color-ink` |
| Lead / mở đoạn | `--font-body` 300 · `clamp(1.05rem, 1rem + .4vw, 1.3rem)` · lh 1.7 |
| Quote "Chậm mà thương." | `--font-display` italic 500 · `clamp(1.4rem,1rem+2vw,2.1rem)` · `--color-soft` |
| Giá món | `--font-body` 600 · 1.05rem · `--color-accent-ink` · ls 0.01em |
| Caption ảnh | `--font-body` italic 400 · 0.9rem · `--color-muted-ink` |
| Footer meta | `--font-body` 400 · 0.95rem · lh 1.6 |

* `max-width` cho khối chữ: `62ch` (đọc ra đọc vào — dùng `ch` thay vì px).
* `text-wrap: balance` cho h1/h2; `text-wrap: pretty` cho body (bỏ qua nếu trình duyệt không hỗ trợ).
* Không dùng font-weight 800/900 — phá chất "giấy in cũ". Không all-caps cho câu dài.
* Số tiền giữ nguyên dấu chấm phân cách nghìn và `đ`: `29.000đ`.

---

## 4. Wireframe 5 section

Layout tổng: `header` sticky → `#hero` → `#story` → `#menu` → `#space` → `#visit` (contact + giờ mở cửa) → `footer`.

```
┌──────────────────────────────────────────────────────────┐
│ HEADER  64px (sticky, blur, shrink 64→56px khi cuộn)      │
│  [XUÂN THÌ] wordmark serif      Menu · Không gian · Ghé   │
│  ls .18em, 20px                 quán  + nút "Xem thực đơn"│
├──────────────────────────────────────────────────────────┤
│ HERO   min-height: 100svh (mobile: 88svh)                 │
│  nền: ảnh film-tonal full-bleed + gradient fade → bg      │
│  ┌────────────────────────────┐                            │
│  │ eyebrow: QUÁN CÀ PHÊ TRONG │  ← chữ `--color-primary`  │
│  │ CON NGÕ CŨ                 │    trên lớp scrim sáng     │
│  │ Nơi thanh xuân             │                            │
│  │ chậm lại một ly.           │  h1 trái, 2 dòng           │
│  │ lead 1–2 câu               │                            │
│  │ [Ghé Xuân Thì] [Xem thực   ]  ← btn accent / btn ghost  │
│  │  đơn]                      │                            │
│  └────────────────────────────┘                            │
│            ⌄ scroll cue (muted, bob 2s, anchor → #story)   │
└──────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────┐
│ STORY  bg: --color-bg   py: --sp-8                        │
│  ┌──────────────┬───────────────────────────────────┐     │
│  │  ảnh dọc 3:4 │ eyebrow  CÂU CHUYỆN CỦA QUÁN      │     │
│  │  + khung     │ h2       "Bà giữ lại chiếc bàn gỗ"│     │
│  │  viền 1px    │ p ×2     story ~150 từ            │     │
│  │  inset 12px  │ ──────── hairline                 │     │
│  │  (decoration│ quote    "Chậm mà thương."         │     │
│  │   --color-   │                                   │     │
│  │   soft)      │ link: Đọc thêm về không gian →    │     │
│  └──────────────┴───────────────────────────────────┘     │
│  cột 5/7 desktop · mobile: ảnh 60% width rồi tới chữ      │
└──────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────┐
│ MENU   bg: --color-bg-alt  py: --sp-8                     │
│  center: eyebrow THỰC ĐƠN / h2 "Tám món nhà làm"          │
│          note "Giá chưa gồm thuế…" muted-ink 0.9rem        │
│  ┌────────┬────────┬────────┬────────┐                    │
│  │ card 1 │ card 2 │ card 3 │ card 4 │  desktop 4×2        │
│  │ name   │        │        │        │  name serif 1.3rem  │
│  │ desc   │        │        │        │  desc 3 dòng 0.95   │
│  │ 29.000đ│        │        │        │  giá accent-ink     │
│  └────────┴────────┴────────┴────────┘                    │
│  tablet 2×4 (≤1023) · mobile 1 cột (≤767)                 │
│  [Xem toàn bộ thực đơn] ghost btn — center, margin-top 40  │
└──────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────┐
│ SPACE  bg: --color-bg  py: --sp-8                         │
│  eyebrow KHÔNG GIAN / h2 "Năm góc, một nhịp chậm"          │
│  ┌────────────────────────────────────────────────┐        │
│  │ horizontal scroller, scroll-snap, 5 card 340px │        │
│  │ [ảnh 4:5 + caption italic overlay dưới]        │        │
│  └────────────────────────────────────────────────┘        │
│  ≤767: giữ scroll-snap (không đổi sang grid) + progress    │
│  16px: hint "Kéo ngang →" muted-ink                        │
└──────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────┐
│ VISIT  bg: --color-primary (chữ --color-bg) py: --sp-8    │
│  ┌───────────────────────┬────────────────────────┐        │
│  │ eyebrow VÀO CỬA       │  GIỜ MỞ CỬA (table)    │        │
│  │ h2 "Ngõ 58 Nguyễn     │  T2–CN  07:00 – 23:00  │        │
│  │ Chí Thanh, Đống Đa"   │  Khung "chậm"          │        │
│  │ hotline / Zalo / IG   │  14:00 – 17:00         │        │
│  │ [Chỉ đường] [0243…]   │  → giờ "chậm" tô       │        │
│  │                       │    --color-accent      │        │
│  └───────────────────────┴────────────────────────┘        │
│  FOOTER  bg: --color-surface-dark, chữ muted-light 0.9rem  │
│   XUÂN THÌ · Chậm mà thương. · © 2026 · links nhỏ          │
└──────────────────────────────────────────────────────────┘
```

### 4.1 Chi tiết từng section

**HEADER** — `position: sticky; top: 0`. Nền `rgba(243,237,224,.85)` + `backdrop-filter: blur(10px)`, border-bottom `1px solid --color-border` (chỉ hiện sau khi cuộn 24px). Wordmark `--font-display` 600, `letter-spacing: .18em`, 20px, **không** đổi size khi cuộn. Nav link `--font-body` 500 0.9rem uppercase ls .1em `--color-primary`; hover `--color-accent-ink` + gạch chân `1px solid --color-accent` `underline-offset: 6px` (animate width 0→100%). Mobile ≤899px: hamburger 44×44px, panel dropdown full-width nền `--color-bg`, link 1.1rem không uppercase, mở/đóng có transition 240ms, đóng khi bấm link.

**HERO** — hai lớp: (a) ảnh `background-size: cover` + `filter: sepia(.18) saturate(.85) contrast(.92) brightness(1.02)`; (b) gradient `linear-gradient(180deg, rgba(243,237,224,.72), rgba(243,237,224,.94) 62%, var(--color-bg) 100%)` **chồng lên toàn bộ** để chữ nằm trên vùng sáng và fade về nền trang đúng ý @researcher. Vì vậy chữ hero dùng `--color-primary`/`--color-ink`, **không dùng chữ trắng**. Container `min-height: 100svh`, content `align-items: center`, text block `max-width: 24ch` cho h1. CTA: `.btn--primary { background: var(--color-accent); color: var(--color-ink); }` pad 16×34, radius `--radius-sm`, ls .04em, hover `translateY(-2px)` + `--shadow-2`; `.btn--ghost` nền trong suốt, border `1px solid var(--color-primary)`, chữ `--color-primary`, hover nền `--color-primary` chữ `--color-bg`. Thêm grain overlay toàn hero: `::after` với `background-image: radial-gradient(#2E2A24 .5px, transparent .5px)`, `background-size: 3px 3px`, `opacity: .06`, `pointer-events: none`.

**STORY** — cột 5/7 (ảnh/chữ) `gap: clamp(32px, 5vw, 72px)`. Ảnh: `aspect-ratio: 3/4; object-fit: cover`, frame bằng `::before` là đường viền `1px solid var(--color-soft)` offset `12px 12px` (decoration — `pointer-events: none`). Hairline divider `width: 64px; border-top: 1px solid var(--color-border-strong)`. Quote cuối section: `--font-display` italic `--color-soft`, `::before` dấu “ cong lớn `font-size: 2.4em` `--color-accent` opacity .5, đặt thụt trái.

**MENU** — card `background: var(--color-paper)`, `border: 1px solid var(--color-border)`, `border-radius: var(--radius-md)`, pad `--sp-4`, `--shadow-1`. Grid: `repeat(4,1fr)` → `repeat(2,1fr)` ≤1023 → `1fr` ≤767, `gap: --sp-3`. Cấu trúc card: `h3` tên món (có `29.000đ / 32.000đ` thì tên đứng riêng, giá xuống dòng cuối) → `p` desc `0.95rem` `--color-ink-soft` lh 1.6, `display: -webkit-box; -webkit-line-clamp: 3` → footer card `display:flex; justify-content: space-between; align-items: baseline` với giá `--color-accent-ink` 600 và dot-leader `border-bottom: 1px dotted var(--color-border-strong)` flex-grow (chất menu in). Hover: `translateY(-3px)`, `box-shadow: var(--shadow-2)`, `border-color: var(--color-secondary)`; transition `--dur-fast` `--ease-out`. Món 2 & 4 (đặc trưng) thêm badge `.is-signature` góc trên phải: `Chuyện nhà` 0.68rem uppercase ls .16em, nền `--color-soft` chữ `--color-paper`. **Không** dùng giá gạch/đỏ khuyến mãi — lệch tone.

**SPACE** — `display: flex; gap: --sp-3; overflow-x: auto; scroll-snap-type: x mandatory;` mỗi card `flex: 0 0 min(340px, 82vw); scroll-snap-align: center`. Ảnh `aspect-ratio: 4/5`, `filter: sepia(.22) saturate(.8)`, hover → `sepia(.06) saturate(1)` + scale 1.02 (`--dur-base`). Caption overlay dưới `linear-gradient(transparent, rgba(58,46,36,.86))`, chữ `--color-bg` italic 0.9rem pad `--sp-3`. Scrollbar ẩn (`scrollbar-width: none` + `::-webkit-scrollbar{display:none}`), thêm thanh progress mảnh `2px` `--color-accent` phía dưới track (JS cập nhật `--progress`, width = `calc(var(--progress)*100%)`). `scroll-padding-inline: var(--gutter)`.

**VISIT** — nền `--color-primary`, chữ `--color-bg`; grid 1.15fr/1fr gap `--sp-6`. Bảng giờ mở cửa: `border-collapse`, mỗi row `border-bottom: 1px solid rgba(243,237,224,.18)`, label `--font-body` 500 ls .12em uppercase `rgba(243,237,224,.72)`, giá trị `--font-display` 1.05rem. Row "Khung giờ chậm" highlight: `color: var(--color-accent)` + `::before` chấm 6px. Link/hotline `--color-bg` gạch chân `--color-accent`. CTA trên nền tối: `--color-accent` nền + `--color-ink` chữ (AA 5.85–6.34, đã kiểm). Không dùng ảnh bản đồ; để ô `--color-surface-dark` `aspect-ratio: 16/9` bo hôm `--radius-md` + chữ "Bản đồ" muted-light nếu coder muốn slot.

**FOOTER** — `--color-surface-dark`, py `--sp-5`, 3 cột (wordmark+slogan / địa chỉ / social), `flex-wrap`, mobile 1 cột. Dòng cuối `border-top: 1px solid rgba(243,237,224,.12)`, `© 2026 Xuân Thì Café · Chậm mà thương.` 0.85rem `#C9C0AE`.

---

## 5. Responsive

Mobile-first: viết CSS cho ≤360px rồi `min-width` override. Breakpoints: **480 / 768 / 1024 / 1280** (`@media (min-width: ...)`), nav hamburger ẩn ở 900.

| Section | Mobile (≤767) | Tablet (768–1023) | Desktop (≥1024) |
|---|---|---|---|
| Header | hamburger | wordmark + nav rút gọn (2 link) | đủ nav + CTA |
| Hero | h1 `clamp` tự co, 1 cột, btn full-width stack | 1 cột | text block 46% |
| Story | stack, ảnh 78% width, cân giữa | 5/7 | 5/7 |
| Menu | 1 cột | 2 cột | 4 cột ×2 hàng |
| Space | scroll-snap, card 82vw | scroll-snap, card 340px | scroll-snap |
| Visit | stack (giờ mở cửa xuống sau) | 1.15/1 | 1.15/1 |

Khác: `--container` padding dùng `--gutter`; mọi section `padding-block: var(--sp-7)` mobile / `var(--sp-8)` desktop; `img { max-width: 100%; display: block; }`; `html { -webkit-text-size-adjust: 100% }`; `overflow-x: hidden` trên `body` **chỉ** nếu không làm hỏng `position: sticky` của header (kiểm tra — nếu hỏng thì bỏ, sửa bằng `max-width: 100vw` đúng chỗ).

---

## 6. Motion & cuộn (spec cho `script.js`)

* `html { scroll-behavior: smooth; scroll-padding-top: 80px; }` — nền tảng cho anchor link, JS chỉ bổ sung fallback.
* **Fade-up khi cuộn:** phần tử đánh dấu `data-reveal`. CSS: `opacity: 0; transform: translateY(24px); transition: opacity var(--dur-slow) var(--ease-out), transform var(--dur-slow) var(--ease-out);` và `.is-visible { opacity: 1; transform: none; }`. JS dùng `IntersectionObserver({ threshold: 0.12, rootMargin: '0px 0px -8% 0px' })`, `unobserve` sau khi hiện. Sticker theo nhóm: container `data-reveal-group` đặt `transition-delay: calc(var(--i) * 70ms)` cho con (JS gán `--i`).
* Header thêm `.is-scrolled` khi `scrollY > 24` (border + backdrop, shrink 64→56px).
* Active nav link: cùng observer, `rootMargin: '-45% 0px -50% 0px'`, thêm `.is-active` (`color: var(--color-accent-ink)`).
* Scroll cue hero: `@keyframes bob { 50% { transform: translateY(8px) } }` 2.2s infinite ease-in-out; ẩn cue khi `scrollY > 120` (opacity transition).
* Space track: cập nhật `--progress` trên `scroll` (throttle bằng `requestAnimationFrame`).
* **`@media (prefers-reduced-motion: reduce)`** — bắt buộc: `scroll-behavior: auto`, mọi `transition-duration/animation-duration: .01ms`, `data-reveal` hiện ngay (`opacity: 1; transform: none`), tắt bob + grain animation.
* Cấm: parallax nặng, auto-play video, hiệu ứng 3D/tilt, typing effect. Chuyển động duy nhất được phép là fade/translate nhỏ — "chậm" là nội dung, không phải delay.

---

## 7. Accessibility & chất lượng chữ

* `:focus-visible { outline: 2px solid var(--color-accent-ink); outline-offset: 3px; border-radius: 2px; }` — không xóa outline.
* Skip link "→ Vào nội dung" `.visually-hidden` khi chưa focus, ở đầu `<body>`.
* Semantic: `header/nav/main/section/article/footer`, `h1` duy nhất, menu là `ul > li` (mỗi card 1 `li`), giờ mở cửa dùng `table` thật (không phải div), ảnh có `alt` mô tả đúng góc quán (VD: `alt="Quầy gỗ và dãy phin nhôm lau bóng ở sảnh pha chế"`). `aria-label` cho hamburger, `aria-expanded`/`aria-controls` cho nút mở menu.
* Contrast đã kiểm ở §2 — nếu coder đổi màu, phải kiểm lại ≥4.5:1 cho chữ thường, ≥3:1 cho ≥24px.
* Dòng tiếng Việt: `line-height` ≥1.6 cho body (dấu thanh cần khoảng), `word-break: normal`, không `hyphens: auto` cho tiếng Việt.

---

## 8. Ảnh & placeholder

Chưa có ảnh thật. Quy ước slot để sau này thay 1 dòng: `assets/hero.jpg`, `assets/story.jpg`, `assets/space-1..5.jpg`.
**Fallback bắt buộc** để page vẫn đẹp khi thiếu file: mỗi phần tử ảnh là `background` nhiều lớp —
`linear-gradient(160deg, rgba(91,70,54,.9), rgba(111,125,94,.75)), radial-gradient(circle at 30% 20%, rgba(217,164,65,.35), transparent 60%)` + `repeating-linear-gradient(0deg, rgba(46,42,36,.05) 0 1px, transparent 1px 4px)` để giả kết cấu giấy/film. Nếu coder dùng `<img>`, thêm `onerror` ẩn img để lộ lớp nền này (hoặc dùng `loading="lazy"` + `background-color: var(--color-bg-alt)`).

---

## 9. Checklist nghiệm thu (coder tự kiểm, fast-worker kiểm lại)

1. `:root` có đủ các biến ở §1, không hard-code hex ngoài `:root` — ngoại lệ duy nhất: rgba scrim/fade và các công thức gradient/grain đã ghi định danh trong spec.
2. Không chữ `--color-accent` nguyên bản trên nền be; giá tiền dùng `--color-accent-ink`.
3. Nút CTA: nền `--color-accent` + chữ `--color-ink` (không chữ trắng).
4. Body 17px/1.75, `max-width: 62ch`, tiếng Việt không vỡ dấu, không có từ sai chính tả.
5. Menu: 8 món, giá `29.000đ` format đúng, 4→2→1 cột, không tràn/cắt chữ ở 360px.
6. Space: kéo ngang có snap ở mọi breakpoint, không có scrollbar xấu, có hint trên mobile.
7. Anchor nav cuộn đúng, không bị header che (`scroll-padding-top`).
8. Có `prefers-reduced-motion` block.
9. Test 360 / 768 / 1024 / 1440: không scroll, không phần tử tràn, ảnh không méo.
10. Console không lỗi; `alt` đủ; focus-visible thấy được bằng mắt.

— Hết spec. @coder cứ bám §1–§6; cần đổi token nào thì ghi chú vào `review.md` để mình và @researcher xem lại tính nhất quán.

# Xuân Thì Café — Ảnh thật đã tải (bước @researcher)

> Tất cả ảnh **Pexels license — miễn phí thương mại, không bắt buộc credit** (ghi credit vẫn là practice tốt: `photos/<id>` trên pexels.com).
> File đã lưu tại `D:/HERMES/xuan-thi-FINAL/assets/`, đúng quy ước slot §8 của design-spec.md: `hero.jpg`, `story.jpg`, `space-1..5.jpg`.
> Mỗi ảnh đã được kiểm bằng vision: đúng tông film ấm / be-nâu vintage, không màu lạnh lạc palette. Ảnh ngang cho hero, dọc 4:5 cho card (đã crop sẵn `fit=crop` từ CDN).

## Bảng mapping → section / CSS hook

| File | Section | Hook trong code | Nguồn (Pexels id) | Mô tả & lý do chọn |
|---|---|---|---|---|
| `hero.jpg` | HERO | `.hero__bg` | 34153867 | Quầy cà phê gỗ sáng, đèn bàn tỏa nắng, máy espresso chrome, áp-phích retro — film grade amber sẵn. Vùng trái-trung có đèn + card trắng → chữ `--color-primary` trên scrim be ≥70% đạt tương phản ~5–7:1 (đã kiểm). Ngang 1920×1080. |
| `story.jpg` | STORY | `.story__frame` | 36047823 | **Đổi từ 6036281** vì nền tường xanh cyan lệch palette. Ảnh mới: phin nhôm nhỏ giọt xuống ly sữa đặc, khay gỗ mật ong, nền tối ấm — portrait, khớp 100% "bà pha cà phê bằng phin mỗi sáng". 900×1200. |
| `space-1.jpg` | SPACE 1 — Sảnh phin & quầy gỗ | `.space-card__img--1` | 29181081 | Ly cà phê sữa分层 trên bàn đá hoa kiểu cà phê cũ + sách + giàn lá sau lưng. Muted film; xanh lá chỉ là nền mờ — vẫn hợp. 4:5. |
| `space-2.jpg` | SPACE 2 — Góc bao cấp | `.space-card__img--2` | 25490244 | Cà phê đen trên đĩa vẽ chanh, kính old-book, đài cassette/radio gỗ — đúng "chiếc đài cassette" trong h2 Story. Ấm, nhạt màu rất "giấy in cũ". 4:5. |
| `space-3.jpg` | SPACE 3 — Sân sau giàn hoa giấy | `.space-card__img--3` | 11750726 | **Đổi từ 34070366** (lá cờ đỏ + cửa chớp teal quá chói). Ảnh mới: giàn hoa giấy magenta đổ tường vàng kem kiểu Hội An — khớp caption "giàn hoa giấy, tường vàng". Gợi ý micro-copy §: đổi "dưới tán phượng" → "dưới giàn hoa giấy" nếu muốn literal. 4:5. |
| `space-4.jpg` | SPACE 4 — Tầng thượng view phố cũ | `.space-card__img--4` | 14696908 | Mái ngói phố cổ giờ vàng từ sân thượng, người đứng silhouet — đúng "bốn giờ chiều, thành phố thở chậm". Harmoni tuyệt đối với palette. 4:5. |
| `space-5.jpg` | SPACE 5 — Tường ảnh ký ức | `.space-card__img--5` | 15765694 | Tường quán phủ ảnh đen-white khung gỗ + giá sách + đèn chụp vải — literally "tường ảnh". Ánh đèn amber, tương phản đen trắng trung tính, không clash. 4:5. |

## Ảnh dự phòng (đã tải, chưa dùng)

| File | id | Thay cho / khi nào dùng |
|---|---|---|
| `alt-hero-interior.jpg` | 33896075 | Hero dự phòng (interior ấm hơn, ít chi tiết hơn) |
| `alt-space-radio-books.jpg` | 28885295 | Space 2 dự phòng (radio + sách nắng xiên; text sách tiếng Thổ — dùng nếu muốn "vibes" hơn "authentic") |
| `alt-space-rooftop-sunset.jpg` | 31767815 | Space 4 dự phòng (rooftop hoàng hôn có đèn串) |
| `alt-phin-night.jpg` | 30325952 | Thêm nếu sau này cần ảnh menu/visit tông đêm |

## Cách @coder gắn ảnh (giữ fallback §8)

CSS hiện tại dùng div `role="img"` + background gradient placeholder — giữ nguyên lớp gradient, chỉ **thêm lớp ảnh underneath**:

```css
.hero__bg{
  background-image:
    /* scrim gradient theo spec §4 HERO */
    linear-gradient(180deg, rgba(243,237,224,.72), rgba(243,237,224,.94) 62%, var(--color-bg) 100%),
    url("assets/hero.jpg");
  background-size: cover, cover;
  background-position: center, center 35%;
  filter: none; /* áp sepia lên lớp ảnh bằng cách khác nếu cần: đổi filter chỉ ảnh -> tách layer */
}
```

- Với `.story__frame` và `.space-card__img--n`: `background-image: url(assets/story.jpg)` đặt **dưới** gradient fallback cũ (liệt kê gradient sau url trong chuỗi `background-image`? Không — lớp đầu là trên cùng: đặt **url trước, gradient sau** nếu muốn ảnh hiện; gradient overlay nằm trên). Công thức: `background-image: <overlay nếu có>, url(assets/x.jpg), <fallback gradients>;` — fallback tự ẩn khi url tải được, không cần JS/onerror.
- Giữ `filter: sepia(.18) saturate(.85)` như spec (§4 HERO) trên `.hero__bg` — ảnh đã ấm sẵn, sepia thêm ≤.18 là đủ "film", đừng tăng.
- `alt`/`aria-label` hiện có trong index.html **đã mô tả đúng ảnh mới** (đã đối chiếu từng card); riêng card 3 nếu đổi chữ trong aria-label ("tán phượng" → "giàn hoa giấy, tường vàng") thì càng khớp hơn.
- Ảnh đã crop đúng tỉ lệ khung (hero 16:9 ngang, còn lại 4:5 dọc) → `object-fit/cover` không cắt mất chủ thể.

— @researcher. Nguồn gốc: search Exa/Google trên site:pexels.com, kiểm tone-by-vision từng file, swap 2 file lỗi palette (story, space-3). URL page đầy đủ: `https://www.pexels.com/photo/<slug>-<id>/` tra theo id ở bảng trên.

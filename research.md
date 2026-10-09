# Xuân Thì Café — Tư liệu nghiên cứu (Bước 1)

> Deliverable của @researcher cho @designer-. Phong cách: hoài niệm — nhẹ nhàng — thanh xuân.
> Tham khảo tinh thần các mô hình thực tế: Cộng Cà Phê (bao cấp Hà Nội), Cafe Giảng (cà phê trứng), khuynh hướng vintage "tường vàng, gạch cũ, cửa gỗ" trong thiết kế quán cà phê Việt.

---

## 1. Định hướng concept

**Xuân Thì** = "tuổi trẻ" — một quán cà phê nhỏ trong con ngõ cũ, nơi thời gian như chậm lại.
Câu chuyện không bán sự cổ kính thuần túy, mà bán **ký ức tuổi trẻ trong một không gian cũ**: mảng màu bao cấp (gạch hoa, đèn trần chao nhôm, ghế gỗ gấp, báo cũ, đài cassette) hòa với chất nên thơ của tuổi học trò (phượng, nắng vàng, trang vở, thư tay).

- **Đối tượng:** 18–35 tuổi, thích không gian "chậm", check-in mang tính hoài niệm, làm việc nhẹ / đọc sách / gặp bạn cũ.
- **Từ khóa cảm xúc:** dịu dàng, cũ mà ấm, chậm, nắng, ký ức, thanh xuân.
- **Giọng văn thương hiệu (tone of voice):** thủ thỉ, ngôi "ta — mình", hình ảnh cụ thể (nắng, gạch, tiếng phin nhỏ giọt), tránh sáo rỗng.

## 2. Bảng màu chủ đạo (đề xuất cho CSS variables)

Hướng: nâu trầm + be giấy cũ + xanh rêu + điểm vàng nắng. 5 màu chính, 2 màu trung tính phụ.

| Vai trò | Tên màu | Hex | Gợi ý dùng |
|---|---|---|---|
| `--color-bg` | Be giấy cũ | `#F3EDE0` | Nền trang, card sáng |
| `--color-primary` | Nâu cà phê trầm | `#5B4636` | Heading, footer, khung |
| `--color-secondary` | Xanh rêu cũ | `#6F7D5E` | Nhãn section, hover, phân cách |
| `--color-accent` | Vàng nắng | `#D9A441` | Nút CTA, giá món, điểm nhấn nhỏ |
| `--color-soft` | Gạch ngói phai | `#B96C50` | Trang trí, hover ảnh, quote |
| `--color-ink` | Đen ngả nâu | `#2E2A24` | Body text (tránh #000) |
| `--color-muted` | Xám tro ấm | `#8C8577` | Text phụ, caption |

Quy tắc tỷ lệ gợi ý: 60% be — 25% nâu/rêu — 10% vàng nắng — 5% gạch phai. Không dùng quá 3 màu trong một khu vực.

## 3. Menu đặc trưng (8 món) — giá theo mặt bằng quán cà phê Hà Nội/TP.HCM phân khúc dễ chịu (25.000–50.000đ)

| # | Món | Giá | Mô tả ngắn (dùng cho card menu) |
|---|---|---|---|
| 1 | **Cà phê phin truyền thống** (đen / sữa đá) | 29.000đ / 32.000đ | Robusta Đà Lạt rang vừa, nhỏ giọt chậm trên phin nhôm — vị đắng thật, hậu ngọt lâu. |
| 2 | **Cà phê trứng Xuân Thì** | 45.000đ | Bông lòng đỏ trứng ta đánh cùng sữa đặc, phủ trên tách cà phê nóng — "tiramisu dạng uống" của Hà thành. |
| 3 | **Bạc xỉu** | 35.000đ | Nhiều sữa, ít cà phê — ly nước của những buổi sáng chưa quen đắng. |
| 4 | **Cà phê cốt dừa** | 42.000đ | Cà phê đánh cùng cốt dừa béo, đá mịn, rắc topping dừa sấy — mát và thơm như gió lồng phố cũ. |
| 5 | **Trà sen tách nóng** | 38.000đ | Sen Hồ Tây sấy khô, hãm trong ấm đất — hương thanh, vị dịu, uống chậm mà thấm. |
| 6 | **Nước mía tắc** | 30.000đ | Mía ép tại chỗ, vài quả tắc, lát gừng — thức uống cổng trường ngày cũ. |
| 7 | **Bánh flan trứng muối** | 35.000đ | Flan mềm tan, lớp caramel đắng nhẹ, nhân trứng muối mặn bùi — ăn kèm cà phê đen là hợp vị. |
| 8 | **Bông lan trứng muối "giờ ra chơi"** | 38.000đ | Bánh bông lan nóng, ruốc, trứng muối — gợi nhắc hộp bánh mẹ chuẩn bị trong cặp sách. |

Ghi chú typography cho menu: giá viết `29.000đ` (dấu chấm phân cách nghìn), giữ nguyên tên món tiếng Việt có dấu, không phiên âm tiếng Anh.

## 4. Slogan (chọn 1 chính, còn lại làm phương án dự phòng)

- **Chính:** "Xuân Thì — nơi thanh xuân chậm lại một ly."
- Dự phòng 1: "Cà phê của những ngày cũ, ngồi lại cùng người quen."
- Dự phòng 2: "Giữ giùm bạn một góc xuân thì."
- Ngắn cho logo/footer: "Chậm mà thương."

## 5. Câu chuyện thương hiệu (~150 từ — dùng cho section Story)

> Xuân Thì bắt đầu từ một căn tập thể cũ, nơi bà giữ lại chiếc bàn gỗ, chiếc đài cassette và thói quen pha cà phê bằng phin mỗi sáng sáu giờ. Chúng tôi mở quán không phải để dựng lại một thời đã qua, mà để giữ lại cảm giác của những ngày tháng đó: tiếng nước sôi rót chậm, nắng xiên qua khung cửa gỗ, trang thư viết tay chưa gửi, và người bạn cũ tự nhiên tìm về nhau khi cùng ngồi xuống một chiếc ghế thấp.
>
> Ở đây, thời gian không gấp. Cà phê nhỏ giọt từng nhịp, bánh còn nóng hổi — và tuổi trẻ, dù bạn đang hai mươi hay đã ngoài ba mươi — đều được phép ngồi lại, chậm lại, thương lại một chút.
>
> Xuân Thì. Nơi thanh xuân chậm lại một ly.

## 6. Mô tả không gian quán (dùng cho section "Không gian" + gợi ý ảnh)

**5 góc đặc trưng — mỗi góc 1 card ảnh + 1 caption ngắn:**

1. **Sảnh phin & quầy gỗ** — quầy gỗ véc-ni cũ, dãy phin nhôm lau bóng, biển hiệu viết tay. *Caption: "Nơi mọi ly cà phê bắt đầu bằng một giọt đầu tiên."*
2. **Góc bao cấp** — ghế gỗ gấp, đệm bố, bàn trải khăn kẻ ô, đài cassette và báo cũ. *Caption: "Ngồi xuống là thấy mình nhỏ lại, hồi mười tám."*
3. **Sân sau dưới tán phượng** — vài bộ bàn ghế xi măng, giàn hoa giấy, bức tường vàng bong tróc có chủ đích. *Caption: "Nắng lọt qua lá, vàng như một trang vở cũ."*
4. **Tầng thượng view phố cũ** — mái ngói, ăng-ten truyền hình, tầm nhìn hoàng hôn. *Caption: "Lên đây lúc bốn giờ chiều, để thấy thành phố thở chậm."*
5. **Tường ảnh ký ức** — ảnh đen trắng xin từ khách, bưu thiếp viết tay ghim trên bảng ghim mềm. *Caption: "Thanh xuân của người khác, nhìn cũng thấy thương."*

**Chất liệu/ánh sáng chủ đạo (gợi ý cho designer):** gỗ véc-ni nâu, gạch bông hoa nhỏ, tre, giấy kraft; ánh sáng vàng 2700K, đèn chao nhôm thả bàn; tổng thể nền — tương phản thấp, ảnh xử lý film grain nhẹ, vignette mờ.

## 7. Thông tin liên hệ & giờ mở cửa (dữ liệu mẫu cho section Contact)

- **Địa chỉ:** Số 12, ngõ 58 Nguyễn Chí Thanh, Đống Đa, Hà Nội *(mẫu — khách hàng có thể thay)*
- **Giờ mở cửa:** Thứ 2–CN: 07:00 – 23:00 · **Khung giờ "chậm":** 14:00 – 17:00 (nhạc acoustic/lo-fi, giảm đèn)
- **Hotline / đặt bàn:** 0243.xxx.xxx · Zalo/Instagram: @xuanthi.cafe
- **Microcopy CTA gợi ý:** "Ghé Xuân Thì" / "Xem thực đơn" / "Giữ một chỗ bên cửa sổ"

## 8. Học thuyết trình bày cho designer & coder

- Hero: slogan chính + 1 ảnh film-tonal fullscreen mờ dần về `--color-bg`, nút CTA `--color-accent`.
- Story: 2 cột (ảnh cũ / chữ), serif cổ điển cho heading, dòng quote "Chậm mà thương." màu `--color-soft`.
- Menu: card 8 món theo lưới 4×2 desktop / 1 cột mobile, giá in đậm `--color-accent`.
- Không gian: gallery 5 góc (masonry hoặc ngang có scroll-snap), caption italic.
- Contact: nền `--color-primary`, chữ `--color-bg`, giờ mở cửa dạng bảng nhỏ gọn.

— Hết tư liệu. @designer- nhận bàn giao, cần gì thêm cứ gọi lại mình.

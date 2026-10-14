# CultureTrail — Trang chủ

Bài kiểm tra giữa kỳ · Học phần Phát triển ứng dụng Web cơ bản – CSE122

## Tên đề tài
**CultureTrail — Khám phá văn hóa theo câu chuyện**
Nền tảng giúp người dùng khám phá văn hóa địa phương Việt Nam (làng nghề,
lễ hội, ẩm thực, di sản) thông qua câu chuyện do chính người trong cuộc kể,
và tự tạo hành trình tham quan cho riêng mình.

## Tên trang đã thực hiện
**Trang chủ** (`index.html`)

## Mục đích của trang
Là trang mở đầu của toàn hệ thống — giới thiệu khái niệm sản phẩm, dẫn
người dùng tới 3 luồng chính: đọc câu chuyện, xem bộ sưu tập theo chủ đề,
và tạo hành trình khám phá. Trang hướng tới người dùng phổ thông lần đầu
ghé sản phẩm (đối tượng "Người khám phá"), đồng thời cho thấy trang có
hỗ trợ nhiều vai trò khác (Nghệ nhân, Biên tập, Quản trị) qua bộ chọn vai
trò ở góc trên bên phải.

## Các chức năng chính
- **Modal xem trước câu chuyện** — bấm "Đọc câu chuyện →" trên mỗi thẻ để
  xem tóm tắt ngay trên trang, không cần rời khỏi trang chủ.
- **Dropdown chọn vai trò** — bấm "Người khám phá ▾" ở góc trên bên phải để
  chọn giữa 4 vai trò: Người khám phá / Nghệ nhân / Biên tập / Quản trị;
  nhãn hiển thị cập nhật theo lựa chọn.
- **Menu mobile (toggle)** — khi thu nhỏ màn hình, menu điều hướng được
  thay bằng nút ☰, bấm vào để mở/đóng danh sách menu dạng cột.
- **Hiệu ứng hover** — thẻ câu chuyện nhấc lên kèm bóng đổ khi rê chuột
  qua, chỉ có ý nghĩa với thao tác chuột trên máy tính.

## Công nghệ sử dụng
- HTML5 (semantic: `header`, `nav`, `main`, `section`, `article`, `footer`)
- CSS3 thuần — Flexbox, CSS Grid, biến CSS (`:root` custom properties),
  Media Query cho responsive. Không dùng framework CSS (không Bootstrap).
- JavaScript thuần (vanilla JS) — không dùng framework/thư viện nào.
  `querySelector`, `classList`, `dataset`, sự kiện `click`.

## Cấu trúc thư mục
```
project/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
└── README.md
```

## Link Figma
https://www.figma.com/design/WdIYXfLxl9EuLsQL4P2Nmv/CultureTrail?t=KB4BusjVNkw35gup-0

## Link Video
`→ Dán link video trình bày (khoảng 3 phút) vào đây`

## Link GitHub
https://github.com/meaningless2309/BTGK/tree/main

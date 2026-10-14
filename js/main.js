// CultureTrail — Trang chủ
// Chức năng tương tác: bấm "Đọc câu chuyện" để mở Modal xem trước nội dung,
// không cần rời khỏi trang chủ. Chỉ dành cho máy tính (hiệu ứng theo chuột).

const modal = document.querySelector('#storyModal');
const modalTitle = document.querySelector('#modalTitle');
const modalTopic = document.querySelector('#modalTopic');
const modalText = document.querySelector('#modalText');
const closeButton = document.querySelector('.modal-close');

// Mỗi nút "Đọc câu chuyện" mang sẵn dữ liệu riêng (data-title, data-topic, data-text).
// Khi bấm, đọc dữ liệu đó và đổ vào Modal rồi hiện Modal lên.
const storyButtons = document.querySelectorAll('.story-open');

storyButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    modalTitle.textContent = button.dataset.title;
    modalTopic.textContent = button.dataset.topic;
    modalText.textContent = button.dataset.text;
    modal.classList.add('open');
  });
});

// Đóng modal bằng nút ✕
closeButton.addEventListener('click', function () {
  modal.classList.remove('open');
});

// Đóng modal khi bấm ra ngoài vùng nội dung (bấm trúng lớp nền mờ)
modal.addEventListener('click', function (event) {
  if (event.target === modal) {
    modal.classList.remove('open');
  }
});

// ---------------------------------------------------------------
// Chức năng tương tác thứ 2: mở/đóng menu khi màn hình nhỏ (mobile)
// ---------------------------------------------------------------
const menuButton = document.querySelector('.nav-toggle');
const mainMenu = document.querySelector('.main-nav');
const accountMenu = document.querySelector('.account-nav');

menuButton.addEventListener('click', function () {
  mainMenu.classList.toggle('open');
  accountMenu.classList.toggle('open');

  if (mainMenu.classList.contains('open')) {
    menuButton.textContent = '✕';
  } else {
    menuButton.textContent = '☰';
  }
});

// ---------------------------------------------------------------
// Chức năng tương tác thứ 3: chọn vai trò hiển thị ở góc trên bên
// phải (Người khám phá / Nghệ nhân / Biên tập / Quản trị).
// ---------------------------------------------------------------
const roleTrigger = document.querySelector('#roleTrigger');
const roleMenu = document.querySelector('#roleMenu');
const roleOptions = document.querySelectorAll('#roleMenu button');

// Bấm nút "Người khám phá ▾" thì mở/đóng danh sách vai trò.
roleTrigger.addEventListener('click', function (event) {
  event.stopPropagation(); // không để sự kiện lan ra document, đóng ngay lập tức
  const isOpen = roleMenu.classList.toggle('open');
  roleTrigger.setAttribute('aria-expanded', String(isOpen));
});

// Bấm một vai trò trong danh sách: đổi chữ trên nút, đánh dấu lựa chọn
// hiện tại, rồi đóng danh sách lại.
roleOptions.forEach(function (option) {
  option.addEventListener('click', function () {
    roleTrigger.textContent = option.dataset.role + ' ▾';

    roleOptions.forEach(function (o) { o.classList.remove('active'); });
    option.classList.add('active');

    roleMenu.classList.remove('open');
    roleTrigger.setAttribute('aria-expanded', 'false');
  });
});

// Bấm ra ngoài vùng dropdown thì tự đóng lại.
document.addEventListener('click', function () {
  roleMenu.classList.remove('open');
  roleTrigger.setAttribute('aria-expanded', 'false');
});

// ---------------------------------------------------------------
// Chức năng tương tác thứ 4: nút "Lưu ♡" trên từng thẻ câu chuyện —
// bấm để chuyển giữa trạng thái "chưa lưu" và "đã lưu".
// ---------------------------------------------------------------
const saveButtons = document.querySelectorAll('.save-btn');

saveButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    const isSaved = button.classList.toggle('saved');
    button.textContent = isSaved ? 'Đã lưu ♥' : 'Lưu ♡';
  });
});

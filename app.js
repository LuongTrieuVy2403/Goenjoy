// Lấy tất cả các link trên thanh điều hướng
var navLinks = document.querySelectorAll('nav ul li a');
// Hàm cuộn mượt tới section tương ứng
var smoothScroll = function (event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định (chuyển hướng ngay lập tức)
    // Lấy ID của phần mà link điều hướng tới
    var targetId = event.target.getAttribute('href');
    var targetSection = document.querySelector(targetId);
    // Cuộn mượt đến section đó
    if (targetSection) {
        window.scrollTo({
            top: targetSection.getBoundingClientRect().top + window.scrollY - 50,
            behavior: 'smooth'
        });
    }
};
// Gắn sự kiện click cho tất cả các link
navLinks.forEach(function (link) {
    link.addEventListener('click', smoothScroll);
});

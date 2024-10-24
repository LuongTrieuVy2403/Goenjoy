// Lấy tất cả các link trên thanh điều hướng
const navLinks = document.querySelectorAll('nav ul li a');

// Hàm cuộn mượt tới section tương ứng
const smoothScroll = (event: Event) => {
    event.preventDefault(); // Ngăn chặn hành động mặc định (chuyển hướng ngay lập tức)
    
    // Lấy ID của phần mà link điều hướng tới
    const targetId = (event.target as HTMLAnchorElement).getAttribute('href');
    const targetSection = document.querySelector(targetId);

    // Cuộn mượt đến section đó
    if (targetSection) {
        window.scrollTo({
            top: targetSection.getBoundingClientRect().top + window.scrollY - 50, // -50 để tránh thanh điều hướng che khuất
            behavior: 'smooth'
        });
    }
};

// Gắn sự kiện click cho tất cả các link
navLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
});
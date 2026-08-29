/** فتح/إغلاق القوائم المنسدلة (mega-menu) بالكيبورد لإمكانية وصول أفضل */
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.main-menu li.group').forEach((item) => {
        const link = item.querySelector(':scope > a');
        if (!link) return;

        link.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                const submenu = item.querySelector('.mega-menu');
                if (submenu) {
                    e.preventDefault();
                    submenu.classList.toggle('!visible');
                    submenu.classList.toggle('!opacity-100');
                }
            }
        });
    });
});

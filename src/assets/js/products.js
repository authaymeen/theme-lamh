/** صفحة قائمة المنتجات: فرز، فتح/إغلاق الفلاتر على الجوال */
document.addEventListener('DOMContentLoaded', () => {
    const sortSelect = document.querySelector('[data-component="sort-select"]');
    sortSelect?.addEventListener('change', () => {
        const url = new URL(window.location.href);
        url.searchParams.set('sort_by', sortSelect.value);
        window.location.href = url.toString();
    });

    const filtersToggle = document.querySelector('.filters-toggle');
    const filtersSidebar = document.querySelector('.filters-sidebar');
    filtersToggle?.addEventListener('click', () => {
        filtersSidebar?.classList.toggle('hidden');
        filtersSidebar?.classList.toggle('block');
    });

    document.querySelector('[data-action="reset-filters"]')?.addEventListener('click', () => {
        window.location.href = window.location.pathname;
    });
});

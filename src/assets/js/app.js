/**
 * لمح (Lamh) — app.js
 * سلوكيات عامة مشتركة في كل صفحات الثيم: القائمة الجانبية للجوال، البحث السريع،
 * تبديل المفضلة، وربط أحداث سلة العامة (إشعارات نجاح/خطأ).
 */

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initQuickSearch();
    initWishlistToggles();
    initGlobalSallaEvents();
});

function initMobileMenu() {
    const toggleBtn = document.querySelector('[data-toggle="mobile-menu"]');
    const menu = document.getElementById('mobile-menu');
    if (!toggleBtn || !menu) return;

    toggleBtn.addEventListener('click', () => {
        menu.hidden = !menu.hidden;
        document.body.classList.toggle('overflow-hidden', !menu.hidden);
    });
}

function initQuickSearch() {
    const triggers = document.querySelectorAll('[data-open="quick-search"]');
    const searchEl = document.querySelector('salla-quick-search');
    if (!searchEl) return;

    triggers.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (typeof searchEl.open === 'function') searchEl.open();
            else searchEl.setAttribute('open', 'true');
        });
    });
}

function initWishlistToggles() {
    document.body.addEventListener('click', (e) => {
        const btn = e.target.closest('.wishlist-toggle');
        if (!btn) return;

        const productId = btn.dataset.productId;
        if (!productId || typeof salla === 'undefined') return;

        const isActive = btn.classList.contains('is-active');
        const action = isActive ? salla.wishlist.remove(productId) : salla.wishlist.add(productId);

        action
            .then(() => btn.classList.toggle('is-active'))
            .catch(() => salla.notify.error('تعذّر تحديث المفضلة، حاول مرة أخرى'));
    });
}

function initGlobalSallaEvents() {
    if (typeof salla === 'undefined') return;

    salla.event.on('cart::added', (response) => {
        salla.notify.success('تمت إضافة المنتج للسلة بنجاح');
        document.querySelectorAll('salla-cart-summary[count-only]').forEach((el) => {
            if (response?.data?.cart?.items_count !== undefined) {
                el.textContent = response.data.cart.items_count;
            }
        });
    });

    salla.event.on('cart::error', (error) => {
        salla.notify.error(error?.message || 'حدث خطأ أثناء الإضافة للسلة');
    });
}

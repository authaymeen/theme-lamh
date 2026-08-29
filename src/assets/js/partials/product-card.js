/** زر الإضافة السريعة للسلة من داخل شبكة المنتجات (بدون خيارات) */
document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (e) => {
        const btn = e.target.closest('.quick-add-btn');
        if (!btn || typeof salla === 'undefined') return;

        const productId = btn.dataset.productId;
        btn.disabled = true;

        salla.cart
            .addItem({ id: productId, quantity: 1 })
            .then(() => {})
            .catch((error) => salla.notify.error(error?.message || 'تعذّرت إضافة المنتج'))
            .finally(() => { btn.disabled = false; });
    });
});

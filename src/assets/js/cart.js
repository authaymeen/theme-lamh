/** صفحة السلة: تحديث الكمية، إزالة عنصر، تطبيق كوبون — عبر Salla JS SDK */
document.addEventListener('DOMContentLoaded', () => {
    if (typeof salla === 'undefined') return;

    document.body.addEventListener('click', (e) => {
        const increaseBtn = e.target.closest('[data-action="increase"][data-item-id]');
        const decreaseBtn = e.target.closest('[data-action="decrease"][data-item-id]');
        const removeBtn = e.target.closest('[data-action="remove-item"]');

        if (increaseBtn) return updateQuantity(increaseBtn.dataset.itemId, 1);
        if (decreaseBtn) return updateQuantity(decreaseBtn.dataset.itemId, -1);
        if (removeBtn) return removeItem(removeBtn.dataset.itemId);
    });

    document.querySelector('[data-component="coupon-form"]')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const code = new FormData(e.target).get('coupon');
        if (!code) return;

        salla.cart
            .applyCoupon(code)
            .then(() => window.location.reload())
            .catch((error) => salla.notify.error(error?.message || 'كود الخصم غير صالح'));
    });
});

function updateQuantity(itemId, delta) {
    const row = document.querySelector(`.cart-item[data-item-id="${itemId}"]`);
    const countEl = row?.querySelector('.quantity-input span');
    if (!countEl) return;

    const newQty = Math.max(1, Number(countEl.textContent) + delta);
    salla.cart
        .updateItem(itemId, { quantity: newQty })
        .then(() => window.location.reload())
        .catch((error) => salla.notify.error(error?.message || 'تعذّر تحديث الكمية'));
}

function removeItem(itemId) {
    salla.cart
        .deleteItem(itemId)
        .then(() => window.location.reload())
        .catch((error) => salla.notify.error(error?.message || 'تعذّرت إزالة المنتج'));
}

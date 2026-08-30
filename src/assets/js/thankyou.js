/** يمكن استخدامه لإطلاق أحداث تتبّع تحويل (Conversion) بعد إتمام الطلب بنجاح */
document.addEventListener('DOMContentLoaded', () => {
    if (typeof salla === 'undefined') return;
    // مثال: salla.event.dispatch('order::completed', { order_id: ... });
});

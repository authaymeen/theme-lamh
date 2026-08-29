/** توست بسيط يظهر أعلى الصفحة بعد نجاح الإضافة للسلة (اختياري فوق إشعار salla.notify) */
document.addEventListener('DOMContentLoaded', () => {
    if (typeof salla === 'undefined') return;

    salla.event.on('cart::added', () => {
        const toast = document.createElement('div');
        toast.className =
            'fixed top-4 inset-x-0 mx-auto w-fit bg-neutral-900 text-white text-sm rounded-pill px-5 py-2.5 z-[100] shadow-card';
        toast.textContent = 'أُضيف المنتج إلى سلتك';
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2500);
    });
});

/** صفحة المنتج المنفرد: معرض الصور، اختيار الخيارات، الكمية، الإضافة للسلة، قراءة المزيد */
document.addEventListener('DOMContentLoaded', () => {
    initGallery();
    initReadMore();
    initQuantity();
    initAddToCart();
});

function initGallery() {
    const mainImage = document.getElementById('main-product-image');
    if (!mainImage) return;

    document.querySelectorAll('.thumb-item').forEach((thumb) => {
        thumb.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.thumb-item').forEach((t) => t.classList.remove('border-accent'));
            thumb.classList.add('border-accent');
            mainImage.src = thumb.dataset.mainImage;
        });
    });
}

function initReadMore() {
    const desc = document.querySelector('[data-component="read-more"]');
    if (!desc) return;

    desc.addEventListener('click', () => desc.classList.toggle('is-expanded'));
}

function initQuantity() {
    document.querySelectorAll('.quantity-input').forEach((wrapper) => {
        const input = wrapper.querySelector('[data-quantity-input]');
        if (!input) return;

        wrapper.querySelector('[data-action="increase"]')?.addEventListener('click', () => {
            input.value = Number(input.value || 1) + 1;
        });
        wrapper.querySelector('[data-action="decrease"]')?.addEventListener('click', () => {
            input.value = Math.max(1, Number(input.value || 1) - 1);
        });
    });
}

function initAddToCart() {
    document.querySelectorAll('.add-to-cart-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            if (typeof salla === 'undefined') return;

            const productId = btn.dataset.productId;
            const quantity = Number(document.querySelector('[data-quantity-input]')?.value || 1);
            const optionsForm = document.querySelector('[data-component="product-options"]');
            const options = {};

            if (optionsForm) {
                new FormData(optionsForm).forEach((value, key) => {
                    const match = key.match(/options\[(.+)\]/);
                    if (match) options[match[1]] = value;
                });
            }

            btn.disabled = true;
            salla.cart
                .addItem({ id: productId, quantity, options })
                .catch((error) => salla.notify.error(error?.message || 'تعذّرت إضافة المنتج للسلة'))
                .finally(() => { btn.disabled = false; });
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const menuIcon = document.getElementById('mobile-menu');
    const menu = document.getElementById('menu');

    if (menuIcon && menu) {
        menuIcon.addEventListener('click', () => {
            menu.classList.toggle('active');
            menuIcon.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const menuLinks = document.querySelectorAll('.menu a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                menuIcon.classList.remove('active');
            });
        });
    }

    // Cart and Like functionality
    let cartCount = 0;
    let likeCount = 0;

    const updateCartCount = () => {
        const cartCountElement = document.getElementById('cart-count');
        if (cartCountElement) {
            cartCountElement.innerText = cartCount;
        }
    };

    const updateLikeCount = () => {
        const likeCountElement = document.getElementById('like-count');
        if (likeCountElement) {
            likeCountElement.innerText = likeCount;
        }
    };

    window.addToCart = (event) => {
        event.preventDefault();
        cartCount++;
        updateCartCount();
        alert('Product has been added to cart');
    };

    window.likeProduct = (event) => {
        event.preventDefault();
        const likeBtn = event.target;
        if (likeBtn.classList.contains('fas')) {
            likeBtn.classList.replace('fas', 'far');
            likeCount--;
        } else {
            likeBtn.classList.replace('far', 'fas');
            likeCount++;
        }
        updateLikeCount();
        alert('Product has been liked');
    };
});

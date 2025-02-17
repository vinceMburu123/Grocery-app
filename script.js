document.addEventListener('DOMContentLoaded', function() {
    let cartCount = 0;
    let likeCount = 0;

    const updateCartCount = () => {
        document.getElementById('cart-count').innerText = cartCount;
    };

    const updateLikeCount = () => {
        document.getElementById('like-count').innerText = likeCount;
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


    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');

    if (menuIcon && menu) {
        menuIcon.addEventListener('click', () => {
            menu.classList.toggle('active');
        });

        const menuLinks = document.querySelectorAll('.menu a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
            });
        });
    }
});
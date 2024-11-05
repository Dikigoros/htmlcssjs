// Automatic scrolling for the reviews carousel
const carousel = document.querySelector('.reviews-carousel');
let isScrolling;

function startAutoScroll() {
    isScrolling = setInterval(() => {
        carousel.scrollBy({ left: 300, behavior: 'smooth' });
        if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
            carousel.scrollLeft = 0; // Loop back to the beginning
        }
    }, 3000); // Scroll every 3 seconds
}

function stopAutoScroll() {
    clearInterval(isScrolling);
}

// Start auto-scrolling and pause on mouse hover
carousel.addEventListener('mouseenter', stopAutoScroll);
carousel.addEventListener('mouseleave', startAutoScroll);

// Initialize auto-scrolling
startAutoScroll();

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
const slideContainer = document.querySelector('.carousel-slides');

// Function to move the carousel based on the direction (left or right)
function moveCarousel(direction) {
    // Update the current slide index based on direction
    currentSlide += direction;

    // Wrap around if reaching the bounds
    if (currentSlide >= totalSlides / 2) {
        currentSlide = 0; // Go back to the first set of original slides
        // Disable transition for instant jump
        slideContainer.style.transition = 'none';
        slideContainer.style.transform = `translateX(0%)`; // Reset position
        setTimeout(() => {
            slideContainer.style.transition = 'transform 0.5s ease'; // Re-enable transition
        }, 20);
    } else if (currentSlide < 0) {
        currentSlide = totalSlides / 2 - 1; // Go to the last slide of the original set
        // Disable transition for instant jump
        slideContainer.style.transition = 'none'; // Disable transition for instant jump
        slideContainer.style.transform = `translateX(${-(totalSlides / 2 - 1) * 100}%)`; // Reset position
        setTimeout(() => {
            slideContainer.style.transition = 'transform 0.5s ease'; // Re-enable transition
        }, 20);
    }

    // Calculate the offset to slide the carousel
    const offset = -currentSlide * 100;

    // Apply the transform style to the carousel to slide it
    slideContainer.style.transform = `translateX(${offset}%)`;
}

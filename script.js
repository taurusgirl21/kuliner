const images = document.querySelectorAll('.image');
const popup = document.querySelector('.popup');
const popupImage = document.querySelector('.popup-image');
const closeBtn = document.querySelector('.close');

let currentImageIndex = 0;

// Open popup and display clicked image
function openPopup(index) {
    popup.style.display = 'flex';
    popupImage.src = images[index].src;
    currentImageIndex = index;
}

// Close popup
function closePopup() {
    popup.style.display = 'none';
}

// Navigate through images
function changeImage(direction) {
    currentImageIndex += direction;
    
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    
    popupImage.src = images[currentImageIndex].src;
}


// Attach click event listeners to images
images.forEach((image, index) => {
    image.addEventListener('click', () => openPopup(index));
});

// Attach click event listener to close button
closeBtn.addEventListener('click', closePopup);

// Attach keyboard event listener for navigation
document.addEventListener('keydown', (event) => {
    if (popup.style.display === 'flex') {
        if (event.key === 'ArrowLeft') {
            changeImage(-1);
        } else if (event.key === 'ArrowRight') {
            changeImage(1);
        } else if (event.key === 'Escape') {
            closePopup();
        }
    }
});

/* ... Previous code ... */

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

/* ... Previous code ... */

// Attach click event listener to previous button
prevBtn.addEventListener('click', () => changeImage(-1));

// Attach click event listener to next button
nextBtn.addEventListener('click', () => changeImage(1));

// Global variables
let currentGalleryImages = [];
let currentImageIndex = 0;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadApartments();
    populateContactForm();
    setupSmoothScrolling();
});

// Load apartments data
function loadApartments() {
    const flatsGrid = document.getElementById('flatsGrid');
    
    apartmentData.forEach(apartment => {
        const apartmentCard = createApartmentCard(apartment);
        flatsGrid.appendChild(apartmentCard);
    });
}

// Create apartment card HTML
function createApartmentCard(apartment) {
    const card = document.createElement('div');
    card.className = 'flat-card';
    
    card.innerHTML = `
        <div class="flat-image" onclick="openGallery(${apartment.id})">
            <img src="${apartment.images[0]}" alt="${apartment.title}" loading="lazy">
            <div class="image-overlay">${apartment.images.length} photos</div>
        </div>
        <div class="flat-content">
            <h3 class="flat-title">${apartment.title}</h3>
            <div class="flat-price">${apartment.price}</div>
            <div class="flat-specs">
                <span>🛏️ ${apartment.bedrooms} bed</span>
                <span>🚿 ${apartment.bathrooms} bath</span>
                <span>📐 ${apartment.area}</span>
            </div>
            <p class="flat-description">${apartment.description}</p>
            <div class="flat-features">
                ${apartment.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
            </div>
            <div class="flat-actions">
                <button class="btn-small btn-view" onclick="openGallery(${apartment.id})">View Gallery</button>
                <button class="btn-small btn-contact" onclick="contactForApartment('${apartment.title}')">Contact</button>
            </div>
        </div>
    `;
    
    return card;
}

// Gallery functions
function openGallery(apartmentId) {
    const apartment = apartmentData.find(apt => apt.id === apartmentId);
    if (!apartment) return;
    
    currentGalleryImages = apartment.images;
    currentImageIndex = 0;
    
    const modal = document.getElementById('galleryModal');
    const mainImage = document.getElementById('galleryMainImage');
    const thumbnailsContainer = document.getElementById('galleryThumbnails');
    
    // Set main image
    mainImage.src = currentGalleryImages[0];
    mainImage.alt = apartment.title;
    
    // Create thumbnails
    thumbnailsContainer.innerHTML = '';
    currentGalleryImages.forEach((image, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = `gallery-thumbnail ${index === 0 ? 'active' : ''}`;
        thumbnail.innerHTML = `<img src="${image}" alt="Thumbnail ${index + 1}">`;
        thumbnail.onclick = () => showImage(index);
        thumbnailsContainer.appendChild(thumbnail);
    });
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeGallery() {
    const modal = document.getElementById('galleryModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function showImage(index) {
    if (index < 0 || index >= currentGalleryImages.length) return;
    
    currentImageIndex = index;
    const mainImage = document.getElementById('galleryMainImage');
    mainImage.src = currentGalleryImages[index];
    
    // Update thumbnail active state
    const thumbnails = document.querySelectorAll('.gallery-thumbnail');
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

function nextImage() {
    const nextIndex = (currentImageIndex + 1) % currentGalleryImages.length;
    showImage(nextIndex);
}

function prevImage() {
    const prevIndex = (currentImageIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
    showImage(prevIndex);
}

// Contact form functions
function populateContactForm() {
    const apartmentSelect = document.getElementById('apartment');
    
    apartmentData.forEach(apartment => {
        const option = document.createElement('option');
        option.value = apartment.title;
        option.textContent = apartment.title;
        apartmentSelect.appendChild(option);
    });
}

function contactForApartment(apartmentTitle) {
    // Scroll to contact section
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    
    // Pre-select the apartment
    setTimeout(() => {
        const apartmentSelect = document.getElementById('apartment');
        apartmentSelect.value = apartmentTitle;
    }, 500);
}

function handleContactForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    alert(`Thank you ${data.name}! Your inquiry has been received. We'll contact you soon about ${data.apartment || 'your housing needs'}.`);
    
    // Reset form
    event.target.reset();
}

// Navigation functions
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

// Keyboard navigation for gallery
document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('galleryModal');
    if (modal.style.display === 'block') {
        if (e.key === 'ArrowRight') {
            nextImage();
        } else if (e.key === 'ArrowLeft') {
            prevImage();
        } else if (e.key === 'Escape') {
            closeGallery();
        }
    }
});

// Close modal when clicking outside
document.getElementById('galleryModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeGallery();
    }
});
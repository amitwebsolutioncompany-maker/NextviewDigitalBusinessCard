// Splash Screen
setTimeout(() => {
    const splash = document.getElementById('splash');
    if (splash) {
        splash.classList.add('hide');
    }
}, 2000);

// Gallery Slider
let currentSlideIndex = 0;
const sliderContainer = document.getElementById('sliderContainer');
const slideWrappers = sliderContainer ? sliderContainer.querySelectorAll('.gallery-slide-wrapper') : [];
const sliderDots = document.getElementById('sliderDots');
const dots = sliderDots ? sliderDots.querySelectorAll('.dot') : [];

function updateGallerySlide(index) {
    // Hide all wrappers
    slideWrappers.forEach(wrapper => {
        wrapper.classList.remove('active');
    });
    
    // Show current wrapper
    if (slideWrappers[index]) {
        slideWrappers[index].classList.add('active');
    }
    
    // Update dots
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Initialize first slide
if (slideWrappers.length > 0) {
    slideWrappers[0].classList.add('active');
}

// Click on dots to navigate
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlideIndex = index;
        updateGallerySlide(currentSlideIndex);
    });
});

// Auto slide every 4 seconds
setInterval(() => {
    currentSlideIndex = (currentSlideIndex + 1) % slideWrappers.length;
    updateGallerySlide(currentSlideIndex);
}, 4000);

// Save Individual Contact (VCF)
function saveContact(name, role, phone, email) {
    const vcf = `BEGIN:VCARD
VERSION:3.0
FN:${name}
ORG:NextView Technologies India Pvt. Ltd
TITLE:${role}
TEL;TYPE=WORK VOICE:${phone}
EMAIL:${email}
URL:https://www.nexttechgroup.com/nextview/
ADR;TYPE=WORK:;;Nagrik Bank, 409-410 Maurya Atria;Nr.Atithi restaurant cross Road;Judges Bunglow Rd;Bodakdev;Ahmedabad;Gujarat;380015;India
END:VCARD`;

    const blob = new Blob([vcf], {
        type: 'text/vcard'
    });

    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${name.replace(/\s+/g, '_')}.vcf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
}

// Smooth Scroll Reveal Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.glass').forEach(el => {
    observer.observe(el);
});

// Ripple Effect
document.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    ripple.style.left = e.pageX + 'px';
    ripple.style.top = e.pageY + 'px';
    document.body.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
});

// Profile Image Hover Animation
const profileImage = document.querySelector('.profile-image');

if (profileImage) {
    profileImage.addEventListener('mouseenter', () => {
        profileImage.style.transform = 'scale(1.05) rotate(5deg)';
    });
    
    profileImage.addEventListener('mouseleave', () => {
        profileImage.style.transform = 'scale(1) rotate(0deg)';
    });
}

// Contact Cards Hover Effect
const contactCards = document.querySelectorAll('.contact-card');

contactCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.background = 'rgba(255,255,255,0.12)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.background = 'rgba(255,255,255,0.08)';
    });
});

// Social Links Hover Animation
const socialLinks = document.querySelectorAll('.social-link');

socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-2px)';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0)';
    });
});

// Current Year Auto Update
const yearElement = document.getElementById('year');

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Prevent zoom on double tap for mobile
document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// Console log
console.log('Nextview Digital Card Loaded Successfully');
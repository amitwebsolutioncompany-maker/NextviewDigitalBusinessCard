// Profile Data
const profiles = {
    'milan-bhatt': {
        name: 'Milan Bhatt',
        role: 'BD Manager',
        phone: '+917600014245',
        email: 'milan.bhatt@hotmail.com',
        image: 'milan.PNG'
    },
    'harshit-chavda': {
        name: 'Harshit Chavda',
        role: 'BD Manager',
        phone: '+919979328804',
        email: 'harshit.chavda@hotmail.com',
        image: 'harshit.PNG'
    },
    'jignesh-shah': {
        name: 'Jignesh Shah',
        role: 'BD Manager',
        phone: '+919328127207',
        email: 'jignesh.shah@hotmail.com',
        image: 'jignesh.PNG'
    },
    'ashish-shah': {
        name: 'Ashish Shah',
        role: 'BD Manager',
        phone: '+919825100164',
        email: 'ashish.shah@hotmail.com',
        image: 'ashish.PNG'
    },
    'abhishek-shaini': {
        name: 'Abhishek Shaini',
        role: 'BD Manager',
        phone: '+918840576718',
        email: 'abhishek.shaini@hotmail.com',
        image: 'abhishek.PNG'
    },
    'ankur-shah': {
        name: 'Ankur Shah',
        role: 'BD Manager',
        phone: '+919979923183',
        email: 'ankur.shah@hotmail.com',
        image: 'ankur.PNG'
    },
    'anvar-sanji': {
        name: 'Anvar Sanji',
        role: 'BD Manager',
        phone: '+919904033149',
        email: 'anvar.sanji@hotmail.com',
        image: 'anvar.PNG'
    },
    'hemal-gandhi': {
        name: 'Hemal Gandhi',
        role: 'BD Manager',
        phone: '+919727915007',
        email: 'hemal.gandhi@hotmail.com',
        image: 'hemal.PNG'
    },
    'khushal-soni': {
        name: 'Khushal Soni',
        role: 'BD Manager',
        phone: '+918817142700',
        email: 'khushal.soni@hotmail.com',
        image: 'khusal.PNG'
    },
    'haseeb-mohamr': {
        name: 'Haseeb Mohamr',
        role: 'BD Manager',
        phone: '+919981440515',
        email: 'haseeb.mohamr@hotmail.com',
        image: 'haseeb.PNG'
    }
};

// Get profile from URL parameter
function getProfileFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const profileId = urlParams.get('profile');
    return profileId ? profiles[profileId] : null;
}

// Render profile dynamically
function renderProfile(profile) {
    if (!profile) return;

    // Update profile name
    const profileName = document.querySelector('.profile-name');
    if (profileName) {
        profileName.textContent = `${profile.name} (${profile.role})`;
    }

    // Update profile image
    const profileImage = document.querySelector('.profile-image img');
    if (profileImage) {
        profileImage.src = `assets/${profile.image}`;
        profileImage.alt = profile.name;
    }

    // Update contact avatar
    const contactAvatar = document.querySelector('.contact-avatar img');
    if (contactAvatar) {
        contactAvatar.src = `assets/${profile.image}`;
        contactAvatar.alt = profile.name;
    }

    // Update contact name
    const contactName = document.querySelector('.contact-details h3');
    if (contactName) {
        contactName.textContent = profile.name;
    }

    // Update contact role
    const contactRole = document.querySelector('.contact-role');
    if (contactRole) {
        contactRole.textContent = profile.role;
    }

    // Update phone number
    const phoneElements = document.querySelectorAll('.contact-info-row');
    phoneElements.forEach(row => {
        const icon = row.querySelector('i');
        if (icon && icon.classList.contains('fa-phone')) {
            row.querySelector('span').textContent = formatPhoneNumber(profile.phone);
        }
        if (icon && icon.classList.contains('fa-whatsapp')) {
            row.querySelector('span').textContent = formatPhoneNumber(profile.phone);
        }
    });

    // Update email
    const emailElements = document.querySelectorAll('.contact-info-row');
    emailElements.forEach(row => {
        const icon = row.querySelector('i');
        if (icon && icon.classList.contains('fa-envelope')) {
            row.querySelector('span').textContent = profile.email;
        }
    });

    // Update quick action buttons
    const callBtn = document.querySelector('.action-btn[href^="tel:"]');
    if (callBtn) {
        callBtn.href = `tel:${profile.phone}`;
    }

    const whatsappBtn = document.querySelector('.action-btn[href^="https://wa.me"]');
    if (whatsappBtn) {
        whatsappBtn.href = `https://wa.me/${profile.phone.replace('+', '')}`;
    }

    const emailBtn = document.querySelector('.action-btn[href^="mailto:"]');
    if (emailBtn) {
        emailBtn.href = `mailto:${profile.email}?subject=Inquiry from Digital Card`;
    }

    // Update add contact button
    const addContactBtn = document.querySelector('.add-contact-btn');
    if (addContactBtn) {
        addContactBtn.onclick = () => saveContact(profile.name, profile.role, profile.phone, profile.email);
    }

    // Update page title
    document.title = `${profile.name} - Nextview Digital Card`;
}

// Format phone number for display
function formatPhoneNumber(phone) {
    return phone.replace(/(\+\d{2})(\d{5})(\d{5})/, '$1 $2 $3');
}

// Initialize dynamic profile
const currentProfile = getProfileFromUrl();
if (currentProfile) {
    // Hide landing page, show profile
    const landingContainer = document.querySelector('.landing-container');
    const profileContainer = document.querySelector('.profile-container');
    const backBtn = document.querySelector('.back-btn');
    
    if (landingContainer) {
        landingContainer.style.display = 'none';
    }
    
    if (profileContainer) {
        profileContainer.style.display = 'block';
        renderProfile(currentProfile);
    }
    
    // Hide back button when profile is accessed via URL
    if (backBtn) {
        backBtn.classList.add('hidden');
    }
}

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
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
        image: 'khushal.PNG'
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

// Get profile ID from URL
function getProfileIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('profile');
}

// Render profile dynamically
function renderProfile(profile) {
    if (!profile) return;

    // Update profile name
    const profileName = document.querySelector('.profile-name');
    if (profileName) {
        profileName.textContent = `${profile.name} (${profile.role})`;
    }

    // Keep logo.png for profile image (top section)
    // Dynamic user image only in contact avatar section

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

// Generate QR Code
function generateQRCode(profileId) {
    const qrContainer = document.getElementById('qrcode');
    if (!qrContainer) return;

    // Clear previous QR code
    qrContainer.innerHTML = '';

    // Generate the full URL for the profile
    const baseUrl = window.location.origin + window.location.pathname;
    const profileUrl = `${baseUrl}?profile=${profileId}`;

    // Generate QR code
    new QRCode(qrContainer, {
        text: profileUrl,
        width: 200,
        height: 200,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });
}

// Show QR Page
function showQRPage(profile) {
    const landingContainer = document.querySelector('.landing-container');
    const qrContainer = document.querySelector('.qr-container');
    const profileContainer = document.querySelector('.profile-container');
    const backBtn = document.querySelector('.qr-container .back-btn');

    if (landingContainer) {
        landingContainer.style.display = 'none';
    }

    if (profileContainer) {
        profileContainer.style.display = 'none';
    }

    if (qrContainer) {
        qrContainer.style.display = 'block';
    }

    // Update profile name on QR page
    const qrProfileName = document.querySelector('.qr-profile-name');
    if (qrProfileName && profile) {
        qrProfileName.textContent = profile.name;
    }

    // Update dynamic name in message
    const qrDynamicName = document.querySelector('.qr-dynamic-name');
    if (qrDynamicName && profile) {
        qrDynamicName.textContent = profile.name;
    }

    // Generate QR code
    const profileId = getProfileIdFromUrl();
    if (profileId) {
        generateQRCode(profileId);
    }

    // Hide back button on QR page
    if (backBtn) {
        backBtn.classList.add('hidden');
    }
}

// Show Profile Card Directly (when coming from QR page)
function showProfileCard(profile) {
    const landingContainer = document.querySelector('.landing-container');
    const qrContainer = document.querySelector('.qr-container');
    const profileContainer = document.querySelector('.profile-container');
    const backBtn = document.querySelector('.profile-container .back-btn');

    if (landingContainer) {
        landingContainer.style.display = 'none';
    }

    if (qrContainer) {
        qrContainer.style.display = 'none';
    }

    if (profileContainer) {
        profileContainer.style.display = 'block';
        renderProfile(profile);
    }

    // Show back button on profile page
    if (backBtn) {
        backBtn.classList.remove('hidden');
    }
}

// Download QR Code as PNG
function downloadQRCode() {
    // Check if html2canvas is loaded
    if (typeof html2canvas === 'undefined') {
        console.error('html2canvas library is not loaded');
        alert('Library not loaded. Please refresh the page.');
        return;
    }

    const qrSection = document.querySelector('.qr-section');
    const qrActions = document.querySelector('.qr-actions');
    const qrLogo = document.querySelector('.qr-logo');

    if (!qrSection) {
        console.error('QR section not found');
        return;
    }

    // Convert logo to base64 to avoid CORS issues
    if (qrLogo) {
        const img = new Image();
        img.crossOrigin = 'Anonymous';
        img.onload = function() {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            qrLogo.src = canvas.toDataURL('image/png');
            captureAndDownload();
        };
        img.onerror = function() {
            console.log('Could not convert logo, proceeding with original');
            captureAndDownload();
        };
        img.src = qrLogo.src;
    } else {
        captureAndDownload();
    }

    function captureAndDownload() {
        // Hide buttons before capturing
        if (qrActions) {
            qrActions.style.display = 'none';
        }

        // Capture the entire QR section
        html2canvas(qrSection, {
            backgroundColor: '#0d47a1',
            scale: 2,
            useCORS: false,
            allowTaint: true,
            logging: false
        }).then(canvas => {
            console.log('Canvas created successfully');

            // Show buttons again
            if (qrActions) {
                qrActions.style.display = 'flex';
            }

            // Convert canvas to image and download
            try {
                const link = document.createElement('a');
                link.download = 'digital-card-qr.png';
                link.href = canvas.toDataURL('image/png');
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                console.log('Download initiated');
            } catch (e) {
                console.error('Error during download:', e);
                // Fallback: download just the QR code
                downloadQRCodeOnly();
            }
        }).catch(error => {
            // Show buttons again if error occurs
            if (qrActions) {
                qrActions.style.display = 'flex';
            }
            console.error('Error capturing QR section:', error);
            // Fallback: download just the QR code
            downloadQRCodeOnly();
        });
    }
}

// Fallback: Download only QR code image
function downloadQRCodeOnly() {
    const qrContainer = document.getElementById('qrcode');
    const qrImage = qrContainer.querySelector('img');

    if (qrImage) {
        try {
            const link = document.createElement('a');
            link.download = 'digital-card-qr.png';
            link.href = qrImage.src;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            alert('Downloaded QR code only due to security restrictions.');
        } catch (e) {
            console.error('Error downloading QR only:', e);
            alert('Could not download. Please try right-clicking the QR code and selecting "Save Image As".');
        }
    } else {
        alert('Could not find QR code image.');
    }
}

// Initialize based on URL parameters
const currentProfile = getProfileFromUrl();
const profileId = getProfileIdFromUrl();
const showCard = new URLSearchParams(window.location.search).get('showCard');

if (currentProfile) {
    if (showCard === 'true') {
        // Show profile card directly (from QR page)
        showProfileCard(currentProfile);
    } else {
        // Show QR page first
        showQRPage(currentProfile);
    }
}

// QR Page Button Event Listeners
const openCardBtn = document.getElementById('openCardBtn');
const downloadQrBtn = document.getElementById('downloadQrBtn');

if (openCardBtn && profileId) {
    openCardBtn.addEventListener('click', () => {
        window.location.href = `?profile=${profileId}&showCard=true`;
    });
}

if (downloadQrBtn) {
    downloadQrBtn.addEventListener('click', downloadQRCode);
}

// Profile Page Back Button - Go to QR Page
const profileBackBtn = document.getElementById('profileBackBtn');
if (profileBackBtn && profileId) {
    profileBackBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = `?profile=${profileId}`;
    });
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
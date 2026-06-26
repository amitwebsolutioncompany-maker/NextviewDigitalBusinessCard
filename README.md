# NextView Multi-Profile Digital Business Card

A modern, responsive digital business card system for NextView Technologies India Pvt. Ltd with individual profiles for 10 BD Managers.

## Project Structure

```
DigitalBusinessCard/
├── public/                    # Shared assets (images, videos)
│   ├── logo.png
│   ├── bg4.mp4
│   ├── 1.jpg - 10.jpg        # Gallery images
│   ├── milan.jpg
│   ├── harshit.jpg
│   ├── jignesh.jpg
│   ├── ashish.jpg
│   ├── abhishek.jpg
│   ├── ankur.jpg
│   ├── anvar.jpg
│   ├── hemal.jpg
│   ├── khushal.jpg
│   └── haseeb.jpg
├── milan-bhatt/              # Profile: Milan Bhatt
│   └── index.html
├── harshit-chavda/           # Profile: Harshit Chavda
│   └── index.html
├── jignesh-shah/             # Profile: Jignesh Shah
│   └── index.html
├── ashish-shah/              # Profile: Ashish Shah
│   └── index.html
├── abhishek-shaini/          # Profile: Abhishek Shaini
│   └── index.html
├── ankur-shah/               # Profile: Ankur Shah
│   └── index.html
├── anvar-sanji/              # Profile: Anvar Sanji
│   └── index.html
├── hemal-gandhi/             # Profile: Hemal Gandhi
│   └── index.html
├── khushal-soni/             # Profile: Khushal Soni
│   └── index.html
├── haseeb-mohamr/            # Profile: Haseeb Mohamr
│   └── index.html
├── style.css                 # Shared stylesheet
├── script.js                 # Shared JavaScript
├── vercel.json               # Vercel routing configuration
└── README.md                # This file
```

## Profile URLs

After deployment, each profile will be accessible at:

- `domain.com/milan-bhatt`
- `domain.com/harshit-chavda`
- `domain.com/jignesh-shah`
- `domain.com/ashish-shah`
- `domain.com/abhishek-shaini`
- `domain.com/ankur-shah`
- `domain.com/anvar-sanji`
- `domain.com/hemal-gandhi`
- `domain.com/khushal-soni`
- `domain.com/haseeb-mohamr`

## Features

- **Modern Glassmorphism Design**: Beautiful frosted glass effect with gradient backgrounds
- **Responsive Layout**: Optimized for mobile, tablet, and desktop devices
- **Animated Gallery**: Auto-sliding gallery with 10 product images
- **Contact Integration**: One-click Call, WhatsApp, and Email buttons
- **VCF Export**: Add contact directly to phone with "Add to Contact" button
- **Interactive Map**: Embedded Google Maps with company location
- **Business Hours**: Display of operating hours
- **Social Media Links**: Instagram, Facebook, YouTube, and Website links
- **Splash Screen**: Animated loading screen
- **Smooth Animations**: Scroll reveal animations and hover effects

## Profile Data

Each profile contains:

- **Name**: Employee name with designation (BD Manager)
- **Contact Information**: Phone, WhatsApp, and Email
- **Avatar**: Individual profile image
- **Shared Content**: Company info, gallery, location, business hours, social links

## Deployment Instructions

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will automatically detect the static site
   - Click "Deploy"

3. **Custom Domain (Optional)**
   - In Vercel project settings, go to "Domains"
   - Add your custom domain
   - Update DNS records as instructed by Vercel

### Local Development

To test locally:

1. Start a local server (e.g., using Python):
   ```bash
   python -m http.server 8000
   ```

2. Or use Node.js:
   ```bash
   npx serve
   ```

3. Open browser to:
   - `http://localhost:8000/milan-bhatt`
   - `http://localhost:8000/harshit-chavda`
   - etc.

## Required Avatar Images

Ensure the following avatar images exist in the `public/` folder:

- `milan.jpg`
- `harshit.jpg`
- `jignesh.jpg`
- `ashish.jpg`
- `abhishek.jpg`
- `ankur.jpg`
- `anvar.jpg`
- `hemal.jpg`
- `khushal.jpg`
- `haseeb.jpg`

## Customization

### Update Contact Information

To update contact details for a profile, edit the corresponding `index.html` file in that profile's folder:

```html
<!-- Profile Section -->
<h1 class="profile-name">Name (B D Manager)</h1>

<a href="tel:+91XXXXXXXXXX" class="action-btn">
<a href="https://wa.me/91XXXXXXXXXX" target="_blank" class="action-btn">
<a href="mailto:email@hotmail.com" class="action-btn">

<!-- Contact Card -->
<img src="../public/avatar.jpg" alt="Name">
<h3>Name</h3>
<span>+91 XX XXX XXXX</span>
<span>email@hotmail.com</span>
<button onclick="saveContact('Name', 'BD Manager', '+91XXXXXXXXXX', 'email@hotmail.com')">
```

### Update VCF Contact Data

Edit `script.js` to update the VCF (vCard) template:

```javascript
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
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables, flexbox, grid
- **JavaScript (Vanilla)**: No frameworks, pure JS for interactions
- **Font Awesome 6.4.0**: Icon library
- **Google Maps**: Embedded map integration

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© NextView Technologies India Pvt. Ltd. All rights reserved.

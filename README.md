# Ahmed ❤️ Haniya - Wedding Invitation Website

A beautiful, interactive wedding invitation website with auto-playing music, countdown timer, and photo gallery.

## Features

- 🎵 **Auto-playing music** - "Gudmaayi" song plays automatically when the website opens (with browser policy handling)
- ⏱️ **Live countdown timer** - Counts down to the wedding day (December 20, 2026)
- 📸 **Photo gallery** - Beautiful memories grid layout
- 📱 **Fully responsive** - Works perfectly on all devices
- 🔍 **SEO optimized** - Meta tags for search engines and social media sharing
- 🎨 **Modern design** - Elegant gradient backgrounds and smooth animations

## File Structure

```
Wedding Invitation/
├── index.html          # Main HTML file
├── style.css           # Styling and design
├── script.js           # JavaScript functionality (music, countdown)
├── favicon.ico         # Website icon
├── music/
│   └── gudmaayi.mp3    # Background music file
├── images/             # Photo gallery images
├── README.md           # This file
└── .gitignore          # Git ignore rules
```

## Setup Instructions

1. **Add your music file**: Place your "gudmaayi.mp3" file in the `music/` folder
2. **Add wedding photos**: Add your wedding photos to the `images/` folder and update the image paths in `index.html`
3. **Update wedding details**: Edit the following in `index.html`:
   - Names (Ahmed & Haniya)
   - Date (December 20, 2026)
   - Venue (Taj Hotel, Mumbai)
   - Time (7:00 PM)
4. **Update deployment URL**: Replace `https://yourwebsite.com/` in the meta tags with your actual website URL

## Deployment Options

### Option 1: GitHub Pages (Free)

1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Select "main" branch as source
4. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Free)

1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Your site will be instantly deployed

### Option 3: Vercel (Free)

1. Sign up at [vercel.com](https://vercel.com)
2. Import your project from GitHub
3. Deploy with one click

### Option 4: Traditional Web Hosting

1. Upload all files to your web host's public directory
2. Ensure `index.html` is in the root folder
3. Your site will be live at your domain

## Browser Autoplay Policy Note

Modern browsers (Chrome, Safari, Firefox) block autoplaying audio to prevent annoying users. The website handles this gracefully:

- **First attempt**: Tries to autoplay on page load
- **Fallback**: If blocked, shows "🎵 Play Music" button for user to click
- **After interaction**: Once user clicks, music plays/pauses via the button

## Customization

### Change Music
Replace `music/gudmaayi.mp3` with your preferred audio file and update the path in `index.html`:
```html
<source src="music/your-song.mp3" type="audio/mpeg">
```

### Change Colors
Edit `style.css` to customize the color scheme:
- Background gradient: `.hero` background property
- Button color: `.music-btn` background property
- Section backgrounds: `.countdown`, `.event` background properties

### Update Countdown
Edit the target date in `script.js`:
```javascript
let target = new Date("YOUR_DATE_HERE").getTime();
```

## Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for loading external fonts and images)
- No build process or dependencies required - pure HTML/CSS/JS

## Support

For issues or questions, please check:
- Browser console for error messages
- Ensure all file paths are correct
- Verify music file is in the correct location

Made with ❤️ for Ahmed & Haniya's special day!

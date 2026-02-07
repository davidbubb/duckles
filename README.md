# 🦆 Duckles - Mobile-First Duck Card Collection App

A fun, interactive, and mobile-first React application for collecting and exploring duck characters. Built with Vite, React, and modern web technologies.

![Duckles App](https://img.shields.io/badge/React-18.2-blue) ![Vite](https://img.shields.io/badge/Vite-5.0-purple) ![Mobile-First](https://img.shields.io/badge/Design-Mobile--First-green)

## ✨ Features

### Core Functionality
- **📇 Card View**: Display one duck at a time with beautiful Pokémon-style cards
- **🎴 Gallery View**: Browse all 20 ducks in a responsive grid layout
- **👆 Swipe Gestures**: Navigate between cards by swiping left/right on mobile devices
- **🎲 Random Navigation**: Jump to a random duck with one click
- **⌨️ Keyboard Navigation**: Use Previous/Next buttons on desktop

### Theme Customization
- **5 Color Themes**:
  - 🌊 Ocean Blue
  - 🌲 Forest Green
  - 🌅 Sunset Pink
  - 👑 Royal Purple
  - 🏜️ Desert Gold
- **💾 Theme Persistence**: Your theme preference is saved to localStorage

### Design & Accessibility
- **📱 Mobile-First**: Optimized for screens 320px and up
- **🖥️ Desktop-Friendly**: Larger cards and better spacing on desktop
- **♿ WCAG AA Compliant**: Accessible to everyone
- **👆 Touch-Friendly**: All buttons meet 44x44px minimum touch target
- **🎨 Modern UI**: Gradient backgrounds, rounded corners, smooth shadows
- **🖼️ Semantic HTML**: Proper structure and ARIA labels

### Duck Collection
- **20 Unique Ducks**: Each with unique personality, type, and description
- **🎭 8 Different Types**: Adventure, Scholar, Athlete, Creative, Culinary, Musical, Social, and more
- **🖼️ Custom SVG Images**: Colorful, lightweight duck illustrations

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or higher
- npm 9.0 or higher

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/davidbubb/duckles.git
   cd duckles
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:3000`

## 📦 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 🏗️ Project Structure

```
duckles/
├── public/
│   ├── images/           # SVG duck images
│   │   ├── duck1.svg
│   │   ├── duck2.svg
│   │   └── ... (20 total)
│   └── duck-icon.svg     # Favicon
├── src/
│   ├── components/       # React components
│   │   ├── DuckCard.jsx
│   │   ├── DuckCard.module.css
│   │   ├── CardGallery.jsx
│   │   ├── CardGallery.module.css
│   │   ├── Navigation.jsx
│   │   ├── Navigation.module.css
│   │   ├── ThemeSwitcher.jsx
│   │   └── ThemeSwitcher.module.css
│   ├── context/          # React Context
│   │   ├── ThemeContext.jsx
│   │   └── themes.js
│   ├── data/             # Data files
│   │   └── ducks.json
│   ├── styles/           # Global styles
│   │   └── global.css
│   ├── App.jsx           # Main app component
│   ├── App.module.css
│   └── main.jsx          # Entry point
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## 🎮 How to Use

### Card View Mode
1. **Navigate**: Use "Previous" and "Next" buttons or swipe on mobile
2. **Random Duck**: Click the "🎲 Random" button to jump to a surprise duck
3. **View Counter**: See which duck you're viewing (e.g., "5 / 20")
4. **Swipe**: On mobile, swipe left for next, right for previous

### Gallery View Mode
1. **Browse All**: See all 20 ducks in a grid
2. **Click to View**: Click any duck to view it in card mode
3. **Responsive Grid**: Automatically adjusts columns based on screen size

### Theme Selection
1. Use the theme dropdown at the top
2. Choose from 5 beautiful color schemes
3. Your preference is automatically saved

## 🎨 Themes

Each theme includes:
- Custom gradient backgrounds for cards
- Coordinated colors for buttons and badges
- Page background colors
- Text colors optimized for readability

## 🔧 Technologies Used

- **React 18.2** - UI library
- **Vite 5.0** - Build tool and dev server
- **@use-gesture/react** - Touch gesture handling
- **CSS Modules** - Scoped styling
- **localStorage API** - Theme persistence

## 🌟 Key Features Explained

### Swipe Gesture Support
The app uses `@use-gesture/react` to detect swipe gestures on touch devices. Swipe left to go to the next duck, right for the previous.

### Theme System
Themes are managed through React Context and stored in localStorage. The theme affects:
- Card gradient backgrounds
- Button colors
- Badge colors
- Page background

### Responsive Design
- **Mobile** (320px - 767px): Single column, touch-optimized
- **Tablet** (768px - 1023px): Larger cards, more spacing
- **Desktop** (1024px+): Maximum card size, optimal button placement

### Accessibility Features
- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible indicators
- Alt text for all images
- WCAG AA color contrast ratios
- Touch targets minimum 44x44px

## 🐛 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is open source and available for educational purposes.

## 🤝 Contributing

This is a demonstration project. Feel free to fork and customize for your own use!

## 👨‍💻 Author

Created as a mobile-first React demonstration project.

## 🎉 Acknowledgments

- Duck illustrations created with SVG
- Inspired by Pokémon card designs
- Built with modern React best practices

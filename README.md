# Recruiting Without Limits - Website

A minimalist recruitment platform website built with Vite + React, featuring clean design and future-ready architecture for community and AI integration.

## Features

- **Clean, minimalist design** inspired by Jony Ive's design principles
- **Fully responsive layout** that works on all devices
- **Mobile-first navigation** with animated hamburger menu
- **Smooth scrolling navigation** with anchor links
- **Dark/light theme toggle** for user preference
- **Future-ready architecture** with mockup concepts for community and AI features
- **Fast development** with Vite hot module replacement

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/recruitment-website.git
cd recruitment-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx & .css    # Responsive nav with mobile hamburger menu
│   ├── Header.jsx & .css        # Main header section
│   ├── Hero.jsx & .css          # Hero banner
│   ├── About.jsx & .css         # About section
│   ├── Community.jsx & .css     # Community features mockup
│   ├── Platform.jsx & .css      # AI platform features mockup
│   ├── Contact.jsx & .css       # Contact form
│   ├── Footer.jsx & .css        # Site footer
│   ├── ThemeToggle.jsx & .css   # Dark/light theme switcher
│   └── SmoothScroll.jsx         # Smooth scrolling behavior
├── contexts/
│   └── ThemeContext.jsx         # Theme state management
├── App.jsx & .css
├── main.jsx
└── index.css
```

## Design Philosophy

- **White background** with subtle gray accents
- **System fonts** for optimal readability
- **Minimal color palette** focusing on typography
- **Generous whitespace** for clean visual hierarchy
- **Responsive grid system** for feature cards
- **Mobile-first approach** with progressive enhancement

## Mobile Navigation

The website features a fully responsive navigation system:

- **Desktop**: Horizontal navigation bar with theme toggle
- **Mobile (≤768px)**: Collapsible hamburger menu with smooth animations
- **Accessibility**: Proper ARIA labels and keyboard navigation support
- **Auto-close**: Menu automatically closes when navigation links are clicked
- **Smooth transitions**: Animated hamburger icon transforms to X when opened

## Future Integration Concepts

The website includes mockup sections for:

- **Community Hub**: Interactive broker leaderboards and peer learning
- **AI Learning Platform**: Personalized development and predictive matching

These sections demonstrate how community and AI features could be integrated into the platform's architecture.

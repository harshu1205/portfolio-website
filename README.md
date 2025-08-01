# Sri Harshith Akula - Portfolio Website

A modern, professional portfolio website built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- 🎨 Modern, clean design with professional styling
- 🌙 Dark/Light mode toggle with system preference detection
- 📱 Fully responsive across all devices
- ⚡ Built with Next.js 15 for optimal performance
- 🎯 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 🧩 shadcn/ui components for consistent UI
- 📦 Optimized for GitHub Pages deployment
- ♿ Accessible design following best practices

## Sections

- **Hero Section**: Introduction and call-to-action buttons
- **About Section**: Personal information and skills showcase
- **Projects Section**: Featured projects with technologies used
- **Contact Section**: Contact form and social media links
- **Responsive Navigation**: Mobile-friendly navigation with hamburger menu

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone [your-repo-url]
   cd portfolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `out` directory, ready for deployment.

## Deployment to GitHub Pages

This project is configured for GitHub Pages deployment:

1. Push your code to a GitHub repository
2. Enable GitHub Pages in repository settings
3. The GitHub Action will automatically build and deploy on push to main branch

## Customization

### Personal Information

Update the following components with your information:

- `src/components/hero.tsx` - Name, title, and bio
- `src/components/about.tsx` - About section and skills  
- `src/components/projects.tsx` - Your projects and links
- `src/components/contact.tsx` - Contact information and social links
- `src/app/layout.tsx` - Site metadata

### Styling

- Colors and themes can be customized in `src/app/globals.css`
- Component styling uses Tailwind CSS classes
- shadcn/ui components can be customized as needed

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **shadcn/ui** - Component library
- **next-themes** - Dark mode support
- **Lucide React** - Icons
- **GitHub Pages** - Hosting

## License

This project is open source and available under the [MIT License](LICENSE).

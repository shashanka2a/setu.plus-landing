# Setu.plus - Powering Digital India

A production-ready Next.js landing page for Setu.plus, the Merchant Operating System.

## Features

- ⚡ **Next.js 16** with App Router
- 🎨 **Tailwind CSS v4** with custom design system
- 🌙 **Dark Mode** with next-themes
- ✨ **Framer Motion** animations
- 🤖 **AI Demo** powered by Google Gemini
- 📱 **Fully Responsive** design
- 🔍 **SEO Optimized** with metadata

## Prerequisites

- Node.js 18+ installed
- Familiarity with React + basic Next.js concepts

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
   ```
   
   Or for server-side only:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with fonts and metadata
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles and Tailwind
├── components/
│   ├── Navbar.tsx      # Navigation with theme toggle
│   ├── Hero.tsx        # Hero section with 3D animations
│   ├── Mission.tsx     # Mission/vision section
│   ├── Features.tsx    # Features grid
│   ├── Ecosystem.tsx   # Ecosystem showcase
│   ├── Footer.tsx      # Footer component
│   ├── AIDemo.tsx      # AI-powered demo
│   └── ThemeProvider.tsx # Theme context provider
├── services/
│   └── geminiService.ts # Gemini AI integration
└── public/             # Static assets
```

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Theme:** next-themes
- **AI:** Google Gemini API

## Key Features

### Theme System
- Automatic dark/light mode detection
- System preference support
- Smooth theme transitions

### Performance
- Static page generation
- Optimized fonts with next/font
- Image optimization ready

### SEO
- Comprehensive metadata
- Open Graph tags
- Twitter Card support

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_GEMINI_API_KEY` | Public Gemini API key for client-side | Optional (for AI demo) |
| `GEMINI_API_KEY` | Server-side Gemini API key | Optional (for AI demo) |

## License

© 2025 Setu.plus Inc. All rights reserved.

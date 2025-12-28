# Personal CV Website

A beautiful, modern React-based CV/resume website with stunning design and image support.

## Features

- ✨ Modern, responsive design with gradient backgrounds
- 📸 Image placeholders for profile photo, projects, and gallery
- 📱 Fully responsive - looks great on all devices
- 🎨 Smooth animations and hover effects
- 📝 Sections for About, Experience, Education, Skills, Projects, and Gallery

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Adding Your Images

To add your images, place them in the `public/images/` directory with the following names:

- **Profile Photo**: `profile.jpg` (recommended size: 400x400px, square)
- **Project Images**: 
  - `project1.jpg` (recommended size: 600x400px) - Medical Chatbot
  - `project2.jpg` (recommended size: 600x400px) - Production Dashboards
  - `project3.jpg` (recommended size: 600x400px) - Personal Projects/GitHub
- **Gallery Images**:
  - `gallery1.jpg` (recommended size: 400x400px)
  - `gallery2.jpg` (recommended size: 400x400px)
  - `gallery3.jpg` (recommended size: 400x400px)

**Note**: If images are not found, elegant placeholders will be displayed automatically.

## Customizing Your CV

Edit `src/App.js` to customize:

1. **Personal Information** (Header section):
   - Name
   - Professional title
   - Email, phone, LinkedIn

2. **About Me**: Write your personal introduction

3. **Experience**: Add your work history with job titles, companies, dates, and descriptions

4. **Education**: Add your educational background

5. **Skills**: Update technical and soft skills

6. **Projects**: Add your projects with descriptions

7. **Gallery**: Add any additional images you want to showcase

## Building for Production

To create a production build:

```bash
npm run build
```

The optimized build will be in the `build/` directory.

## Tech Stack

- React 18
- CSS3 with modern features (gradients, backdrop-filter, animations)
- Responsive design principles

## Color Scheme

The design uses a beautiful purple gradient theme:
- Primary: #667eea (Blue-purple)
- Secondary: #764ba2 (Purple)
- Background: Gradient from #667eea to #764ba2

Enjoy your stunning CV website! 🚀


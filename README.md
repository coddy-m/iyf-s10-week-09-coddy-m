# Week 9: React Advanced- CommunutyHub

## Author
- **Name:** Michelle Wanja
- **GitHub:** [@coddy-m](https://github.com/coddy-m)
- **Date:** April, 2026

## Project Description
- Modern, multi-page React application that enables users to share stories, connect with others, and build meaningful communities.

## Technologies Used
- React 18 - Component-based UI library
- React Router DOM 6 - Client-side routing and navigation
- Vite - Fast build tool and dev server
- Tailwind CSS - Utility-first CSS framework
- PostCSS & Autoprefixer - CSS preprocessing
- JSONPlaceholder API - Mock REST API for data fetching
- Prop-types - Runtime type checking for props
- JavaScript (ES6+) - Modern JavaScript syntax
- CSS3 - Custom animations, gradients, and glassmorphism effects
- HTML5 - Semantic markup and accessibility


## Features
- Multi-page SPA with nested routing
- Loading Spinners
- Search and filter posts with debounce input

## How to Run
### 1. Clone the repository
- git clone https://github.com/coddy-m/iyf-s10-week-09-coddy-m.git
- cd iyf-s10-week-09-coddy-m/my-react-app

### 2. Install dependencies
npm install

### 3. Start the development server
npm run dev

### 4. Open in browser
- Navigate to: http://localhost:5173

## Lessons Learned
- useEffect mastery
- Reducing API calls by waiting for to stop typing
- Building flexible, reusable components with props and children
- Managing global state (authentication) without prop drilling

## Challenges Faced
- Challenge : Vite failed to resolve imports with errors like Failed to resolve import "../../hooks".
- Solution : used npm install prop-types to resolve missing dependancies
- Challenge : Infinite re-renders when fetching data inside useEffect without proper dependencies.
- Solution :Added dependency arrays to control when effects run...


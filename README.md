# ASU Homepage Replica

## Overview
This project is a responsive recreation of key sections of the Arizona State University (ASU) homepage using Nuxt 4 and TypeScript. The implementation focuses on clean architecture, accessibility, responsive design, and modern development practices while integrating selected components from the RDS Vue UI Component Library.

The application includes:

- Responsive desktop and mobile layouts.
- Interactive degree search panel.
- Rankings carousel with autoplay and controls.
- Future student tabs with dynamic content.
- Hero and CTA sections.
- RDS Vue UI component integration.
- Modern linting, formatting, and Git hooks.

---

## Tech Stack

- Nuxt.js 4
- TypeScript
- Vue 3
- RDS Vue UI Component Library
- SCSS
- Font Awesome Free Icons
- ESLint
- Prettier
- Husky
- lint-staged
- Vercel

---

## Features

- Responsive implementation matching the provided designs.
- Semantic HTML structure.
- Accessible form labels and navigation.
- Keyboard-accessible interactive elements.
- Proper heading hierarchy.
- Lazy loading for non-critical images where applicable.
- Rankings carousel with autoplay, pause, previous, and next controls.
- UI-only form interactions.
- Reusable and modular component structure.
- RDS Vue UI integration for selected interactive elements.

---

## Setup Instructions
Clone the repository:

```
git clone 
cd asu-replica
```
Install dependencies:

```
npm install
```
Start the development server:

```
npm run dev
```
The application will be available at:

```
http://localhost:3000
```

---

## Available Scripts

### Start development server

```
npm run dev
```

### Create production build

```
npm run build
```

### Preview production build locally

```
npm run preview
```

### Run ESLint

```
npm run lint
```

### Automatically fix lint issues

```
npm run lint:fix
```

### Format files using Prettier

```
npm run format
```

### Check formatting without modifying files

```
npm run format:check
```

---

## Code Quality

### ESLint
ESLint is configured using the Nuxt ESLint integration to maintain code quality and consistency.

### Prettier
Prettier is used to enforce consistent formatting across the codebase.

### Husky
Husky is configured to run Git hooks before commits.

### lint-staged
lint-staged ensures that only staged files are linted and formatted during commits.

---

## Accessibility Considerations
The project includes several accessibility enhancements:

- Semantic HTML where appropriate.
- Proper heading hierarchy.
- Accessible labels for form controls.
- Keyboard-accessible navigation and controls.
- Focus states for interactive elements.
- Sufficient color contrast based on the provided design.
- Alt text for images.
- Responsive typography adjustments.

---

## Performance Optimizations

- Lazy loading for non-critical images.
- Avoidance of unnecessary dependencies.
- Modular component architecture.
- Minimal JavaScript for UI interactions.
- Responsive assets and optimized layouts.

---

## RDS Vue UI Integration
Selected interactive elements were implemented using the RDS Vue UI Component Library while preserving the visual fidelity of the provided ASU designs.

Examples include:

- Hero section CTA button.
- Degree search action buttons.
- Future student actions.
- CTA section buttons.

Custom styling was applied where necessary to closely match the provided reference screenshots.

---

## Deployment

### GitHub Repository

```
https://github.com/UmranMirza/asu-replica
```

### Live Demo

```
https://asu-replica.vercel.app/
```



## Assumptions

- The primary objective of the assignment was to recreate the provided ASU homepage experience using Nuxt 4, TypeScript, and modern frontend development practices.
- Form submissions were implemented as UI-only interactions and do not communicate with a backend service.
- The desktop experience was developed to closely match the provided ASU reference in terms of layout, spacing, interactions, and visual hierarchy.
- Due to the limited implementation timeline of less than 24 hours, the mobile experience was prioritized for responsiveness, usability, and accessibility rather than being a pixel-perfect replica of the ASU mobile implementation. While the layouts adapt appropriately across screen sizes, some mobile-specific refinements and exact visual parity could be further enhanced with additional development time.
- Selected RDS Vue UI components were integrated into the existing implementation to satisfy the component library requirement while preserving the intended design and functionality.
- External content and imagery were used for demonstration purposes where exact assets were unavailable.


---

## Improvements
Given additional time, the following enhancements could be implemented:

- Broader adoption of RDS components throughout the application.
- Automated unit and end-to-end testing.
- Enhanced accessibility testing and ARIA announcements.
- Further image optimization and asset management.
- Dark mode support.
- Additional animation refinements.
- Content management integration for dynamic data.

---

## Author
Developed by ## Mohd Umranuddin ## as part of the ASU homepage implementation assignment.


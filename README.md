# Dhairya Mittal — Portfolio

A personal portfolio built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion. The home page presents an introduction, about section, projects, skills, experience, and contact form, with animated backgrounds and project details.

## Run locally

Requirements: Node.js and npm.

    npm install
    npm run dev

Open `http://localhost:3000`. Use `npm run build` to create a production build, `npm start` to serve it, and `npm run lint` to run ESLint.

## Contact storage

The contact API can use MongoDB. Copy `.env.example` to `.env.local` and configure `MONGODB_URI` and `MONGODB_DB` if you want to enable database-backed submissions. Do not commit real credentials.

## Content and assets

- `data/content.ts`: portfolio copy and project data
- `components/`: page sections and reusable UI
- `app/api/contact/`: contact submission endpoint
- `public/`: project images, resume, and other static assets

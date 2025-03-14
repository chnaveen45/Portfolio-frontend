# Modern Portfolio Website

A modern, responsive portfolio website built with React.js, Node.js, Express.js, and MongoDB. Features include animated sections, interactive skill cards, 3D project tiles, and parallax scrolling effects.

## Features

- Gradient animated hero section
- Interactive skill cards with hover effects
- 3D project tiles using Three.js
- Parallax scrolling effects
- Responsive design for all devices
- Dark theme with neon accents
- Social media integration
- MongoDB backend for dynamic content

## Technologies Used

- Frontend:
  - React.js
  - Styled Components
  - Framer Motion
  - Three.js
  - React Icons
- Backend:
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose

## Prerequisites

- Node.js (v14 or higher)
- MongoDB installed and running locally
- npm or yarn package manager

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd client
   npm install
   ```

4. Create a `.env` file in the root directory and add your environment variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/portfolio
   NODE_ENV=development
   ```

## Running the Application

1. Start the MongoDB service on your machine

2. Start the backend server:
   ```bash
   npm start
   ```

3. In a separate terminal, start the frontend development server:
   ```bash
   cd client
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Development

- Frontend code is in the `client/src` directory
- Backend code is in the root directory
- Components are in `client/src/components`
- Styles are managed with Styled Components

## Deployment

1. Build the frontend:
   ```bash
   cd client
   npm run build
   ```

2. The backend is set up to serve the static files from the build folder in production

3. Set the environment variables in your production environment:
   - PORT
   - MONGODB_URI
   - NODE_ENV=production

## Customization

1. Update the content in the components:
   - Hero.js: Update the hero section content
   - Skills.js: Modify the skills data
   - Projects.js: Add your projects
   - Footer.js: Update social media links and contact information

2. Modify the styling:
   - Each component uses Styled Components
   - Global styles are in App.js
   - Colors and themes can be adjusted in individual components

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details 
# MERN Stack Landing Page

A modern, responsive landing page built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

- 🎨 **Modern Design**: Premium UI with glassmorphism effects, gradients, and smooth animations
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and builds
- 🔒 **Secure Backend**: Express.js API with MongoDB for data persistence
- 📧 **Contact Form**: Integrated contact form with backend validation
- 🎯 **SEO Optimized**: Proper meta tags and semantic HTML

## Project Structure

```
Landing Page/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── Hero.jsx
│   │   │   ├── Features.jsx
│   │   │   ├── ContactForm.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
└── server/                # Node.js backend
    ├── controllers/       # Request handlers
    │   └── contactController.js
    ├── models/           # MongoDB schemas
    │   └── Contact.js
    ├── routes/           # API routes
    │   └── contact.js
    ├── server.js         # Express app
    ├── .env             # Environment variables
    └── package.json
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn

## Installation

### 1. Clone or navigate to the project directory

```bash
cd "c:\Users\aman1\Documents\Landing Page"
```

### 2. Install Client Dependencies

```bash
cd client
npm install
```

### 3. Install Server Dependencies

```bash
cd ../server
npm install
```

### 4. Configure Environment Variables

Edit `server/.env` file and update the MongoDB connection string:

For local MongoDB:
```env
MONGODB_URI=mongodb://localhost:27017/landing-page
```

For MongoDB Atlas:
```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/landing-page?retryWrites=true&w=majority
```

## Running the Application

### Start the Backend Server

```bash
cd server
npm run dev
```

The server will run on `http://localhost:5000`

### Start the Frontend Development Server

Open a new terminal:

```bash
cd client
npm run dev
```

The client will run on `http://localhost:5173`

### Access the Application

Open your browser and navigate to `http://localhost:5173`

## API Endpoints

### Contact Form

- **POST** `/api/contact` - Submit contact form
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello, I'd like to get in touch!"
  }
  ```

### Admin Endpoints (for managing contacts)

- **GET** `/api/contact` - Get all contacts
- **GET** `/api/contact/:id` - Get single contact
- **PATCH** `/api/contact/:id/status` - Update contact status
- **DELETE** `/api/contact/:id` - Delete contact

## Technologies Used

### Frontend
- React 18
- Vite
- Axios
- CSS3 (with custom properties and animations)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv

## Features Breakdown

### Hero Section
- Animated gradient background with floating orbs
- Code snippet visualization
- Statistics display
- Smooth scroll indicator

### Features Section
- Grid layout with glassmorphism cards
- Hover effects and animations
- Icon-based feature highlights

### Contact Form
- Form validation
- Loading states
- Success/error feedback
- API integration

### Footer
- Social media links
- Quick navigation
- Newsletter signup
- Responsive grid layout

## Building for Production

### Build Frontend

```bash
cd client
npm run build
```

The production-ready files will be in `client/dist/`

### Run Backend in Production

```bash
cd server
npm start
```

## Environment Variables

### Server (.env)

```env
NODE_ENV=development
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

## License

ISC

## Author

Your Name

---

Built with ❤️ using the MERN stack

# 🍕 Pizza Delivery App

<div align="center">

![Vue.js](https://img.shields.io/badge/Vue.js-3.2-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-6.0-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?style=for-the-badge&logo=docker&logoColor=white)

**A full-stack pizza ordering application built with Vue.js, Node.js, Express, and MongoDB**

[Features](#-features) • [Tech Stack](#-tech-stack) • [Quick Start](#-quick-start) • [Documentation](#-documentation)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Screenshots](#-screenshots)
- [Project Architecture](#-project-architecture)
- [Quick Start](#-quick-start)
- [API Documentation](#-api-documentation)
- [Development](#-development)
- [Testing](#-testing)
- [Deployment](#-deployment)

---

## 🎯 Overview

Pizza Delivery App is a modern, full-stack web application that provides a seamless pizza ordering experience. Users can browse a curated menu of specialty pizzas or unleash their creativity by building custom pizzas with their favorite toppings and sizes.

### Why This Project?

This application demonstrates:
- **Full-stack JavaScript development** with Vue.js frontend and Node.js backend
- **RESTful API design** and implementation
- **State management** using Pinia
- **Containerization** with Docker for easy deployment
- **Responsive design** with mobile-first approach
- **Real-time cart management** with localStorage persistence
- **Comprehensive testing** with Jest

---

## ✨ Features

### 🍕 Core Features
- **Browse Menu** - Explore 12+ specialty pizzas with detailed descriptions and pricing
- **Custom Pizza Builder** - Create your own masterpiece with 13 different toppings
- **Size Selection** - Choose from Small, Medium, Large, or X-Large (with dynamic pricing)
- **Shopping Cart** - Real-time cart updates with quantity management
- **Order Tracking** - Preview and reorder past orders using order numbers
- **Persistent Cart** - Cart data saved in localStorage (survives page refreshes)

### 🎨 User Experience
- **Mobile-First Design** - Fully responsive across all devices
- **Toast Notifications** - Visual feedback for user actions
- **Dynamic Pricing** - Real-time price calculation based on size and toppings
- **Ingredient Visualization** - See your custom pizza ingredients before ordering
- **Clean UI** - Modern, intuitive interface with smooth animations

---

## 🛠 Tech Stack

### Frontend
| Technology | Description |
|------------|-------------|
| **Vue.js 3** | Progressive JavaScript framework |
| **Vue Router** | Official routing library |
| **Pinia** | State management (Vuex successor) |
| **Sass/SCSS** | CSS preprocessing |
| **Jest** | Unit testing framework |

### Backend
| Technology | Description |
|------------|-------------|
| **Node.js** | JavaScript runtime |
| **Express.js** | Web application framework |
| **MongoDB** | NoSQL database |
| **Mongoose** | MongoDB object modeling |
| **CORS** | Cross-origin resource sharing |

### DevOps
| Technology | Description |
|------------|-------------|
| **Docker** | Containerization platform |
| **Docker Compose** | Multi-container orchestration |
| **ESLint** | Code linting |
| **Prettier** | Code formatting |

---

## 📸 Screenshots

<details>
<summary><b>View Screenshots</b></summary>

### Pizza Menu
![Menu Pizza](/docs/img/menu-pizza.png)

### Size Selection
![Select Size](/docs/img/select-size.png)

### Custom Pizza Builder
![Custom Pizza](/docs/img/customize-pizza.png)

### Shopping Cart
![Cart](/docs/img/pizza-in-cart.png)

### Order Confirmation
![Order Placed](/docs/img/order-placed.png)

### Mobile Experience
![Mobile First](/docs/img/mobile-first.png)

</details>

---

## 🏗 Project Architecture

```
pizza_delivery/
├── public/                 # Static assets
│   └── img/               # Pizza and ingredient images
├── src/
│   ├── components/        # Vue components
│   │   ├── CartComponent.vue
│   │   ├── MenuPizza.vue
│   │   ├── PizzaItem.vue
│   │   ├── IngredientList.vue
│   │   └── ...
│   ├── views/             # Page components
│   │   ├── IndexView.vue
│   │   ├── CartView.vue
│   │   ├── CustomPizzaView.vue
│   │   └── OrderPlacedView.vue
│   ├── store/             # Pinia stores
│   │   ├── PizzaStore.js
│   │   ├── OrdersStore.js
│   │   └── IngredientStore.js
│   ├── router/            # Vue Router configuration
│   └── App.vue            # Root component
├── mongo-init/            # MongoDB initialization
│   └── init-db.js         # Seed data
├── tests/                 # Unit tests
├── mongo.js               # Express server
├── docker-compose.yml     # Docker configuration
└── package.json           # Dependencies
```

### Data Flow
```
User Interface (Vue.js)
        ↓
   Pinia Stores (State Management)
        ↓
   Vue Router (Navigation)
        ↓
   Fetch API (HTTP Requests)
        ↓
   Express Server (Node.js)
        ↓
   MongoDB Database
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18 or higher)
- **Docker Desktop** (for MongoDB)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/pizza_delivery.git
cd pizza_delivery
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
# Copy the example env file
cp .env.example .env

# Edit .env with your configuration
# VUE_APP_API_URL=http://localhost:3000
# MONGODB_URI=mongodb://admin:password123@localhost:27017/orderpizza?authSource=admin
```

4. **Start MongoDB with Docker**
```bash
npm run docker:up
```

5. **Start the backend server**
```bash
npm run server
```

6. **Start the frontend development server**
```bash
npm run serve
```

7. **Open your browser**
```
http://localhost:8082/
```

### Docker Commands

```bash
# Start MongoDB container
npm run docker:up

# Stop MongoDB container
npm run docker:down

# View MongoDB logs
npm run docker:logs
```

---

## 📡 API Documentation

### Base URL
```
http://localhost:3000
```

### Endpoints

#### Get All Pizzas
```http
GET /pizza
```
**Response:**
```json
[
  {
    "_id": "...",
    "id": 1,
    "title": "Pepperoni Pizza",
    "description": "Classic pepperoni with mozzarella cheese",
    "image": "/img/pepperoni-pizza-notcustom.avif",
    "custom": false,
    "size": {
      "small": 8.99,
      "medium": 12.99,
      "large": 16.99,
      "xlarge": 20.99
    }
  }
]
```

#### Get All Ingredients
```http
GET /customizepizza
```
**Response:**
```json
[
  {
    "_id": "...",
    "id": 1,
    "name": "Pepperoni",
    "price": 1.50,
    "image": "/img/pepperoni.avif"
  }
]
```

#### Place an Order
```http
POST /placeorder
```
**Request Body:**
```json
{
  "orderNumber": "123456",
  "pizza": [
    {
      "title": "Pepperoni Pizza",
      "sizeSelected": "medium",
      "priceSelected": 12.99,
      "quantity": 2,
      "custom": false
    }
  ],
  "totalprice": 25.98,
  "date": "2025-11-18T16:30:00.000Z"
}
```

#### Get Order by Number
```http
GET /previeworder/:orderNumber
```
**Response:**
```json
{
  "orderNumber": "123456",
  "pizza": [...],
  "totalprice": 25.98,
  "date": "2025-11-18T16:30:00.000Z"
}
```

---

## 💻 Development

### Project Structure

- **Components**: Reusable Vue components
- **Views**: Page-level components
- **Stores**: Pinia stores for state management
- **Router**: Vue Router configuration
- **Tests**: Unit tests with Jest

### Available Scripts

```bash
# Start development server
npm run serve

# Build for production
npm run build

# Run unit tests
npm run test:unit

# Lint and fix files
npm run lint

# Start backend server
npm run server

# Docker commands
npm run docker:up    # Start MongoDB
npm run docker:down  # Stop MongoDB
npm run docker:logs  # View logs
```

### Code Style

This project uses:
- **ESLint** for JavaScript linting
- **Prettier** for code formatting
- **Vue Style Guide** for component conventions

---

## 🧪 Testing

### Run Tests
```bash
# Run all tests
npm run test:unit

# Run tests in watch mode
npm run test:unit -- --watch

# Run tests with coverage
npm run test:unit -- --coverage
```

### Test Coverage
Tests include:
- Component rendering
- User interactions
- Store mutations
- Cart functionality
- Order placement

---

## 🌐 Deployment

### Production Build

1. **Build the frontend**
```bash
npm run build
```

2. **Configure environment**
```bash
# Set production environment variables
VUE_APP_API_URL=https://your-api-domain.com
MONGODB_URI=mongodb://your-production-mongodb-uri
```

3. **Deploy**
- Frontend: Deploy `dist/` folder to static hosting (Netlify, Vercel, etc.)
- Backend: Deploy to Node.js hosting (Heroku, Railway, DigitalOcean, etc.)
- Database: Use MongoDB Atlas or similar cloud service

### Environment Configuration

The app uses different `publicPath` for development and production:
- **Development**: `/` (serves at `http://localhost:8082/`)
- **Production**: `/web/pizza_delivery/` (configurable in `vue.config.js`)

---

## 🙏 Acknowledgments

- Pizza images from various sources
- Vue.js community for excellent documentation
- MongoDB for flexible database solutions
- Docker for simplified deployment

---

<div align="center">

**Made with ❤️ and Vue.js**

⭐ Star this repo if you find it helpful!

</div>

Make for demonstration. Inspired by JulianaVanier.
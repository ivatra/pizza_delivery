# Quick Start

## Prerequisites

- **Docker Desktop** installed and running
- **Node.js** installed (v14 or higher)

## Running the Project

You need THREE terminal windows running at the same time:

### Terminal 1 - Start MongoDB (Docker)
```bash
docker-compose up -d
```
This will:
- Download MongoDB image (first time only)
- Start MongoDB container on port 27017
- Initialize the database with sample pizzas and ingredients

To check if MongoDB is running:
```bash
docker-compose ps
```

### Terminal 2 - Backend Server
```bash
npm run server
```
Output: `Example app listening on port 3000`

### Terminal 3 - Frontend Server
```bash
npm run serve
```
Output: `App running at: http://localhost:8080/web/pizza_delivery/`

## Access the Application

Open your browser to:
**http://localhost:8080/web/pizza_delivery/**

## First Time Setup

If this is your first time running the project:
```bash
# Install dependencies
npm install

# Start MongoDB with Docker
docker-compose up -d
```

## Stopping the Application

```bash
# Stop MongoDB
docker-compose down

# Stop backend/frontend: Press Ctrl+C in their terminals
```

## Troubleshooting

**MongoDB connection error?**
- Make sure Docker Desktop is running
- Check if MongoDB container is up: `docker-compose ps`
- Restart MongoDB: `docker-compose restart`

**Port already in use?**
- Backend (3000): Kill the process or change port in `mongo.js`
- MongoDB (27017): Stop other MongoDB instances

**No data showing?**
- Check if MongoDB initialized: `docker-compose logs mongodb`
- Restart containers: `docker-compose down && docker-compose up -d`

For detailed setup instructions, see [README.md](README.md)

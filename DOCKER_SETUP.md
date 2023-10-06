# Pizza Delivery App - Docker Setup

## ✅ Your Project is Ready!

The project has been configured to run with Docker for MongoDB.

## 🚀 Quick Start

Run these commands in **3 separate terminal windows**:

### Terminal 1: Start MongoDB (Docker)
```powershell
docker-compose up -d
```

### Terminal 2: Start Backend Server
```powershell
npm run server
```

### Terminal 3: Start Frontend
```powershell
npm run serve
```

## 🌐 Access the App

Open: **http://localhost:8080/web/pizza_delivery/**

## 📦 What Was Setup

1. **Docker MongoDB** - Running on port 27017 with sample data (pizzas & ingredients)
2. **Backend API** - Node.js/Express server on port 3000
3. **Frontend** - Vue.js app on port 8080
4. **Environment Variables** - `.env` file for configuration

## 🛠 Useful Commands

```powershell
# View MongoDB logs
docker-compose logs -f mongodb

# Stop MongoDB
docker-compose down

# Restart MongoDB (if needed)
docker-compose restart

# Check if containers are running
docker-compose ps

# Install/reinstall dependencies
npm install
```

## 📁 Files Created/Modified

- `docker-compose.yml` - Docker configuration for MongoDB
- `mongo-init/init-db.js` - Database initialization script with sample data
- `.env` - Environment variables (local MongoDB connection)
- `.env.example` - Template for environment variables
- `mongo.js` - Updated to use local MongoDB instead of Atlas
- `QUICK_START.md` - Quick reference guide

## 🔧 Troubleshooting

**MongoDB won't start?**
- Make sure Docker Desktop is running
- Check port 27017 isn't in use: `netstat -ano | findstr :27017`

**Backend connection error?**
- Ensure MongoDB container is running: `docker-compose ps`
- Check `.env` file has correct MongoDB URI

**No data showing in app?**
- Check MongoDB logs: `docker-compose logs mongodb`
- Look for "Database initialized successfully!" message

## 🗄 Database Info

- **Database Name**: orderpizza
- **Collections**: pizza, ingredient, order
- **Admin User**: admin / password123
- **Port**: 27017

## 📝 Notes

- MongoDB data persists in a Docker volume (`mongodb_data`)
- Sample data includes 5 pizzas and 13 ingredients
- The backend server connects to `mongodb://admin:password123@localhost:27017/orderpizza`

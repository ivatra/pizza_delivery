# Pizza Delivery App - Setup Instructions

## Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)
- MongoDB Atlas account (or local MongoDB)

## Quick Start Guide

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Configure Environment Variables
1. Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```

2. For **local development**, the default configuration should work:
   ```
   VUE_APP_API_URL=http://localhost:3000
   ```

3. For **GitHub Codespaces**, update the URL to your codespace URL:
   ```
   VUE_APP_API_URL=https://your-codespace-name-3000.app.github.dev
   ```

### Step 3: Start the Backend Server
In one terminal window, start the MongoDB/Express backend:
```bash
npm run server
```

The server will start on port 3000. You should see:
```
Example app listening on port 3000
```

### Step 4: Start the Vue Frontend
In a **separate** terminal window, start the Vue development server:
```bash
npm run serve
```

The Vue app will start on port 8080. Open your browser to:
```
http://localhost:8080/web/pizza_delivery/
```

## Running Both Servers

You need **TWO terminal windows** running simultaneously:
- Terminal 1: `npm run server` (backend on port 3000)
- Terminal 2: `npm run serve` (frontend on port 8080)

## MongoDB Configuration

The backend is configured to connect to MongoDB Atlas. The connection string is in `mongo.js`:
```javascript
const uri = "mongodb+srv://julianavanier:n5Wp1RhEFe7yNWFw@cluster0.vrbwnc0.mongodb.net/...";
```

**Note**: For production, you should move this connection string to a `.env` file and never commit credentials to version control.

## Using with GitHub Codespaces

If you're using GitHub Codespaces:

1. Start the backend server:
   ```bash
   npm run server
   ```

2. In the **PORTS** tab in VS Code:
   - Find port 3000
   - Right-click and select "Port Visibility" → "Public"

3. Copy the forwarded address for port 3000 (e.g., `https://your-codespace-3000.app.github.dev`)

4. Update your `.env` file with this URL:
   ```
   VUE_APP_API_URL=https://your-codespace-3000.app.github.dev
   ```

5. Start the frontend:
   ```bash
   npm run serve
   ```

## Troubleshooting

### Backend not connecting
- Check that MongoDB Atlas allows connections from your IP
- Verify the MongoDB connection string in `mongo.js`
- Ensure port 3000 is not already in use

### Frontend can't reach backend
- Verify the backend is running (`npm run server`)
- Check that `VUE_APP_API_URL` in `.env` matches your backend URL
- For Codespaces, ensure port 3000 is set to "Public" visibility

### "VUE_APP_API_URL is undefined"
- Restart the Vue dev server after changing `.env` files
- Ensure the variable name starts with `VUE_APP_`

## Available Scripts

- `npm run serve` - Start Vue frontend development server
- `npm run build` - Build for production
- `npm run server` - Start MongoDB/Express backend server
- `npm run test:unit` - Run unit tests
- `npm run lint` - Lint and fix code formatting

## Project Structure

```
├── src/
│   ├── components/     # Vue components
│   ├── store/         # Pinia stores
│   ├── views/         # Vue views/pages
│   └── router/        # Vue Router configuration
├── mongo.js           # Express/MongoDB backend server
├── .env               # Environment variables (not committed)
├── .env.example       # Example environment variables
└── package.json       # Project dependencies
```

## Database Collections

The MongoDB database `orderpizza` contains:
- `pizza` - Available pizzas
- `ingredient` - Available toppings/ingredients
- `order` - Placed orders

## API Endpoints

- `GET /pizza` - Get all available pizzas
- `GET /customizepizza` - Get all available ingredients
- `POST /placeorder` - Place a new order
- `GET /previeworder/:id` - Get order details by order number

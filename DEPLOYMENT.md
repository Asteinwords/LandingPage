# Deployment Guide for Render

This project can be deployed to Render using two approaches:

## Option 1: Using render.yaml (Recommended)

The `render.yaml` file is configured to deploy both the client and server automatically.

### Steps:
1. Push your code to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com/)
3. Click "New" → "Blueprint"
4. Connect your GitHub repository
5. Render will automatically detect `render.yaml` and create both services
6. Add your MongoDB URI in the environment variables for the server

## Option 2: Manual Deployment

### Deploy Server (Backend)

1. Go to Render Dashboard
2. Click "New" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: landing-page-server
   - **Root Directory**: `server`
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free
5. Add Environment Variables:
   - `NODE_ENV` = `production`
   - `MONGODB_URI` = Your MongoDB connection string
   - `PORT` = `10000` (Render assigns this automatically)

### Deploy Client (Frontend)

1. Go to Render Dashboard
2. Click "New" → "Static Site"
3. Connect your GitHub repository
4. Configure:
   - **Name**: landing-page-client
   - **Root Directory**: `client`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
5. Add Rewrite Rule:
   - Source: `/*`
   - Destination: `/index.html`

### Update API URL

After deploying the server, update the API URL in the client:

In `client/src/components/ContactForm.jsx`, change:
```javascript
const response = await axios.post('http://localhost:5000/api/contact', formData);
```

To:
```javascript
const response = await axios.post('https://your-server-name.onrender.com/api/contact', formData);
```

Or better, use an environment variable:
```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
const response = await axios.post(`${API_URL}/api/contact`, formData);
```

Then create `client/.env.production`:
```
VITE_API_URL=https://your-server-name.onrender.com
```

## MongoDB Setup

You can use:
- **MongoDB Atlas** (Recommended): Free tier available at https://www.mongodb.com/cloud/atlas
- Or any other MongoDB hosting service

## Important Notes

1. **Free Tier Limitations**:
   - Services spin down after 15 minutes of inactivity
   - First request after spin-down may take 30-60 seconds

2. **CORS Configuration**:
   - Make sure to update CORS in `server/server.js` to allow your frontend domain
   - Update from `app.use(cors())` to:
   ```javascript
   app.use(cors({
     origin: ['https://your-client-name.onrender.com', 'http://localhost:5173']
   }));
   ```

3. **Environment Variables**:
   - Never commit `.env` files to GitHub
   - Set all environment variables in Render dashboard

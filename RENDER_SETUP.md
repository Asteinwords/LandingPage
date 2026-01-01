# Quick Deployment Steps for Render

## What I've Done

I've configured your project for Render deployment:

1. ✅ Created `render.yaml` - Automated deployment configuration
2. ✅ Updated `ContactForm.jsx` - Now uses environment variable for API URL
3. ✅ Created `client/.env.production` - Production environment template
4. ✅ Updated `server/server.js` - CORS configured for production
5. ✅ Created `DEPLOYMENT.md` - Comprehensive deployment guide

## Fix Your Current Render Deployment

Your deployment failed because Render tried to run just `npm` as the build command. Here's how to fix it:

### Option 1: Use render.yaml (Easiest)

1. Commit and push all files including `render.yaml`:
   ```bash
   git add .
   git commit -m "Add Render deployment configuration"
   git push
   ```

2. In Render Dashboard:
   - Delete the current failed service
   - Click "New" → "Blueprint"
   - Select your repository
   - Render will auto-detect `render.yaml` and create both services

### Option 2: Manual Fix

If you want to keep your current Render service:

1. Go to your Render service settings
2. Update **Build Command** to: `cd server && npm install`
3. Update **Start Command** to: `cd server && npm start`
4. Set **Root Directory** to: `server`

## Important: Environment Variables

After deployment, add these in Render Dashboard → Environment:

**For Server:**
- `MONGODB_URI` = Your MongoDB Atlas connection string
- `CLIENT_URL` = Your client URL (e.g., `https://your-app.onrender.com`)
- `NODE_ENV` = `production`

**For Client (.env.production):**
- Update `VITE_API_URL` with your actual server URL

## MongoDB Setup

If you don't have MongoDB Atlas:
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free cluster
3. Get connection string
4. Add to Render environment variables

## Next Steps

1. Push code to GitHub
2. Follow Option 1 or Option 2 above
3. Wait for deployment (first deploy takes 2-5 minutes)
4. Test your live site!

See `DEPLOYMENT.md` for detailed instructions.

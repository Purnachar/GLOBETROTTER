# Quick Deployment Checklist

Follow these steps to deploy your application to Render:

## ✅ Pre-Deployment (Completed)
- [x] Build configuration created (`render.yaml`)
- [x] Server updated for production
- [x] Frontend configured with environment variables
- [x] Production build tested successfully

## 🚀 Deployment Steps

### 1. Push to GitHub
```bash
git add .
git commit -m "Add Render deployment configuration"
git push origin main
```

### 2. Deploy Backend
1. Go to https://dashboard.render.com
2. Click "New +" → "Web Service"
3. Connect GitHub repository
4. Configure:
   - Name: `globetrotter-backend`
   - Root Directory: `server`
   - Build: `npm install`
   - Start: `npm start`
5. Add environment variables:
   - `MONGODB_URI`: [Your MongoDB Atlas connection string]
   - `NODE_ENV`: `production`
   - `PORT`: `5000`
6. Click "Create Web Service"
7. **Copy the backend URL** (e.g., `https://globetrotter-backend.onrender.com`)

### 3. Deploy Frontend
1. Click "New +" → "Static Site"
2. Connect same repository
3. Configure:
   - Name: `globetrotter-frontend`
   - Build: `npm install && npm run build`
   - Publish: `build`
4. Add environment variable:
   - `REACT_APP_API_URL`: `https://globetrotter-backend.onrender.com/api`
5. Click "Create Static Site"

### 4. Update Backend CORS
1. Go to backend service → "Environment"
2. Add:
   - `FRONTEND_URL`: `https://globetrotter-frontend.onrender.com`
3. Save (triggers redeploy)

### 5. Test Deployment
- Visit frontend URL
- Check all pages load
- Test contact form
- Verify destinations and testimonials

## 📚 Full Documentation
See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions, troubleshooting, and custom domain setup.

## ⚡ Quick Links
- Render Dashboard: https://dashboard.render.com
- MongoDB Atlas: https://cloud.mongodb.com
- Your Repository: https://github.com/[your-username]/gg

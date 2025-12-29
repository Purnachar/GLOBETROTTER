# Deploying Globetrotter to Render

This guide walks you through deploying both the frontend and backend of the Globetrotter travel application to Render.

## Prerequisites

- [x] GitHub account with your code repository
- [x] MongoDB Atlas database set up and running
- [ ] Render account (sign up at https://render.com)

---

## Step 1: Prepare Your Repository

1. **Commit all changes** to your GitHub repository:
   ```bash
   git add .
   git commit -m "Add Render deployment configuration"
   git push origin main
   ```

2. **Verify files** are in place:
   - ✅ `render.yaml` in root directory
   - ✅ Updated `server/server.js` with production CORS
   - ✅ `src/services/api.js` using environment variables

---

## Step 2: Deploy Backend to Render

### Create Backend Service

1. **Go to Render Dashboard**: https://dashboard.render.com
2. **Click "New +"** → Select **"Web Service"**
3. **Connect your GitHub repository**
4. **Configure the service**:
   - **Name**: `globetrotter-backend`
   - **Region**: Oregon (US West) or closest to you
   - **Branch**: `main`
   - **Root Directory**: `server`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free`

### Set Environment Variables

Click **"Advanced"** and add these environment variables:

| Key | Value |
|-----|-------|
| `MONGODB_URI` | Your MongoDB Atlas connection string |
| `NODE_ENV` | `production` |
| `PORT` | `5000` |

> [!IMPORTANT]
> Your MongoDB connection string should look like:
> ```
> mongodb+srv://username:password@cluster.mongodb.net/globetrotter?retryWrites=true&w=majority
> ```

5. **Click "Create Web Service"**

6. **Wait for deployment** (5-10 minutes)

7. **Copy your backend URL** (e.g., `https://globetrotter-backend.onrender.com`)

8. **Test the API**:
   - Visit: `https://globetrotter-backend.onrender.com/api/health`
   - Should return: `{"status":"OK","message":"Server is running"}`

---

## Step 3: Deploy Frontend to Render

### Create Frontend Service

1. **Click "New +"** → Select **"Static Site"**
2. **Connect the same GitHub repository**
3. **Configure the service**:
   - **Name**: `globetrotter-frontend`
   - **Region**: Oregon (US West) or same as backend
   - **Branch**: `main`
   - **Root Directory**: Leave empty (root)
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `build`

### Set Environment Variables

Click **"Advanced"** and add:

| Key | Value |
|-----|-------|
| `REACT_APP_API_URL` | `https://globetrotter-backend.onrender.com/api` |

> [!WARNING]
> Make sure to replace the URL above with YOUR actual backend URL from Step 2!

4. **Click "Create Static Site"**

5. **Wait for deployment** (5-10 minutes)

6. **Your site will be live** at: `https://globetrotter-frontend.onrender.com`

---

## Step 4: Update Backend CORS

After frontend is deployed, update the backend environment variables:

1. Go to your **backend service** in Render
2. Click **"Environment"** tab
3. Add new environment variable:
   - **Key**: `FRONTEND_URL`
   - **Value**: `https://globetrotter-frontend.onrender.com`
4. **Save Changes** (this will trigger a redeploy)

---

## Step 5: Configure Custom Domain (Optional)

### For Frontend (globetrotter-travel.com)

1. In your frontend service, go to **"Settings"** → **"Custom Domains"**
2. Click **"Add Custom Domain"**
3. Enter: `globetrotter-travel.com`
4. Render will provide DNS records to add:
   - **A Record**: Point to Render's IP
   - **CNAME**: `www` → your Render URL

5. **Update DNS** at your domain registrar:
   - Add the A record for `@` (root domain)
   - Add CNAME for `www`

6. **Wait for DNS propagation** (can take up to 48 hours, usually faster)

7. **SSL Certificate** will be automatically provisioned by Render

---

## Step 6: Verify Deployment

### Test Backend Endpoints

```bash
# Health check
curl https://globetrotter-backend.onrender.com/api/health

# Destinations
curl https://globetrotter-backend.onrender.com/api/destinations

# Testimonials
curl https://globetrotter-backend.onrender.com/api/testimonials
```

### Test Frontend

1. **Visit your site**: `https://globetrotter-frontend.onrender.com`
2. **Check all pages**:
   - ✅ Home page loads
   - ✅ Destinations display correctly
   - ✅ Testimonials load from backend
   - ✅ Contact form submits successfully
   - ✅ Interactive map works

---

## Important Notes

> [!NOTE]
> **Free Tier Limitations**
> - Services spin down after 15 minutes of inactivity
> - First request after inactivity may take 30-60 seconds
> - 750 hours/month free (enough for one service running 24/7)

> [!TIP]
> **Keep Services Active**
> - Use a service like UptimeRobot to ping your backend every 10 minutes
> - This prevents the free tier from spinning down

> [!CAUTION]
> **MongoDB Atlas IP Whitelist**
> - Make sure to allow connections from anywhere (0.0.0.0/0) in MongoDB Atlas
> - Or add Render's IP addresses to your whitelist

---

## Troubleshooting

### Backend Issues

**Problem**: "Application failed to respond"
- Check logs in Render dashboard
- Verify MongoDB connection string is correct
- Ensure MongoDB Atlas allows connections from 0.0.0.0/0

**Problem**: CORS errors
- Verify `FRONTEND_URL` environment variable is set
- Check backend logs for CORS-related errors

### Frontend Issues

**Problem**: API calls failing
- Verify `REACT_APP_API_URL` is set correctly
- Check browser console for errors
- Ensure backend is running and accessible

**Problem**: Blank page
- Check build logs for errors
- Verify `build` directory is being published
- Check browser console for JavaScript errors

### Database Issues

**Problem**: "MongoNetworkError"
- Check MongoDB Atlas IP whitelist
- Verify connection string in environment variables
- Ensure database user has correct permissions

---

## Monitoring & Logs

- **View Logs**: Go to service → "Logs" tab
- **Metrics**: Go to service → "Metrics" tab
- **Events**: Go to service → "Events" tab for deployment history

---

## Updating Your Application

To deploy updates:

1. **Make changes** to your code locally
2. **Commit and push** to GitHub:
   ```bash
   git add .
   git commit -m "Your update message"
   git push origin main
   ```
3. **Render auto-deploys** from GitHub (takes 5-10 minutes)
4. **Monitor deployment** in Render dashboard

---

## Next Steps

- [ ] Set up custom domain
- [ ] Configure email notifications for deployment failures
- [ ] Add monitoring with UptimeRobot
- [ ] Set up automated backups for MongoDB
- [ ] Consider upgrading to paid tier for better performance

---

## Support

- **Render Docs**: https://render.com/docs
- **Render Community**: https://community.render.com
- **MongoDB Atlas Support**: https://www.mongodb.com/cloud/atlas/support

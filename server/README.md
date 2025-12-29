# Backend Setup Instructions

## Prerequisites
1. **MongoDB Atlas Account**: Sign up at https://www.mongodb.com/cloud/atlas
2. **Node.js**: Ensure you have Node.js installed (v14 or higher)

## Step 1: Setup MongoDB Atlas

1. Go to https://www.mongodb.com/cloud/atlas and sign in
2. Create a new cluster (free tier is fine)
3. Click "Connect" on your cluster
4. Add your IP address to the whitelist (or use 0.0.0.0/0 for development)
5. Create a database user with username and password
6. Choose "Connect your application"
7. Copy the connection string (it looks like: `mongodb+srv://username:password@cluster.mongodb.net/`)

## Step 2: Configure Backend

1. Navigate to the server directory:
   ```
   cd server
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Update the `.env` file with your MongoDB Atlas connection string:
   ```
   MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/globetrotter?retryWrites=true&w=majority
   PORT=5000
   ```

## Step 3: Seed the Database

Run the seed script to populate your database with initial data:
```
npm run seed
```

## Step 4: Start the Backend Server

```
npm run dev
```

The server should start on http://localhost:5000

## Step 5: Install Frontend Dependencies

In a new terminal, navigate to the project root and install axios:
```
npm install
```

## Step 6: Start the Frontend

```
npm start
```

The React app should start on http://localhost:3000

## Testing the Integration

1. **Test Destinations**: The destinations should load from the backend
2. **Test Testimonials**: Testimonials should load from the backend
3. **Test Contact Form**: Submit the contact form and check if it saves to MongoDB

## Viewing Contact Submissions

To view all contact form submissions, visit:
```
http://localhost:5000/api/contact
```

This will show all messages sent through the contact form in JSON format.

## Troubleshooting

- **CORS errors**: Make sure the backend server is running on port 5000
- **Connection refused**: Check if MongoDB Atlas IP whitelist includes your IP
- **Authentication failed**: Verify your MongoDB username and password in .env
- **Module not found**: Run `npm install` in both root and server directories

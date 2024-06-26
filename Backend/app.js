import express from 'express';
import connectDB from './configs/db.js'; // Ensure the correct relative path and extension
import bodyParser from 'body-parser';
// Define Routes
// import restaurantRoutes from './routes/Restaurants.js';
import router from './routes/Restaurants.js';
import cors from 'cors';

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(bodyParser.json());
// Use CORS middleware
app.use(cors());

app.use('/restaurants', router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

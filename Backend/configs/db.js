import mongoose from 'mongoose';

const connectDB = async () => {
  try {
  // Connect to MongoDB database
      await mongoose.connect('mongodb://127.0.0.1:27017/restaurantdb', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

      const db = mongoose.connection;
      db.on('error', console.error.bind(console, 'MongoDB connection error:'));
      db.once('open', () => {
        console.log('Connected to MongoDB database');
      });

    
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    // process.exit(1);
  }
};

export default connectDB;

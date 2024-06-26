import mongoose from 'mongoose';

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slogan: {
    type: String,
    required: true,
  },
  startingPrice: {
    type: Number,
    required: true,
  },
  ratings: {
    type: Number,
    required: true,
  },
});

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);
export default Restaurant;

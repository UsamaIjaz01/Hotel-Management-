import express from 'express';
const router = express.Router();
import Restaurant from '../models/Restaurant.js'; // Ensure the correct relative path and extension

// Add a new restaurant
router.post('/', async (req, res) => {
    console.log("In Post");
  const { name, slogan, startingPrice, ratings } = req.body;
  console.log(name) ;
  console.log(slogan);
  console.log(startingPrice);
  console.log(ratings);

  try {
    const newRestaurant = new Restaurant({
      name,
      slogan,
      startingPrice,
      ratings,
    });

    const restaurant = await newRestaurant.save();
    res.status(200).json(restaurant); // Status 200 for success
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Get all restaurants
router.get('/', async (req, res) => {
    console.log("IN GET");
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Update a restaurant
router.put('/:id', async (req, res) => {
  const { name, slogan, startingPrice, ratings } = req.body;

  const updatedRestaurant = {
    name,
    slogan,
    startingPrice,
    ratings,
  };

  try {
    const restaurant = await Restaurant.findByIdAndUpdate(
      req.params.id,
      { $set: updatedRestaurant },
      { new: true }
    );

    if (!restaurant) {
      return res.status(404).json({ msg: 'Restaurant not found' });
    }

    res.json(restaurant);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Delete a restaurant
router.delete('/:id', async (req, res) => {
    console.log("IN DELETE");

  try {
    const restaurant = await Restaurant.findById(req.params.id);
    console.log(restaurant);

    if (!restaurant) {
      return res.status(404).json({ msg: 'Restaurant not found' });
    }

    await restaurant.deleteOne();
        res.json({ msg: 'Restaurant removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

export default router;

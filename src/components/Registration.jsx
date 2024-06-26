import React, { useState } from 'react';
import AddButton from './AddButton';

const Registration = () => {
  const [restaurantName, setRestaurantName] = useState('');
  const [slogan, setSlogan] = useState('');
  const [startingPrice, setStartingPrice] = useState('');
  const [ratings, setRatings] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Validate form fields (simple validation for demonstration)
    if (!restaurantName || !startingPrice || !ratings) {
      alert('Please fill in all required fields.');
      return;
    }
    // Convert startingPrice and ratings to numbers
    const startingPriceNumber = parseFloat(startingPrice);
    const ratingsNumber = parseFloat(ratings);
    // Validate numeric fields
    if (isNaN(startingPriceNumber) || isNaN(ratingsNumber)) {
      alert('Starting Price and Ratings must be numeric values.');
      return;
    }
  };

  const resetFormFields = () => {
    setRestaurantName('');
    setSlogan('');
    setStartingPrice('');
    setRatings('');
  };

  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-6">
      <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        <div className="p-6 bg-white border-b border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Register Restaurant</h2>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label htmlFor="restaurantName" className="block text-sm font-medium text-gray-700">
                Restaurant Name
              </label>
              <input
                type="text"
                id="restaurantName"
                name="restaurantName"
                value={restaurantName}
                onChange={(e) => setRestaurantName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="slogan" className="block text-sm font-medium text-gray-700">
                Slogan
              </label>
              <input
                type="text"
                id="slogan"
                name="slogan"
                value={slogan}
                onChange={(e) => setSlogan(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="startingPrice" className="block text-sm font-medium text-gray-700">
                Starting Price
              </label>
              <input
                type="number"
                step="any"
                id="startingPrice"
                name="startingPrice"
                value={startingPrice}
                onChange={(e) => setStartingPrice(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="ratings" className="block text-sm font-medium text-gray-700">
                Ratings
              </label>
              <input
                type="number"
                step="any"
                id="ratings"
                name="ratings"
                value={ratings}
                onChange={(e) => setRatings(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            
            <div>
              <AddButton
                restaurantName={restaurantName}
                slogan={slogan}
                startingPrice={startingPrice}
                ratings={ratings}
                onSuccess={() => {
                  resetFormFields();
                  setShowPopup(true);
                  setTimeout(() => setShowPopup(false), 3000); // Hide the popup after 3 seconds
                }}
              />
            </div>
          </form>
          {showPopup && (
            <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded">
              Restaurant Added Successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Registration;

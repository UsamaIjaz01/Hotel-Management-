import React from 'react';
import axios from 'axios';

const AddButton = ({ restaurantName, slogan, startingPrice, ratings, onSuccess }) => {
  const handleAddButtonClick = async () => {
    const restaurantData = {
      name: restaurantName,
      slogan: slogan,
      startingPrice: parseFloat(startingPrice),
      ratings: parseFloat(ratings)
    };

    try {
      const response = await axios.post('http://localhost:3000/restaurants', restaurantData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        console.log('Restaurant added successfully:', response.data);
        onSuccess(); // Call the onSuccess function to reset form and show popup
      } else {
        console.error('Failed to add restaurant:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding restaurant:', error);
    }
  };

  return (
    <button
      type="button"
      className="inline-flex items-center justify-center px-24 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      onClick={handleAddButtonClick}
    >
      Add
    </button>
  );
};

export default AddButton;

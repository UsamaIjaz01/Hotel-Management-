import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


const HotelCard = ({ hotel, onDelete, onEdit }) => {
  const { _id, name, slogan, ratings, startingPrice } = hotel;
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name, slogan, ratings, startingPrice });


  const handleDeleteClick = async () => {
    try {
      const response = await axios.delete(`http://localhost:3000/restaurants/${_id}`);
      console.log('Delete response:', response.data);
      onDelete(_id); // Call onDelete function to update UI
      window.location.reload(); // Reload the page after successful deletion

    } catch (error) {
      console.error('Error deleting restaurant:', error.message);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveClick = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/restaurants/${_id}`, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Edit response:', response.data);
      onEdit(_id, response.data); // Call onEdit function to update UI
      setIsEditing(false);
      window.location.reload(); // Reload the page after successful edit
    } catch (error) {
      console.error('Error editing restaurant:', error.message);
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 w-full md:w-1/2 lg:w-1/3 p-4">
      <div className="bg-gradient-to-r from-blue-500 to-blue-400 p-1 rounded-lg">
        <div className="bg-white p-6 rounded-lg">
          <div className="mb-4">
            <div className="flex justify-center items-center bg-blue-200 rounded-full h-16 w-16 mx-auto mb-4">
              <svg className="h-8 w-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2zm6.36-5.78C16.53 16.44 14.42 17 12 17s-4.53-.56-6.36-1.78C5.34 14.22 5 13.14 5 12s.34-2.22 1.64-3.22C7.47 7.56 9.58 7 12 7s4.53.56 6.36 1.78C18.66 9.78 19 10.86 19 12s-.34 2.22-1.64 3.22z"/>
              </svg>
            </div>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="text-2xl font-bold text-gray-800 text-center w-full mb-4"
              />
            ) : (
              <h2 className="text-2xl font-bold text-gray-800 text-center">{name}</h2>
            )}
          </div>
          {isEditing ? (
            <textarea
              name="slogan"
              value={formData.slogan}
              onChange={handleInputChange}
              className="text-gray-600 text-center w-full mb-4"
            />
          ) : (
            <p className="text-gray-600 text-center mb-4">{slogan}</p>
          )}
          <div className="flex justify-center items-center mb-4">
            {isEditing ? (
              <>
                <input
                  type="number"
                  name="ratings"
                  value={formData.ratings}
                  onChange={handleInputChange}
                  className="text-gray-700 w-1/2 text-center"
                />
                <span className="mx-2 text-gray-400">•</span>
                <input
                  type="number"
                  name="startingPrice"
                  value={formData.startingPrice}
                  onChange={handleInputChange}
                  className="text-gray-700 w-1/2 text-center"
                />
              </>
            ) : (
              <>
                <p className="text-gray-700">{`Ratings: ${ratings}`}</p>
                <span className="mx-2 text-gray-400">•</span>
                <p className="text-gray-700">{`Starting Price: $${startingPrice}`}</p>
              </>
            )}
          </div>
          <div className="text-center">
            {isEditing ? (
              <button
                onClick={handleSaveClick}
                className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300"
              >
                Save
              </button>
            ) : (
              <>
                <button
                  onClick={handleDeleteClick}
                  className="ml-2 bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition duration-300"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
                <button
                  onClick={handleEditClick}
                  className="ml-2 bg-yellow-500 text-white px-3 py-1 rounded-full hover:bg-yellow-600 transition duration-300"
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;

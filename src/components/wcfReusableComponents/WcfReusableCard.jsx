// src/components/Card.jsx
import React from 'react';

const WcfReusableCard = ({ image, title, date, time, artist, buttonType }) => {
  // Helper function to format the date (only if date exists)
  const formatDate = (dateString) => {
    if (!dateString) return ''; // Return empty string if no date
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Helper function to format the time (only if time exists)
  const formatTime = (timeString) => {
    if (!timeString) return ''; // Return empty string if no time
    return new Date(`1970-01-01T${timeString}Z`).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    }).toLowerCase();
  };

  // Determine button styles based on buttonType (only if buttonType exists)
  let buttonClassName = "w-full py-2 px-4 rounded-full font-bold ";
  if (buttonType === 'ticket-closed') {
    buttonClassName += "bg-red-500 text-white cursor-not-allowed opacity-50";
  } else if (buttonType === 'sold-out') {
    buttonClassName += "bg-gray-500 text-white cursor-not-allowed opacity-50";
  } else if (buttonType === 'free') {
    buttonClassName += "bg-green-500 text-white hover:bg-green-600 transition-colors duration-300";
  } else if (buttonType) { // Check if buttonType exists and has a value
    // Default button style (if buttonType is not one of the above)
    buttonClassName += "bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300";
  }

  const formattedDate = formatDate(date);
  const formattedTime = formatTime(time);
  const showDateTime = formattedDate || formattedTime; // Check if we have *either* date or time

  return (
    <div className="bg-black rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2 text-white">{title}</h2>
        {/* Conditionally render date/time */}
        {showDateTime && (
          <p className="text-gray-400 mb-1">
            {formattedDate} {formattedDate && formattedTime ? '|' : ''} {formattedTime}
          </p>
        )}
        <p className="text-gray-300 mb-4"> {artist}</p>
        {/* Conditionally render button OR horizontal line */}
        {buttonType ? (
          <button className={buttonClassName}>{
            buttonType === 'ticket-closed' ? 'Ticket Closed' :
              buttonType === 'sold-out' ? 'Sold Out' :
                buttonType === 'free' ? 'Free Entry for All' :
                  'View Details' // Default button text
          }</button>
        ) : (
          <div className="w-full h-[2px] bg-gray-500"></div>
        )}
      </div>
    </div>
  );
};

export default WcfReusableCard;
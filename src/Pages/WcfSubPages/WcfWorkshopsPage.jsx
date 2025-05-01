// src/components/Workshops.jsx
import React from 'react';
import Card from '../../components/wcfReusableComponents/WcfReusableCard'; // Import the Card component

const WcfWorkshops = () => {
  const workshops = [
    {
      id: 1,
      title: 'Workshop 1',
      image: '/placeholder-workshop1.jpg',
      date: '2024-10-29',
      time: '10:00:00',
      artist: 'Instructor X',
      // Notice: No buttonType here
    },
    {
      id: 2,
      title: 'Workshop 2',
      image: '/placeholder-workshop2.jpg',
      date: '2024-10-30',
      time: '14:00:00',
      artist: 'Instructor Y',
      // Notice: No buttonType here
    },
    // ... more workshop data
  ];

  return (
    <div className="bg-black text-white font-sans">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">Workshops</h1>
        <p className="text-lg text-center mb-10">
          {/* Your subtitle here */}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {workshops.map((workshop) => (
            <Card
              key={workshop.id}
              image={workshop.image}
              title={workshop.title}
              date={workshop.date}
              time={workshop.time}
              artist={workshop.artist}
            // No buttonType prop passed
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WcfWorkshops;
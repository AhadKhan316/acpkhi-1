// src/components/Performances.jsx
import React from 'react';
import Card from '../../components/wcfReusableComponents/WcfReusableCard'; // Import the Card component

const WcfPerformances = () => {
  const performances = [
    {
      id: 1,
      title: 'Performance 1',
      image: '/placeholder-performance1.jpg',
      date: '2024-10-27',
      time: '19:00:00',
      artist: 'Artist A',
      buttonType: 'ticket-closed',
    },
    {
      id: 2,
      title: 'Performance 2',
      image: '/placeholder-performance2.jpg',
      date: '2024-10-28',
      time: '20:30:00',
      artist: 'Artist B',
      buttonType: 'free',
    },
    // ... more performance data
  ];

  return (
    <div className="bg-white dark:bg-black text-gray-800 dark:text-gray-200 font-sans">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">Performances</h1>
        <p className="text-lg text-center mb-10">
          {/* Your subtitle here */}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {performances.map((performance) => (
            <Card
              key={performance.id}
              image={performance.image}
              title={performance.title}
              date={performance.date}
              time={performance.time}
              artist={performance.artist}
              buttonType={performance.buttonType}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WcfPerformances;
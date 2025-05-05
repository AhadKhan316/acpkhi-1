import React from 'react';

const FullScreenVideo = () => {
  const videoUrl = "https://www.youtube.com/embed/y2B89Bf5SHA?si=PKFZkNlKqjJa5go_&autoplay=1&mute=1&loop=1&playlist=y2B89Bf5SHA";

  return (
    <section className="relative w-full h-screen overflow-hidden py-12 mt-22">
      <div className="absolute inset-0">
        <iframe
          className="w-full h-full"
          src={videoUrl}
          title="World Culture Festival Highlights"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
};

export default FullScreenVideo;
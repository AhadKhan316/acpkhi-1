import WcfReusableSlider from '../../components/wcfReusableComponents/WcfReusableSlider';

const CommunityBuilding = () => {
  // Sample slide data based on your screenshot
  const slides = [
    {
      images: [
        { src: 'https://via.placeholder.com/600x400?text=Workshop+1', alt: 'Workshop 1' },
        { src: 'https://via.placeholder.com/600x400?text=Workshop+2', alt: 'Workshop 2' },
      ],
      caption: 'MASHRIKA PERFORMING ARTS COMPANY FROM RWANDA CONDUCTING A WORKSHOP AT A UNIVERSITY IN KARACHI.',
    },
    {
      images: [
        { src: 'https://via.placeholder.com/600x400?text=Art+Per+1', alt: 'Art Per 1' },
        { src: 'https://via.placeholder.com/600x400?text=Art+Per+2', alt: 'Art Per 2' },
      ],
      caption: 'MEMBERS OF ART PER AT KOSOVO ENGAGING A COMMUNITY BUILDING WORKSHOP.',
    },
    {
      images: [
        { src: 'https://via.placeholder.com/600x400?text=Theatre+1', alt: 'Theatre 1' },
      ],
      caption: 'WORKSHOP BY FRANCE LE LAY (FRANCE) THEATRE WORKSHOP AT THE GREENWICH UNIVERSITY.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">


      {/* Main Content */}
      <main className="flex-1 py-6 md:py-10 px-4 md:px-6">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-4">COMMUNITY BUILDING</h1>
        <p className="text-center text-gray-600 mb-6 md:mb-10 max-w-3xl mx-auto">
          THE WORLD CULTURE FESTIVAL-KARACHI ISN’T JUST A FESTIVAL; IT IS A MOVEMENT FOSTERING CONNECTIONS AND LEAVING AN POSITIVE IMPACT ON ALL SECTION OF SOCIETY.
        </p>

        {/* Swiper Slider Section 1 */}
        <section className="mb-6 md:mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">WORKSHOP</h2>
          <WcfReusableSlider slides={slides.slice(0, 2)} /> {/* First two slides */}
        </section>

        {/* Swiper Slider Section 2 */}
        <section>
          <WcfReusableSlider slides={slides.slice(2)} /> {/* Last slide */}
        </section>
      </main>
    </div>
  );
};

export default CommunityBuilding;
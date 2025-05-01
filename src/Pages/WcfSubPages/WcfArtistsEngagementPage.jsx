import React from "react";
import EngagementCarousel from "../../components/wcfReusableComponents/WcfArtistEngagementCarousel";

import artistsEngagement1 from '/src/assets/wcf-assets/artist-engagement1.png'


const WcfArtistEngagement = () => {

  const collaborationSlides = [
    {
      image: { src: artistsEngagement1, alt: 'Artist 1' },
      caption: 'LOCAL ARTISTS COLLABORATING ON A MURAL PROJECT IN KARACHI.',
      link: '#',
    },
    {
      image: { src: artistsEngagement1, alt: 'Artist 2' },
      caption: 'INTERNATIONAL ARTISTS SHARING THEIR WORK AT A GALLERY EVENT.',
      link: '#',
    },
    {
      image: { src: artistsEngagement1, alt: 'Artist 3' },
      caption: 'AN ARTIST CONDUCTING A LIVE PAINTING SESSION AT THE FESTIVAL.',
      link: '#',
    },
    {
      image: { src: artistsEngagement1, alt: 'Artist 3' },
      caption: 'AN ARTIST CONDUCTING A LIVE PAINTING SESSION AT THE FESTIVAL.',
      link: '#',
    },
  ];

  // Data for Artist Workshops section (example)
  const workshopSlides = [
    {
      image: { src: artistsEngagement1, alt: 'Workshop 1' },
      caption: 'WORKSHOP ON TRADITIONAL PAINTING TECHNIQUES IN KARACHI.',
      link: '#',
    },
    {
      image: { src: artistsEngagement1, alt: 'Workshop 2' },
      caption: 'INTERACTIVE SESSION ON MODERN SCULPTURE AT THE FESTIVAL.',
      link: '#',
    },
    {
      image: { src: artistsEngagement1, alt: 'Workshop 3' },
      caption: 'ARTISTS TEACHING DIGITAL ART TO YOUNG STUDENTS.',
      link: '#',
    },
    {
      image: { src: artistsEngagement1, alt: 'Workshop 3' },
      caption: 'ARTISTS TEACHING DIGITAL ART TO YOUNG STUDENTS.',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Main Content */}
      <main className="flex-1 py-6 md:py-10 px-4 md:px-6">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-2 text-black">
          Artist Engagement
        </h1>
        <p className="text-center text-black mb-6 md:mb-10 max-w-3xl mx-auto">
          The World Culture Festival-Karachi brings artists together to inspire, collaborate, and create meaningful connections.
        </p>

        {/* Artist Collaborations Section */}
        <EngagementCarousel
          slides={collaborationSlides}
          title="ARTIST COLLABORATIONS"
          sectionClassName=""
          cardClassName="max-w-sm mx-auto"
          titleClassName="text-xl md:text-2xl text-white"
          imageAspectRatio="4/3"
          maxImageHeight="400px"
        />

        {/* Artist Workshops Section */}
        <EngagementCarousel
          slides={workshopSlides}
          title="ARTIST WORKSHOPS"
          sectionClassName=""
          cardClassName="max-w-sm mx-auto"
          titleClassName="text-xl md:text-2xl text-white"
          imageAspectRatio="4/3"
          maxImageHeight="400px"
        />
      </main>
    </div>
  );
};

export default WcfArtistEngagement;
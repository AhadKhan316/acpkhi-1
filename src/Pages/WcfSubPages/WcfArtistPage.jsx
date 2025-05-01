import React, { useState, useEffect } from "react";
import CardDisplay from "../../components/wcfReusableComponents/WcfLandingPageCardCarousel";

import artist1 from "/src/assets/wcf-assets/wcf-artists/aashir-wajat-artist.jpg"

import artist4 from "/src/assets/wcf-assets/wcf-artists/ACMA2-artist.jpg"

const WcfArtists = () => {
  const artists = [
    { id: 1, name: "Aashir Wajahat", image: artist1, country: "Pakistan" },
    { id: 2, name: "Abdul Hannan", image: "/placeholder-artist2.jpg", country: "Pakistan" },
    { id: 3, name: "Abdur Rahman Sajid", image: artist1, country: "Pakistan" },
    { id: 4, name: "Acma The Band", image: artist4, country: "Pakistan" },
    { id: 5, name: "Adnan Butt", image: "/placeholder-artist5.jpg", country: "Pakistan" },
    { id: 6, name: "Akhtar Chanal Zahri", image: "/placeholder-artist6.jpg", country: "Pakistan" },
    { id: 7, name: "Alex Liu", image: artist1, country: "Spain" },
    { id: 8, name: "Ali Mohammad Roonjho & Sattar Jogi", image: artist4, country: "Pakistan" },
    { id: 9, name: "Bashir Khan", image: "/placeholder-artist9.jpg", country: "Pakistan" },
    { id: 10, name: "Bayaan", image: "/placeholder-artist10.jpg", country: "Pakistan" },
    { id: 11, name: "Bhawani Karki", image: artist1, country: "Nepal" },
    { id: 12, name: "Chris Kelly", image: "/placeholder-artist12.jpg", country: "Spain" },
    { id: 13, name: "Cosmic Fluid", image: artist4, country: "Pakistan" },
    { id: 14, name: "Daniele Fabio", image: "/placeholder-artist14.jpg", country: "Italy" },
    { id: 15, name: "Daryl Giullano", image: artist1, country: "Canada" },
    { id: 16, name: "Delah Dube", image: "/placeholder-artist16.jpg", country: "Rwanda" },
    { id: 17, name: "Dominike", image: "/placeholder-artist17.jpg", country: "UK" },
    { id: 18, name: "Erica Lauren", image: artist4, country: "Spain" },
    { id: 19, name: "Faraz Anwar", image: "/placeholder-artist19.jpg", country: "Pakistan" },
    { id: 20, name: "Gasasira Rugamba Serge", image: "/placeholder-artist20.jpg", country: "Rwanda" },
    { id: 21, name: "Gizri", image: "/placeholder-artist21.jpg", country: "Pakistan" },
    { id: 22, name: "Hamza Akram", image: "/placeholder-artist22.jpg", country: "Pakistan" },
    { id: 23, name: "Hanna Dibella", image: "/placeholder-artist23.jpg", country: "Spain" },
    { id: 24, name: "Imran Momina", image: "/placeholder-artist24.jpg", country: "Pakistan" },
    { id: 25, name: "Jambroz", image: "/placeholder-artist25.jpg", country: "Pakistan" },
    { id: 26, name: "Jazz Art", image: "/placeholder-artist26.jpg", country: "South Africa" },
    { id: 27, name: "Jihadi Urbansong", image: artist1, country: "Rwanda" },
    { id: 28, name: "Kamaliya", image: "/placeholder-artist28.jpg", country: "Ukraine" },
    { id: 29, name: "Kamran Karimov", image: "/placeholder-artist29.jpg", country: "Azerbaijan" },
    { id: 30, name: "Khumariyaan", image: "/placeholder-artist30.jpg", country: "Pakistan" },
    { id: 31, name: "Lee Dia", image: "/placeholder-artist31.jpg", country: "Rwanda" },
    { id: 32, name: "Luise Volkmann", image: artist1, country: "Germany" },
    { id: 33, name: "Maanu", image: "/placeholder-artist33.jpg", country: "Pakistan" },
    { id: 34, name: "Madan Gopal", image: "/placeholder-artist34.jpg", country: "Nepal" },
    { id: 35, name: "Mai Dhai", image: "/placeholder-artist35.jpg", country: "Pakistan" },
    { id: 36, name: "Max Andrzejewski", image: artist1, country: "Germany" },
    { id: 37, name: "Muneeb Khan", image: "/placeholder-artist37.jpg", country: "Pakistan" },
    { id: 38, name: "Mustafa Baloch", image: "/placeholder-artist38.jpg", country: "Pakistan" },
    { id: 39, name: "Nafees Ahmed Khan", image: "/placeholder-artist39.jpg", country: "Pakistan" },
    { id: 40, name: "Natalia Gul", image: artist1, country: "Pakistan" },
    { id: 41, name: "Natasha Baig", image: "/placeholder-artist41.jpg", country: "Pakistan" },
    { id: 42, name: "Noman Al Sheikh", image: "/placeholder-artist42.jpg", country: "Pakistan" },
    { id: 43, name: "Paul Jarret", image: "/placeholder-artist43.jpg", country: "Germany" },
    { id: 44, name: "Peace Joils", image: "/placeholder-artist44.jpg", country: "Rwanda" },
    { id: 45, name: "Sahib Pashazade", image: "/placeholder-artist45.jpg", country: "Azerbaijan" },
    { id: 46, name: "Samra Khan", image: "/placeholder-artist46.jpg", country: "Pakistan" },
    { id: 47, name: "Sarah Dillamore", image: "/placeholder-artist47.jpg", country: "Spain" },
    { id: 48, name: "Schumaila Hussain", image: "/placeholder-artist48.jpg", country: "Pakistan" },
    { id: 49, name: "Shahzeb Ali", image: "/placeholder-artist49.jpg", country: "Pakistan" },
    { id: 50, name: "Sikandar & Raina", image: "/placeholder-artist50.jpg", country: "Pakistan" },
    { id: 51, name: "Sounds of Kolachi", image: "/placeholder-artist51.jpg", country: "Pakistan" },
    { id: 52, name: "Street Dancers", image: "/placeholder-artist52.jpg", country: "Congo" },
    { id: 53, name: "Sultan Baloch", image: "/placeholder-artist53.jpg", country: "Pakistan" },
    { id: 54, name: "Veronica", image: "/placeholder-artist54.jpg", country: "Belarus" },
    { id: 55, name: "Wahab Bugti", image: "/placeholder-artist55.jpg", country: "Pakistan" },
  ];

  // Map artist data to CardDisplay expected format
  const cardData = artists.map((artist) => ({
    id: artist.id,
    title: artist.name,
    description: `Country: ${artist.country}`,
    image: artist.image,
    link: null,
  }));

  // State to manage the number of visible cards
  const [visibleCards, setVisibleCards] = useState(0);
  const [initialCards, setInitialCards] = useState(0);
  const [showAll, setShowAll] = useState(false);

  // Function to calculate the number of columns based on screen size
  const getColumns = () => {
    const width = window.innerWidth;
    if (width >= 1024) return 4;
    if (width >= 768) return 3;
    if (width >= 640) return 2;
    return 1;
  };

  // Function to calculate the number of cards in 5 rows
  const calculateInitialCards = () => {
    const columns = getColumns();
    return columns * 5;
  };

  // Set the initial number of cards on mount and on resize
  useEffect(() => {
    const handleResize = () => {
      const initial = calculateInitialCards();
      setInitialCards(initial);
      if (!showAll) {
        setVisibleCards(initial);
      }
    };

    // Set initial cards on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [showAll]);

  // Function to show all cards
  const handleSeeMore = () => {
    setVisibleCards(cardData.length);
    setShowAll(true);
  };

  // Function to show only initial cards
  const handleSeeLess = () => {
    setVisibleCards(initialCards);
    setShowAll(false);
  };

  // Slice the cardData array to show only the visible cards
  const displayedCards = cardData.slice(0, visibleCards);

  // Check if there are more cards to load
  const hasMoreCards = visibleCards < cardData.length;

  return (
    <div className="bg-white text-black py-6">
      <CardDisplay
        cards={displayedCards}
        title="Artists"
        useCarousel={false}
        sectionClassName="py-8 sm:py-6 lg:py-8"
        cardClassName="max-w-sm mx-4"
        titleClassName="text-2xl sm:text-3xl md:text-4xl"
        imageAspectRatio="4/4"
        maxImageHeight="800px"
        gridGap="2rem"
      />

      {/* See More / See Less Buttons */}
      <div className="text-center mt-8 space-x-4">
        {hasMoreCards && (
          <button
            onClick={handleSeeMore}
            className="px-6 py-3 bg-red-700 text-white text-lg font-medium rounded-lg hover:bg-red-600 transition-colors duration-300"
          >
            See More
          </button>
        )}
        {showAll && (
          <button
            onClick={handleSeeLess}
            className="px-6 py-3 bg-black text-white text-lg font-medium rounded-lg hover:bg-black transition-colors duration-300"
          >
            See Less
          </button>
        )}
      </div>
    </div>
  );
};

export default WcfArtists;
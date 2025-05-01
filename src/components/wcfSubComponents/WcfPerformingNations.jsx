import React from "react";
import CardCarousel from "../wcfReusableComponents/WcfLandingPageCardCarousel";

import PerformmingNation1 from '/src/assets/wcf-assets/wcf-Performing-Nations/Generation-25.jpg'
import PerformmingNation2 from '/src/assets/wcf-assets/wcf-Performing-Nations/Congo.jpeg'

// Card Data
const cards = [
  {
    id: 1,
    title: "Cultural Showcase",
    description: "Experience the rich heritage of global traditions in an unforgettable celebration.",
    image: PerformmingNation1,
    link: "#",
  },
  {
    id: 2,
    title: "Artistic Performances",
    description: "Witness world-class performances from renowned artists across continents.",
    image: PerformmingNation2,
    link: "#",
  },
  {
    id: 3,
    title: "Global Harmony",
    description: "Join us in fostering peace and unity through cultural exchange.",
    image: PerformmingNation2,
    link: "#",
  },
  {
    id: 4,
    title: "Global Harmony",
    description: "Join us in fostering peace and unity through cultural exchange.",
    image: PerformmingNation2,
    link: "#",
  },
  {
    id: 5,
    title: "Global Harmony",
    description: "Join us in fostering peace and unity through cultural exchange.",
    image: PerformmingNation2,
    link: "#",
  },
];

function WcfPerformances() {
  return (
    <CardCarousel
      cards={cards}
      title="Performing Nations"
      slidesPerView={1}
      spaceBetween={50}
      autoplayDelay={3000}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      imageAspectRatio="1/1"
      maxImageHeight="600px"
    />
  );
}

export default WcfPerformances;
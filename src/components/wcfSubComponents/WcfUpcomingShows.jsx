import React from "react";
import StepCarousel from "../wcfReusableComponents/WcfLandingPageStepCarousel";

import show1 from "/src/assets/wcf-assets/wcf-upcomingShows/Road-show.jpg"
import show2 from "/src/assets/wcf-assets/wcf-upcomingShows/Berlin-nach-Lahore-Poster.jpg"

// Step Data
const steps = [
  {
    id: 1,
    title: "Discover Shows",
    description: "Pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies porta nibh",
    image: show1,
  },
  {
    id: 2,
    title: "Choose Your Event",
    description: "Amet venenatis urna cursus eget nunc scelerisque viverra mauris inali quam sem",
    image: show2,
  },
  {
    id: 3,
    title: "Book Tickets",
    description: "Mauris inali quam sem amet venenatis urna cursus eget nunc scelerisque viverra",
    image: show2,
  },
  {
    id: 4,
    title: "Book Tickets",
    description: "Mauris inali quam sem amet venenatis urna cursus eget nunc scelerisque viverra",
    image: show2,
  },
  {
    id: 5,
    title: "Book Tickets",
    description: "Mauris inali quam sem amet venenatis urna cursus eget nunc scelerisque viverra",
    image: show2,
  },
];

function WcfUpcomingShows() {
  return (
    <StepCarousel
      steps={steps}
      title="Upcoming Events"
      slidesPerView={1}
      spaceBetween={20}
      autoplayDelay={3000}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      pagination={false}
      imageAspectRatio="1/1"
      maxImageHeight="600px"
    // maxImageWidth="550px"
    />
  );
}

export default WcfUpcomingShows;
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Next Arrow for Slider
const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/90 p-2 rounded-full hover:bg-black/70 transition-colors"
    onClick={onClick}
  >
    <IoIosArrowForward className="text-white text-2xl" />
  </button>
);

// Custom Prev Arrow for Slider
const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/90 p-2 rounded-full hover:bg-black/70 transition-colors"
    onClick={onClick}
  >
    <IoIosArrowBack className="text-white text-2xl" />
  </button>
);

// Auditorium 1
import AudiOne1 from "/src/assets/venues/Audi1/audi1.1.jpg";
import AudiOne2 from "/src/assets/venues/Audi1/audi1.2.jpg";
import AudiOne3 from "/src/assets/venues/Audi1/audi1.3.jpg";
import AudiOne4 from "/src/assets/venues/Audi1/audi1.4.jpg";
import AudiOne5 from "/src/assets/venues/Audi1/audi1.5.jpg";

// Auditorium 2
import AudiTwo1 from "/src/assets/venues/Audi2/audi2.1.jpg";
import AudiTwo2 from "/src/assets/venues/Audi2/audi2.2.jpg";
import AudiTwo3 from "/src/assets/venues/Audi2/audi2.3.jpg";
import AudiTwo4 from "/src/assets/venues/Audi2/audi2.4.jpg";
import AudiTwo5 from "/src/assets/venues/Audi2/audi2.5.jpg";

// Studio 1
import StudioOne1 from "/src/assets/venues/Studio1/studio1.1.jpg";
import StudioOne2 from "/src/assets/venues/Studio1/studio1.2.jpg";
import StudioOne3 from "/src/assets/venues/Studio1/studio1.3.jpg";
import StudioOne4 from "/src/assets/venues/Studio1/studio1.4.jpg";
import StudioOne5 from "/src/assets/venues/Studio1/studio1.5.jpg";
import StudioOne6 from "/src/assets/venues/Studio1/studio1.6.jpg";

// Studio 2
import StudioTwo1 from "/src/assets/venues/Studio2/studio2.1.jpg";
import StudioTwo2 from "/src/assets/venues/Studio2/studio2.2.jpg";
import StudioTwo3 from "/src/assets/venues/Studio2/studio2.3.jpg";
import StudioTwo4 from "/src/assets/venues/Studio2/studio2.4.jpg";
import StudioTwo5 from "/src/assets/venues/Studio2/studio2.5.jpg";
import StudioTwo6 from "/src/assets/venues/Studio2/studio2.6.jpg";

// Haseena Moin Hall
import HaseenaMoin1 from "/src/assets/venues/HaseenaMoinHall/haseenaMoinHall1.jpg";
import HaseenaMoin2 from "/src/assets/venues/HaseenaMoinHall/haseenaMoinHall2.jpg";
import HaseenaMoin3 from "/src/assets/venues/HaseenaMoinHall/haseenaMoinHall3.jpg";
import HaseenaMoin4 from "/src/assets/venues/HaseenaMoinHall/haseenaMoinHall4.jpg";
import HaseenaMoin5 from "/src/assets/venues/HaseenaMoinHall/haseenaMoinHall5.jpg";
import HaseenaMoin6 from "/src/assets/venues/HaseenaMoinHall/haseenaMoinHall6.jpg";

// Jawin Elia Lawn
import JaunElia1 from "/src/assets/venues/JaunEliaLawn/jaunEliaLawn1.jpg";
import JaunElia2 from "/src/assets/venues/JaunEliaLawn/jaunEliaLawn2.jpg";
import JaunElia3 from "/src/assets/venues/JaunEliaLawn/jaunEliaLawn3.jpg";
import JaunElia4 from "/src/assets/venues/JaunEliaLawn/jaunEliaLawn4.jpg";
import JaunElia5 from "/src/assets/venues/JaunEliaLawn/jaunEliaLawn5.jpg";
import JaunElia6 from "/src/assets/venues/JaunEliaLawn/jaunEliaLawn6.jpg";
import JaunElia7 from "/src/assets/venues/JaunEliaLawn/jaunEliaLawn7.jpg";
import JaunElia8 from "/src/assets/venues/JaunEliaLawn/jaunEliaLawn8.jpg";

// Bukhari Amphitheatre
import BukhariAmphitheatre1 from "/src/assets/venues/Amphitheatre/amphitheatre1.jpg";
import BukhariAmphitheatre2 from "/src/assets/venues/Amphitheatre/amphitheatre2.jpg";
import BukhariAmphitheatre3 from "/src/assets/venues/Amphitheatre/amphitheatre3.jpg";
import BukhariAmphitheatre4 from "/src/assets/venues/Amphitheatre/amphitheatre4.jpg";
import BukhariAmphitheatre5 from "/src/assets/venues/Amphitheatre/amphitheatre5.jpg";
import BukhariAmphitheatre6 from "/src/assets/venues/Amphitheatre/amphitheatre6.jpg";
import BukhariAmphitheatre7 from "/src/assets/venues/Amphitheatre/amphitheatre7.jpg";
import BukhariAmphitheatre8 from "/src/assets/venues/Amphitheatre/amphitheatre8.jpg";
import BukhariAmphitheatre9 from "/src/assets/venues/Amphitheatre/amphitheatre9.jpg";
import BukhariAmphitheatre10 from "/src/assets/venues/Amphitheatre/amphitheatre10.jpg";

// Cafe D'Art

// Ahmed Pervez Art Gallery
import ArtGallery1 from "/src/assets/venues/ArtGallery/artGallery1.jpg";
import ArtGallery2 from "/src/assets/venues/ArtGallery/artGallery2.jpg";
import ArtGallery3 from "/src/assets/venues/ArtGallery/artGallery3.jpg";
import ArtGallery4 from "/src/assets/venues/ArtGallery/artGallery4.jpg";
import ArtGallery5 from "/src/assets/venues/ArtGallery/artGallery5.jpg";
import ArtGallery6 from "/src/assets/venues/ArtGallery/artGallery6.jpg";
import ArtGallery7 from "/src/assets/venues/ArtGallery/artGallery7.jpg";
import ArtGallery8 from "/src/assets/venues/ArtGallery/artGallery8.jpg";

// Josh Malihabadi Library
import JoshMalihabadiLibrary1 from "/src/assets/venues/JoshMalihabadiLibrary/joshMalihabadiLibrary1.jpg";
import JoshMalihabadiLibrary2 from "/src/assets/venues/JoshMalihabadiLibrary/joshMalihabadiLibrary2.jpg";
import JoshMalihabadiLibrary3 from "/src/assets/venues/JoshMalihabadiLibrary/joshMalihabadiLibrary3.jpg";
import JoshMalihabadiLibrary4 from "/src/assets/venues/JoshMalihabadiLibrary/joshMalihabadiLibrary4.jpg";
import JoshMalihabadiLibrary5 from "/src/assets/venues/JoshMalihabadiLibrary/joshMalihabadiLibrary5.jpg";
import JoshMalihabadiLibrary6 from "/src/assets/venues/JoshMalihabadiLibrary/joshMalihabadiLibrary6.jpg";
import JoshMalihabadiLibrary7 from "/src/assets/venues/JoshMalihabadiLibrary/joshMalihabadiLibrary7.jpg";
import JoshMalihabadiLibrary8 from "/src/assets/venues/JoshMalihabadiLibrary/joshMalihabadiLibrary8.jpg";
import JoshMalihabadiLibrary9 from "/src/assets/venues/JoshMalihabadiLibrary/joshMalihabadiLibrary9.jpg";
import JoshMalihabadiLibrary10 from "/src/assets/venues/JoshMalihabadiLibrary/joshMalihabadiLibrary10.jpg";

// Rooftop Lounge
// import Rooftop1 from "/src/assets/venues/RooftopLounge/rooftopLounge1.jpg";
import Rooftop2 from "/src/assets/venues/RooftopLounge/rooftopLounge2.jpg";
import Rooftop3 from "/src/assets/venues/RooftopLounge/rooftopLounge3.jpg";
import Rooftop4 from "/src/assets/venues/RooftopLounge/rooftopLounge4.jpg";
import Rooftop5 from "/src/assets/venues/RooftopLounge/rooftopLounge5.jpg";
import Rooftop6 from "/src/assets/venues/RooftopLounge/rooftopLounge6.jpg";
import Rooftop7 from "/src/assets/venues/RooftopLounge/rooftopLounge7.jpg";

// Lobby Area
import LobbyArea1 from "/src/assets/venues/LobbyArea/lobbyArea1.jpg";
import LobbyArea2 from "/src/assets/venues/LobbyArea/lobbyArea2.jpg";
import LobbyArea3 from "/src/assets/venues/LobbyArea/lobbyArea3.jpg";
import LobbyArea4 from "/src/assets/venues/LobbyArea/lobbyArea4.jpg";
import LobbyArea5 from "/src/assets/venues/LobbyArea/lobbyArea5.jpg";
import LobbyArea6 from "/src/assets/venues/LobbyArea/lobbyArea6.jpg";
import LobbyArea7 from "/src/assets/venues/LobbyArea/lobbyArea7.jpg";
import LobbyArea8 from "/src/assets/venues/LobbyArea/lobbyArea8.jpg";
import LobbyArea9 from "/src/assets/venues/LobbyArea/lobbyArea9.jpg";

// Gulrang Cafe
import GulrangCafe1 from "/src/assets/venues/GulrangCafe/gulrangCafe1.jpg";
import GulrangCafe2 from "/src/assets/venues/GulrangCafe/gulrangCafe2.jpg";
import GulrangCafe3 from "/src/assets/venues/GulrangCafe/gulrangCafe3.jpg";
import GulrangCafe4 from "/src/assets/venues/GulrangCafe/gulrangCafe4.jpg";
import GulrangCafe5 from "/src/assets/venues/GulrangCafe/gulrangCafe5.jpg";

// Audio Studio


// Parking Area
import ParkingArea1 from "/src/assets/venues/ParkingArea/parking1.jpg";
import ParkingArea2 from "/src/assets/venues/ParkingArea/parking2.jpg";
import ParkingArea3 from "/src/assets/venues/ParkingArea/parking3.jpg";
import ParkingArea4 from "/src/assets/venues/ParkingArea/parking4.jpg";
import ParkingArea5 from "/src/assets/venues/ParkingArea/parking5.jpg";
import ParkingArea6 from "/src/assets/venues/ParkingArea/parking6.jpg";
import ParkingArea7 from "/src/assets/venues/ParkingArea/parking7.jpg";
import ParkingArea8 from "/src/assets/venues/ParkingArea/parking8.jpg";
import ParkingArea9 from "/src/assets/venues/ParkingArea/parking9.jpg";

const placeholderImages = {
  audi1: [
    AudiOne1,
    AudiOne2,
    AudiOne3,
    AudiOne4,
    AudiOne5,
  ],
  audi2: [
    AudiTwo1,
    AudiTwo2,
    AudiTwo3,
    AudiTwo4,
    AudiTwo5,
  ],
  studio1: [
    StudioOne1,
    StudioOne2,
    StudioOne3,
    StudioOne4,
    StudioOne5,
    StudioOne6,
  ],
  studio2: [
    StudioTwo1,
    StudioTwo2,
    StudioTwo3,
    StudioTwo4,
    StudioTwo5,
    StudioTwo6,
  ],
  "haseena-moin-hall": [
    HaseenaMoin1,
    HaseenaMoin2,
    HaseenaMoin3,
    HaseenaMoin4,
    HaseenaMoin5,
    HaseenaMoin6
  ],
  "jaun-elia-lawn": [
    JaunElia1,
    JaunElia2,
    JaunElia3,
    JaunElia4,
    JaunElia5,
    JaunElia6,
    JaunElia7,
    JaunElia8,
  ],
  "za-bukhari-amphitheatre": [
    BukhariAmphitheatre1,
    BukhariAmphitheatre2,
    BukhariAmphitheatre3,
    BukhariAmphitheatre4,
    BukhariAmphitheatre5,
    BukhariAmphitheatre6,
    BukhariAmphitheatre7,
    BukhariAmphitheatre8,
    BukhariAmphitheatre9,
    BukhariAmphitheatre10,
  ],
  "cafe-d-art": [
    "/src/assets/venues/cafe.png",
    "https://via.placeholder.com/400x300?text=CafeDArt-Image2",
    "https://via.placeholder.com/400x300?text=CafeDArt-Image3",
    "https://via.placeholder.com/400x300?text=CafeDArt-Image4",
    "https://via.placeholder.com/400x300?text=CafeDArt-Image5",
  ],
  "ahmed-pervez-art-gallery": [
    ArtGallery1,
    ArtGallery2,
    ArtGallery3,
    ArtGallery4,
    ArtGallery5,
    ArtGallery6,
    ArtGallery7,
    ArtGallery8,
  ],
  "josh-malihabadi-library": [
    JoshMalihabadiLibrary1,
    JoshMalihabadiLibrary2,
    JoshMalihabadiLibrary3,
    JoshMalihabadiLibrary4,
    JoshMalihabadiLibrary5,
    JoshMalihabadiLibrary6,
    JoshMalihabadiLibrary7,
    JoshMalihabadiLibrary8,
    JoshMalihabadiLibrary9,
    JoshMalihabadiLibrary10,
  ],
  "360-rooftop-lounge": [
    // Rooftop1,
    Rooftop2,
    Rooftop3,
    Rooftop4,
    Rooftop5,
    Rooftop6,
    Rooftop7,
  ],
  "lobby-area": [
    LobbyArea1,
    LobbyArea2,
    LobbyArea3,
    LobbyArea4,
    LobbyArea5,
    LobbyArea6,
    LobbyArea7,
    LobbyArea8,
    LobbyArea9,
  ],
  "gulrang-cafe": [
    GulrangCafe1,
    GulrangCafe2,
    GulrangCafe3,
    GulrangCafe4,
    GulrangCafe5,
  ],
  "audio-studio": [
    "/src/assets/venues/audio-studio.png",
    "https://via.placeholder.com/400x300?text=AudioStudio-Image2",
    "https://via.placeholder.com/400x300?text=AudioStudio-Image3",
    "https://via.placeholder.com/400x300?text=AudioStudio-Image4",
    "https://via.placeholder.com/400x300?text=AudioStudio-Image5",
  ],
  "parking-area": [
    ParkingArea1,
    ParkingArea2,
    ParkingArea3,
    ParkingArea4,
    ParkingArea5,
    ParkingArea6,
    ParkingArea7,
    ParkingArea8,
    ParkingArea9,
  ],
};


import venueImg1 from "/src/assets/venues/audi1.png";
import venueImg2 from "/src/assets/venues/audi2.png";
import venueImg3 from "/src/assets/venues/studio1.png";
import venueImg4 from "/src/assets/venues/studio2.png";
import venueImg5 from "/src/assets/venues/haseena-moin.png";
import venueImg6 from "/src/assets/venues/jaun-elia.png";
import venueImg7 from "/src/assets/venues/ampitheatre.png";
import venueImg8 from "/src/assets/venues/cafe.png";
import venueImg9 from "/src/assets/venues/art-gallery.png";
import venueImg10 from "/src/assets/venues/library.png";
import venueImg11 from "/src/assets/venues/rooftop.png";
import venueImg12 from "/src/assets/venues/lobby.png";
import venueImg13 from "/src/assets/venues/gulrang.png";
import venueImg14 from "/src/assets/venues/audio-studio.png";
import venueImg15 from "/src/assets/venues/parking.png";

const VenueSubPage = () => {
  const { venueId } = useParams();

  const venueData = {
    audi1: {
      name: "Auditorium 1",
      mainImage: venueImg1,
      heroImages: placeholderImages.audi1,
      facilities: [
        "Air conditioner",
        "Backstage facilities for instance (side wings)",
        "Makeup room",
        "Restroom",
        "Backup power supply",
        "Ceiling grid",
        "Soundproofing",
        "Huge & spacious staircase with Lighting",
        "Security cameras",
        "Stage accessories upon request (carpets, sofa, flowerpots, tables), etc",
      ],
      details: {
        Category: "Indoor Auditorium",
        Area: "1,215 sq. ft",
        Size: "W = 45 ft, Depth = 27 ft",
        Seating: "Capacity	436 Person",
      },
      description: "ACPKHI offers a luxury and beautifully designed air-conditioned auditorium with a seating capacity of 436 persons based on 1,215 sq. ft. stage. With modern equipments such as the latest theatrical lighting system, audio/video systems for live streaming, and impeccable acoustics. The Auditorium 1 is the ultimate hub for various notable international and national events which makes it suitable for holding seminars, concerts, performances, workshops, book launches, lectures, meetings, conferences, TV commercials, promotional activities, religious, social, and literary functions.Auditorium 1 is designed to be wheelchair- friendly for disabled individuals, and also convenient entrance and access for the VIPs making it more secure and reliable.",
    },

    audi2: {
      name: "Auditorium 2",
      mainImage: venueImg2,
      heroImages: placeholderImages.audi2,
      facilities: [
        "Air conditioner",
        "Backstage facilities for instance (side wings)",
        "Makeup room",
        "Restroom",
        "Backup power supply",
        "Ceiling grid",
        "Soundproofing",
        "Huge & spacious staircase with Lighting",
        "Security cameras",
        "Stage accessories upon request (carpets, sofa, flowerpots, tables), etc",
      ],
      details: {
        "Category": "Indoor Auditorium",
        "Area": "779 sq. ft",
        "Size": "W = 45 ft, Depth = 27 ft",
        "Seating Capacity	": "272 Person",
      },
      description: "ACPKHI offers a luxury and beautifully designed air-conditioned auditorium with a seating capacity of 272 persons based on 779 sq. ft stage. With modern equipments such as the latest theatrical lighting system, audio/video systems for live streaming, and impeccable acoustics. The Auditorium 2 is the ultimate hub for various notable international and national events which makes it suitable for holding seminars, concerts, performances, workshops, book launches, lectures, meetings, conferences, TV commercials, promotional activities, religious, social, and literary functions. Auditorium 1 is designed to be wheelchair-friendly for disabled individuals, and also convenient entrance and access for the VIPs making it more secure and reliable.",
    },

    studio1: {
      name: "Studio 1",
      mainImage: venueImg3,
      heroImages: placeholderImages.studio1,
      facilities: [
        "Air conditioner",
        "Makeup room",
        "Technical room",
        "Restroom",
        "Backup power supply",
        "Passenger lifts",
        "Cargo lift",
        "Sound proofed",
        "Lighting ceiling grid installed",
        "Security cameras",
        "Parking",
      ],
      details: {
        "Category": "Indoor Studio",
        "Area": "4,725 sq. ft",
        "Size": "W=67 & 63 ft, L=75 ft, H=25 ft",
      },
      description: "Studio 1, the pinnacle of modern production facilities, located on 4th floor of Ahmed Shah Building at renowned Arts Council of Pakistan, Karachi. Spanning an impressive 4,725 square feet, Studio 1 provides ample room for sets, props, and crew, ensuring that you have the flexibility to customize the space according to your requirements. Our studio is equipped with top-of-the-line amenities and services, making it the preferred choice for both local and international organizers. At Arts Council of Pakistan, we strive to meet and exceed your expectations. If you have any additional needs or special requirements, please don't hesitate to let us know. Our dedicated team is committed to accommodating your requests and ensuring your experience at Studio 1 is nothing short of exceptional. Embrace the future of production and book Studio 1 today. Express your creativity in a space designed to inspire and elevate your artistic vision.",
    },

    studio2: {
      name: "Studio 2",
      mainImage: venueImg4,
      heroImages: placeholderImages.studio2,
      facilities: [
        "Air conditioner",
        "Restroom",
        "Technical room",
        "Backup power supply",
        "Passenger lifts",
        "Cargo lift",
        "Sound proofed",
        "Lighting ceiling grid installed",
        "Security cameras",
        "Parking",
      ],
      details: {
        "Category": "Indoor Studio",
        "Area": "5032 Sq.ft",
        "Size": "W=68 & 42 ft, L=74 ft, H=16 ft",
      },
      description: "Your Ultimate Creative Space! Discover the epitome of modernity and versatility at Studio 2, nestled on the vibrant 3rd floor of Ahmed Shah Building - ACPKHI, located at the heart of Karachi.With an expansive area of 5,032 sq.ft., this state - of - the - art facility is designed to cater to all your artistic aspirations and professional requirements.Whether you're a corporate client, an interviewer, a dance enthusiast, a social media influencer, or a television production team, Studio 2 is the perfect choice for you. Embark on a journey of creativity, innovation, and excellence at Studio 2. Book your space now and unlock endless possibilities for your next project!",
    },

    "haseena-moin-hall": {
      name: "Haseena Moin Hall",
      mainImage: venueImg5,
      heroImages: placeholderImages["haseena-moin-hall"],
      facilities: [
        "Air conditioner",
        "Restroom",
        "Security cameras",
        "Backup power supply",
        "Stage accessories upon request (carpets, sofa, flowerpots, tables), etc",
      ],
      details: {
        "Category": "Indoor Hall",
        "Area": "2193 Sq.ft",
        "Size": "W=51 & 43 ft, L=47 ft, H=16 ft",
      },
      description: "Haseena Moin Hall located on the 1st floor of the Ahmed Shah Hall Building - ACPKHI a dedicated hall that is specially designed for smaller gatherings, seminars, workshops, book launches, and conferences. That has a size of 2193 sq. ft. which is a centrally air-conditioned hall equipped with the latest facilities including a sound system and a projection screen for presentations.",
    },

    "jaun-elia-lawn": {
      name: "Jaun Elia Lawn",
      mainImage: venueImg6,
      heroImages: placeholderImages["jaun-elia-lawn"],
      facilities: [
        "Restroom",
        "Lighting",
        "Security cameras",
        "Backup power supply",
        "Accessories upon request (carpets, sofa, flowerpots, tables)",
      ],
      details: {
        "Category": "Open Area",
        "Area": "12462 Sq.ft",
        "Size": "W=134 ft & 109 ft, L=93 ft & 82 ft",
      },
      description: "Jaun Elia Lawn of ACPKHI offers a space of 12,462 sq. ft. that is an ideal spot for huge gatherings and a space that can be customized accordingly for grand festivals/music concerts/corporate programs. Domestic and international organizers love this venue of our premises as it is beautifully decorated with plants and gives the audience a natural feel.",
    },

    "za-bukhari-amphitheatre": {
      name: "Z.A Bukhari Amphitheatre",
      mainImage: venueImg7,
      heroImages: placeholderImages["za-bukhari-amphitheatre"],
      facilities: [
        "Backstage facilities for instance (side wings, makeup room, restrooms)",
        "Ceiling grid",
        "Huge & spacious staircase with Lighting",
        "Backup power supply",
        "Security cameras",
        "Stage accessories upon request (carpets, sofa, flowerpots, tables)",
      ],
      details: {
        "Category": "Open Theatre",
        "Seating Capacity	": "1,300 Person",
        "Stage Size	": "Back Width=45 ft, Front Width=68 ft, Depth=38 ft",
      },
      description: "Our spectacular arena can accommodate up to 1,300 guests. It is specifically designed to please the audience and provide convenience for the artists. The Amphitheatre was created by the renowned architect Aqeel Bilgrami. It's generous space and modern design make it the preferred venue for organizing performances, festivals, community gatherings, reunions, cultural programs, annual functions, youth festivals, convocations, student presentations, and competitions.",
    },

    "cafe-d-art": {
      name: "Café D' Art",
      mainImage: venueImg8,
      heroImages: placeholderImages["cafe-d-art"],
      facilities: [
        "Luxurious dining area",
        "Adequate lighting",
        "Efficient air conditioning",
        "Backup power supply",
        "Security cameras",
        "Wi-Fi connectivity",
        "Knowledgeable and courteous serving staff",
      ],
      details: {
        "Category": "Indoor Area",
      },
      description: "Café D' Art is a magnificent coffee house located on the premises of ACPKHI. It serves as an excellent destination for dining and relaxation. Offers setting for social gatherings, open mic ceremonies, music performances, stand-up comedy shows, and exploration of various delectable cuisines. Guests can indulge in a wide range of food options, including Italian and Continental dishes.With its elegant ambiance and exceptional service, Café D' Art guarantees a delightful experience.",
    },

    "ahmed-pervez-art-gallery": {
      name: "Ahmed Pervez Art Gallery",
      mainImage: venueImg9,
      heroImages: placeholderImages["ahmed-pervez-art-gallery"],
      facilities: [
        "Air conditioner",
        "Restroom",
        "Passenger lifts",
        "Backup power supply",
        "Cargo lift",
        "Security cameras",
        "Parking",
      ],
      details: {
        "Category": "Indoor Hall",
        "Area": "4,725 sq. ft",
        "Stage Size	": "W=67 & 63 ft, L=75 ft, H=25 ft",
      },
      description: "The Ahmed Pervez Art Gallery, located in ACPKHI, is named after the renowned Pakistani Master, Ahmed Pervez. It serves as a primary venue for contemporary artists to exhibit and sell their artworks. The gallery also hosts fundraising campaigns and provides a platform for all the artists to showcase their potential.",
    },

    "josh-malihabadi-library": {
      name: "Josh Malihabadi Library",
      mainImage: venueImg10,
      heroImages: placeholderImages["josh-malihabadi-library"],
      facilities: [
        "High speed computers",
        "Comfortable seating spaces",
        "Restrooms",
        "Backup power supply",
        "Air conditioner",
        "An efficient lighting system",
        "Security cameras",
        "Comfortable chairs",
      ],
      details: {
        "Category": "Indoor Area",
        "No. of Books	": "25,000+",
      },
      description: "Located on the 2nd floor of the Ahmed Shah Building, ACPKHI. Josh Malihabadi Library is dedicated to the Pakistani legendary playwriter and screenwriter. A place where you can find books from various genres and different fields of knowledge, having over 25,000 books, and also serves as a location for recording live events. The library is equipped with the latest computers that facilitate the process.The library services also include reference service, reservation of books, recommendation of library material, photocopying/ printing service, orientation and information sessions, audiovisual service, and multimedia Section.",
    },

    "360-rooftop-lounge": {
      name: "360° Rooftop Lounge",
      mainImage: venueImg11,
      heroImages: placeholderImages["360-rooftop-lounge"],
      facilities: [
        "Restrooms",
        "Security Cameras",
        "Lighting",
        "Backup power supply",
        "Wi-Fi",
        "Passengers lift",
        "Cargo Lift",
        "Accessories upon request (carpets, flowerpots, tables, etc)",
      ],
      details: {
        "Category": "Outdoor Area",
        "Area": "5227 Sq.ft",
      },
      description: "ACPKHI offers a flexible open-air 5227 sq. ft. of rooftop space with a 360-degree view of the city of lights. The rooftop is a delicate mix of nature and elegance. The rooftop is an ideal spacious venue for social gatherings, family shows, corporate seminars, and much more.",
    },

    "lobby-area": {
      name: "Lobby Area",
      mainImage: venueImg12,
      heroImages: placeholderImages["lobby-area"],
      facilities: [
        "Restrooms",
        "Security Cameras",
        "Backup power supply",
        "Lighting, Wi-Fi",
      ],
      details: {
        "Category": "Outdoor Area",
        "Area": "4136 Sq.ft",
        "Size": "W=44 ft, L=94 ft, H=10 ft",
      },
      description: "The lobby area of ACPKHI has been transformed into a versatile and functional space. Spanning 4,136 sq. ft. The lobby provides an ideal area for expanding exhibits during tradeshows, facilitating networking events, hosting meetings, seminars, camps, workshops, literary functions, ghazal performances, and more.",
    },

    "gulrang-cafe": {
      name: "Gulrang Café",
      mainImage: venueImg13,
      heroImages: placeholderImages["gulrang-cafe"],
      facilities: [
        "Seating for 40",
        "Coffee bar",
        "Wi-Fi",
        "Backup power supply",
        "Parking",
      ],
      details: {
        "Area": "120 sq.ft",
        "Capacity": "40 people",
        "Type": "Indoor",
      },
      description: "Gulrang Café is a quaint space for coffee lovers, offering a cozy environment for small meetings and casual hangouts.",
    },
    "audio-studio": {
      name: "Audio Studio",
      mainImage: venueImg14,
      heroImages: placeholderImages["audio-studio"],
      facilities: [
        "Recording equipment",
        "Soundproof walls",
        "Technical crew",
        "Backup power supply",
        "Parking",
      ],
      details: {
        "Area": "180 sq.ft",
        "Capacity": "30 people",
        "Type": "Indoor",
      },
      description: "The Audio Studio is a professional space for audio recordings, equipped with soundproofing and high-quality equipment.",
    },

    "parking-area": {
      name: "Parking Area",
      mainImage: venueImg15,
      heroImages: placeholderImages["parking-area"],
      facilities: [
        "Security cameras",
        "Dedicated security team",
        "Ample space",
      ],
      details: {
        "Category": "Outdoor",
      },
      description: "ACPKHI provides spacious and secure parking areas and facilities that can be utilized as an ideal venue for various activities, such as festivals, book stalls, food stalls, and more. Our parking area spans an impressive 13,632 sq. ft. and is equipped with advanced 24/7 CCTV surveillance and a dedicated security team to ensure safety.",
    },
  };

  const [currentVenue, setCurrentVenue] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("facilities");

  useEffect(() => {
    const loadData = () => {
      const data = venueData[venueId] || venueData["studio1"];
      if (data) {
        setCurrentVenue(data);
      } else {
        console.error("No data found for venue:", venueId);
      }
    };
    loadData();
  }, [venueId]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  if (!currentVenue) {
    return (
      <div className="text-center py-10 text-black">
        Loading venue data...
      </div>
    );
  }

  return (
    <div className="bg-white text-black">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 py-10">

        <section className="mb-12">
          <div className="flex flex-col lg:flex-row gap-8">

            <div className="lg:w-2/3">
              <Slider {...sliderSettings}>
                {currentVenue.heroImages.map((image, index) => (
                  <div key={index} className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={`Venue Slide ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      style={{ backgroundColor: "#e5e7eb" }}
                    />
                    <div className="absolute inset-0"></div>
                  </div>
                ))}
              </Slider>
            </div>
            {/* Description */}
            <div className="lg:w-1/3 flex flex-col justify-center">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {currentVenue.name}
              </motion.h2>
              <motion.p
                className="text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {currentVenue.description}
              </motion.p>
            </div>
          </div>
        </section>

        {/* Tabbed Content */}
        <section>

          <div className="mb-12 flex flex-col sm:flex-row gap-2 sm:gap-4">
            {["facilities", "details", "booking"].map((tab) => (
              <motion.button
                key={tab}
                className={`px-6 py-3 rounded-xl text-lg font-semibold capitalize transition-colors duration-300 ${activeTab === tab
                  ? "bg-[#B90602] text-white shadow-md cursor-pointer"
                  : "bg-[#B90602] text-white cursor-pointer hover:bg-black/80 hover:shadow-lg"
                  }`}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-lg shadow-md p-6">
            {activeTab === "facilities" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-red-600 pl-4">
                  Facilities
                </h2>
                <ul className="space-y-3">
                  {currentVenue.facilities.map((facility, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center text-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <FaCheckCircle className="text-red-600 mr-3" />
                      {facility}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}

            {activeTab === "details" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-red-600 pl-4">
                  Details
                </h2>
                <div className="space-y-3">
                  {Object.entries(currentVenue.details).map(([key, value], index) => (
                    <motion.div
                      key={index}
                      className="flex justify-between border-b border-gray-200 py-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <span className="font-semibold text-gray-900">{key}:</span>
                      <span className="text-gray-700">{value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "booking" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-red-600 pl-4">
                  Booking
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Select Venue</label>
                    <select
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                      defaultValue={venueId}
                    >
                      {Object.keys(venueData).map((key) => (
                        <option key={key} value={key}>{venueData[key].name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Date of Event</label>
                    <input
                      type="date"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Start Time</label>
                    <input
                      type="time"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">End Time</label>
                    <input
                      type="time"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Message</label>
                    <textarea
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                      rows="4"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  <motion.button
                    className="px-12 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    Submit
                  </motion.button>
                </div>
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default VenueSubPage;
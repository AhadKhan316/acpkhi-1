// src/pages/WorldCultureFestival.jsx
import React from "react";
import { Route, Routes } from "react-router-dom"; 

import WcfNavbar from "../components/wcfSubComponents/WcfNavbar";
import WcfHeroSection from "../components/wcfSubComponents/WcfHero";
import WcfVideoSection from "../components/wcfSubComponents/WcfVideoSection";
import WcfAboutSection from "../components/wcfSubComponents/WcfAboutSection";
// import WcfAboutAcp from "../components/wcfSubComponents/WcfAboutAcp";
import WcfPerformingNations from "../components/wcfSubComponents/WcfPerformingNations";
import WcfUpcomingShows from "../components/wcfSubComponents/WcfUpcomingShows";
import WcfExhibitions from "../components/wcfSubComponents/WcfExhibitions";
import WcfNewsLetterSignup from "../components/wcfSubComponents/WcfNewsLetter";
import WcfSponsors from "../components/wcfSubComponents/WcfSponsers";
import WcfFooter from "../components/wcfSubComponents/WcfFooter";

// WCF Pages
import WcfAboutPage from "../Pages/WcfSubPages/WcfAboutPage";
import WcfPerformances from "../Pages/WcfSubPages/WcfPerformancesPage";
import WcfWorkshops from "../Pages/WcfSubPages/WcfWorkshopsPage";
import WcfCommunityBuilding from "../Pages/WcfSubPages/WcfCommunityBuildingPage";
import WcfArtists from "../Pages/WcfSubPages/WcfArtistPage";
import WcfArtistsEngagement from "./WcfSubPages/WcfArtistsEngagementPage";
import WcfMediaCoverage from "./WcfSubPages/WcfMediaCourage";
import WcfContactUs from "./WcfSubPages/WcfContactUs";

const WorldCultureFestival = () => {
  return (
    <>
      <WcfNavbar />
      <Routes>
        <Route path="/" element={
          <>
            <WcfHeroSection />
            <WcfVideoSection />
            <WcfAboutSection />
            {/* <WcfAboutAcp /> */}
            <WcfPerformingNations />
            <WcfUpcomingShows />
            <WcfExhibitions />
            <WcfNewsLetterSignup />
            <WcfSponsors />
          </>
        } />
        <Route path="about" element={<WcfAboutPage />} />
        <Route path="performances" element={<WcfPerformances />} />
        <Route path="workshops" element={<WcfWorkshops />} />
        <Route path="communityBuilding" element={<WcfCommunityBuilding />} />
        <Route path="artist" element={<WcfArtists />} />
        <Route path="artistEngagement" element={<WcfArtistsEngagement />} />
        <Route path="mediaCoverage" element={<WcfMediaCoverage />} />
        <Route path="contactUs" element={<WcfContactUs />} />
      </Routes >
      <WcfFooter />
    </>
  );
};

export default WorldCultureFestival;

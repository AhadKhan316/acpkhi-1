import React from "react";
import { Route, Routes } from "react-router-dom";

import PtfNavbar from "../components/ptfSubComponents/ptfNavbar";
import PtfHero from "../components/ptfSubComponents/ptfHero";
import PtfAbout from "../components/ptfSubComponents/ptfAbout";
import PtfPromoVideoSection from "../components/ptfSubComponents/ptfPromoVideo";
import PtfInternationalPlayers from "../components/ptfSubComponents/ptfPlays";
import PtfPrimeShowsCard from "../components/ptfSubComponents/ptfPerformingShows";
import PtfNewsletter from "../components/ptfSubComponents/ptfNewsletter";
import PtfHighlightedTheatre from "../components/ptfSubComponents/ptfHighlightsShows";
// import PtfOurPlaysSection from "../components/ptfSubComponents/ptfOurPlays";
// import PtfSponsors from "../components/ptfSubComponents/ptfSponsors";
import PtfFooter from "../components/ptfSubComponents/ptfFooter";


// Pages
import PtfAboutPage from "../Pages/PtfSubPages/ptfAboutPage"
import PtfArtistsPage from "../Pages/PtfSubPages/ptfArtistsPage"
import PtfContactPage from "../Pages/PtfSubPages/ptfContactUsPage"


function AalmiUrduConference() {
  return (
    <>
      <PtfNavbar />
      <Routes>
        <Route path="/" element={
          <>
            <PtfHero />
            <PtfAbout />
            <PtfPromoVideoSection />
            {/* <PtfInternationalPlayers /> */}
            <PtfPrimeShowsCard />
            <PtfHighlightedTheatre />
            {/* <PtfOurPlaysSection /> */}
            <PtfNewsletter />
            {/* <PtfSponsors /> */}
          </>
        } />

        <Route path="about" element={<PtfAboutPage />} />
        <Route path="artists" element={<PtfArtistsPage />} />
        <Route path="contactUs" element={<PtfContactPage />} />

      </Routes>
      <PtfFooter />
    </>
  );
}

export default AalmiUrduConference;
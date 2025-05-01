import React from "react";
import { Route, Routes } from "react-router-dom";

import PtfNavbar from "../components/ptfSubComponents/ptfNavbar";
import PtfHero from "../components/ptfSubComponents/ptfHero";
import PtfAbout from "../components/ptfSubComponents/ptfAbout";
import PtfInternationalPlayers from "../components/ptfSubComponents/ptfPlays";
import PtfPrimeShowsCard from "../components/ptfSubComponents/ptfPerformingShows";
import PtfNewsletter from "../components/ptfSubComponents/ptfNewsletter";
import PtfHighlightedTheatre from "../components/ptfSubComponents/ptfHighlightsShows";
import PtfOurPlaysSection from "../components/ptfSubComponents/ptfOurPlays";
import PtfSponsors from "../components/ptfSubComponents/ptfSponsors";
import PtfFooter from "../components/ptfSubComponents/ptfFooter";


function AalmiUrduConference() {
  return (
    <>
      <PtfNavbar />
      <Routes>
        <Route path="/" element={
          <>
            <PtfHero />
            <PtfAbout />
            <PtfInternationalPlayers />
            <PtfPrimeShowsCard />
            <PtfHighlightedTheatre />
            <PtfOurPlaysSection />
            <PtfNewsletter />
            <PtfSponsors />
          </>
        } />

        {/* <Route path="about" element={<AucAboutPage />} /> */}
        {/* <Route path="delegate" element={<AucDelegatePage />} /> */}
        {/* <Route path="contactUs" element={<AucContactPage />} /> */}

      </Routes>
      <PtfFooter />
    </>
  );
}

export default AalmiUrduConference;
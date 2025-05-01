import React from "react";
import { Route, Routes } from "react-router-dom";


import AucNavbar from "../components/aucSubComponents/aucNavbar";
import AucHero from "../components/aucSubComponents/aucHero";
import AucAbout from "../components/aucSubComponents/aucAbout";
import AucPromoVideo from "../components/aucSubComponents/aucPromoVideo";
import AucDelegates from "../components/aucSubComponents/aucCard";
import AucHighlightedSessions from "../components/aucSubComponents/aucHighlitedSessions";
import AucNewsletter from "../components/aucSubComponents/aucNewsletter";
import AucSponsors from "../components/aucSubComponents/aucSponsors";
import AucFooter from "../components/aucSubComponents/aucFooter";

// AUC Sub Pages
import AucAboutPage from "./AucSubPages/aucAboutPage";
import AucDelegatePage from "./AucSubPages/aucDelegatePage";
import AucContactPage from './AucSubPages/aucContactPage';

function AalmiUrduConference() {
  return (
    <>
      <AucNavbar />
      <Routes>
        <Route path="/" element={
          <>
            <AucHero />
            <AucAbout />
            <AucPromoVideo />
            <AucDelegates />
            <AucHighlightedSessions />
            <AucNewsletter />
            <AucSponsors />
          </>
        } />

        <Route path="about" element={<AucAboutPage />} />
        <Route path="delegate" element={<AucDelegatePage />} />
        <Route path="contactUs" element={<AucContactPage />} />

      </Routes>
      <AucFooter />
    </>
  );
}

export default AalmiUrduConference;
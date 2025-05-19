import React from "react";
import { Route, Routes } from "react-router-dom";

import AafNavbar from "../components/aafSubComponents/aafNavbar";
import MainAlumniCompo from "../Pages/AlumniFestival";


import AafFooter from "../components/aafSubComponents/aafFooter";



function ArtsAlumiFestival() {
  return (
    <>
      <AafNavbar />
      <Routes>
        <Route path="/" element={
          <>
            <MainAlumniCompo />
            {/* <AucHero /> */}
            {/* <AucAbout /> */}
            {/* <AucPromoVideo /> */}
            {/* <AucDelegates /> */}
            {/* <AucHighlightedSessions /> */}
            {/* <AucNewsletter /> */}
            {/* <AucSponsors /> */}
          </>
        } />

        {/* <Route path="about" element={<AucAboutPage />} /> */}
        {/* <Route path="delegate" element={<AucDelegatePage />} /> */}
        {/* <Route path="contactUs" element={<AucContactPage />} /> */}

      </Routes>
      <AafFooter />
    </>
  );
}

export default ArtsAlumiFestival;
import React from "react";
import { Routes, Route } from "react-router-dom";

import WcNavbar from "../components/wcSubComponents/wcNavbar";
import WcHero from "../components/wcSubComponents/wcHero";
import WcPresidentMessage from "../components/wcSubComponents/wcPresidentMessage";
import WcHudaShahMessage from "../components/wcSubComponents/wcHudaShahMessage";
import WcVideo from "../components/wcSubComponents/wcVideo";
import WcDelegateCard from "../components/wcSubComponents/wcDelegateCard";
import WcHighlightedSession from "../components/wcSubComponents/wcHighlightedSession";
import WcCategoriesCard from "../components/wcSubComponents/wcCategoriesCard";
import WcNewsletter from "../components/wcSubComponents/wcNewsletter";
import WcSponsors from "../components/wcSubComponents/wcSponsors";
import WcFooter from "../components/wcSubComponents/wcFooter";


// PLF Sub Pages
// import PlfAboutPage from "./PlfSubPages/plfAboutPage";
// import PlfDelegatePage from "./PlfSubPages/plfDelegates";
// import PlfContactPage from "./PlfSubPages/plfContactPage";

const PlfMainPage = () => {


  return (
    <>
      <WcNavbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <WcHero />
              {/* <AboutSection /> */}
              <WcPresidentMessage />
              <WcHudaShahMessage />
              <WcVideo />
              <WcDelegateCard />
              <WcHighlightedSession />
              <WcCategoriesCard />
              <WcNewsletter />
              <WcSponsors />
              {/* <PlfSponsors /> */}
            </>
          }
        />

        {/* <Route path="about" element={<PlfAboutPage />} /> */}
        {/* <Route path="delegates" element={<PlfDelegatePage />} /> */}
        {/* <Route path="contactUs" element={<PlfContactPage />} /> */}
      </Routes >
      <WcFooter />
    </>
  );
}


export default PlfMainPage;
import React from "react";
import { Routes, Route } from "react-router-dom";

import WcNavbar from "../components/wcSubComponents/wcNavbar";
import WcHero from "../components/wcSubComponents/wcHero";
import WcAbout from "../components/wcSubComponents/wcAbout";
// import WcPresidentMessage from "../components/wcSubComponents/wcPresidentMessage";
// import WcHudaShahMessage from "../components/wcSubComponents/wcHudaShahMessage";
import WcVideo from "../components/wcSubComponents/wcVideo";
import WcDelegateCard from "../components/wcSubComponents/wcDelegateCard";
import WcHighlightedSession from "../components/wcSubComponents/wcHighlightedSession";
// import WcCategoriesCard from "../components/wcSubComponents/wcCategoriesCard";
import WcNewsletter from "../components/wcSubComponents/wcNewsletter";
// import WcSponsors from "../components/wcSubComponents/wcSponsors";
import WcFooter from "../components/wcSubComponents/wcFooter";


// WC Sub Pages
import WcAboutPage from "./wcSubPages/wcAboutPage";
import WcDelegatePage from "./wcSubPages/wcDelegatesPage";
import WcContactPage from "./wcSubPages/wcContactUsPage";

import wcDelegate1 from "/src/assets/wc-assets/wc-delegate1.jpg"
import wcDelegate2 from "/src/assets/wc-assets/wc-delegate2.jpg"
import wcDelegate3 from "/src/assets/wc-assets/wc-delegate3.jpg"
import wcDelegate4 from "/src/assets/wc-assets/wc-delegate4.jpg"

const PlfMainPage = () => {

  const delegates = [
    {
      name: "Nadia Jamil",
      image: wcDelegate1,
    },
    {
      name: "Saba Qamar",
      image: wcDelegate2,
    },
    {
      name: "Mehwish Hayat",
      image: wcDelegate3,
    },
    {
      name: "Ayesha Omar",
      image: wcDelegate4,
    },
  ];
  return (
    <>
      <WcNavbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <WcHero />
              <WcAbout />
              {/* <WcPresidentMessage /> */}
              {/* <WcHudaShahMessage /> */}
              <WcVideo />
              <WcHighlightedSession />
              <WcDelegateCard delegates={delegates} title="Delegates" />
              {/* <WcCategoriesCard /> */}
              <WcNewsletter />
              {/* <WcSponsors /> */}
            </>
          }
        />

        <Route path="about" element={<WcAboutPage />} />
        <Route path="delegates" element={<WcDelegatePage />} />
        <Route path="contactUs" element={<WcContactPage />} />
      </Routes >
      <WcFooter />
    </>
  );
}


export default PlfMainPage;
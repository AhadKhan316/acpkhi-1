import React from 'react'
import { Route, Routes } from 'react-router-dom'

import PyfNavbar from '../components/pyfSubComponents/pyfNavbar'
import PyfHero from '../components/pyfSubComponents/pyfHero'
import PyfAbout from '../components/pyfSubComponents/pyfAbout'
import PyfVideo from '../components/pyfSubComponents/pyfVideo'
import PyfDelegateCard from '../components/pyfSubComponents/pyfCard'
import PyfHighlightedSession from '../components/pyfSubComponents/pyfHighlightedSession'
import PyfNewsletter from '../components/pyfSubComponents/pyfNewsletter'
// import PyfSponsors from '../components/pyfSubComponents/pyfSponsors'
import PyfFooter from '../components/pyfSubComponents/pyfFooter'

// Pages
import PyfAboutPage from '../Pages/PyfSubPages/pyfAboutPage'
import PyfDelegatesPage from './PyfSubPages/pyfDelegatesPage'
import PyfContactPage from '../Pages/PyfSubPages/pyfContactUsPage'

// Card Image
// import pyfDelegateCard1 from "/src/assets/pyf-assets/pyf-delegate1.jpg"
// import pyfDelegateCard2 from "/src/assets/pyf-assets/pyf-delegate2.jpg"
// import pyfDelegateCard3 from "/src/assets/pyf-assets/pyf-delegate3.jpg"
// import pyfDelegateCard4 from "/src/assets/pyf-assets/pyf-delegate4.jpg"
// import pyfDelegateCard5 from "/src/assets/pyf-assets/pyf-delegate5.jpg"
// import pyfDelegateCard6 from "/src/assets/pyf-assets/pyf-delegate6.jpg"


// const speakers = [
//   { name: "Afaq Adnan", image: pyfDelegateCard1 },
//   { name: "Ali Azmat", image: pyfDelegateCard2 },
//   { name: "Asim Azhar", image: pyfDelegateCard3 },
//   { name: "Arman Rahim", image: pyfDelegateCard4 },
//   { name: "Kashmir Band", image: pyfDelegateCard5 },
//   { name: "Natasha Baig", image: pyfDelegateCard6 },
// ];

function PakistanYouthFestival() {
  return (
    <>
      <PyfNavbar />
      <Routes>
        <Route path="/" element={
          <>
            <PyfHero />
            <PyfAbout />
            <PyfVideo />
            <PyfDelegateCard />
            <PyfHighlightedSession />
            <PyfNewsletter />
            {/* <PyfSponsors /> */}
          </>
        } />
        <Route path="about" element={<PyfAboutPage />} />
        <Route path="delegates" element={<PyfDelegatesPage />} />
        <Route path="contactUs" element={<PyfContactPage />} />
      </Routes>
      <PyfFooter />

    </>
  )
}

export default PakistanYouthFestival




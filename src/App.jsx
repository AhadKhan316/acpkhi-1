import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Layout from './components/Layout';
import Hero from './components/Hero';
import UpcomingEvents from './components/UpcomingEvents';
import About from './components/About';
// import PresidentMessage from './components/PresidentMessage';
import StayUpdated from './components/StayUpdated';
import Sovapa from './components/Academy';
import CommunityFeedback from './components/CommunityFeedback';
import Production from './components/Production';
// import OurSocial from './components/OurSocial';
import OurSponsors from './components/Sponsors';
import ContactUs from './Pages/ContactUs';

// Pages
import SovapaPage from './Pages/SovapaPage';
import VenuesPage from './Pages/Venue';
import AboutUs from './Pages/AboutUs';
import GoverningBody from './Pages/GoverningBody';
import TeamMembers from './Pages/TeamMember';
import MembersVerification from './Pages/MembersVerification';
import Career from './Pages/Careers';
import Tenders from './Pages/Tenders';

// ACP Sub Pages
import UpcomingEventsPage from './Pages/AcpSubPages/UpcomingEventsPage';
import SovapaCoursePage from './Pages/AcpSubPages/SovapaCoursePage';
import VenueSubPage from './Pages/AcpSubPages/VenuesPage';


// WCF Page
import WorldCultureFestival from './Pages/WorldCulturalFestival';

// PLF Page
import PakistanLiteratureFestival from './Pages/PakistanLiteratureFestival';

// AUC Page
import AalmiUrduConference from './Pages/AalmiUrduConference';

// PYF Page
import PakistanYouthFestival from './Pages/PakistanYouthFestival';

// Women Conference Page
import WomenConference from './Pages/WomenConference'

// PTF Pages
import PakistanTheatreFestival from './Pages/PakistanTheatreFestival';

// AAF Pages
import ArtsAlumniFestival from './Pages/AlumniFestival';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes with Navbar and Footer */}
        <Route element={<Layout />}>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <UpcomingEvents />
              {/* <PresidentMessage /> */}
              <Sovapa />

              <Production />
              {/* <OurSocial /> */}
              <StayUpdated />
              <CommunityFeedback />
              <OurSponsors />
            </>
          } />

          {/* ACP Sub Pages */}
          <Route path="/upcomingEvents" element={<UpcomingEventsPage />}></Route>
          <Route path="/sovapa/:department" element={<SovapaCoursePage />}></Route>
          <Route path="/facilities/:venueId" element={<VenueSubPage />} />

          {/* Arts Alumni Festival Route */}
          <Route path="/alumni" element={<ArtsAlumniFestival />} />

          {/* Contact Us */}

          <Route path="/sovapa" element={<SovapaPage />} />
          <Route path="/facilities" element={<VenuesPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/governingBody" element={<GoverningBody />} />
          <Route path="/teamMembers" element={<TeamMembers />} />
          <Route path="/membersVerification" element={<MembersVerification />} />
          <Route path="/career" element={<Career />} />
          <Route path="/tenders" element={<Tenders />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Route>

        {/* Routes without Navbar and Footer */}

        {/* WCF */}
        <Route path="/festival/wcf/*" element={<WorldCultureFestival />} />

        {/* PLF */}
        <Route path="/festival/plf/*" element={<PakistanLiteratureFestival />} />

        {/* AUC */}
        <Route path="/festival/auc/*" element={<AalmiUrduConference />} />

        {/* PYF */}
        <Route path="/festival/pyf/*" element={<PakistanYouthFestival />} />

        {/* WC */}
        <Route path="/festival/wc/*" element={<WomenConference />} />

        {/* PTF */}
        <Route path="/festival/ptf/*" element={<PakistanTheatreFestival />} />

        {/* AAF */}
        {/* <Route path="/festival/aaf/*" element={<ArtsAlumniFestival />} /> */}

      </Routes>
    </Router>
  );
};

export default App;

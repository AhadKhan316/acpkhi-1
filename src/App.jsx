//  
import { Route, Routes } from "react-router-dom";

// Components
import AlumniRedirect from './components/AlumniRedirect';
import Layout from './components/Layout';
import Hero from './components/Hero';
// import UpcomingEvents from './components/UpcomingEvents';
import About from './components/About';
import Mainpagevideo from './components/Mainpagevideo';
// import PresidentMessage from './components/PresidentMessage';
import StayUpdated from './components/StayUpdated';
// import Sovapa from './components/Academy';
import CommunityFeedback from './components/CommunityFeedback';
// import Production from './components/Production';
// import OurSocial from './components/OurSocial'
import WhatWeDo from './components/WhatWeDo';
import Initiative from './components/Initiative';
import Education from './components/Education';
// import OurSponsors from './components/Sponsors';
import ContactUs from './Pages/ContactUs';
import QRCodeRedirect from './Pages/Qrcode';

// Pages
import SovapaPage from './Pages/SovapaPage';
import VenuesPage from './Pages/Venue';
import AboutUs from './Pages/AboutUs';
import GoverningBody from './Pages/GoverningBody';
import Initiatives from './Pages/AcpSubPages/Initiative';
import TeamMembers from './Pages/TeamMember';
import MembersVerification from './Pages/MembersVerification';
import Career from './Pages/Careers';
import Tenders from './Pages/Tenders';

// Media Kit
import MediaKit from './Pages/MediaKit';
import Registration from './Pages/RegistrationForm';
import Admission from './Pages/AdmissionsForm';

// OTP sending pages
import VerifyOtp from './Pages/VerifyOtp';
import ResendOtp from './Pages/ResendOtp';

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
import ArtsAlumniFestival from './Pages/ArtsAlumniFestival';
import AlumniFestivalPage from './Pages/AlumniFestival'

import NewsBlog from './Pages/NewsBlog';
import Whatweoffer from './components/Whatweoffer';
import Alloffers from './components/Alloffers';
import PresidentsMessage from './components/PresidentsMessage';

import Email from './Pages/Email';


import DelegatesPage from './Pages/DelegatesPage';


const App = () => {
  return (
    <Routes>
      {/* Routes with Navbar and Footer */}
      <Route element={<Layout />}>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Mainpagevideo />
            {/* <UpcomingEvents /> */}
            <PresidentsMessage />
            <WhatWeDo />
            <Initiative />
            <Education />


            {/* <Production /> */}
            {/* <OurSocial /> */}
            <CommunityFeedback />
            <Whatweoffer />
            <Alloffers />
            <StayUpdated />
            {/* <OurSponsors /> */}
          </>
        } />

        {/* ACP Sub Pages */}
        <Route path="/initiatives" element={<Initiatives />} />
        <Route path="/upcomingEvents" element={<UpcomingEventsPage />}></Route>
        <Route path="/sovapa/:department" element={<SovapaCoursePage />}></Route>
        <Route path="/facilities/:venueId" element={<VenueSubPage />} />

        {/* Arts Alumni Festival Route */}
        <Route path="/alumni" element={<AlumniFestivalPage />} />

        {/* OTP Pages */}
        <Route path="/verifyOtp" element={<VerifyOtp />} />
        <Route path="/resend-otp" element={<ResendOtp />} />

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
        <Route path="/mediaKit" element={<MediaKit />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/admissions" element={<Admission />} />
        <Route path="/NewsBlog" element={<NewsBlog />} />
        <Route path="/DelegatesPage" element={<DelegatesPage />} />
        <Route path="/qrcode" element={<QRCodeRedirect />} />
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
      <Route path="/festival/aaf/*" element={<ArtsAlumniFestival />} />
      {/* for barcode scan */}
      <Route path="/alumni.php" element={<AlumniRedirect />} />

      {/* for email link */}
      <Route path="/email" element={<Email />} />
    </Routes>
  );
};

export default App;

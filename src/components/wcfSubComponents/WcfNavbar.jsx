import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown, FaChevronRight, FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

// ACP Logo
import acpLogo from '/src/assets/acp-logo-and-hero-img/acp-logo-fullName-white.png';

// WCF Logo
import wcfLogo from '/src/assets/wcf-assets/wcf-logo.png';



function WcfNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState({});
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setIsSubMenuOpen({});
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsSubMenuOpen({});
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleSubMenu = (menu, event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsSubMenuOpen((prev) => ({
      ...Object.keys(prev).reduce((acc, key) => ({ ...acc, [key]: false }), {}),
      [menu]: !prev[menu],
    }));
  };

  const isActiveLink = (path) => location.pathname === path;

  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      className={`block py-2 px-4 text-white hover:text-white hover:bg-red-800 rounded-md transition-colors duration-200 ${isActiveLink(to) ? "text-white font-semibold bg-red-700" : "font-medium"}`}
    >
      {children}
    </Link>
  );

  const DropdownButton = ({ children, onClick, isOpen }) => (
    <button
      onClick={onClick}
      className={`flex items-center justify-between w-full py-2 px-4 text-white hover:bg-red-800 font-medium rounded-md transition-colors duration-200 ${isOpen ? "bg-red-700" : ""}`}
    >
      {children}
      <FaChevronDown className={`ml-2 w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
    </button>
  );

  return (
    <header className="bg-gradient-to-r from-black/80 to-black/90 sticky top-0 z-50 shadow-md">
      <nav
        className="h-[90px] max-w-screen-xl flex items-center justify-between mx-auto px-4 sm:px-6 lg:px-8"
        ref={menuRef}
      >
        {/* ACP X WCF Logo */}
        <div className="flex items-center gap-2 h-full">
          <Link to="/" className="h-full flex items-center">
            <img
              src={acpLogo}
              alt="ACP Logo"
              className="object-contain w-auto max-h-[150px] max-w-[200px] sm:max-h-[150px] lg:max-h-[150px]"
            />
          </Link>

          <span className="text-white text-xl font-bold">X</span>

          <Link to="/festival/wcf" className="h-full flex items-center">
            <img
              src={wcfLogo}
              alt="World Culture Festival Logo"
              className="object-contain w-auto max-h-[85px] max-w-[200px] sm:max-h-[85px] lg:max-h-[85px]"
            />
          </Link>
        </div>


        {/* Hamburger Icon */}
        <button onClick={toggleMenu} className="text-white lg:hidden">
          {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center">
          <ul className="flex space-x-0.5 items-center ms-2">
            <li><NavLink to="/festival/wcf">Home</NavLink></li>

            <li className="relative group">
              <DropdownButton onClick={(e) => toggleSubMenu("about", e)} isOpen={isSubMenuOpen["about"]}>
                About
              </DropdownButton>
              {isSubMenuOpen["about"] && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-black rounded-md z-40">
                  <NavLink to="/festival/wcf/about">About WCF</NavLink>
                </div>
              )}
            </li>

            <li className="relative group">
              <DropdownButton onClick={(e) => toggleSubMenu("artists", e)} isOpen={isSubMenuOpen["artists"]}>
                Artists
              </DropdownButton>
              {isSubMenuOpen["artists"] && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-black rounded-md shadow-lg z-40">
                  <NavLink to="/festival/wcf/artist">Featured Artists</NavLink>
                  <NavLink to="/festival/wcf/artistEngagement">Artist Engagements</NavLink>
                </div>
              )}
            </li>

            <li><NavLink to="/festival/wcf/mediaCoverage">Media Coverage</NavLink></li>
            <li><NavLink to="/festival/wcf/contactUs">Contact Us</NavLink></li>
          </ul>

          {/* Social Media Icons (Desktop) */}
          {/* <div className="ml-8 flex space-x-4">
            <a href="#" className="text-white hover:text-red-500 transition-colors duration-200" aria-label="Instagram">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-red-500 transition-colors duration-200" aria-label="Facebook">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-red-500 transition-colors duration-200" aria-label="TikTok">
              <FaTiktok className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-red-500 transition-colors duration-200" aria-label="YouTube">
              <FaYoutube className="w-5 h-5" />
            </a>
          </div> */}
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed top-0 right-0 w-4/5 max-w-xs h-full bg-black/95 z-50 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center p-4 border-b border-gray-700">
            <h2 className="text-white font-bold text-lg">Menu</h2>
            <button onClick={toggleMenu} className="text-white">
              <FaTimes />
            </button>
          </div>
          <ul className="flex flex-col p-4 space-y-2 text-white">
            <li><NavLink to="/festival/wcf">Home</NavLink></li>

            <li className="relative">
              <DropdownButton onClick={(e) => toggleSubMenu("about", e)} isOpen={isSubMenuOpen["about"]}>
                About
              </DropdownButton>
              {isSubMenuOpen["about"] && (
                <div className="ml-4">
                  <NavLink to="/festival/wcf/about">About WCF</NavLink>
                </div>
              )}
            </li>

            <li className="relative">
              <DropdownButton onClick={(e) => toggleSubMenu("artists", e)} isOpen={isSubMenuOpen["artists"]}>
                Artists
              </DropdownButton>
              {isSubMenuOpen["artists"] && (
                <div className="ml-4">
                  <NavLink to="/festival/wcf/artist">Featured Artists</NavLink>
                  <NavLink to="/festival/wcf/artistEngagement">Artist Engagements</NavLink>
                </div>
              )}
            </li>

            <li><NavLink to="/festival/wcf/mediaCoverage">Media Coverage</NavLink></li>
            <li><NavLink to="/festival/wcf/contactUs">Contact Us</NavLink></li>
            <Link
              to="/"
              className="block w-full text-center px-4 py-2 mt-2 text-white bg-red-700 rounded-md hover:bg-red-800 transition duration-200"
            >
              Back to ACP Home
            </Link>
          </ul>

          {/* Social Media Icons (Mobile) */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-6">
            <a href="#" className="text-white hover:text-red-500 transition-colors duration-200" aria-label="Instagram">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-red-500 transition-colors duration-200" aria-label="Facebook">
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-red-500 transition-colors duration-200" aria-label="TikTok">
              <FaTiktok className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-red-500 transition-colors duration-200" aria-label="YouTube">
              <FaYoutube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </nav>
      {/* Social Media Sidebar (Desktop Only) */}
      <div className="hidden md:block fixed top-1/2 transform -translate-y-1/2 right-0 z-50">
        <div className="bg-black text-white p-2 rounded-l-lg shadow-lg">
          <div className="space-y-4">
            {[
              {
                href: "https://www.instagram.com/acpkhiofficial",
                icon: <FaInstagram className="h-6 w-6" />,
                alt: "Instagram",

              },
              {
                href: "https://www.facebook.com/ACPKHI/", icon: <FaFacebookF className="h-6 w-6" />,
                alt: "Facebook",
              },
              {
                href: "https://www.tiktok.com/@acpkhi", icon: <FaTiktok className="h-6 w-6" />,
                alt: "TikTok",
              },
              {
                href: "https://youtube.com/@acpkhi", icon: <FaYoutube className="h-6 w-6" />,
                alt: "YouTube",
              },
            ].map((item) => (
              <a
                key={item.alt}
                href={item.href}
                className="block text-white hover:text-red-600 transition duration-300"
                aria-label={item.alt}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default WcfNavbar;
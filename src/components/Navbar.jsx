import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown, FaChevronRight } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import acpLogo from '/src/assets/acp-logo-and-hero-img/acp-logo-fullName-white.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState({});
    const [isSubSubMenuOpen, setIsSubSubMenuOpen] = useState({});
    const location = useLocation();
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
                setIsSubMenuOpen({});
                setIsSubSubMenuOpen({});
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
        setIsSubMenuOpen({});
        setIsSubSubMenuOpen({});
    }, [location]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const toggleSubMenu = (menu, event) => {
        event.preventDefault();
        event.stopPropagation();
        setIsSubMenuOpen((prev) => ({
            ...Object.keys(prev).reduce((acc, key) => ({ ...acc, [key]: false }), {}),
            [menu]: !prev[menu],
        }));
        setIsSubSubMenuOpen({});
    };

    const toggleSubSubMenu = (submenu, event) => {
        event.preventDefault();
        event.stopPropagation();
        setIsSubSubMenuOpen((prev) => ({
            ...Object.keys(prev).reduce((acc, key) => ({ ...acc, [key]: false }), {}),
            [submenu]: !prev[submenu],
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

    const SubSubMenuButton = ({ children, onClick, isOpen }) => (
        <button
            onClick={onClick}
            className={`flex items-center justify-between w-full py-2 px-4 text-white hover:bg-red-800 font-medium rounded-md transition-colors duration-200 ${isOpen ? "bg-red-700" : ""}`}
        >
            {children}
            <FaChevronRight className={`ml-2 w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`} />
        </button>
    );

    return (
        <header className="bg-gradient-to-r from-black/80 to-black/90 sticky top-0 z-50 shadow-md">
            <nav
                className="h-[80px] max-w-screen-xl flex items-center justify-between mx-auto px-4 sm:px-6 lg:px-8"
                ref={menuRef}
            >
                {/* Logo */}
                <Link to="/" className="flex items-center h-full">
                    <img
                        src={acpLogo}
                        alt="Arts Council Logo"
                        className="object-contain w-auto max-h-[150px] max-w-[200px] sm:max-h-[150px] lg:max-h-[150px]"
                    />

                </Link>

                {/* Hamburger Icon */}
                <button onClick={toggleMenu} className="text-white lg:hidden">
                    {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                </button>

                {/* Desktop Nav */}
                <ul className="hidden lg:flex space-x-0.5 items-center ms-2">
                    <li><NavLink to="/">Home</NavLink></li>

                    <li className="relative group">
                        <DropdownButton onClick={(e) => toggleSubMenu("about", e)} isOpen={isSubMenuOpen["about"]}>About</DropdownButton>
                        {isSubMenuOpen["about"] && (
                            <div className="absolute top-full left-0 mt-2 w-64 bg-black rounded-md z-40">
                                <NavLink to="/about">About Us</NavLink>
                                <NavLink to="/GoverningBody">Governing Body</NavLink>
                                <NavLink to="/TeamMembers">Our Team</NavLink>
                            </div>
                        )}
                    </li>

                    <li className="relative group">
                        <DropdownButton onClick={(e) => toggleSubMenu("production", e)} isOpen={isSubMenuOpen["production"]}>
                            Initiatives
                        </DropdownButton>

                        {isSubMenuOpen["production"] && (
                            <div className="absolute top-full left-0 mt-2 w-64 bg-black rounded-md shadow-lg z-40">
                                <NavLink to="/festival/wcf">World Culture Festival</NavLink>
                                <NavLink to="/festival/auc">Aalmi Urdu Conference</NavLink>
                                <NavLink to="/festival/plf">Pakistan Literature Festival</NavLink>
                                <NavLink to="/festival/ptf">Pakistan Theatre Festival</NavLink>
                                <NavLink to="/festival/pyf">Pakistan Youth Festival</NavLink>
                                <NavLink to="/festival/wc">Women Conference</NavLink>
                                <NavLink to="/festival/aaf">Arts Alumni Festival</NavLink>
                            </div>
                        )}
                    </li>


                    <li><NavLink to="/sovapa">Sovapa</NavLink></li>
                    <li><NavLink to="/facilities">Facilities</NavLink></li>
                    {/* <li><NavLink to="/events">Events</NavLink></li> */}

                    <li className="relative group">
                        <DropdownButton onClick={(e) => toggleSubMenu("resources", e)} isOpen={isSubMenuOpen["resources"]}>Resources</DropdownButton>
                        {isSubMenuOpen["resources"] && (
                            <div className="absolute top-full left-0 mt-2 w-54 bg-black rounded-md shadow-lg z-40">
                                <NavLink to="/membersVerification">Membership Verification</NavLink>
                                <NavLink to="/career">Career</NavLink>
                                <NavLink to="/tenders">Tenders</NavLink>
                            </div>
                        )}
                    </li>

                    <li><NavLink to="/ContactUs">Contact Us</NavLink></li>
                </ul>

                {/* Mobile Menu */}
                <div className={`lg:hidden fixed top-0 right-0 w-4/5 max-w-xs h-full bg-black/95 z-50 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex justify-between items-center p-4 border-b border-gray-700">
                        <h2 className="text-white font-bold text-lg">Menu</h2>
                        <button onClick={toggleMenu} className="text-white">
                            <FaTimes />
                        </button>
                    </div>
                    <ul className="flex flex-col p-4 space-y-2 text-white">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li className="relative">
                            <DropdownButton onClick={(e) => toggleSubMenu("about", e)} isOpen={isSubMenuOpen["about"]}>About</DropdownButton>
                            {isSubMenuOpen["about"] && (
                                <div className="relative top-full left-0 mt-2 w-64 bg-black rounded-md z-40">
                                    <NavLink to="/about">About Us</NavLink>
                                    <NavLink to="/GoverningBody">Governing Body</NavLink>
                                    <NavLink to="/TeamMembers">Our Team</NavLink>
                                </div>
                            )}
                        </li>

                        <li className="relative group">
                            <DropdownButton onClick={(e) => toggleSubMenu("production", e)} isOpen={isSubMenuOpen["production"]}>
                                Initiatives
                            </DropdownButton>

                            {isSubMenuOpen["production"] && (
                                <div className="relative top-full left-0 mt-2 w-64 bg-black rounded-md shadow-lg z-40">
                                    <NavLink to="/festival/wcf">World Culture Festival</NavLink>
                                    <NavLink to="/festival/auc">Aalmi Urdu Conference</NavLink>
                                    <NavLink to="/festival/plf">Pakistan Literature Festival</NavLink>
                                    <NavLink to="/festival/ptf">Pakistan Theatre Festival</NavLink>
                                    <NavLink to="/festival/pyf">Pakistan Youth Festival</NavLink>
                                    <NavLink to="/festival/wc">Women Conference</NavLink>
                                    <NavLink to="/festival/aaf">Arts Alumni Festival</NavLink>
                                </div>
                            )}
                        </li>


                        <li><NavLink to="/sovapa">Sovapa</NavLink></li>
                        <li><NavLink to="/facilities">Facilities</NavLink></li>
                        {/* <li><NavLink to="/events">Events</NavLink></li> */}
                        <li className="relative group">
                            <DropdownButton onClick={(e) => toggleSubMenu("resources", e)} isOpen={isSubMenuOpen["resources"]}>Resources</DropdownButton>
                            {isSubMenuOpen["resources"] && (
                                <div className="relative top-full left-0 mt-2 w-54 bg-black rounded-md shadow-lg z-40">
                                    <NavLink to="/membersVerification">Membership Verification</NavLink>
                                    <NavLink to="/career">Career</NavLink>
                                    <NavLink to="/tenders">Tenders</NavLink>
                                </div>
                            )}
                        </li>
                        <li><NavLink to="/ContactUs">Contact Us</NavLink></li>
                    </ul>
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
                                className="block text-white hover:text-red-700 transition duration-300"
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
};

export default Navbar;

// #B90602

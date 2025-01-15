import { useState } from "react";
import {  Gavel, Home, Menu, X, User, Search,Newspaper,Contact,ShieldQuestion    } from "lucide-react";
import { FaUser } from "react-icons/fa";

//ShoppingCart,
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State to control dropdown {Redan}
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 

  const NavLinks = [
    { name: "Home", icon: <Home />, path: "/" },
    { name: "Auctions", icon: <Gavel />, path: "/auctions" },
    // { name: "Products", icon: <ShoppingCart />, path: "/products" },
    {name:"Blogs",icon:<Newspaper />,path:"/blogs"},
    {name:"Contact",icon:<Contact />,path:"/contact"},
    {name:"About",icon:<ShieldQuestion />,path:"/about"}
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  
  return (
    <nav className="bg-orange-400 shadow-md">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center justify-evenly h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white">Auction System</span>
          </div>

          {/* Search Bar */}
          <div className="flex-grow mx-4 hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products, auctions..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {NavLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-white hover:bg-white hover:text-orange-400 px-3 py-2 rounded-xl flex items-center space-x-2"
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}

            {/* Dropdown for Login */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="bg-gray-100 px-4 py-2 rounded-full text-orange-400 hover:text-white hover:bg-orange-400 border hover:border-white flex items-center space-x-2"
              >
                <User />
                <span>Login</span>
              </button>
              {isDropdownOpen && (
                <div className="absolute z-10 right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                  <a
                    href="/userLogin"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    User Login
                  </a>
                  <a
                    href="/comLogin"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Seller Login
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {NavLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-white hover:bg-blue-50 hover:text-blue-600 block px-3 py-2 rounded-md flex items-center space-x-2"
                >
                  {link.icon}
                  <span>{link.name}</span>
                </a>
              ))}
              <a
                href="/profile"
                className="text-gray-700 hover:bg-blue-50 hover:text-blue-600 block px-3 py-2 rounded-md flex items-center space-x-2"
              >
                <User />
                <span>Profile</span>
              </a>

              {/* Mobile Search */}
              <div className="px-3 py-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products, auctions..."
                    className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Search className="absolute left-3 top-3 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

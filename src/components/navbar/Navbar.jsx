import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import {
  Gavel,
  Home,
  Menu,
  X,
  User,
  Search,
  Newspaper,
  Contact,
  ShieldQuestion,
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const token = Cookies.get("authToken");
    console.log("Token from cookies:", token);
    if (token) {
      axios
        .get("http://localhost:8000/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log("API response:", response.data); // Debugging
          setUserEmail(response.data.email);
        })
        .catch((error) => {
          console.error("Failed to fetch user info", error);
        });
    }
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleLogout = () => {
    Cookies.remove("authToken");
    setUserEmail(null);
  };

  const NavLinks = [
    { name: "Home", icon: <Home />, path: "/" },
    { name: "Auctions", icon: <Gavel />, path: "/auctions" },
    { name: "Blogs", icon: <Newspaper />, path: "/blogs" },
    { name: "Contact", icon: <Contact />, path: "/contact" },
    { name: "About", icon: <ShieldQuestion />, path: "/about" },
  ];

  console.log(userEmail);
  

  return (
    <nav className="bg-orange-400 shadow-md">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center justify-evenly h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white">Auction System</span>
          </div>
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
            {userEmail ? (
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="bg-gray-100 px-4 py-2 rounded-full text-orange-400 hover:text-white hover:bg-orange-400 border hover:border-white flex items-center space-x-2"
                >
                  <User />
                  <span>{userEmail}</span>
                </button>
                {isDropdownOpen && (
                  <div className="absolute z-10 right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                    <button
                      onClick={handleLogout}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={toggleDropdown}
                className="bg-gray-100 px-4 py-2 rounded-full text-orange-400 hover:text-white hover:bg-orange-400 border hover:border-white flex items-center space-x-2"
              >
                <User />
                <span>Login</span>
              </button>
            )}
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-white shadow-lg">
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
  {userEmail ? (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="bg-gray-100 px-4 py-2 rounded-full text-orange-400 hover:text-white hover:bg-orange-400 border hover:border-white flex items-center space-x-2"
      >
        <User />
        <span>{userEmail}</span>
      </button>
      {isDropdownOpen && (
        <div className="absolute z-10 right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
          <button
            onClick={handleLogout}
            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  ) : (
    <button
      onClick={toggleDropdown}
      className="bg-gray-100 px-4 py-2 rounded-full text-orange-400 hover:text-white hover:bg-orange-400 border hover:border-white flex items-center space-x-2"
    >
      <User />
      <span>Login</span>
    </button>
  )}
</div>

          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

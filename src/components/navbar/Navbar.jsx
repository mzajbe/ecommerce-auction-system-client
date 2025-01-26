import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import logo from "../../assets/websiteLogo/logo.jpeg";

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
  const [userInfo, setUserInfo] = useState({ email: null, role: null });
  const [loginType, setLoginType] = useState(null);

  useEffect(() => {
    const token = Cookies.get("auth_token");

    const loginType = Cookies.get("login_type"); // Retrieve the login type from cookies
    // console.log(loginType);

    if (token && loginType) {
      const apiEndpoint =
        loginType === "company"
          ? "http://localhost:8000/api/company"
          : "http://localhost:8000/api/user";

      axios
        .get(apiEndpoint, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const userData = response.data;

          // console.log("userdata:", userData);

          if (loginType === "user" || loginType === "admin") {
            const { email, role } = userData;
            setUserInfo({ email, role });
          } else {
            const { email } = userData;
            setUserInfo({ email, role: null }); // No role for company
          }
        })
        .catch((error) => {
          console.error("Failed to fetch user info", error);
          setUserInfo({ email: null, role: null }); // Ensure user info is reset on error
        });
    }
  }, []);

  const handleLoginSelection = (type) => {
    setLoginType(type);
    Cookies.set("login_type", type); // Store login type in cookies

    if (type === "company") {
      window.location.href = "/company-login";
    } else {
      window.location.href = "/user-login";
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleLogout = () => {
    Cookies.remove("auth_token");
    Cookies.remove("login_type");
    setUserInfo({ email: null, role: null });
  };

  const NavLinks = [
    { name: "Home", icon: <Home />, path: "/" },
    { name: "Auctions", icon: <Gavel />, path: "/auctions" },
    { name: "Blogs", icon: <Newspaper />, path: "/blogs" },
    { name: "Contact", icon: <Contact />, path: "/contact" },
    { name: "About", icon: <ShieldQuestion />, path: "/about" },
  ];

  // console.log(userInfo);

  return (
    <nav className="bg-orange-400 shadow-md">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center justify-evenly h-16">
          <div className="flex items-center">
            {/* logo  */}
            <div className=" inset-0">
              <span className="text-2xl font-bold  text-transparent bg-gradient-to-r from-orange-800 via-black to-orange-800 bg-clip-text">
                BidBlaze
              </span>
            </div>
            <style>{`
        @keyframes neon {
          0% {
            clip-path: inset(0 100% 0 0);
          }
          50% {
            clip-path: inset(0 0 0 0);
          }
          100% {
            clip-path: inset(0 0 0 100%);
          }
        }
        .animate-neon {
          animation: neon 3s infinite linear;
        }
      `}</style>
      {/* logo end  */}
            {/* <img src={logo} alt="logo" className="h-8 w-8" /> */}
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
            {userInfo.email ? (
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="bg-gray-100 px-4 py-2 rounded-full text-orange-400 hover:text-white hover:bg-orange-400 border hover:border-white flex items-center space-x-2"
                >
                  <User />
                  <span>{userInfo.email}</span>
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
                    <button
                      onClick={() => handleLoginSelection("user")}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Login as User
                    </button>
                    <button
                      onClick={() => handleLoginSelection("company")}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Login as Company
                    </button>
                  </div>
                )}
              </div>
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
            {userInfo.email ? (
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="bg-gray-100 px-4 py-2 rounded-full text-orange-400 hover:text-white hover:bg-orange-400 border hover:border-white flex items-center space-x-2"
                >
                  <User />
                  <span>{userInfo.email}</span>
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
                    <button
                      onClick={() => handleLoginSelection("user")}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Login as User
                    </button>
                    <button
                      onClick={() => handleLoginSelection("company")}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Login as Company
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import { useState } from "react";
import { ShoppingCart, Gavel, Home, Menu, X, User, Search } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLinks = [
    { name: "Home", icon: <Home />, path: "/" },
    { name: "Products", icon: <ShoppingCart />, path: "/products" },
    { name: "Auctions", icon: <Gavel />, path: "/auctions" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-white shadow-md  w-full ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">Auction System</span>
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
                className="text-gray-700 hover:bg-blue-50 hover:text-blue-600 px-3 py-2 rounded-md flex items-center space-x-2"
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
            <a
              href="/profile"
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 flex items-center space-x-2"
            >
              <User />
              <span>Profile</span>
            </a>
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
                  className="text-gray-700 hover:bg-blue-50 hover:text-blue-600 block px-3 py-2 rounded-md flex items-center space-x-2"
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

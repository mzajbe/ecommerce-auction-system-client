import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Import social icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">About Us</h3>
          <p>
            We are a leading car auction platform, providing an easy and transparent bidding system. 
            Explore a wide range of cars, bid on your favorites, and get the best deals.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-orange-400 transition duration-200">Home</a></li>
            <li><a href="#auctions" className="hover:text-orange-400 transition duration-200">Auctions</a></li>
            <li><a href="#how-it-works" className="hover:text-orange-400 transition duration-200">How It Works</a></li>
            <li><a href="#contact" className="hover:text-orange-400 transition duration-200">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Media Links Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-blue-600">
              <FaFacebookF size={24} />
            </a>
            <a href="https://twitter.com" className="hover:text-blue-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" className="hover:text-pink-500">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" className="hover:text-blue-700">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Contact Info</h3>
          <ul className="space-y-2">
            <li>
              <p>📍 123 Auction Street, City, Country</p>
            </li>
            <li>
              <p>📞 +1 (123) 456-7890</p>
            </li>
            <li>
              <p>✉️ support@carauctions.com</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-gray-900 py-4 mt-8">
        <div className="max-w-screen-xl mx-auto text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Car Auctions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

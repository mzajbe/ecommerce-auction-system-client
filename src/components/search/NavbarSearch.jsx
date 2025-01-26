import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Search } from "lucide-react"; // Assuming you're using Lucide for the search icon

const NavbarSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Debounce API call
    const delayDebounce = setTimeout(() => {
      if (searchTerm) {
        fetchSearchResults();
      } else {
        setResults([]);
      }
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  const fetchSearchResults = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://localhost:8000/api/auctions/search", {
        params: { car_name: searchTerm },
      });
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Navigate to auction details on result click
  const handleResultClick = (id) => {
    navigate(`/auctionDetails/${id}`);
  };

  return (
    <div className="flex-grow mx-4 hidden md:block">
      <div className="relative">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search products, auctions..."
          className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
        />
        <Search className="absolute left-3 top-3 text-gray-400" />

        {/* Search Results Dropdown */}
        {isFocused && results.length > 0 && (
          <div className="absolute w-full bg-white border border-gray-300 rounded-lg mt-2 shadow-lg z-10">
            {isLoading ? (
              <p className="p-3 text-gray-500">Loading...</p>
            ) : (
              results.map((result) => (
                <div
                  key={result.id}
                  className="p-3 hover:bg-gray-100 cursor-pointer flex items-center"
                  onClick={() => handleResultClick(result.id)} // Navigate on click
                >
                  <img
                    src={result.image_url}
                    alt={result.car_name}
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold">{result.car_name}</p>
                    <p className="text-sm text-gray-500">{result.model}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarSearch;

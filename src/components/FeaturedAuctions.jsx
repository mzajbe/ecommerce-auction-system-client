import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FeaturedAuctions = () => {
  const [featuredAuctions, setFeaturedAuctions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch auctions from the API
    const fetchAuctions = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/auctions");
        const data = await response.json();
        
        // Filter or pick featured auctions (e.g., first 4 auctions)
        setFeaturedAuctions(data.slice(0, 4));
      } catch (error) {
        console.error("Error fetching featured auctions:", error);
      }
    };

    fetchAuctions();
  }, []);

  const handleBidNow = (id) => {
    navigate(`/auctionDetails/${id}`); // Navigate to auction details page
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-orange-500 mb-8 text-center">
          Featured Auctions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredAuctions.map((auction) => (
            <div
              key={auction.id}
              className="bg-white rounded-lg shadow hover:shadow-md transition duration-300 overflow-hidden"
            >
              <img
                src={auction.image_url}
                alt={auction.car_name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {auction.car_name}
                </h3>
                <p className="text-sm text-gray-600">{auction.model}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Starting Price: ${auction.starting_price}
                </p>
                <button
                  onClick={() => handleBidNow(auction.id)}
                  className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300 w-full"
                >
                  Bid Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedAuctions;

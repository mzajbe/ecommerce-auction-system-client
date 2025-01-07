import  { useState, useEffect } from 'react';
import { Car, DollarSign, Users, Fuel, Gauge } from 'lucide-react';

const AuctionPage = () => {
  const [auctions, setAuctions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/auctions');
        if (!response.ok) {
          throw new Error('Failed to fetch auctions');
        }
        const data = await response.json();
        setAuctions(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAuctions();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Available Auctions</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {auctions.map((auction) => (
          <div 
            key={auction.id} 
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image Section */}
            <div className="p-4">
              <img
                src={auction.image_url || "/api/placeholder/400/300"}
                alt={auction.car_name}
                className="w-full h-48 object-cover rounded-md"
              />
            </div>
            
            {/* Content Section */}
            <div className="p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-bold">{auction.car_name}</h2>
                  <p className="text-gray-600">{auction.model}</p>
                </div>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                  {auction.vehicle_type}
                </span>
              </div>
              
              <p className="text-gray-700 mb-4 line-clamp-2">{auction.description}</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-gray-500" />
                  <span className="text-sm">{auction.passenger_capacity} Seats</span>
                </div>
                <div className="flex items-center gap-2">
                  <Fuel className="w-4 h-4 text-gray-500" />
                  <span className="text-sm">{auction.fuel}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gauge className="w-4 h-4 text-gray-500" />
                  <span className="text-sm">{auction.transmission}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-gray-500" />
                  <span className="text-sm">{auction.body_style}</span>
                </div>
              </div>
            </div>
            
            {/* Footer Section */}
            <div className="p-4 border-t border-gray-200">
              <div className="w-full flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-green-600" />
                  <span className="text-xl font-bold text-green-600">
                    ${parseFloat(auction.starting_price).toLocaleString()}
                  </span>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200">
                  Place Bid
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuctionPage;
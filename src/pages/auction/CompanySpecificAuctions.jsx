import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CompanySpecificAuctions = () => {
  const { companyId } = useParams(); // Get the company ID from the route
  const [filteredAuctions, setFilteredAuctions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize navigate for redirection

  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/auctions");
        const data = await response.json();

        // Filter auctions by company ID
        const companyAuctions = data.filter(
          (auction) => auction.company_id === parseInt(companyId)
        );
        setFilteredAuctions(companyAuctions);
      } catch (error) {
        setError("Failed to fetch company auctions");
      } finally {
        setLoading(false);
      }
    };

    fetchAuctions();
  }, [companyId]);

  const handleBidClick = (auctionId) => {
    navigate(`/auctionDetails/${auctionId}`); // Redirect to auction details page
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4 h-[75vh]">
      <h1 className="text-2xl font-bold mb-4">Auctions by Company</h1>
      {filteredAuctions.length === 0 ? (
        <p>No auctions found for this company.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAuctions.map((auction) => (
            <div key={auction.id} className="bg-white rounded-lg shadow-lg p-4">
              <img
                src={auction.image_url}
                alt={auction.car_name}
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="text-xl font-semibold mt-2">{auction.car_name}</h2>
              <p className="text-gray-500">{auction.model}</p>
              <p className="mt-2">Starting Price: ${auction.starting_price}</p>
              <button
                onClick={() => handleBidClick(auction.id)} // Redirect on click
                className="mt-4 px-4 py-2 bg-orange-400 text-white rounded-md hover:bg-white hover:text-orange-400 border hover:border-orange-400 transition-all"
              >
                Bid Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CompanySpecificAuctions;

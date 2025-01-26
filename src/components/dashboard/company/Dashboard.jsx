import  { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const Dashboard = () => {
    const [auctions, setAuctions] = useState([]);
    const [companyDetails, setCompanyDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCompanyAuctions = async () => {
          try {
            setLoading(true);
            const token = Cookies.get("auth_token");
    
            // Fetch current company details from token
            const companyResponse = await axios.get("http://localhost:8000/api/company", {
              headers: { Authorization: `Bearer ${token}` },
            });
            setCompanyDetails(companyResponse.data);
    
            // Fetch auctions for the specific company
            const auctionsResponse = await axios.get(
              `http://localhost:8000/api/companies/${companyResponse.data.id}/auctions`,
              { headers: { Authorization: `Bearer ${token}` } }
            );
            setAuctions(auctionsResponse.data);
          } catch (err) {
            setError(err.response?.data?.message || "Failed to fetch auctions");
          } finally {
            setLoading(false);
          }
        };
    
        fetchCompanyAuctions();
      }, []);
    
      if (loading) {
        return <div className="text-center mt-10">Loading...</div>;
      }
    
      if (error) {
        return <div className="text-center mt-10 text-red-500">{error}</div>;
      }
    
    return (
        <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">
          Auctions for {companyDetails?.company_name}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {auctions.map((auction) => (
            <div
              key={auction.id}
              className="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between"
            >
              <img
                src={auction.image_url}
                alt={auction.car_name}
                className="w-full h-40 object-cover rounded"
              />
              <div className="mt-4">
                <h2 className="text-xl font-bold">{auction.car_name}</h2>
                <p className="text-gray-600">{auction.model}</p>
                <p className="mt-2 text-gray-500">{auction.description}</p>
                <p className="mt-2 font-semibold">
                  Starting Price: ${auction.starting_price}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Start Time: {new Date(auction.start_time).toLocaleString()}
                </p>
                <p className="text-sm text-gray-500">
                  End Time: {new Date(auction.end_time).toLocaleString()}
                </p>
              </div>
              <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                onClick={() => window.location.href = `/auction/${auction.id}`}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Dashboard;
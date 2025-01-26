import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const Dashboard = () => {
  const [auctions, setAuctions] = useState([]);
  const [groupedAuctions, setGroupedAuctions] = useState({});
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

        const auctionsData = auctionsResponse.data;

        // Group auctions by date
        const grouped = auctionsData.reduce((acc, auction) => {
          const date = new Date(auction.start_time).toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          });
          if (!acc[date]) {
            acc[date] = [];
          }
          acc[date].push(auction);
          return acc;
        }, {});

        setGroupedAuctions(grouped);
        setAuctions(auctionsData);
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
      <h1 className="text-3xl font-bold text-center mb-8">
        Auctions for {companyDetails?.company_name}
      </h1>

      {Object.keys(groupedAuctions).map((date) => (
        <div key={date} className="mb-8">
          <h2 className="text-xl font-semibold bg-gray-100 p-2 rounded-md shadow">
            {date}
          </h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full mt-4 border-collapse border border-gray-200 rounded-lg shadow-lg">
              <thead>
                <tr className="bg-gray-200 text-gray-800">
                  <th className="px-4 py-2 border">Car Name</th>
                  <th className="px-4 py-2 border">Model</th>
                  <th className="px-4 py-2 border">Description</th>
                  <th className="px-4 py-2 border">Starting Price</th>
                  <th className="px-4 py-2 border">Start Time</th>
                  <th className="px-4 py-2 border">End Time</th>
                  <th className="px-4 py-2 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {groupedAuctions[date].map((auction) => (
                  <tr key={auction.id} className="hover:bg-gray-100">
                    <td className="px-4 py-2 border">{auction.car_name}</td>
                    <td className="px-4 py-2 border">{auction.model}</td>
                    <td className="px-4 py-2 border">{auction.description}</td>
                    <td className="px-4 py-2 border">${auction.starting_price}</td>
                    <td className="px-4 py-2 border">
                      {new Date(auction.start_time).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                    <td className="px-4 py-2 border">
                      {new Date(auction.end_time).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                    <td className="px-4 py-2 border text-center">
                      <button
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                        onClick={() => window.location.href = `/auction/${auction.id}`}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;

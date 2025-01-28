import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { Pencil, Trash2, X } from "lucide-react";

const Dashboard = () => {
  const [auctions, setAuctions] = useState([]);
  const [groupedAuctions, setGroupedAuctions] = useState({});
  const [companyDetails, setCompanyDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingAuction, setEditingAuction] = useState(null);
  const [updateFormData, setUpdateFormData] = useState({});

  useEffect(() => {
    fetchCompanyAuctions();
  }, []);

  const fetchCompanyAuctions = async () => {
    try {
      setLoading(true);
      const token = Cookies.get("auth_token");

      const companyResponse = await axios.get("http://localhost:8000/api/company", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCompanyDetails(companyResponse.data);

      const auctionsResponse = await axios.get(
        `http://localhost:8000/api/companies/${companyResponse.data.id}/auctions`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const auctionsData = auctionsResponse.data;

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

  const handleEdit = (auction) => {
    setEditingAuction(auction);
    setUpdateFormData({
      car_name: auction.car_name,
      model: auction.model,
      description: auction.description,
      starting_price: auction.starting_price,
      start_time: auction.start_time.slice(0, 16),
      end_time: auction.end_time.slice(0, 16),
    });
  };

  const handleUpdate = async (auctionId) => {
    try {
      const token = Cookies.get("auth_token");
      await axios.put(
        `http://localhost:8000/api/auctions/${auctionId}`,
        updateFormData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setEditingAuction(null);
      fetchCompanyAuctions();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update auction");
    }
  };

  const handleDelete = async (auctionId) => {
    if (window.confirm("Are you sure you want to delete this auction?")) {
      try {
        const token = Cookies.get("auth_token");
        await axios.delete(`http://localhost:8000/api/auctions/${auctionId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        fetchCompanyAuctions();
      } catch (err) {
        setError(err.response?.data?.message || "Failed to delete auction");
      }
    }
  };

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
                    {editingAuction?.id === auction.id ? (
                      <>
                        <td className="px-4 py-2 border">
                          <input
                            type="text"
                            className="w-full p-1 border rounded"
                            value={updateFormData.car_name}
                            onChange={(e) =>
                              setUpdateFormData({
                                ...updateFormData,
                                car_name: e.target.value,
                              })
                            }
                          />
                        </td>
                        <td className="px-4 py-2 border">
                          <input
                            type="text"
                            className="w-full p-1 border rounded"
                            value={updateFormData.model}
                            onChange={(e) =>
                              setUpdateFormData({
                                ...updateFormData,
                                model: e.target.value,
                              })
                            }
                          />
                        </td>
                        <td className="px-4 py-2 border">
                          <input
                            type="text"
                            className="w-full p-1 border rounded"
                            value={updateFormData.description}
                            onChange={(e) =>
                              setUpdateFormData({
                                ...updateFormData,
                                description: e.target.value,
                              })
                            }
                          />
                        </td>
                        <td className="px-4 py-2 border">
                          <input
                            type="number"
                            className="w-full p-1 border rounded"
                            value={updateFormData.starting_price}
                            onChange={(e) =>
                              setUpdateFormData({
                                ...updateFormData,
                                starting_price: e.target.value,
                              })
                            }
                          />
                        </td>
                        <td className="px-4 py-2 border">
                          <input
                            type="datetime-local"
                            className="w-full p-1 border rounded"
                            value={updateFormData.start_time}
                            onChange={(e) =>
                              setUpdateFormData({
                                ...updateFormData,
                                start_time: e.target.value,
                              })
                            }
                          />
                        </td>
                        <td className="px-4 py-2 border">
                          <input
                            type="datetime-local"
                            className="w-full p-1 border rounded"
                            value={updateFormData.end_time}
                            onChange={(e) =>
                              setUpdateFormData({
                                ...updateFormData,
                                end_time: e.target.value,
                              })
                            }
                          />
                        </td>
                        <td className="px-4 py-2 border">
                          <div className="flex gap-2 justify-center">
                            <button
                              className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                              onClick={() => handleUpdate(auction.id)}
                            >
                              Save
                            </button>
                            <button
                              className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 transition"
                              onClick={() => setEditingAuction(null)}
                            >
                              <X size={16} />
                            </button>
                          </div>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="px-4 py-2 border">{auction.car_name}</td>
                        <td className="px-4 py-2 border">{auction.model}</td>
                        <td className="px-4 py-2 border">{auction.description}</td>
                        <td className="px-4 py-2 border">
                          ${auction.starting_price}
                        </td>
                        <td className="px-4 py-2 border">
                          {new Date(auction.start_time).toLocaleTimeString(
                            "en-US",
                            {
                              hour: "2-digit",
                              minute: "2-digit",
                            }
                          )}
                        </td>
                        <td className="px-4 py-2 border">
                          {new Date(auction.end_time).toLocaleTimeString("en-US", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </td>
                        <td className="px-4 py-2 border">
                          <div className="flex gap-2 justify-center">
                            <button
                              className="text-blue-500 hover:text-blue-700 transition"
                              onClick={() => handleEdit(auction)}
                            >
                              <Pencil size={16} />
                            </button>
                            <button
                              className="text-red-500 hover:text-red-700 transition"
                              onClick={() => handleDelete(auction.id)}
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </>
                    )}
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
import { useState, useEffect } from "react";
import {
  //   Car,
  DollarSign,
  //   Users,
  //   Fuel,
  //   Gauge,
  //   Palette,
  //   CarFront,
  //   Clock,
  //   Timer,
  TrendingUp,
  //   History,
  //   AlertCircle,
  Lock,
  Unlock,
} from "lucide-react";
import { useParams } from "react-router-dom";

const Bidding = () => {
  const [auction, setAuction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bidAmount, setBidAmount] = useState("");
  const [maxAutoBidAmount, setMaxAutoBidAmount] = useState("");
  const [isAutoBidEnabled, setIsAutoBidEnabled] = useState(false);
  const [isAutoBidLocked, setIsAutoBidLocked] = useState(false);
  const [error, setError] = useState(null);
  const [bids, setBids] = useState([
    
  ]);

  const { id } = useParams();

  useEffect(() => {
    const fetchAuctionDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/auctions/search?id=${id}`
        );
        if (!response.ok) throw new Error("Failed to fetch auction details");
        const data = await response.json();
        setAuction(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAuctionDetails();
  }, [id]);

  const handleBidSubmit = (e) => {
    e.preventDefault();
    const lastBid =
      bids.length > 0 ? bids[0].amount : auction?.[0].starting_price;
    if (parseFloat(bidAmount) <= lastBid) {
      alert(
        `Your bid must be greater than the last bid of $${lastBid.toLocaleString()}`
      );
      return;
    }
    const newBid = {
      id: bids.length + 1,
      user: "You",
      amount: parseFloat(bidAmount),
      time: "Just now",
      isAutoBid: false,
    };
    setBids([newBid, ...bids]);
    setBidAmount("");
    setError(null);
  };

  const toggleAutoBidLock = () => {
    setIsAutoBidLocked(!isAutoBidLocked);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  return (
    <div className="lg:w-1/3">
      <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-4">
        <div className="mb-6">
          <div className="text-3xl font-bold text-green-600">
            ${parseFloat(auction?.[0].starting_price).toLocaleString()}
          </div>
          <div className="text-gray-500">Starting Price</div>
        </div>

        <form onSubmit={handleBidSubmit} className="mb-8">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Your Bid Amount</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2">
                <DollarSign className="w-5 h-5 text-gray-400" />
              </span>
              <input
                type="number"
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter amount"
                min={auction?.[0].starting_price}
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={isAutoBidEnabled}
                onChange={(e) => setIsAutoBidEnabled(e.target.checked)}
                className="w-4 h-4 text-blue-600"
              />
              <span>Enable Auto Bidding</span>
            </label>
          </div>

          {isAutoBidEnabled && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">
                Maximum Auto-Bid Amount
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                  <TrendingUp className="w-5 h-5 text-gray-400" />
                </span>
                <input
                  type="number"
                  value={maxAutoBidAmount}
                  onChange={(e) => setMaxAutoBidAmount(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter maximum amount"
                  min={bidAmount}
                  disabled={isAutoBidLocked}
                />
                <button
                  type="button"
                  onClick={toggleAutoBidLock}
                  className="ml-3 p-2 border rounded-lg hover:bg-gray-100"
                >
                  {isAutoBidLocked ? (
                    <Lock className="w-5 h-5 text-gray-500" />
                  ) : (
                    <Unlock className="w-5 h-5 text-gray-500" />
                  )}
                </button>
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-orange-400 border hover:border-orange-400 hover:bg-white hover:text-orange-400 text-white py-3 rounded-lg  transform hover:scale-105 transition-all duration-300"
          >
            Place Bid
          </button>
        </form>

        {/* Existing Bid History Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Bid History</h3>
          <div className="space-y-4">
            {bids.map((bid) => (
              <div
                key={bid.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div>
                  <div className="font-medium flex items-center gap-2">
                    {bid.user}
                    {bid.isAutoBid && (
                      <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                        Auto Bid
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-500">{bid.time}</div>
                </div>
                <div className="font-bold text-green-600">
                  ${bid.amount.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bidding;

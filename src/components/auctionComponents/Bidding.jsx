import { useState, useEffect } from "react";
import { DollarSign } from "lucide-react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Bidding = () => {
  const [auction, setAuction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bidAmount, setBidAmount] = useState("");
  const [error, setError] = useState(null);
  const [bids, setBids] = useState([]);
  const [autoBid, setAutoBid] = useState({ maxBid: "", increment: "" });
  const [autoBidActive, setAutoBidActive] = useState(false);

  const { id } = useParams();

  // Fetch auction details and bids
  const fetchAuctionAndBids = async () => {
    try {
      const token = Cookies.get("auth_token");

      const [auctionResponse, bidsResponse] = await Promise.all([
        axios.get(`http://localhost:8000/api/auctions/search?id=${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        axios.get(`http://localhost:8000/api/auctions/${id}/bids`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
      ]);

      setAuction(auctionResponse.data);
      setBids(bidsResponse.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))); // Sort bids by date (descending)
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  // Polling to refresh data every 5 seconds
  useEffect(() => {
    fetchAuctionAndBids();

    const interval = setInterval(() => {
      fetchAuctionAndBids();
    }, 5000);

    return () => clearInterval(interval);
  }, [id]);

  // Handle manual bid submission
  const handleBidSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = Cookies.get("auth_token");

      const lastBid =
        bids.length > 0 ? parseFloat(bids[0].bid_amount) : auction?.[0]?.starting_price;

      if (parseFloat(bidAmount) <= lastBid) {
        alert(`Your bid must be greater than $${lastBid.toLocaleString()}`);
        return;
      }

      if (parseFloat(bidAmount) >= auction?.[0]?.starting_price * 10) {
        alert("Bid limit reached! You cannot bid higher than 10 times the starting price.");
        return;
      }

      await axios.post(
        "http://localhost:8000/api/bids",
        {
          auction_id: id,
          bid_amount: bidAmount,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setBidAmount("");
      fetchAuctionAndBids();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to place bid");
    }
  };

  // Handle auto-bid setup
  const handleAutoBidSubmit = (e) => {
    e.preventDefault();
    const { maxBid, increment } = autoBid;
    const lastBid = bids.length > 0 ? parseFloat(bids[0].bid_amount) : auction?.[0]?.starting_price;

    if (parseFloat(maxBid) <= lastBid) {
      alert(`Your maximum bid must be greater than the current highest bid: $${lastBid.toLocaleString()}`);
      return;
    }

    if (parseFloat(maxBid) >= auction?.[0]?.starting_price * 10) {
      alert("Bid limit reached! You cannot set a maximum bid higher than 10 times the starting price.");
      return;
    }

    setAutoBidActive(true);
    alert(`Auto-bid activated up to $${parseFloat(maxBid).toLocaleString()} with increments of $${parseFloat(increment).toLocaleString()}`);
  };

  useEffect(() => {
    if (autoBidActive) {
      const interval = setInterval(() => {
        const { maxBid, increment } = autoBid;
        const lastBid = bids.length > 0 ? parseFloat(bids[0].bid_amount) : auction?.[0]?.starting_price;

        if (lastBid < parseFloat(maxBid)) {
          const nextBid = Math.min(lastBid + parseFloat(increment), parseFloat(maxBid));
          axios
            .post(
              "http://localhost:8000/api/bids",
              { auction_id: id, bid_amount: nextBid },
              { headers: { Authorization: `Bearer ${Cookies.get("auth_token")}` } }
            )
            .then(() => fetchAuctionAndBids())
            .catch((err) => setError(err.response?.data?.message || "Failed to place auto-bid"));
        } else {
          setAutoBidActive(false);
        }
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [autoBidActive, autoBid, bids]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-600 text-center">Error: {error}</div>;
  }

  const auctionEndTime = new Date(auction?.[0]?.end_time);
  const currentTime = new Date();
  const isAuctionEnded = currentTime >= auctionEndTime;

  const maxBid = bids.length > 0 ? parseFloat(bids[0].bid_amount) : 0;
  const isBidLimitReached = maxBid >= auction?.[0]?.starting_price * 10;

  const winner = isAuctionEnded || isBidLimitReached ? bids[0]?.user.name : null;

  return (
    <div className="lg:w-1/3">
      <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-4">
        <div className="mb-6">
          <div className="text-3xl font-bold text-green-600">
            ${parseFloat(auction?.[0]?.starting_price).toLocaleString()}
          </div>
          <div className="text-gray-500">Starting Price</div>
        </div>

        {isAuctionEnded || isBidLimitReached ? (
          <div className="text-center text-red-600">
            <h2 className="text-2xl font-bold mb-2">Bidding Closed</h2>
            {isBidLimitReached && <p className="text-gray-500">Bid limit reached!</p>}
            <p className="text-gray-500">
              Winner: <span className="font-bold text-green-600">{winner || "No bids placed"}</span>
            </p>
          </div>
        ) : (
          <>
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
                    min={auction?.[0]?.starting_price}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-400 border hover:border-orange-400 hover:bg-white hover:text-orange-400 text-white py-3 rounded-lg transform hover:scale-105 transition-all duration-300"
              >
                Place Bid
              </button>
            </form>

            <form onSubmit={handleAutoBidSubmit} className="mb-8">
              <h3 className="text-xl font-bold mb-4">Set Auto-Bid</h3>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Maximum Bid</label>
                <input
                  type="number"
                  value={autoBid.maxBid}
                  onChange={(e) => setAutoBid({ ...autoBid, maxBid: e.target.value })}
                  className="w-full pl-3 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your max bid"
                  min={auction?.[0]?.starting_price}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Increment Amount</label>
                <select
                  value={autoBid.increment}
                  onChange={(e) => setAutoBid({ ...autoBid, increment: e.target.value })}
                  className="w-full pl-3 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select Increment</option>
                  <option value={(auction?.[0]?.starting_price * 0.05).toFixed(2)}>5% of Starting Price</option>
                  <option value={(auction?.[0]?.starting_price * 0.1).toFixed(2)}>10% of Starting Price</option>
                  <option value={(auction?.[0]?.starting_price * 0.2).toFixed(2)}>20% of Starting Price</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded-lg transform hover:scale-105 transition-all duration-300"
              >
                Activate Auto-Bid
              </button>
            </form>
          </>
        )}

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
                    {bid.user.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {new Date(bid.created_at).toLocaleString()}
                  </div>
                </div>
                <div className="font-bold text-green-600">
                  ${parseFloat(bid.bid_amount).toLocaleString()}
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

import { useState, useEffect } from "react";
import {
  Car,
  DollarSign,
  Users,
  Fuel,
  Gauge,
  Palette,
  CarFront,
  Clock,
  Timer,
  TrendingUp,
  History,
  AlertCircle,
  Lock,
  Unlock,
} from "lucide-react";
import { useParams } from "react-router-dom";

const AuctionDetails = () => {
  const { id } = useParams();
  const [auction, setAuction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [bidAmount, setBidAmount] = useState("");
  const [maxAutoBidAmount, setMaxAutoBidAmount] = useState("");
  const [isAutoBidEnabled, setIsAutoBidEnabled] = useState(false);
  const [isAutoBidLocked, setIsAutoBidLocked] = useState(false);
  const [bids, setBids] = useState([
    {
      id: 1,
      user: "John Doe",
      amount: 25000,
      time: "2 minutes ago",
      isAutoBid: false,
    },
    {
      id: 2,
      user: "Jane Smith",
      amount: 24500,
      time: "5 minutes ago",
      isAutoBid: true,
    },
    {
      id: 3,
      user: "Mike Johnson",
      amount: 24000,
      time: "10 minutes ago",
      isAutoBid: false,
    },
  ]);

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

  useEffect(() => {
    if (!auction) return;

    const calculateCountdown = () => {
      const now = new Date().getTime();
      const startTime = new Date(auction[0].start_time).getTime();
      const endTime = new Date(auction[0].end_time).getTime();

      let targetDate = startTime;
      if (now > startTime) {
        targetDate = endTime;
      }

      const distance = targetDate - now;

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    const timer = setInterval(calculateCountdown, 1000);
    return () => clearInterval(timer);
  }, [auction]);

  const handleBidSubmit = (e) => {
    e.preventDefault();
    const lastBid = bids.length > 0 ? bids[0].amount : auction?.[0].starting_price;
    if (parseFloat(bidAmount) <= lastBid) {
      alert(`Your bid must be greater than the last bid of $${lastBid.toLocaleString()}`);
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

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Auction Details */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="relative h-96">
              <img
                src={auction?.[0].image_url}
                alt={auction?.[0].car_name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h1 className="text-4xl font-bold text-white mb-2">
                  {auction?.[0].car_name}
                </h1>
                <p className="text-xl text-gray-200">
                  Model: {auction?.[0].model}
                </p>
              </div>
            </div>

            {/* Countdown Section */}
            <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50">
              <div className="grid grid-cols-4 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl font-bold text-blue-600">
                    {countdown.days}
                  </div>
                  <div className="text-gray-600">Days</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl font-bold text-blue-600">
                    {countdown.hours}
                  </div>
                  <div className="text-gray-600">Hours</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl font-bold text-blue-600">
                    {countdown.minutes}
                  </div>
                  <div className="text-gray-600">Minutes</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl font-bold text-blue-600">
                    {countdown.seconds}
                  </div>
                  <div className="text-gray-600">Seconds</div>
                </div>
              </div>
            </div>

            {/* Vehicle Details */}
            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                  <Users className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="text-sm text-gray-500">Capacity</div>
                    <div className="font-medium">
                      {auction?.[0].passenger_capacity} Seats
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                  <Fuel className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="text-sm text-gray-500">Fuel Type</div>
                    <div className="font-medium">{auction?.[0].fuel}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                  <Gauge className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="text-sm text-gray-500">Transmission</div>
                    <div className="font-medium">
                      {auction?.[0].transmission}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                  <Car className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="text-sm text-gray-500">Body Style</div>
                    <div className="font-medium">{auction?.[0].body_style}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                  <CarFront className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="text-sm text-gray-500">Engine</div>
                    <div className="font-medium">
                      {auction?.[0].engine_type}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                  <Palette className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="text-sm text-gray-500">Color</div>
                    <div className="font-medium">{auction?.[0].color}</div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <p className="text-gray-700 leading-relaxed">
                  {auction?.[0].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Bidding Section */}
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
                <label className="block text-gray-700 mb-2">
                  Your Bid Amount
                </label>
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
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
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
      </div>
    </div>
  );
};

export default AuctionDetails;

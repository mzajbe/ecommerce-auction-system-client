import { useState, useEffect } from "react";
import {
  Car,
  // DollarSign,
  Users,
  Fuel,
  Gauge,
  Palette,
  CarFront,
  // Clock,
  // Timer,
  // TrendingUp,
  // History,
  // AlertCircle,
  // Lock,
  // Unlock,
} from "lucide-react";
import { useParams } from "react-router-dom";
import Bidding from "../../components/auctionComponents/Bidding";

const AuctionDetails = () => {
  const { id } = useParams();
  const [auction, setAuction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countdown, setCountdown] = useState(null);
  const [isAuctionFinished, setIsAuctionFinished] = useState(false);

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
      const endTime = new Date(auction[0].end_time).getTime();
      const distance = endTime - now;

      if (distance <= 0) {
        setIsAuctionFinished(true);
        clearInterval(timer); // Stop the timer
      } else {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    const timer = setInterval(calculateCountdown, 1000);
    return () => clearInterval(timer);
  }, [auction]);

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
              {isAuctionFinished ? (
                <div className="text-center text-3xl font-bold text-red-500">
                  Auction Finished
                </div>
              ) : (
                <div className="grid grid-cols-4 gap-4 text-center">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="text-3xl font-bold text-blue-600">
                      {countdown?.days || 0}
                    </div>
                    <div className="text-gray-600">Days</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="text-3xl font-bold text-blue-600">
                      {countdown?.hours || 0}
                    </div>
                    <div className="text-gray-600">Hours</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="text-3xl font-bold text-blue-600">
                      {countdown?.minutes || 0}
                    </div>
                    <div className="text-gray-600">Minutes</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="text-3xl font-bold text-blue-600">
                      {countdown?.seconds || 0}
                    </div>
                    <div className="text-gray-600">Seconds</div>
                  </div>
                </div>
              )}
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
        <Bidding></Bidding>
        
      </div>
    </div>
  );
};

export default AuctionDetails;

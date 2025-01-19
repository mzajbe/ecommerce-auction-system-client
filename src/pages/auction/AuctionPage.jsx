import { useState, useEffect } from "react";
import { Car, Users, Fuel, Gauge, Calendar, Clock, Timer } from "lucide-react";
import { Link } from "react-router-dom";

// Countdown component
const Countdown = ({ targetTime }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetTime));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetTime));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  if (timeLeft.total <= 0) {
    return <span>Time&apos;s up!</span>;
  }

  return (
    <span>
      {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
    </span>
  );
};

const calculateTimeLeft = (targetTime) => {
  const now = new Date();
  const targetDate = new Date(targetTime);
  const difference = targetDate - now;

  const timeLeft = {
    total: difference,
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };

  return timeLeft;
};

const AuctionPage = () => {
  const [auctions, setAuctions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/auctions");
        if (!response.ok) throw new Error("Failed to fetch auctions");
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

  // const formatDateTime = (dateTime) => {
  //   const date = new Date(dateTime);
  //   return date.toLocaleDateString(undefined, {
  //     weekday: 'long',
  //     year: 'numeric',
  //     month: 'long',
  //     day: 'numeric',
  //     hour: '2-digit',
  //     minute: '2-digit',
  //   });
  // };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-lg mx-auto mt-8 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
        Available Auctions
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {auctions.map((auction) => (
          <div
            key={auction.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* Image Section */}
            <div className="relative overflow-hidden">
              <img
                src={auction.image_url || "/api/placeholder/400/300"}
                alt={auction.car_name}
                className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Content Section */}
            <div className="p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {auction.car_name}
                  </h2>
                  <p className="text-gray-600">{auction.model}</p>
                </div>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                  {auction.vehicle_type}
                </span>
              </div>

              <p className="text-gray-700 mb-6 line-clamp-2">
                {auction.description}
              </p>

              {/* Specifications Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">
                    {auction.passenger_capacity} Seats
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
                  <Fuel className="w-4 h-4" />
                  <span className="text-sm">{auction.fuel}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
                  <Gauge className="w-4 h-4" />
                  <span className="text-sm">{auction.transmission}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
                  <Car className="w-4 h-4" />
                  <span className="text-sm">{auction.body_style}</span>
                </div>
              </div>

              {/* Time Information */}
              <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between group">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">Starts in:</span>
                  </div>
                  <Countdown targetTime={auction.start_time} />
                </div>

                <div className="flex items-center justify-between group">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">Ends in:</span>
                  </div>
                  <Countdown targetTime={auction.end_time} />
                </div>
              </div>
            </div>

            {/* Footer Section */}
            <div className="p-4 border-t border-gray-100">
              <div className="w-full flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold bg-gradient-to-r from-green-500 to-emerald-700 bg-clip-text text-transparent">
                    {parseFloat(auction.starting_price).toLocaleString()} TK
                  </span>
                </div>
                <Link
                  to={`/auctionDetails/${auction.id}`}
                  className="inline-flex items-center px-4 py-2 bg-orange-400 text-white rounded-md hover:bg-white hover:text-orange-400 border border-transparent hover:border-orange-400 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  View Auction
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuctionPage;

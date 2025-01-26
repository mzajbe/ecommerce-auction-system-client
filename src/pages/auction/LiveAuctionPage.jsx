import  { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router";


const LiveAuctionsPage = () => {
  const [auctions, setAuctions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timers, setTimers] = useState({});

  useEffect(() => {
    const fetchLiveAuctions = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/auctions/live"
        );
        setAuctions(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching live auctions:", error);
        setLoading(false);
      }
    };

    fetchLiveAuctions();
  }, []);

  useEffect(() => {
    const updateTimers = () => {
      const newTimers = auctions.reduce((acc, auction) => {
        const endTime = new Date(auction.end_time).getTime();
        const currentTime = Date.now();
        const timeRemaining = endTime - currentTime;
        acc[auction.id] = timeRemaining > 0 ? timeRemaining : 0;
        return acc;
      }, {});
      setTimers(newTimers);
    };

    const interval = setInterval(updateTimers, 1000);
    return () => clearInterval(interval);
  }, [auctions]);

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-100 via-purple-100 to-slate-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-6"
      >
        <h1 className="text-4xl font-bold text-gray-800">Live Auctions</h1>
        <p className="text-gray-600 mt-2">
          Explore all currently live auctions
        </p>
      </motion.div>

      {loading ? (
        <div className="flex justify-center items-center min-h-[60vh]">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-20 w-20"></div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { delayChildren: 0.3, staggerChildren: 0.2 },
              },
            }}
          >
            {auctions.map((auction) => (
              <motion.div
                key={auction.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 max-w-sm mx-auto">
                  <div className="relative">
                    <img
                      src={auction.image_url}
                      alt={auction.car_name}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-sm">
                      Live
                    </div>
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg font-bold text-gray-800">
                      {auction.car_name} ({auction.model})
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      {auction.vehicle_type}
                    </p>
                    <p className="text-gray-600 text-sm mb-3 mt-2">
                      {auction.description}
                    </p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-semibold text-gray-800">
                        ${auction.starting_price.toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-500">
                        Ends: {new Date(auction.end_time).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center mb-2">
                      <div className="bg-gray-200 rounded-full flex items-center justify-center w-16 h-16 mr-2">
                        <span className="text-gray-800 font-bold text-lg">
                          {timers[auction.id] > 0
                            ? formatTime(timers[auction.id])
                            : "00:00:00"}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600">
                        {timers[auction.id] > 0 ? "Time Left" : "Auction Ended"}
                      </span>
                    </div>
                    <Link to={`/auctionDetails/${auction.id}`}>
                      <button
                        className="w-full bg-orange-400 text-white py-2 rounded-lg hover:bg-white hover:text-orange-400 border hover:border-orange-400  transition-all"
                        //   onClick={() => alert(`Bid on ${auction.car_name}`)}
                      >
                        Place Bid
                      </button>
                    </Link>
                    
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default LiveAuctionsPage;

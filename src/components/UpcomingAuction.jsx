import { useState, useEffect } from "react";
import axios from "axios";
import { ArrowRight } from "lucide-react";

// Timer Component for Individual Auction Cards
const Timer = ({ endTime }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const timeDifference = new Date(endTime).getTime() - now;

      if (timeDifference > 0) {
        setTimeLeft({
          days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((timeDifference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((timeDifference / (1000 * 60)) % 60),
          seconds: Math.floor((timeDifference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timerInterval = setInterval(updateTimer, 1000);
    return () => clearInterval(timerInterval);
  }, [endTime]);

  return (
    <div className="grid grid-cols-4 gap-2 text-center text-gray-800">
      <div>
        <p className="text-lg font-bold">{timeLeft.days}</p>
        <p className="text-sm">Days</p>
      </div>
      <div>
        <p className="text-lg font-bold">{timeLeft.hours}</p>
        <p className="text-sm">Hours</p>
      </div>
      <div>
        <p className="text-lg font-bold">{timeLeft.minutes}</p>
        <p className="text-sm">Minutes</p>
      </div>
      <div>
        <p className="text-lg font-bold">{timeLeft.seconds}</p>
        <p className="text-sm">Seconds</p>
      </div>
    </div>
  );
};

// Main Upcoming Auction Page
const UpcomingAuction = () => {
  const [auctions, setAuctions] = useState([]);
  const [upcomingAuctions, setUpcomingAuctions] = useState([]);

  useEffect(() => {
    // Fetch auctions from the API
    const fetchAuctions = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/auctions");
        const currentTime = new Date().getTime();

        // Filter upcoming auctions
        const filteredAuctions = response.data.filter(
          (auction) => new Date(auction.start_time).getTime() > currentTime
        );

        setAuctions(response.data);
        setUpcomingAuctions(filteredAuctions);
      } catch (error) {
        console.error("Error fetching auctions:", error);
      }
    };

    fetchAuctions();
  }, []);

  if (!upcomingAuctions.length) {
    return <p className="text-center mt-10 text-gray-500">No upcoming auctions.</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Upcoming Auctions</h2>

      {/* Main Auction Card */}
      {upcomingAuctions[0] && (
        <div
          className="relative bg-cover bg-center rounded-lg shadow-md h-[500px] mb-6"
          style={{
            backgroundImage: `url('${upcomingAuctions[0].image_url}')`,
          }}
        >
          <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {new Date(upcomingAuctions[0].start_time).getTime() > Date.now()
              ? "Upcoming"
              : "Ended"}
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-white bg-opacity-90 p-4 rounded-b-lg">
            <Timer endTime={upcomingAuctions[0].start_time} />
          </div>
        </div>
      )}

      {/* Other Auction Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {upcomingAuctions.slice(1).map((auction, index) => (
          <div
            key={index}
            className="relative bg-cover bg-center rounded-lg shadow-md h-[435px] mt-16 transition-transform transform hover:scale-105 hover:shadow-xl"
            style={{ backgroundImage: `url('${auction.image_url}')` }}
          >
            <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Upcoming
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-white bg-opacity-90 p-4 rounded-b-lg">
              <Timer endTime={auction.start_time} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingAuction;

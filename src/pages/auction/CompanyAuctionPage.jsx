import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const CompanyAuctionPage = () => {
  const [auctions, setAuctions] = useState([]);
  const [calendarData, setCalendarData] = useState([]);

  // Fetch auctions from API
  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/auctions");
        const data = await response.json();
        setAuctions(data);
        organizeAuctionsByCalendar(data);
      } catch (error) {
        console.error("Error fetching auctions:", error);
      }
    };

    fetchAuctions();
  }, []);

  // Organize auctions into a calendar format by day and time
  const organizeAuctionsByCalendar = (auctions) => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const calendar = {};

    auctions.forEach((auction) => {
      const auctionDate = new Date(auction.start_time);
      const day = daysOfWeek[auctionDate.getDay()];
      const time = auctionDate.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      if (!calendar[time]) calendar[time] = {};
      if (!calendar[time][day]) calendar[time][day] = [];
      calendar[time][day].push(auction.company?.company_name);
    });

    const calendarArray = Object.entries(calendar).map(([time, days]) => ({
      time,
      schedule: daysOfWeek.map((day) => ({
        day,
        companies: days[day] || [],
      })),
    }));

    setCalendarData(calendarArray);
  };

  return (
    <div className="container mx-auto p-4 h-screen">
      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Link to="/auctionPage">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 bg-gradient-to-r from-orange-500 to-slate-600 text-white rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">View All Auctions</h2>
              <Calendar className="w-8 h-8" />
            </div>
            <p className="mt-4 text-sm">
              Explore all auctions listed on the platform, including upcoming
              and past events.
            </p>
          </motion.div>
        </Link>

        <Link to="/liveAuction">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="p-6 bg-gradient-to-r from-slate-600 to-orange-600 text-white rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">View Live Auctions</h2>
              {/* <LiveTv className="w-8 h-8" /> */}
            </div>
            <p className="mt-4 text-sm">
              See live auctions happening in real-time. Don’t miss out on
              exciting opportunities!
            </p>
          </motion.div>
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/4 space-y-8">
          {/* Auction Calendar Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-2xl font-bold mb-4">Auction Calendar</h1>
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse border border-gray-200">
                <thead>
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">
                      Auction Time
                    </th>
                    {calendarData[0]?.schedule.map((day, index) => (
                      <th
                        key={index}
                        className="border border-gray-300 px-4 py-2"
                      >
                        {day.day}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {calendarData.map((slot, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-4 py-2 text-center font-bold">
                        {slot.time}
                      </td>
                      {slot.schedule.map((day, idx) => (
                        <td
                          key={idx}
                          className="border border-gray-300 px-4 py-2"
                        >
                          {day.companies.length > 0 ? (
                            <ul className="list-disc list-inside">
                              {day.companies.map((company, i) => (
                                <li key={i} className="text-green-500">
                                  {company}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <span className="text-gray-400">No auctions</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/4 space-y-6">
          {/* About Auction Calendar Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-500 to-green-600 rounded-lg p-6 text-white shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">About Auction Calendar</h2>
              <Calendar className="w-6 h-6" />
            </div>
            <div className="space-y-4">
              <p className="text-sm">
                Our auction calendar provides a comprehensive overview of all
                upcoming auctions organized by time and day.
              </p>
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  Green listings indicate active auctions
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  Click on any company name to view details
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  Time slots are displayed in your local timezone
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CompanyAuctionPage;

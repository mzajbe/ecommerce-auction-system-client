// Import necessary libraries
import  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Bike, Timer, ArrowRight, Calendar, Megaphone } from 'lucide-react';


const CompanyAuctionPage = () => {
  // Sample data for demonstration purposes
  const [auctions, setAuctions] = useState([
    {
      time: '10:00 AM',
      schedule: [
        { day: 'Saturday', date: '2025-01-04', companies: ['AB Auctions', 'ReAuctions', 'PA Auctions', 'res Auction', 'bid x', 'x auction', 'ab company', 'bc company', 'de company', 'ef company', 'gh company'] },
        { day: 'Sunday', date: '2025-01-05', companies: ['AB Auctions', 'AB Auctions', 'AB Auctions', 'AB Auctions', 'AB Auctions', 'AB Auctions', 'bc company', 'de company', 'ef company', 'gh company'] },
        { day: 'Monday', date: '2025-01-06', companies: ['AB Auctions', 'AB Auctions', 'AB Auctions', 'AB Auctions', 'AB Auctions', 'AB Auctions', 'bc company', 'de company', 'ef company', 'gh company'] },
        { day: 'Tuesday', date: '2025-01-07', companies: ['AB Auctions', 'AB Auctions', 'AB Auctions', 'AB Auctions', 'AB Auctions', 'AB Auctions', 'bc company', 'de company', 'ef company', 'gh company'] },
        { day: 'Wednesday', date: '2025-01-08', companies: ['AB Auctions'] },
        { day: 'Thursday', date: '2025-01-09', companies: [] },
        { day: 'Friday', date: '2025-01-10', companies: [] },
      ],
    },
    {
      time: '2:00 PM',
      schedule: [
        { day: 'Saturday', date: '2025-01-04', companies: ['bc company', 'de company', 'ef company', 'gh company'] },
        { day: 'Sunday', date: '2025-01-05', companies: [] },
        { day: 'Monday', date: '2025-01-06', companies: [] },
        { day: 'Tuesday', date: '2025-01-07', companies: ['bc company', 'de company', 'ef company', 'gh company'] },
        { day: 'Wednesday', date: '2025-01-08', companies: [] },
        { day: 'Thursday', date: '2025-01-09', companies: [] },
        { day: 'Friday', date: '2025-01-10', companies: [] },
      ],
    },
    {
      time: '9:00 PM',
      schedule: [
        { day: 'Saturday', date: '2025-01-04', companies: ['ef company', 'gh company'] },
        { day: 'Sunday', date: '2025-01-05', companies: ['gh company', 'bc company', 'de company', 'ef company', 'gh company'] },
        { day: 'Monday', date: '2025-01-06', companies: ['gh company', 'bc company', 'de company', 'ef company', 'gh company'] },
        { day: 'Tuesday', date: '2025-01-07', companies: ['gh company', 'bc company', 'de company', 'ef company', 'gh company'] },
        { day: 'Wednesday', date: '2025-01-08', companies: ['gh company', 'bc company', 'de company', 'ef company', 'gh company'] },
        { day: 'Thursday', date: '2025-01-09', companies: [] },
        { day: 'Friday', date: '2025-01-10', companies: [] },
      ],
    },
  ]);

  const liveAuctions = [
    { id: 1, title: "Sport Bikes Collection", bidders: 45, timeLeft: "2h 15m" },
    { id: 2, title: "Vintage Motorcycles", bidders: 32, timeLeft: "45m" },
    { id: 2, title: "Vintage Motorcycles", bidders: 32, timeLeft: "45m" },
  ];

  const upcomingAuctions = [
    { id: 1, title: "Premium Bikes Auction", date: "Jan 15, 2025", totalBikes: 12 },
    { id: 2, title: "Classic Collection", date: "Jan 16, 2025", totalBikes: 8 }
  ];

  return (
    // <div className="container mx-auto p-4">
    //   <h1 className="text-2xl font-bold mb-4">Company Auctions</h1>
      


    //   {/* auction calender  */}
    //   <div className="overflow-x-auto">
        
    //     <table className="table-auto w-full border-collapse border border-gray-200">
    //       <thead>
    //         <tr>
    //           <th className="border border-gray-300 px-4 py-2">Auction Time</th>
    //           {auctions[0].schedule.map((day, index) => (
    //             <th key={index} className="border border-gray-300 px-4 py-2">
    //               {day.day} <br /> {day.date}
    //             </th>
    //           ))}
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {auctions.map((auction, index) => (
    //           <tr key={index}>
    //             <td className="border border-gray-300 px-4 py-2 text-center font-bold">{auction.time}</td>
    //             {auction.schedule.map((day, idx) => (
    //               <td key={idx} className="border border-gray-300 px-4 py-2">
    //                 {day.companies.length > 0 ? (
    //                   <ul className="list-disc list-inside">
    //                     {day.companies.map((company, i) => (
    //                       <li key={i} className="text-green-500">{company}</li>
    //                     ))}
    //                   </ul>
    //                 ) : (
    //                   <span className="text-gray-400">No auctions</span>
    //                 )}
    //               </td>
    //             ))}
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>


    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="lg:w-3/4 space-y-8">
          {/* Featured Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Previous three cards remain the same */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-orange-500 to-gray-600 rounded-lg p-6 text-white shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Live Auctions</h2>
                <Clock className="w-6 h-6" />
              </div>
              <div className="space-y-4">
                {liveAuctions.map(auction => (
                  <motion.div
                    key={auction.id}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/10 rounded-md p-3"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">{auction.title}</span>
                      <span className="text-sm">{auction.timeLeft}</span>
                    </div>
                    <div className="text-sm mt-2">
                      {auction.bidders} active bidders
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-500 to-orange-600 rounded-lg p-6 text-white shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Upcoming Auctions</h2>
                <Timer className="w-6 h-6" />
              </div>
              <div className="space-y-4">
                {upcomingAuctions.map(auction => (
                  <motion.div
                    key={auction.id}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/10 rounded-md p-3"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">{auction.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                    <div className="text-sm mt-2">
                      {auction.date} • {auction.totalBikes} bikes
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-orange-500 to-gray-600 rounded-lg p-6 text-white shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Featured Bikes</h2>
                <Bike className="w-6 h-6" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 rounded-md p-3 text-center"
                >
                  <div className="font-semibold">Sport Bikes</div>
                  <div className="text-sm mt-2">15+ Available</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 rounded-md p-3 text-center"
                >
                  <div className="font-semibold">Cruisers</div>
                  <div className="text-sm mt-2">12+ Available</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 rounded-md p-3 text-center"
                >
                  <div className="font-semibold">Vintage</div>
                  <div className="text-sm mt-2">8+ Available</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 rounded-md p-3 text-center"
                >
                  <div className="font-semibold">Adventure</div>
                  <div className="text-sm mt-2">10+ Available</div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Auction Calendar Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-2xl font-bold mb-4">Auction Calendar</h1>
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse border border-gray-200">
                <thead>
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">Auction Time</th>
                    {auctions[0].schedule.map((day, index) => (
                      <th key={index} className="border border-gray-300 px-4 py-2">
                        {day.day} <br /> {day.date}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {auctions.map((auction, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-4 py-2 text-center font-bold">
                        {auction.time}
                      </td>
                      {auction.schedule.map((day, idx) => (
                        <td key={idx} className="border border-gray-300 px-4 py-2">
                          {day.companies.length > 0 ? (
                            <ul className="list-disc list-inside">
                              {day.companies.map((company, i) => (
                                <li key={i} className="text-green-500">{company}</li>
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
                Our auction calendar provides a comprehensive overview of all upcoming motorcycle auctions. Each time slot shows the available bikes from different companies.
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
                  Time slots are in your local timezone
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Advertisement Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg p-6 text-white shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Featured Deal</h2>
              <Megaphone className="w-6 h-6" />
            </div>
            
            {/* Car SVG */}
            
            <img src="/src/assets/undraw_electric-car_vlgq.svg" alt="" />

            <div className="space-y-4">
              <h3 className="font-bold text-lg">Premium Vehicle Auction</h3>
              <p className="text-sm">
                Join our exclusive premium vehicle auction featuring luxury cars and motorcycles. Get up to 30% off on selected models!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full bg-white text-yellow-600 font-bold py-2 px-4 rounded-md"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CompanyAuctionPage;

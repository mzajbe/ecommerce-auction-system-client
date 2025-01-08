// Import necessary libraries
import React, { useState, useEffect } from 'react';

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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Company Auctions</h1>
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
                <td className="border border-gray-300 px-4 py-2 text-center font-bold">{auction.time}</td>
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
  );
};

export default CompanyAuctionPage;

import { motion } from "framer-motion";
import { Star, Edit, Trash2 } from "lucide-react";

const ActiveAuctions = () => {
  const auctions = [
    {
      id: 1,
      title: "BMW M3 2023",
      status: "Active",
      bids: 15,
      endDate: "2025-01-20",
      highlighted: true,
    },
    {
      id: 2,
      title: "Mercedes AMG GT",
      status: "Pending",
      bids: 8,
      endDate: "2025-01-22",
      highlighted: false,
    },
    {
      id: 3,
      title: "Audi RS7",
      status: "Completed",
      bids: 25,
      endDate: "2025-01-15",
      highlighted: true,
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-white rounded-lg p-6 shadow-lg mb-8"
    >
      <h3 className="text-xl font-bold mb-4">Active Auctions</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="py-3 text-left">Title</th>
              <th className="py-3 text-left">Status</th>
              <th className="py-3 text-left">Bids</th>
              <th className="py-3 text-left">End Date</th>
              <th className="py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {auctions.map((auction) => (
              <motion.tr
                key={auction.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ backgroundColor: "#f8fafc" }}
                className="border-b"
              >
                <td className="py-3 flex items-center gap-2">
                  {auction.title}
                  {auction.highlighted && (
                    <Star
                      className="w-4 h-4 text-yellow-500"
                      fill="currentColor"
                    />
                  )}
                </td>
                <td className="py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs
                          ${
                            auction.status === "Active"
                              ? "bg-green-100 text-green-800"
                              : auction.status === "Pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                  >
                    {auction.status}
                  </span>
                </td>
                <td className="py-3">{auction.bids}</td>
                <td className="py-3">{auction.endDate}</td>
                <td className="py-3">
                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 text-blue-500 hover:bg-blue-50 rounded-full"
                    >
                      <Edit className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-full"
                    >
                      <Trash2 className="w-4 h-4" />
                    </motion.button>
                    {!auction.highlighted && (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 text-yellow-500 hover:bg-yellow-50 rounded-full"
                      >
                        <Star className="w-4 h-4" />
                      </motion.button>
                    )}
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ActiveAuctions;

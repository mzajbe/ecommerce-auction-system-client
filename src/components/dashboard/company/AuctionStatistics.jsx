import { motion } from "framer-motion";

const AuctionStatistics = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                label: "Total Auctions",
                value: "156",
                color: "from-blue-500 to-blue-600 ",
              },
              {
                label: "Active Auctions",
                value: "23",
                color: "from-green-500 to-green-600",
              },
              {
                label: "Total Sales",
                value: "$1.2M",
                color: "from-purple-500 to-purple-600",
              },
              {
                label: "Success Rate",
                value: "89%",
                color: "from-yellow-500 to-yellow-600",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className={`bg-gradient-to-br ${stat.color} rounded-lg p-6 text-white shadow-lg`}
              >
                <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
                <p className="text-3xl font-bold">{stat.value}</p>
              </motion.div>
            ))}
          </div>
    );
};

export default AuctionStatistics;
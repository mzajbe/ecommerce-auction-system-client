import { motion } from "framer-motion";

const PurchaseHistory = () => {
  const purchaseHistory = [
    {
      id: 1,
      car: "BMW M3 2023",
      buyer: "zajbe",
      date: "2025-01-15",
      price: "85,000BDT",
    },
    {
      id: 2,
      car: "Mercedes AMG GT",
      buyer: "zajbe",
      date: "2025-01-14",
      price: "95,000BDT",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="bg-white rounded-lg p-6 shadow-lg"
    >
      <h3 className="text-xl font-bold mb-4">Purchase History</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="py-3 text-left">Car</th>
              <th className="py-3 text-left">Buyer</th>
              <th className="py-3 text-left">Date</th>
              <th className="py-3 text-left">Price</th>
            </tr>
          </thead>
          <tbody>
            {purchaseHistory.map((purchase) => (
              <motion.tr
                key={purchase.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ backgroundColor: "#f8fafc" }}
                className="border-b"
              >
                <td className="py-3">{purchase.car}</td>
                <td className="py-3">{purchase.buyer}</td>
                <td className="py-3">{purchase.date}</td>
                <td className="py-3">{purchase.price}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default PurchaseHistory;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  PlusCircle,
  Clock,
  Settings,
  BarChart3,
  History,
  Menu,
  X,
} from "lucide-react";
import Charts from "../../../components/dashboard/company/Charts";
import ActiveAuctions from "../../../components/dashboard/company/ActiveAuctions";
import PurchaseHistory from "../../../components/dashboard/company/PurchaseHistory";

const CompanyDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-white rounded-full shadow-lg"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X /> : <Menu />}
      </button>

      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            className="fixed left-0  h-screen w-64 bg-white shadow-xl z-40"
          >
            <div className="p-6">
              {/* Company Logo */}
              <div className="mb-8">
                <img
                  src="/api/placeholder/150/150"
                  alt="Company Logo"
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"
                />
                <h2 className="text-xl font-bold text-center">BMW Motors</h2>
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                {[
                  {
                    id: "dashboard",
                    icon: <LayoutDashboard />,
                    label: "Dashboard",
                  },
                  {
                    id: "create",
                    icon: <PlusCircle />,
                    label: "Create Auction",
                  },
                  { id: "active", icon: <Clock />, label: "Active Auctions" },
                  {
                    id: "history",
                    icon: <History />,
                    label: "Purchase History",
                  },
                  {
                    id: "statistics",
                    icon: <BarChart3 />,
                    label: "Statistics",
                  },
                  { id: "settings", icon: <Settings />, label: "Settings" },
                ].map((item) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg text-left
                      ${
                        activeTab === item.id
                          ? "bg-blue-500 text-white"
                          : "hover:bg-gray-100"
                      }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </motion.button>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div
        className={`${
          isSidebarOpen ? "lg:ml-64" : ""
        } p-8 transition-all duration-300`}
      >
        {/* Dashboard Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                label: "Total Auctions",
                value: "156",
                color: "from-blue-500 to-blue-600",
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

          {/* Charts Section */}
          <Charts></Charts>

          {/* Active Auctions Table */}
          <ActiveAuctions></ActiveAuctions>

          {/* Purchase History Table */}
          <PurchaseHistory></PurchaseHistory>
        </motion.div>
      </div>
    </div>
  );
};

export default CompanyDashboard;

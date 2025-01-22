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
import AuctionStatistics from "../../../components/dashboard/company/AuctionStatistics";
import AuctionForm from "../../auction/AuctionForm";

// Define components for each tab
const DashboardContent = () => (
  <>
    <AuctionStatistics />
    {/* <Charts /> */}
    {/* <ActiveAuctions /> */}
    {/* <PurchaseHistory /> */}
    {/* <AuctionForm></AuctionForm> */}
  </>
);

const CreateAuction = () => (
  <div>
    {/* <h1 className="text-xl font-bold">Create Auction</h1> */}
    {/* Add create auction form or content here */}
    <AuctionForm></AuctionForm>
  </div>
);



const ActiveAuctionsContent = () => (
  <div>
    <h1 className="text-xl font-bold">Active Auctions</h1>
    <ActiveAuctions />
  </div>
);

const PurchaseHistoryContent = () => (
  <div>
    <h1 className="text-xl font-bold">Purchase History</h1>
    <PurchaseHistory />
  </div>
);

const StatisticsContent = () => (
  <div>
    <h1 className="text-xl font-bold">Statistics</h1>
    <Charts />
  </div>
);

const SettingsContent = () => (
  <div>
    <h1 className="text-xl font-bold">Settings</h1>
    {/* Add settings form or content here */}
  </div>
);

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
            className="absolute left-0 h-full w-64 bg-white shadow-xl z-10"
          >
            <div className="p-6">
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
                  { id: "dashboard", icon: <LayoutDashboard />, label: "Dashboard" },
                  { id: "create", icon: <PlusCircle />, label: "Create Auction" },
                  { id: "active", icon: <Clock />, label: "Active Auctions" },
                  { id: "history", icon: <History />, label: "Purchase History" },
                  { id: "statistics", icon: <BarChart3 />, label: "Statistics" },
                  { id: "settings", icon: <Settings />, label: "Settings" },
                ].map((item) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg text-left
                      ${activeTab === item.id ? "bg-orange-400 text-white" : "hover:bg-gray-100"}`}
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
      <div className={`${isSidebarOpen ? "lg:ml-64" : ""} p-8 transition-all duration-300`}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {/* Conditionally render content based on activeTab */}
          {activeTab === "dashboard" && <DashboardContent />}
          {activeTab === "create" && <CreateAuction />}
          {activeTab === "active" && <ActiveAuctionsContent />}
          {activeTab === "history" && <PurchaseHistoryContent />}
          {activeTab === "statistics" && <StatisticsContent />}
          {activeTab === "settings" && <SettingsContent />}
        </motion.div>
      </div>
    </div>
  );
};

export default CompanyDashboard;

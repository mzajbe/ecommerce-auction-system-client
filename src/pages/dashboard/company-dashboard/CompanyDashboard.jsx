import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  PlusCircle, 
  Clock, 
  Settings, 
  LogOut, 
//   ChevronRight, 
  Star,
  BarChart3,
//   Calendar,
  History,
  Menu,
  X,
  Edit,
  Trash2,
//   AlertCircle
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

const CompanyDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Sample data - replace with real data
  const salesData = [
    { month: 'Jan', sales: 4000, profit: 2400 },
    { month: 'Feb', sales: 3000, profit: 1398 },
    { month: 'Mar', sales: 2000, profit: 9800 },
    { month: 'Apr', sales: 2780, profit: 3908 },
    { month: 'May', sales: 1890, profit: 4800 },
    { month: 'Jun', sales: 2390, profit: 3800 }
  ];

  const auctions = [
    { id: 1, title: "BMW M3 2023", status: "Active", bids: 15, endDate: "2025-01-20", highlighted: true },
    { id: 2, title: "Mercedes AMG GT", status: "Pending", bids: 8, endDate: "2025-01-22", highlighted: false },
    { id: 3, title: "Audi RS7", status: "Completed", bids: 25, endDate: "2025-01-15", highlighted: true }
  ];

  const purchaseHistory = [
    { id: 1, car: "BMW M3 2023", buyer: "John Doe", date: "2025-01-15", price: "$85,000" },
    { id: 2, car: "Mercedes AMG GT", buyer: "Jane Smith", date: "2025-01-14", price: "$95,000" }
  ];

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
            className="fixed left-0 top-0 h-screen w-64 bg-white shadow-xl z-40"
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
                  { id: 'dashboard', icon: <LayoutDashboard />, label: 'Dashboard' },
                  { id: 'create', icon: <PlusCircle />, label: 'Create Auction' },
                  { id: 'active', icon: <Clock />, label: 'Active Auctions' },
                  { id: 'history', icon: <History />, label: 'Purchase History' },
                  { id: 'statistics', icon: <BarChart3 />, label: 'Statistics' },
                  { id: 'settings', icon: <Settings />, label: 'Settings' }
                ].map((item) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg text-left
                      ${activeTab === item.id ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </motion.button>
                ))}
              </nav>
            </div>

            {/* Logout Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="absolute bottom-8 left-6 right-6 flex items-center justify-center gap-2 p-3 rounded-lg bg-red-500 text-white"
            >
              <LogOut />
              <span>Logout</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className={`${isSidebarOpen ? 'lg:ml-64' : ''} p-8 transition-all duration-300`}>
        {/* Dashboard Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { label: 'Total Auctions', value: '156', color: 'from-blue-500 to-blue-600' },
              { label: 'Active Auctions', value: '23', color: 'from-green-500 to-green-600' },
              { label: 'Total Sales', value: '$1.2M', color: 'from-purple-500 to-purple-600' },
              { label: 'Success Rate', value: '89%', color: 'from-yellow-500 to-yellow-600' }
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">Sales Overview</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="sales" stroke="#3b82f6" />
                  <Line type="monotone" dataKey="profit" stroke="#10b981" />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">Monthly Performance</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="sales" fill="#3b82f6" />
                  <Bar dataKey="profit" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
          </div>

          {/* Active Auctions Table */}
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
                      whileHover={{ backgroundColor: '#f8fafc' }}
                      className="border-b"
                    >
                      <td className="py-3 flex items-center gap-2">
                        {auction.title}
                        {auction.highlighted && (
                          <Star className="w-4 h-4 text-yellow-500" fill="currentColor" />
                        )}
                      </td>
                      <td className="py-3">
                        <span className={`px-2 py-1 rounded-full text-xs
                          ${auction.status === 'Active' ? 'bg-green-100 text-green-800' :
                            auction.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'}`}
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

          {/* Purchase History Table */}
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
                      whileHover={{ backgroundColor: '#f8fafc' }}
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
        </motion.div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
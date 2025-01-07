import { useState, useEffect } from "react";
import {
  Car,
  DollarSign,
  Users,
  Fuel,
  Gauge,
  //   Calendar,
  //   Clock,
  //   Shield,
  //   Info,
  //   Tool,
  Palette,
  CarFront 
  //   Engine,
} from "lucide-react";

const AuctionDetails = () => {
  const [auction, setAuction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bidAmount, setBidAmount] = useState("");

  // Simulated images array (replace with actual images from your API)
  const images = [
    "/api/placeholder/800/600",
    "/api/placeholder/800/600",
    "/api/placeholder/800/600",
    "/api/placeholder/800/600",
  ];

  useEffect(() => {
    const fetchAuctionDetails = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/auctions");
        if (!response.ok) throw new Error("Failed to fetch auction details");
        const data = await response.json();
        setAuction(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAuctionDetails();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500">
        Error: {error}
      </div>
    );
  }

  const handleBidSubmit = (e) => {
    e.preventDefault();
    // Handle bid submission logic here
    setIsModalOpen(false);
  };

  const demoimages = [
    "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Camry/11344/1733916451269/front-left-side-47.jpg",
    "https://redriven.com/wp-content/uploads/2024/07/Toyota-Camry-XV70-15.jpg.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGq8P9sLsV3IXUrlUuUy_x7MFm6UVNpMIVRw&s",
    "https://www.cnet.com/a/img/resize/4476006d1312ec379ee616af256b7596321b3742/hub/2021/08/20/257caf0a-f3a2-45db-9c70-d6ed50a85e6f/2021-toyota-camry-trd-ogi-1.jpg?auto=webp&fit=crop&height=900&width=1200",
  ];

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 animate-fadeIn">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
        <div className="animate-slideInLeft">
          {/* <h1 className="text-4xl font-bold mb-2">{auction?.car_name}</h1> */}
          <h1 className="text-4xl font-bold mb-2">{'toyota camry'}</h1>
          {/* <p className="text-xl text-gray-600">Model: {auction?.model}</p> */}
          <p className="text-xl text-gray-600">Model: 2013</p>
        </div>
        <div className="animate-slideInRight">
          <div className="flex items-center gap-2 text-2xl font-bold text-green-600">
            <DollarSign className="w-6 h-6" />
            {/* <span>${parseFloat(auction?.starting_price).toLocaleString()}</span> */}
            <span>${parseFloat("1000000").toLocaleString()}</span>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-4 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Place Bid
          </button>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="mb-12 animate-fadeIn">
        <div className="relative h-96 mb-4 rounded-xl overflow-hidden">
          <img
            // src={images[selectedImage]}
            src="https://di-uploads-pod7.dealerinspire.com/toyotachulavista/uploads/2023/09/2024-Toyota-Camry-Hybrid.png"
            alt={`${auction?.car_name} view ${selectedImage + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {/* images */}
          {demoimages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`h-24 w-full object-cover rounded-lg cursor-pointer transition-all duration-300 ${
                selectedImage === index
                  ? "ring-4 ring-blue-500"
                  : "opacity-70 hover:opacity-100"
              }`}
              onClick={() => setSelectedImage(index)}
            />
          ))}
        </div>
      </div>

      {/* Vehicle Information Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Key Features */}
        <div className="bg-white p-6 rounded-xl shadow-lg animate-slideInLeft">
          <h2 className="text-2xl font-bold mb-6">Key Features</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-blue-500" />
              {/* <span>{auction?.passenger_capacity} Passengers</span> */}
              <span>{4} Passengers</span>
            </div>
            <div className="flex items-center gap-3">
              <Fuel className="w-5 h-5 text-blue-500" />
              {/* <span>{auction?.fuel}</span> */}
              <span>{'petrol'}</span>
            </div>
            <div className="flex items-center gap-3">
              <Gauge className="w-5 h-5 text-blue-500" />
              {/* <span>{auction?.transmission}</span> */}
              <span>{'Automatic'}</span>
            </div>
            <div className="flex items-center gap-3">
              <Car className="w-5 h-5 text-blue-500" />
              {/* <span>{auction?.body_style}</span> */}
              <span>{'sedan'}</span>
            </div>
            <div className="flex items-center gap-3">
              {/* <Engine className="w-5 h-5 text-blue-500" /> */}
              <CarFront className="w-5 h-5 text-blue-500" />
              {/* <span>{auction?.engine_type}</span> */}
              <span>{'V4'}</span>
            </div>
            <div className="flex items-center gap-3">
              <Palette className="w-5 h-5 text-blue-500" />
              {/* <span>{auction?.color}</span> */}
              <span>{'silver'}</span>
            </div>
          </div>
        </div>

        {/* Damage Report */}
        <div className="bg-white p-6 rounded-xl shadow-lg animate-slideInRight">
          <h2 className="text-2xl font-bold mb-6">Damage Report</h2>
          <div className="flex items-start gap-3 text-gray-700">
            {/* <Tool className="w-5 h-5 shrink-0 mt-1 text-yellow-500" /> */}
            {/* <p>{auction?.damage_description}</p> */}
            <p>{'Minor scratches on rear bumper'}</p>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-white p-6 rounded-xl shadow-lg mb-12 animate-slideInUp">
        <h2 className="text-2xl font-bold mb-6">Description</h2>
        {/* <p className="text-gray-700 leading-relaxed">{auction?.description}</p> */}
        <p className="text-gray-700 leading-relaxed">{'A reliable sedan with great fuel efficiency.'}</p>
      </div>

      {/* Bid Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Place Your Bid</h3>
            <form onSubmit={handleBidSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  Bid Amount ($)
                </label>
                <input
                  type="number"
                  value={bidAmount}
                  onChange={(e) => setBidAmount(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                  min={auction?.starting_price}
                  required
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Confirm Bid
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInLeft {
          from { transform: translateX(-50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideInRight {
          from { transform: translateX(50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideInUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.5s ease-out;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.5s ease-out;
        }
        
        .animate-slideInUp {
          animation: slideInUp 0.5s ease-out;
        }
      `}</style> */}
    </div>
  );
};

export default AuctionDetails;

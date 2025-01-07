import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

// Timer Component for Individual Auction Cards
const Timer = ({ endTime }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const timeDifference = endTime - now;

      if (timeDifference > 0) {
        setTimeLeft({
          days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((timeDifference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((timeDifference / (1000 * 60)) % 60),
          seconds: Math.floor((timeDifference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timerInterval = setInterval(updateTimer, 1000);
    return () => clearInterval(timerInterval);
  }, [endTime]);

  return (
    <div className="grid grid-cols-4 gap-2 text-center text-gray-800">
      <div>
        <p className="text-lg font-bold">{timeLeft.days}</p>
        <p className="text-sm">Days</p>
      </div>
      <div>
        <p className="text-lg font-bold">{timeLeft.hours}</p>
        <p className="text-sm">Hours</p>
      </div>
      <div>
        <p className="text-lg font-bold">{timeLeft.minutes}</p>
        <p className="text-sm">Minutes</p>
      </div>
      <div>
        <p className="text-lg font-bold">{timeLeft.seconds}</p>
        <p className="text-sm">Seconds</p>
      </div>
    </div>
  );
};

// Main Upcoming Auction Page
const UpcomingAuction = () => {
  const auctions = [
    {
      image: "/src/assets/upcomimg auction/car.jpg",
      endTime: new Date().getTime() + 24 * 60 * 60 * 1000, // 1 day from now
    },
    {
      image: "/src/assets/upcomimg auction/car1.webp",
      endTime: new Date().getTime() + 48 * 60 * 60 * 1000, // 2 days from now
    },
    {
      image: "/src/assets/upcomimg auction/car1.webp",
      endTime: new Date().getTime() + 3 * 24 * 60 * 60 * 1000, // 3 days from now
    },
    {
      image: "/src/assets/upcomimg auction/car1.webp",
      endTime: new Date().getTime() + 3 * 24 * 60 * 60 * 1000, // 3 days from now
    },
    {
      image: "/src/assets/upcomimg auction/car1.webp",
      endTime: new Date().getTime() + 3 * 24 * 60 * 60 * 1000, // 3 days from now
    },
  ];

  // const brandData = [
  //   { logo: "/src/assets/companyLogo/bmw-logo.png", name: "Toyota", itemCount: 150 },
  //   { logo: "/src/assets/companyLogo/bmw-logo.png", name: "BMW", itemCount: 120 },
  //   { logo: "/src/assets/companyLogo/bmw-logo.png", name: "Mercedes", itemCount: 95 },
  //   { logo: "/src/assets/companyLogo/bmw-logo.png", name: "Audi", itemCount: 85 },
  //   { logo: "/src/assets/companyLogo/bmw-logo.png", name: "Audi", itemCount: 85 },
  //   { logo: "/src/assets/companyLogo/bmw-logo.png", name: "Audi", itemCount: 85 },
  // ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Upcoming Auctions</h2>

      {/* Main Auction Card */}
      <div
        className="relative bg-cover bg-center rounded-lg shadow-md h-[500px] mb-6"
        style={{ backgroundImage: `url('${auctions[0].image}')` }}
      >
        <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {auctions[0].endTime > Date.now() ? "Upcoming" : "Ended"}
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-white bg-opacity-90 p-4 rounded-b-lg">
          <Timer endTime={auctions[0].endTime} />
        </div>
      </div>

      {/* Other Auction Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">  
  {auctions.slice(1).map((auction, index) => (  
    <div  
      key={index}  
      className="relative bg-cover bg-center rounded-lg shadow-md h-[435px] mt-16 transition-transform transform hover:scale-105 hover:shadow-xl" // Added transition and hover classes  
      style={{ backgroundImage: `url('${auction.image}')` }} // Template literal for proper image URL  
    >  
      <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">  
        Upcoming  
      </div>  
      <div className="absolute inset-x-0 bottom-0 bg-white bg-opacity-90 p-4 rounded-b-lg">  
        <Timer endTime={auction.endTime} />  
      </div>  
    </div>  
  ))}  
</div>


      {/* Brand Categories Section */}
      {/* <div className="mt-10">
        <h2 className="text-2xl font-bold mb-6">Brand Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {brandData.map((brand) => (
            <div
              key={brand.name}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="w-16 h-16 object-contain mb-3"
              />
              <h3 className="font-medium text-lg">{brand.name}</h3>
              <p className="text-gray-600 text-sm">{brand.itemCount} items</p>
            </div>
          ))}
        </div>
        <button className="flex items-center gap-2 px-6 py-2 bg-orange-400 text-white rounded-lg hover:bg-white hover:border hover:text-orange-400 hover:border-orange-400 transition-colors mt-4">
          See More
          <ArrowRight className="w-4 h-4" />
        </button>
      </div> */}
    </div>
  );
};

export default UpcomingAuction;

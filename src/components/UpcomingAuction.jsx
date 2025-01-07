import { useState, useEffect } from "react";

const UpcomingAuction = ({ image, endTime }) => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

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
            setTimeLeft({ days: 0, hours: 0, minutes: 1, seconds: 20 });
          }
        };

        // Update timer every second
    const timerInterval = setInterval(updateTimer, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timerInterval);
  }, [endTime]);


  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-4">
  {/* Main Card */}
  <div
    className="relative bg-cover bg-center rounded-lg shadow-md h-[500px] "
    style={{ backgroundImage: "url('/src/assets/upcomimg auction/car.jpg')" }}
  >
    <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
        {timeLeft.days > 0 || timeLeft.hours > 0 || timeLeft.minutes > 0 || timeLeft.seconds > 0
          ? "Upcoming"
          : "Ended"}
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-white bg-opacity-90 p-4 rounded-b-lg">
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
      </div>
  </div>

  {/* Other Auction Cards */}
  {[
    "/src/assets/upcomimg auction/car1.webp",
    "/src/assets/upcomimg auction/car1.webp",
    "/src/assets/upcomimg auction/car1.webp",
    "/src/assets/upcomimg auction/car1.webp",
    
  ].map((image, index) => (
    <div
      key={index}
      className="relative bg-cover bg-center rounded-lg shadow-md h-[435px] mt-16"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
        Upcoming
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-white bg-opacity-90 p-4 rounded-b-lg">
        <div className="grid grid-cols-4 gap-2 text-center text-gray-800">
          <div>
            <p className="text-lg font-bold">3</p>
            <p className="text-sm">Days</p>
          </div>
          <div>
            <p className="text-lg font-bold">7</p>
            <p className="text-sm">Hours</p>
          </div>
          <div>
            <p className="text-lg font-bold">20</p>
            <p className="text-sm">Minutes</p>
          </div>
          <div>
            <p className="text-lg font-bold">47</p>
            <p className="text-sm">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

  );
};



export default UpcomingAuction;

const UpcomingAuction = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-4">
  {/* Main Card */}
  <div
    className="relative bg-cover bg-center rounded-lg shadow-md h-[500px] "
    style={{ backgroundImage: "url('/src/assets/upcomimg auction/car.jpg')" }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between p-4 text-white ">
      <div>
        <h3 className="text-lg font-semibold">Starting Bid:</h3>
        <p className="text-2xl font-bold">BDT 250000</p>
      </div>
      <div>
        <div className="grid grid-cols-4 gap-2 text-center">
          <div>
            <p className="text-xl font-bold">3</p>
            <p className="text-sm">Days</p>
          </div>
          <div>
            <p className="text-xl font-bold">7</p>
            <p className="text-sm">Hours</p>
          </div>
          <div>
            <p className="text-xl font-bold">20</p>
            <p className="text-sm">Minutes</p>
          </div>
          <div>
            <p className="text-xl font-bold">47</p>
            <p className="text-sm">Seconds</p>
          </div>
        </div>
        <button className="w-full mt-4 py-2 bg-orange-400 text-white rounded-md font-semibold hover:bg-white hover:text-orange-400">
          Notify Me
        </button>
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

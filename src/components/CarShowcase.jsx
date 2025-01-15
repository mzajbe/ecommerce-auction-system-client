import { useState } from "react";

const CarShowcase = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cars = [
    {
      id: 1,
      name: "Sports Car",
      shortDesc: "Pure power and precision in perfect harmony",
      description:
        "red car",
      color: "bg-red-500",
      defaultImage: "/src/assets/carShowCase/1.png",
      image:
        "/src/assets/carShowCase/red.jpg",
    },
    {
      id: 2,
      name: "Luxury Sedan",
      shortDesc: "Where comfort meets sophistication",
      description:
        "blue car. description here",
      color: "bg-blue-500",
      defaultImage: "/src/assets/carShowCase/1.png",
      image: "/src/assets/carShowCase/blue.jpg",
    },
    {
      id: 3,
      name: "Electric SUV",
      shortDesc: "The future of sustainable driving",
      description:
        "green car. description here",
      color: "bg-green-500",
      defaultImage: "/src/assets/carShowCase/1.png",
      image: "/src/assets/carShowCase/green.jpg",
    },
    {
      id: 4,
      name: "Classic Vintage",
      shortDesc: "Timeless elegance redefined",
      description:
        "purple car. description here",
      color: "bg-purple-500",
      defaultImage: "/src/assets/carShowCase/1.png",
      image: "/src/assets/carShowCase/purple.jpg",
    },
  ];

  const handleCardClick = (id) => {
    setSelectedCard(selectedCard === id ? null : id);
  };

  return (
    <div className="w-full h-[700px]  bg-gray-100">
      <div className="relative w-full h-[600px] flex ">
        {cars.map((car) => (
          <div
            key={car.id}
            onClick={() => handleCardClick(car.id)}
            className={`
              relative overflow-hidden cursor-pointer transition-all duration-500
              group
              ${selectedCard && selectedCard !== car.id ? "w-0 p-0" : ""}
              ${selectedCard === car.id ? "w-full" : "w-1/4"}
              ${selectedCard === null ? "hover:w-1/3" : ""}
            `}
          >
            {/* Card Content */}
            <div
              className={`
                h-full w-96 flex flex-col items-center justify-center
                transition-all duration-500 p-6
                ${
                  selectedCard === car.id
                    ? car.color + " bg-opacity-90"
                    : "bg-white hover:" + car.color + " hover:bg-opacity-90"
                }
              `}
            >
              {/* Default and Hover State */}
              {selectedCard !== car.id && (
                <div className="relative w-full h-full flex flex-col items-center justify-center transition-all duration-300 group">
                  {/* Default Image that takes the whole card space */}
                  <img
                    src={car.defaultImage}
                    alt=""
                    className="w-full h-full object-cover rounded-lg"
                  />

                  {/* Content that appears on hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 group-hover: + ${car.color} transition-all duration-500`}>
                    {/* Image for hover */}
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-96 h-96  object-cover rounded-lg shadow-lg"
                    />

                    {/* Car Name appearing on hover */}
                    <h2 className="text-2xl font-bold text-center text-white transition-colors">
                      {car.name}
                    </h2>

                    {/* Short Description appearing on hover */}
                    <p className="text-white text-lg font-light italic text-center">
                      {car.shortDesc}
                    </p>
                  </div>
                </div>
              )}

              {/* Expanded State */}
              {selectedCard === car.id && (
                <div className="w-full h-full flex flex-col items-center justify-center space-y-8 animate-fadeIn">
                  <h1 className="text-4xl font-bold text-white">{car.name}</h1>
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-96 h-64 object-cover rounded-lg shadow-xl animate-slideIn"
                  />
                  <p className="text-white text-lg max-w-2xl text-center animate-slideIn">
                    {car.description}
                  </p>
                  <button
                    className="mt-4 px-6 py-2 bg-white text-gray-800 rounded-full 
                             hover:bg-gray-100 transition-colors duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCard(null);
                    }}
                  >
                    View Auction
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarShowcase;

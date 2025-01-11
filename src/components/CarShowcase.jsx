import  { useState } from 'react';

const CarShowcase = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cars = [
    {
      id: 1,
      name: "Sports Car",
      shortDesc: "Pure power and precision in perfect harmony",
      description: "Experience pure adrenaline with this high-performance sports car. Built for speed and precision, it's the ultimate driving machine.",
      color: "bg-red-500",
      image: "https://www.autohausdierolf.com/blog/wp-content/uploads/2023/04/German-Car-Maintenance-Carmel-Indiana.jpg",
    },
    {
      id: 2,
      name: "Luxury Sedan",
      shortDesc: "Where comfort meets sophistication",
      description: "Indulge in supreme comfort and elegance. This luxury sedan combines sophisticated design with cutting-edge technology.",
      color: "bg-blue-500",
      image: "/api/placeholder/400/300",
    },
    {
      id: 3,
      name: "Electric SUV",
      shortDesc: "The future of sustainable driving",
      description: "The future of sustainable driving. This electric SUV offers spacious comfort with zero emissions and impressive range.",
      color: "bg-green-500",
      image: "/api/placeholder/400/300",
    },
    {
      id: 4,
      name: "Classic Vintage",
      shortDesc: "Timeless elegance redefined",
      description: "A timeless masterpiece that never goes out of style. This vintage car brings classic elegance to the modern era.",
      color: "bg-purple-500",
      image: "/api/placeholder/400/300",
    }
  ];

  const handleCardClick = (id) => {
    setSelectedCard(selectedCard === id ? null : id);
  };

  return (
    <div className="w-full h-screen p-4 bg-gray-100">
      <div className="relative w-full h-full flex gap-4">
        {cars.map((car) => (
          <div
            key={car.id}
            onClick={() => handleCardClick(car.id)}
            className={`
              relative overflow-hidden cursor-pointer transition-all duration-500
              group
              ${selectedCard && selectedCard !== car.id ? 'w-0 p-0' : ''}
              ${selectedCard === car.id ? 'w-full' : 'w-1/4'}
              ${selectedCard === null ? 'hover:w-1/3' : ''}
            `}
          >
            {/* Card Content */}
            <div 
              className={`
                h-full w-full flex flex-col items-center justify-center
                transition-all duration-500 p-6
                ${selectedCard === car.id ? car.color + ' bg-opacity-90' : 'bg-white hover:' + car.color + ' hover:bg-opacity-90'}
              `}
            >
              {/* Default and Hover State */}
              {selectedCard !== car.id && (
                <div className="text-center transition-all duration-300 w-full h-full flex flex-col items-center justify-center">
                  <h2 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">{car.name}</h2>
                  
                  {/* Content that appears on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-64 h-48 object-cover mb-4 rounded-lg shadow-lg"
                    />
                    <p className="text-white text-lg font-light italic">
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
                    Close
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
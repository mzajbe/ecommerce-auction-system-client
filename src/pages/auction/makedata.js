// mockData.js

export const auctions = [
    {
      "id": 1,
      "car_name": "Toyota Camry",
      "model": "2023",
      "description": "A reliable sedan with great fuel efficiency. This vehicle comes with a comprehensive maintenance history and has been thoroughly inspected by certified mechanics. Features include advanced safety systems, leather interior, and premium sound system.",
      "image_url": "/api/placeholder/800/600",
      "passenger_capacity": 5,
      "body_style": "Sedan",
      "cylinders": 4,
      "color": "Pearl White",
      "engine_type": "2.5L 4-Cylinder",
      "transmission": "Automatic",
      "vehicle_type": "Sedan",
      "fuel": "Petrol",
      "damage_description": "Minor scratches on rear bumper, small dent on passenger door",
      "starting_price": "25000.00",
      "current_bid": "26500.00",
      "bid_end_date": "2025-02-15T18:00:00.000Z",
      "created_at": "2025-01-07T18:57:44.000000Z",
      "updated_at": "2025-01-07T18:57:44.000000Z"
    },
    {
      "id": 2,
      "car_name": "Honda CR-V",
      "model": "2022",
      "description": "Versatile SUV perfect for families. Well-maintained with all service records available. Includes advanced driver assistance features, panoramic sunroof, and third-row seating option.",
      "image_url": "/api/placeholder/800/600",
      "passenger_capacity": 7,
      "body_style": "SUV",
      "cylinders": 4,
      "color": "Midnight Blue",
      "engine_type": "1.5L Turbo",
      "transmission": "CVT",
      "vehicle_type": "SUV",
      "fuel": "Petrol",
      "damage_description": "No significant damage, minor wear and tear",
      "starting_price": "28000.00",
      "current_bid": "29500.00",
      "bid_end_date": "2025-02-20T20:00:00.000Z",
      "created_at": "2025-01-08T10:30:00.000000Z",
      "updated_at": "2025-01-08T10:30:00.000Z"
    },
    {
      "id": 3,
      "car_name": "Tesla Model 3",
      "model": "2023",
      "description": "High-performance electric vehicle with cutting-edge technology. Features include Autopilot capability, premium interior, and long-range battery. Perfect condition with regular software updates.",
      "image_url": "/api/placeholder/800/600",
      "passenger_capacity": 5,
      "body_style": "Sedan",
      "cylinders": 0,
      "color": "Red Multi-Coat",
      "engine_type": "Electric",
      "transmission": "Electric",
      "vehicle_type": "Electric",
      "fuel": "Electric",
      "damage_description": "Pristine condition, no damage reported",
      "starting_price": "45000.00",
      "current_bid": "47000.00",
      "bid_end_date": "2025-02-18T22:00:00.000Z",
      "created_at": "2025-01-07T15:45:00.000000Z",
      "updated_at": "2025-01-07T15:45:00.000Z"
    },
    {
      "id": 4,
      "car_name": "Ford F-150",
      "model": "2022",
      "description": "Powerful pickup truck with excellent towing capacity. Features include bed liner, towing package, and advanced safety features. Well-maintained with complete service history.",
      "image_url": "/api/placeholder/800/600",
      "passenger_capacity": 6,
      "body_style": "Pickup",
      "cylinders": 8,
      "color": "Race Red",
      "engine_type": "5.0L V8",
      "transmission": "Automatic",
      "vehicle_type": "Truck",
      "fuel": "Petrol",
      "damage_description": "Small scratch on driver side door, minor bed liner wear",
      "starting_price": "35000.00",
      "current_bid": "36500.00",
      "bid_end_date": "2025-02-25T21:00:00.000Z",
      "created_at": "2025-01-06T09:20:00.000000Z",
      "updated_at": "2025-01-06T09:20:00.000000Z"
    },
    {
      "id": 5,
      "car_name": "BMW X5",
      "model": "2023",
      "description": "Luxury SUV with premium features and powerful performance. Includes M Sport package, premium sound system, and panoramic roof. Maintained by authorized BMW service center.",
      "image_url": "/api/placeholder/800/600",
      "passenger_capacity": 5,
      "body_style": "SUV",
      "cylinders": 6,
      "color": "Alpine White",
      "engine_type": "3.0L I6 Turbo",
      "transmission": "Automatic",
      "vehicle_type": "SUV",
      "fuel": "Petrol",
      "damage_description": "Minor curb rash on rear wheel",
      "starting_price": "55000.00",
      "current_bid": "57500.00",
      "bid_end_date": "2025-02-22T19:00:00.000Z",
      "created_at": "2025-01-05T14:15:00.000000Z",
      "updated_at": "2025-01-05T14:15:00.000000Z"
    }
  ];
  
  export const getAuctionById = (id) => {
    return auctions.find(auction => auction.id === Number(id));
  };
  
  // Additional images for detail view
  export const auctionImages = {
    1: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ],
    2: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ],
    3: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ],
    4: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ],
    5: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ]
  };
// AuctionForm.js
import { useState } from "react";
import axios from "axios";

const AuctionForm = () => {
  const [formData, setFormData] = useState({
    car_name: "toyota",
    model: "bmw",
    description: "good",
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQDE4cJvMUaRNtQKS6pJCi7je2_72uwO5USw&s",
    passenger_capacity: "2",
    body_style: "sedan",
    cylinders: "4",
    color: "red",
    engine_type: "V4",
    transmission: "automatic",
    vehicle_type: "auto",
    fuel: "petrol",
    damage_description: "",
    starting_price: "10",
    start_time: "",
    end_time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  console.log("Form Data:", formData);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedData = {
      ...formData,
      passenger_capacity: parseInt(formData.passenger_capacity),
      cylinders: parseInt(formData.cylinders),
      starting_price: parseFloat(formData.starting_price),
      start_time: formatDateTime(formData.start_time),
      end_time: formatDateTime(formData.end_time)
    };

    try {
      const response = await axios.post('http://localhost:8000/api/auctions', formattedData);
      console.log('Auction created:', response.data);
      alert('Auction created successfully!');
      setFormData({
        car_name: '',
        model: '',
        description: '',
        image_url: '',
        passenger_capacity: '',
        body_style: '',
        cylinders: '',
        color: '',
        engine_type: '',
        transmission: '',
        vehicle_type: '',
        fuel: '',
        damage_description: '',
        starting_price: '',
        start_time: '',
        end_time: ''
      });
    } catch (error) {
      console.error('Error creating auction:', error);
      alert('Failed to create auction. Please try again.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-lg">
      <h2 className="text-3xl font-extrabold mb-8 text-orange-400">
        Create Auction
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="car_name"
              className="block text-sm font-semibold text-gray-700"
            >
              Car Name
            </label>
            <input
              type="text"
              name="car_name"
              id="car_name"
              value={formData.car_name}
              onChange={handleChange}
              className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
              placeholder="Enter car name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="model"
              className="block text-sm font-semibold text-gray-700"
            >
              Model
            </label>
            <input
              type="text"
              name="model"
              id="model"
              value={formData.model}
              onChange={handleChange}
              className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
              placeholder="Enter car model"
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-semibold text-gray-700"
          >
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
            placeholder="Enter description"
          ></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="image_url"
              className="block text-sm font-semibold text-gray-700"
            >
              Image URL
            </label>
            <input
              type="url"
              name="image_url"
              id="image_url"
              value={formData.image_url}
              onChange={handleChange}
              className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
              placeholder="Enter image URL"
              required
            />
          </div>

          <div>
            <label
              htmlFor="passenger_capacity"
              className="block text-sm font-semibold text-gray-700"
            >
              Passenger Capacity
            </label>
            <select
              name="passenger_capacity"
              id="passenger_capacity"
              value={formData.passenger_capacity}
              onChange={handleChange}
              className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
              required
            >
              <option value="">Select</option>
              {[2, 4, 5, 7, 8].map((capacity) => (
                <option key={capacity} value={capacity}>
                  {capacity}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="body_style"
              className="block text-sm font-semibold text-gray-700"
            >
              Body Style
            </label>
            <input
              type="text"
              name="body_style"
              id="body_style"
              value={formData.body_style}
              onChange={handleChange}
              className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
              placeholder="e.g., Sedan"
              required
            />
          </div>

          <div>
            <label
              htmlFor="cylinders"
              className="block text-sm font-semibold text-gray-700"
            >
              Cylinders
            </label>
            <input
              type="number"
              name="cylinders"
              id="cylinders"
              value={formData.cylinders}
              onChange={handleChange}
              className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
              placeholder="Enter cylinders"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="color"
              className="block text-sm font-semibold text-gray-700"
            >
              Color
            </label>
            <input
              type="text"
              name="color"
              id="color"
              value={formData.color}
              onChange={handleChange}
              className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
              placeholder="Enter color"
              required
            />
          </div>

          <div>
            <label
              htmlFor="engine_type"
              className="block text-sm font-semibold text-gray-700"
            >
              Engine Type
            </label>
            <select
              name="engine_type"
              id="engine_type"
              value={formData.engine_type}
              onChange={handleChange}
              className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
              required
            >
              <option value="">Select</option>
              <option value="V4">V4</option>
              <option value="V6">V6</option>
              <option value="V8">V8</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="transmission"
              className="block text-sm font-semibold text-gray-700"
            >
              Transmission
            </label>
            <input
              type="text"
              name="transmission"
              id="transmission"
              value={formData.transmission}
              onChange={handleChange}
              className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
              placeholder="e.g., Automatic"
              required
            />
          </div>

          <div>
            <label
              htmlFor="vehicle_type"
              className="block text-sm font-semibold text-gray-700"
            >
              Vehicle Type
            </label>
            <select
              name="vehicle_type"
              id="vehicle_type"
              value={formData.vehicle_type}
              onChange={handleChange}
              className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
              required
            >
              <option value="">Select</option>
              <option value="auto">Auto</option>
              <option value="manual">Manual</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="fuel"
              className="block text-sm font-semibold text-gray-700"
            >
              Fuel
            </label>
            <select
              name="fuel"
              id="fuel"
              value={formData.fuel}
              onChange={handleChange}
              className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
              required
            >
              <option value="">Select</option>
              <option value="petrol">Petrol</option>
              <option value="diesel">Diesel</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="damage_description"
              className="block text-sm font-semibold text-gray-700"
            >
              Damage Description
            </label>
            <textarea
              name="damage_description"
              id="damage_description"
              value={formData.damage_description}
              onChange={handleChange}
              className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
              placeholder="Enter damage description"
            ></textarea>
          </div>
        </div>

        <div>
          <label
            htmlFor="starting_price"
            className="block text-sm font-semibold text-gray-700"
          >
            Starting Price
          </label>
          <input
            type="number"
            name="starting_price"
            id="starting_price"
            value={formData.starting_price}
            onChange={handleChange}
            className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
            placeholder="Enter starting price"
            required
          />
        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="start_time" className="block text-sm font-semibold text-gray-700">Start Time</label>
            <input
              type="datetime-local"
              name="start_time"
              id="start_time"
              value={formData.start_time}
              onChange={handleChange}
              className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
              required
            />
          </div>

          <div>
            <label htmlFor="end_time" className="block text-sm font-semibold text-gray-700">End Time</label>
            <input
              type="datetime-local"
              name="end_time"
              id="end_time"
              value={formData.end_time}
              onChange={handleChange}
              className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
              required
            />
          </div>
        </div>


        <button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-400 to-orange-700 text-white py-3 px-6 rounded-lg shadow-lg hover:from-orange-700 hover:to-orange-400 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Submit Auction
        </button>
      </form>
    </div>
  );
};

export default AuctionForm;

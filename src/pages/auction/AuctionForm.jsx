// AuctionForm.js
import  { useState } from 'react';
import axios from 'axios';

const AuctionForm = () => {
    const [formData, setFormData] = useState({
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
        starting_price: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/auctions', formData);
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
                starting_price: ''
            });
        } catch (error) {
            console.error('Error creating auction:', error);
            alert('Failed to create auction. Please try again.');
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Create Auction</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="car_name" className="block text-sm font-medium">Car Name</label>
                    <input
                        type="text"
                        name="car_name"
                        id="car_name"
                        value={formData.car_name}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter car name"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="model" className="block text-sm font-medium">Model</label>
                    <input
                        type="text"
                        name="model"
                        id="model"
                        value={formData.model}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter car model"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-medium">Description</label>
                    <textarea
                        name="description"
                        id="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter description"
                    ></textarea>
                </div>

                <div>
                    <label htmlFor="image_url" className="block text-sm font-medium">Image URL</label>
                    <input
                        type="url"
                        name="image_url"
                        id="image_url"
                        value={formData.image_url}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter image URL"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="passenger_capacity" className="block text-sm font-medium">Passenger Capacity</label>
                    <select
                        name="passenger_capacity"
                        id="passenger_capacity"
                        value={formData.passenger_capacity}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        required
                    >
                        <option value="">Select</option>
                        {[2, 4, 5, 7, 8].map(capacity => (
                            <option key={capacity} value={capacity}>{capacity}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="body_style" className="block text-sm font-medium">Body Style</label>
                    <input
                        type="text"
                        name="body_style"
                        id="body_style"
                        value={formData.body_style}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g., Sedan"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="cylinders" className="block text-sm font-medium">Cylinders</label>
                    <input
                        type="number"
                        name="cylinders"
                        id="cylinders"
                        value={formData.cylinders}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter cylinders"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="color" className="block text-sm font-medium">Color</label>
                    <input
                        type="text"
                        name="color"
                        id="color"
                        value={formData.color}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter color"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="engine_type" className="block text-sm font-medium">Engine Type</label>
                    <select
                        name="engine_type"
                        id="engine_type"
                        value={formData.engine_type}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        required
                    >
                        <option value="">Select</option>
                        <option value="V4">V4</option>
                        <option value="V6">V6</option>
                        <option value="V8">V8</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="transmission" className="block text-sm font-medium">Transmission</label>
                    <input
                        type="text"
                        name="transmission"
                        id="transmission"
                        value={formData.transmission}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g., Automatic"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="vehicle_type" className="block text-sm font-medium">Vehicle Type</label>
                    <select
                        name="vehicle_type"
                        id="vehicle_type"
                        value={formData.vehicle_type}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        required
                    >
                        <option value="">Select</option>
                        <option value="auto">Auto</option>
                        <option value="manual">Manual</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="fuel" className="block text-sm font-medium">Fuel</label>
                    <select
                        name="fuel"
                        id="fuel"
                        value={formData.fuel}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        required
                    >
                        <option value="">Select</option>
                        <option value="petrol">Petrol</option>
                        <option value="diesel">Diesel</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="damage_description" className="block text-sm font-medium">Damage Description</label>
                    <textarea
                        name="damage_description"
                        id="damage_description"
                        value={formData.damage_description}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter damage description"
                    ></textarea>
                </div>

                <div>
                    <label htmlFor="starting_price" className="block text-sm font-medium">Starting Price</label>
                    <input
                        type="number"
                        name="starting_price"
                        id="starting_price"
                        value={formData.starting_price}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter starting price"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Submit Auction
                </button>
            </form>
        </div>
    );
};

export default AuctionForm;

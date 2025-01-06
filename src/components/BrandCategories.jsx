/* eslint-disable react/prop-types */

import { ArrowRight } from 'lucide-react';

const BrandCard = ({ logo, name, itemCount }) => (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
      <img src={logo} alt={`${name} logo`} className="w-16 h-16 object-contain mb-3" />
      <h3 className="font-medium text-lg">{name}</h3>
      <p className="text-gray-600 text-sm">{itemCount} items</p>
    </div>
  );

const BrandCategories = () => {
    const brandData = [
        { logo: "/src/assets/companyLogo/bmw-logo.png", name: "Toyota", itemCount: 150 },
        { logo: "/src/assets/companyLogo/bmw-logo.png", name: "BMW", itemCount: 120 },
        { logo: "/src/assets/companyLogo/bmw-logo.png", name: "Mercedes", itemCount: 95 },
        { logo: "/src/assets/companyLogo/bmw-logo.png", name: "Mercedes", itemCount: 95 },
        { logo: "/src/assets/companyLogo/bmw-logo.png", name: "Mercedes", itemCount: 95 },
        { logo: "/src/assets/companyLogo/bmw-logo.png", name: "Mercedes", itemCount: 95 },
        { logo: "/src/assets/companyLogo/bmw-logo.png", name: "Mercedes", itemCount: 95 },
        { logo: "/src/assets/companyLogo/bmw-logo.png", name: "Audi", itemCount: 85 }
      ];

  return (
    <div className="max-w-6xl mx-auto p-4">
    <h2 className="text-2xl font-bold mb-6">Brand Categories</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {brandData.map((brand) => (
        <BrandCard key={brand.name} {...brand} />
      ))}
    </div>
    <button className="flex items-center gap-2 px-6 py-2 bg-orange-400 text-white rounded-lg hover:bg-white hover:border  hover:text-orange-400 hover:border-orange-400 transition-colors">
      See More
      <ArrowRight className="w-4 h-4" />
    </button>
  </div>
  );
};

export default BrandCategories;
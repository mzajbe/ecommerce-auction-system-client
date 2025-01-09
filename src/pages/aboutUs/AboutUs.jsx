import { useState, useEffect } from 'react';
import {  Car, ShoppingBag, Users, ArrowRight, Shield, } from 'lucide-react';
import SocialAnimation from '../../components/animationComponents/socialAnimation/SocialAnimation';

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleIntersection = (index) => {
    setActiveSection(index);
  };

  const visionPoints = [
    {
      icon: <Car className="w-12 h-12 text-blue-500" />,
      title: "Modernizing Car Auctions",
      description: "We're bringing the excitement of car auctions into the digital age, making it accessible to everyone, anywhere."
    },
    {
      icon: <Shield className="w-12 h-12 text-green-500" />,
      title: "Trust & Transparency",
      description: "Every vehicle is thoroughly verified, and our bidding process is completely transparent. Your trust is our priority."
    },
    {
      icon: <Users className="w-12 h-12 text-purple-500" />,
      title: "Community First",
      description: "We're building a vibrant community where car enthusiasts, buyers, and sellers can connect and thrive together."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute transform rotate-45 -right-20 -top-20 w-96 h-96 bg-blue-100 rounded-full opacity-50" />
          <div className="absolute transform -rotate-45 -left-20 -bottom-20 w-96 h-96 bg-indigo-100 rounded-full opacity-50" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              Revolutionizing
              <span className="text-blue-600 block">Car Auctions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mb-8">
              We&apos;re a young, ambitious team on a mission to transform how people buy and sell cars. 
              Through technology and transparency, we&apos;re making car auctions accessible to everyone.
            </p>
            <button className="group inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300">
              Join Our Platform
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <SocialAnimation></SocialAnimation>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-xl text-gray-600">Building the future of automotive trading</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {visionPoints.map((point, index) => (
              <div
                key={index}
                className="group p-8 rounded-xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-4">{point.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">How It Works</h2>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Register & Browse</h3>
                  <p className="text-gray-600">Create your account and explore our curated selection of vehicles.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Place Your Bid</h3>
                  <p className="text-gray-600">Participate in live auctions with real-time bidding updates.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Win & Purchase</h3>
                  <p className="text-gray-600">Secure your winning bid with our safe payment system.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-lg bg-gray-200 overflow-hidden">
                <div className="p-8 flex items-center justify-center">
                  <Car className="w-32 h-32 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">Join our growing community of car enthusiasts</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300">
              Start Bidding
            </button>
            <button className="px-8 py-3 border-2 border-white hover:bg-blue-700 rounded-lg transition-colors duration-300">
              Register as Seller
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
import { useState } from "react";
import { Send, Car, Phone, Mail, MapPin } from "lucide-react";
import MovingCar from "../../components/animationComponents/MovingCar";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormState({ name: "", email: "", phone: "", message: "" });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      {/* Background car silhouette */}
      <div className="fixed top-0 right-0 opacity-10 pointer-events-none">
        <Car className="w-96 h-96 transform rotate-12" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info Section */}
          <div className="space-y-8">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Get in Touch
              </h1>
              <p className="text-gray-400 text-lg">
                Have questions about our auto auctions? We&apos;re here to help!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-400">Call Us</p>
                  <p className="text-lg">016</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-purple-600 transition-colors duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-400">Email Us</p>
                  <p className="text-lg">ridan@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-pink-600 transition-colors duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-400">Visit Us</p>
                  <p className="text-lg">habibi, come to uiu</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-gray-400">Name</label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full bg-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-gray-400">Email</label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full bg-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-gray-400">Phone</label>
                <input
                  type="tel"
                  value={formState.phone}
                  onChange={(e) =>
                    setFormState({ ...formState, phone: e.target.value })
                  }
                  className="w-full bg-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  placeholder="+1 (555) 123-4567"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-gray-400">Message</label>
                <textarea
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full bg-gray-700 rounded-lg p-3 h-32 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  placeholder="Tell us about your interest..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg flex items-center justify-center space-x-2 
                  transform hover:scale-105 transition-all duration-300 ${
                    isSubmitting ? "opacity-75" : ""
                  }`}
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <Send
                  className={`w-5 h-5 ${
                    isSubmitting ? "animate-ping" : "animate-bounce"
                  }`}
                />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* <div className="road w-full h-24 bg-gray-800 mt-8 relative overflow-hidden">
        <div className="car absolute bottom-0 left-0 w-20 h-8 bg-orange-500 rounded-t-lg rounded-b-md shadow-lg animate-car">
          <div className="w-4 h-4 bg-black rounded-full absolute left-2 bottom-0" />
          <div className="w-4 h-4 bg-black rounded-full absolute right-2 bottom-0" />
          
        </div>
        <div className="w-10 h-4 bg-slate-700 mt-[40px]"></div>
        <div className="w-10 h-4 bg-slate-700 -mt-4 ml-[120px]"></div>
        <div className="w-10 h-4 bg-slate-700 -mt-4 ml-[220px]"></div>
        <div className="w-10 h-4 bg-slate-700 -mt-4 ml-[320px]"></div>
      </div> */}

      {/* CSS for Animation */}
      {/* <style jsx>{`
        @keyframes drive {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(2800%);
          }
        }

        .road {
          position: relative;
          overflow: hidden;
        }

        .car {
          animation: drive 10s linear infinite;
        }

        .car::after {
          content: "";
          position: absolute;
          bottom: -6px;
          left: 0;
          right: 0;
          height: 6px;
          background-color: gray;
          border-radius: 3px;
        }
      `}</style> */}

      <MovingCar></MovingCar>
    </div>
  );
};

export default ContactForm;

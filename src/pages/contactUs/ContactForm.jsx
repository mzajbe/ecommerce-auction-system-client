import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import carImage from "../../assets/car.svg";

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
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 text-gray-800 p-8">
      {/* Background car silhouette */}
      <div className="fixed top-0 right-0 opacity-10 pointer-events-none">
        <img
          src={carImage}
          alt="Car Silhouette"
          className="w-96 h-96 transform rotate-12"
        />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info Section */}
          <div className="space-y-8">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Contact Us
              </h1>
              <p className="text-gray-600 text-lg">
                We’re here to assist you with all your inquiries. Reach out to us!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-teal-100 rounded-lg group-hover:bg-teal-500 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-teal-600 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-gray-500">Call Us</p>
                  <p className="text-lg font-semibold">+880 1643817731</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-500 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-blue-600 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-gray-500">Email Us</p>
                  <p className="text-lg font-semibold">support@bidblaze.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-orange-100 rounded-lg group-hover:bg-orange-500 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-orange-600 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-gray-500">Visit Us</p>
                  <p className="text-lg font-semibold">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-gray-600 font-medium">Name</label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 transition-all duration-300"
                  placeholder="Mohammad zajbe"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-gray-600 font-medium">Email</label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 transition-all duration-300"
                  placeholder="support@bidblaze.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-gray-600 font-medium">Phone</label>
                <input
                  type="tel"
                  value={formState.phone}
                  onChange={(e) =>
                    setFormState({ ...formState, phone: e.target.value })
                  }
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 transition-all duration-300"
                  placeholder="+880 1643817731"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-gray-600 font-medium">Message</label>
                <textarea
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 h-32 focus:ring-2 focus:ring-teal-500 transition-all duration-300"
                  placeholder="Tell us about your interest..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-orange-500 to-slate-500 p-4 rounded-lg flex items-center justify-center space-x-2 
                  transform hover:scale-105 transition-all duration-300 shadow-md ${isSubmitting ? "opacity-75" : ""}`}
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <Send
                  className={`w-5 h-5 ml-2 ${
                    isSubmitting ? "animate-spin" : ""
                  }`}
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

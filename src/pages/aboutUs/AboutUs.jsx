import { useState, useEffect } from 'react';
import {  Car, ShoppingBag, Users, ArrowRight, Shield,Github, Linkedin, Mail } from 'lucide-react';
import SocialAnimation from '../../components/animationComponents/socialAnimation/SocialAnimation';
import { motion } from 'framer-motion';
import Card from '../../components/animationComponents/carComponents/Card';


// Sample team member data  
const teamMembers = [
  {
    name: "Mohammad Zajbe",
    role: "Full stack Developer",
    image: "/src/assets/team/z.png",
    github: "#",
    linkedin: "#",
    email: "mzajbe@gmail.com"
  },
  {
    name: "Md Redan kabir",
    role: "Backend Developer",
    image: "/src/assets/team/ridan-image.jpeg",
    github: "#",
    linkedin: "#",
    email: "redan@gmail.com"
  },
  {
    name: "Nafe Islam Sornob",
    role: "Frontend Developer",
    image: "/src/assets/team/nafe-p.jpg",
    github: "#",
    linkedin: "#",
    email: "sornob@gmail.com"
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

const memberVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const floatingAnimation = {
  y: [-10, 10],
  transition: {
    y: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};

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
    <div className="min-h-screen bg-orange-500">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center overflow-hidden bg-gradient-to-r from-orange-50 to-indigo-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute transform rotate-45 -right-20 -top-20 w-96 h-96 bg-orange-100 rounded-full opacity-50" />
          <div className="absolute transform -rotate-45 -left-20 -bottom-20 w-96 h-96 bg-orange-200 rounded-full opacity-50" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              Revolutionizing
              <span className="text-orange-400 block">Car Auctions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mb-8">
              We&apos;re a young, ambitious team on a mission to transform how people buy and sell cars. 
              Through technology and transparency, we&apos;re making car auctions accessible to everyone.
            </p>
            
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
              <div className="aspect-w-16 aspect-h-9 rounded-lg  overflow-hidden">
                {/* <div className="p-8 flex items-center justify-center">
                  <Car className="w-32 h-32 text-gray-400" />
                </div> */}
                <Card></Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
       <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={memberVariants}
              className="flex flex-col items-center"
            >
              <motion.div 
                className="relative mb-6"
                whileHover={{ scale: 1.05 }}
                animate={floatingAnimation}
              >
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div 
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 bg-white rounded-full px-4 py-2 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <a href={member.github} className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={member.linkedin} className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.email} className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </motion.div>
              </motion.div>

              <motion.div 
                className="text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-blue-600">{member.email}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

      {/* CTA Section */}
      <div className="bg-orange-400 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">Join our growing community of car enthusiasts</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-white text-orange-600 rounded-lg hover:bg-orange-400 hover:text-white border hover:border-white transition-colors duration-300">
              Start Bidding
            </button>
            <button className="px-8 py-3 border-2 border-white hover:bg-white hover:text-orange-400  rounded-lg transition-colors duration-300">
              Register as Seller
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
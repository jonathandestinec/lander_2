import React from 'react';
import { Laptop, Palette, ShoppingCart, Network, BarChart } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Laptop className="w-5 h-5 text-blue-600" />,
      title: "Custom Web Development",
      description: "We build tailored web solutions that are scalable, secure, and designed for your business. From concept to deployment, we deliver code that's clean, efficient, and built for performance."
    },
    {
      icon: <Palette className="w-5 h-5 text-blue-600" />,
      title: "UI/UX Design",
      description: "Our user-centric design approach ensures that every interaction is seamless and intuitive, creating a cohesive experience that delights your customers while enhancing usability and engagement."
    },
    {
      icon: <ShoppingCart className="w-5 h-5 text-blue-600" />,
      title: "E-commerce Solutions",
      description: "We create powerful e-commerce platforms that optimize conversions and streamline your operations. From custom storefronts to backend integrations, we provide the tools to sell smarter and scale faster."
    },
    {
      icon: <Network className="w-5 h-5 text-blue-600" />,
      title: "System Integration",
      description: "Unify your business systems with seamless integrations that streamline workflows, improve data accuracy, and reduce inefficiencies. Our solutions connect your tools to work smarter, not harder."
    },
    {
      icon: <BarChart className="w-5 h-5 text-blue-600" />,
      title: "Digital Strategy and Consulting",
      description: "We provide expert digital strategy and consulting services that align technology with your business goals. Let us help you navigate the digital landscape and build solutions that deliver results."
    }
  ];

  return (
    <div className="w-full bg-white min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-xs text-gray-500 mb-3">// WHAT WE DO</div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-[26px]/6 font-bold text-[#000000] mb-2">
                Custom Development & Design<br />
                Services Tailored for Your Business
              </h1>
              
              <p className="text-black text-[12px] leading-relaxed max-w-xl">
                Our solutions are built around your specific needs.
                Whether it's custom development, UI/UX design,
                or full-stack integrations, we ensure that every piece
                of your online ecosystem is seamlessly connected and
                optimized for performance.
              </p>
            </div>
            
            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm mb-1">{service.title}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative h-full">
            <div className="absolute top-12 left-8 w-46 h-72 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center">
              <div className="p-4 text-center text-[#D9D9D9] text-[20px] font-bold">
                Website example placeholder
                <div className="text-[12px] text-[#D9D9D9] mt-2  ">Scroll with section</div>
              </div>
            </div>
            <div className="absolute -top-4 left-60 w-46 h-72 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center ">
              <div className="p-4 text-center text-[#D9D9D9] text-[20px] font-bold  ">
                Website example placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
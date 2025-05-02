import { useEffect, useState } from "react";
import { X } from "lucide-react";

const services = [
  {
    imgUrl: "./responsive.png",
    title: "Responsive Web Design",
    desc: "Ensure your website looks great on all devices with modern responsive design.",
  },
  {
    imgUrl: "./modernui.png",
    title: "Modern & Clean UI",
    desc: "Create visually appealing and user-friendly interfaces with a focus on UX.",
  },
  {
    imgUrl: "./customDesign.png",
    title: "Custom Web Development",
    desc: "Tailor-made solutions to fit your business needs using the latest web technologies.",
  },
  {
    imgUrl: "./lp.png",
    title: "Landing Page Creation",
    desc: "High-converting landing pages designed to increase engagement and sales.",
  },
  {
    imgUrl: "./reactapps.png",
    title: "Building React Web Apps",
    desc: "Develop powerful, scalable React applications with modern best practices.",
  },
  {
    imgUrl: "./componentui.png",
    title: "Component-Based UI Development",
    desc: "Design and develop reusable UI components for better scalability and maintainability.",
  },
];

const Services = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-md z-50 px-4">
      <div
        className={`relative bg-white rounded-lg p-6 max-w-4xl w-full transform transition-all duration-300 ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Header */}
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
          My Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[60vh] overflow-y-auto p-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-4 rounded-lg hover:shadow-lg transition shadow-xl bg-gray-100"
            >
              <img src={service.imgUrl} alt={service.title} className="w-12 h-12 mb-3" />
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services

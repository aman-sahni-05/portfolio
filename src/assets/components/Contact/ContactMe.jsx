import { useState, useEffect } from "react";
import { X } from "lucide-react";

const ContactMe = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Trigger animation when mounted
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:aman.sahni052001@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
    setIsVisible(false); // Animate close
    setTimeout(() => onClose(), 300); // Delay closing for smooth animation
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <div
        className={`bg-white p-6 rounded-xl shadow-lg w-96 relative transition-transform duration-300 ${
          isVisible ? "scale-100" : "scale-90 opacity-0"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            setIsVisible(false);
            setTimeout(() => onClose(), 300);
          }}
          className="absolute top-3 right-3 text-gray-500 hover:text-black transition"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
          Let's Connect! 💬
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-slate-300 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;

import React, { useState } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Formspree or backend API for form submission
    alert("Message sent successfully!");
    setFormData({ email: "", message: "" });
  };
  const email = "nuroaiautomation@gmail.com";
  const subject = encodeURIComponent("Hello");
  const body = encodeURIComponent("This is a test email.\nBest regards,");

  return (
    <footer id="getquote" className="bg-opacity-100 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold">NuroAI</h2>
          <p className="mt-2 text-gray-400">AI & Automation Solutions</p>
          <br />
          <h5>nuroaiautomation@gmail.com</h5>
          <br />
          <a href="https://www.linkedin.com/in/vignesh-a-035147281/">
          <h5>linkedin</h5>
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#hero" className="hover:text-gray-300">Home</a></li>
            <li><a href="#features" className="hover:text-gray-300">Services</a></li>
            <li><a href="#how-to-use" className="hover:text-gray-300">Solution</a></li>
            <li><a href="#roadmap" className="hover:text-gray-300">Working on</a></li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href={`https://mailto:${email}?subject=${subject}&body=${body}`} className="hover:text-gray-300 text-xl">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/in/vignesh-a-035147281/" className="hover:text-gray-300 text-xl">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="hover:text-gray-300 text-xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-gray-300 text-xl">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <form onSubmit={handleSubmit} className="mt-2 space-y-3">
            <input 
              type="email" name="email" placeholder="Your Email" required 
              value={formData.email} onChange={handleChange}
              className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea 
              name="message" placeholder="Your Message" required rows="3"
              value={formData.message} onChange={handleChange}
              className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button type="submit" className="w-full bg-white hover:bg-white text-black py-2 rounded">
              Send
            </button>
          </form>
          <br />
          <p style={{fontSize:'12px'}} >Kindly send a direct mail in case of business sensations</p>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        &copy; 2025 NuroAI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

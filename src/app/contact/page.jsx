"use client";
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    issue: "",
    preferredTime: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Customer Service Request:", formData);
    alert("📞 Our team will contact you shortly!");
    setFormData({ name: "", phone: "", issue: "", preferredTime: "" });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 p-8 space-y-8">
        <h1 className="text-4xl font-bold text-blue-700 text-center">Contact Us</h1>

        {/* Company Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800">
          <div>
            <h2 className="text-xl font-semibold mb-2">📍 Office Address</h2>
            <p>AutoDrive Pvt. Ltd.</p>
            <p>3rd Floor, Sector 5, Noida, Uttar Pradesh, India</p>
            <p>PIN - 201301</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">📞 Contact Info</h2>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Email:</strong> support@autodrive.com</p>
            <p><strong>Working Hours:</strong> Mon-Sat, 9:00 AM - 7:00 PM</p>
          </div>
        </div>

        {/* Customer Service Form */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Request a Customer Service Call</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+91 9876543210"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Describe the Issue</label>
              <textarea
                name="issue"
                value={formData.issue}
                onChange={handleChange}
                rows={4}
                required
                className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Briefly describe the issue or support you need"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Preferred Callback Time</label>
              <input
                type="time"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                required
                className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-800 transition"
            >
              Request Callback
            </button>
          </form>
          <div className="mt-10 text-center">
  <a
    href="/"
    className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg transition duration-200"
  >
    ⬅️ Return to Home
  </a>
</div>
        </div>
      </div>
    </main>
  );
}

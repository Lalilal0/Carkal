"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function TestDriveForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carModel: '',
    date: '',
    time: '',
  });

  const carOptions = [
    'Toyota Camry',
    'Honda Civic',
    'Tesla Model 3',
    'Hyundai Verna',
    'Mahindra XUV700',
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Test Drive Form Data:', formData);
    alert('✅ Test Drive Scheduled Successfully!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      carModel: '',
      date: '',
      time: '',
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
        <h2 className="text-3xl font-extrabold text-blue-700 text-center mb-8">Book a Test Drive</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="john@example.com"
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
              className="mt-1 w-full border border-gray-300 rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="+91 9876543210"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Select Car Model</label>
            <select
              name="carModel"
              value={formData.carModel}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded-md p-3 shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">-- Select a Car --</option>
              {carOptions.map((model, index) => (
                <option key={index} value={model}>{model}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700">Preferred Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="mt-1 w-full border border-gray-300 rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700">Preferred Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="mt-1 w-full border border-gray-300 rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-800 transition"
          >
            Book Test Drive
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium underline transition">
            ← Return to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

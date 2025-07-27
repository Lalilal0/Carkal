"use client";

import Link from 'next/link';
import Hero from "./Raja/page";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
  <header className="flex justify-between items-center mb-8 relative px-6 ">
  <h1 className="text-3xl font-bold text-blue-700">Carkal</h1>

  {/* Logo with ripple effect */}
  <div
    className="relative w-16 h-16 cursor-pointer z-50"
    onClick={(e) => {
      const ripple = document.createElement("div");
      ripple.className = "fixed rounded-full pointer-events-none animate-ripple z-40";
    
      const size = window.innerWidth; // full viewport width (or smaller if you want)
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
    
      ripple.style.top = `${e.clientY - size / 2}px`;
      ripple.style.left = `${e.clientX - size / 2}px`;
      ripple.style.borderRadius = "50%";
      ripple.style.pointerEvents = "none";
      ripple.style.transform = "scale(0)";
    
      // Use a darker blue with stronger opacity here for visibility
      ripple.style.backgroundColor = "rgba(7, 106, 255, 0.9)"; 
    
      document.body.appendChild(ripple);
    
      setTimeout(() => ripple.remove(), 1000);
    }}
    
    
  >
    <img
    src="Carkallogo.png"
    alt="Carkal Logo"
    className="h-25 fixed mt-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
  />
  </div>

  <nav className="space-x-4">
    <a href="/model" className="text-gray-700 hover:text-blue-100">
      Models
    </a>
    <a href="/compare" className="text-gray-700 hover:text-blue-700">
      Compare
    </a>
    <a href="/test-drive" className="text-gray-700 hover:text-blue-700">
      Test Ride
    </a>
    <a href="/contact" className="text-gray-700 hover:text-blue-700">
      Contact
    </a>
  </nav>
</header>


      <section className="relative py-20 px-6 rounded-lg mb-16 text-white">
        <Hero />
      </section>

      <section className="bg-gradient-to-r from-gray-100 via-white to-gray-100 py-12 px-6 rounded-2xl shadow-inner">
  <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-12 tracking-wide">
     Featured Cars
  </h2>

  <div id="models" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
    {/* Model A */}
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <img
        src="https://images.pexels.com/photos/30822860/pexels-photo-30822860/free-photo-of-sleek-red-audi-rs-car-in-studio-lighting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Model A"
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h3 className="text-2xl font-bold text-black mb-2">Model A</h3>
      <p className="text-gray-700">Electric sedan with advanced autopilot features.</p>
    </div>

    {/* Model B */}
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <img
        src="https://images.pexels.com/photos/18108322/pexels-photo-18108322/free-photo-of-3d-3d-render.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Model B"
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h3 className="text-2xl font-bold text-black mb-2">Model B</h3>
      <p className="text-gray-700">Compact SUV designed for city and adventure.</p>
    </div>

    {/* Model C */}
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <img
        src="https://images.pexels.com/photos/28862472/pexels-photo-28862472/free-photo-of-sleek-white-sports-car-on-rainy-day.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Model C"
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h3 className="text-2xl font-bold text-black mb-2">Model C</h3>
      <p className="text-gray-700">Luxury hybrid with exceptional mileage and comfort.</p>
    </div>
  </div>
</section>

    </main>
  );
}

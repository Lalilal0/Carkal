"use client";

import Link from 'next/link';

const cars = [
  {
    id: 1,
    name: "Turbo Z",
    description: "A sports car that roars on the road. Features a turbocharged V6 engine and aerodynamic design for speed enthusiasts.",
    image: "https://images.pexels.com/photos/5976639/pexels-photo-5976639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    name: "Urban Swift",
    description: "Perfect for city rides and tight corners. Compact SUV with agile handling and advanced safety features.",
    image: "https://images.pexels.com/photos/30795598/pexels-photo-30795598/free-photo-of-sleek-black-suv-in-studio-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    name: "Electric Pulse",
    description: "Zero emission, full thrill. Luxury hybrid offering exceptional mileage and cutting-edge tech.",
    image: "https://images.pexels.com/photos/15012606/pexels-photo-15012606/free-photo-of-white-genesis-x-car.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    name: "Mountain Cruiser",
    description: "Rugged off-road SUV with all-wheel drive and reinforced chassis, perfect for adventure seekers.",
    image: "img3.png",
  },
  {
    id: 5,
    name: "City Breeze",
    description: "Lightweight electric hatchback designed for easy parking and efficient urban travel.",
    image: "img2.png",
  },
  {
    id: 6,
    name: "Luxury Glider",
    description: "Executive sedan with plush interiors, advanced driver assist, and supreme comfort.",
    image: "https://images.pexels.com/photos/29952735/pexels-photo-29952735/free-photo-of-luxury-genesis-g80-electric-car-in-studio-lighting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export default function Models() {
  return (
    <main className="min-h-screen bg-white p-6">
      <header className="flex justify-between items-center mb-8">
        <Link href="/" className="text-3xl font-bold text-blue-700 hover:text-blue-900">
          Carkal
        </Link>
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
      ripple.style.backgroundColor = "rgba(7, 106, 255, 0.9)"; // dark blue, 30% opacity
    
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
          <a href="/model" className="text-gray-700 hover:text-blue-100">Models</a>
          <a href="/compare" className="text-gray-700 hover:text-blue-700">Compare</a>
          <a href="/test" className="text-gray-700 hover:text-blue-700">Test Ride</a>
          <a href="/contact" className="text-gray-700 hover:text-blue-700">Contact</a>
        </nav>
      </header>

      <section className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 text-gray-800 mt-20 rounded-lg p-12 max-w-1em mx-auto mb-16 shadow-lg">
    <h1 className="text-5xl font-extrabold mb-6 text-center">
    Our Models
    </h1>
    <p className="text-lg leading-relaxed max-w-3xl mx-auto text-center opacity-90">
    Discover our extensive range of premium vehicles, from luxury sedans to high-performance supercars. Each vehicle is carefully selected for its exceptional quality, performance, and style.
    </p>
    </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cars.map(car => (
          <div key={car.id} className="bg-gray-100 p-4 rounded-lg shadow flex flex-col">
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-52 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-bold mb-1">{car.name}</h2>
            <p className="text-gray-600 flex-grow">{car.description}</p>
            <button className="mt-4 bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition">
              Add to Compare
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

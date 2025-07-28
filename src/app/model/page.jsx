"use client";

import Link from 'next/link';
import { useState } from 'react';

const cars = [{
  id: 1,
  name: "Turbo Z",
  description: "A sports car that roars on the road. Features a turbocharged V6 engine and aerodynamic design for speed enthusiasts.",
  image: "https://images.pexels.com/photos/5976639/pexels-photo-5976639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  category: "Sports Car",
  price: "$74,999",
  specs: {
    engine: "3.0L Turbo V6",
    power: "400 HP",
    acceleration: "4.2s 0-60mph",
    seats: "2 Passengers"
  }
},
{
  id: 2,
  name: "Urban Swift",
  description: "Perfect for city rides and tight corners. Compact SUV with agile handling and advanced safety features.",
  image: "https://images.pexels.com/photos/30795598/pexels-photo-30795598/free-photo-of-sleek-black-suv-in-studio-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  category: "Compact SUV",
  price: "$39,999",
  specs: {
    engine: "1.6L Turbo I4",
    power: "180 HP",
    acceleration: "7.2s 0-60mph",
    seats: "5 Passengers"
  }
},
{
  id: 3,
  name: "Electric Pulse",
  description: "Zero emission, full thrill. Luxury hybrid offering exceptional mileage and cutting-edge tech.",
  image: "https://images.pexels.com/photos/15012606/pexels-photo-15012606/free-photo-of-white-genesis-x-car.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  category: "Hybrid Sedan",
  price: "$59,999",
  specs: {
    engine: "Dual-Motor Hybrid",
    power: "350 HP",
    acceleration: "5.6s 0-60mph",
    seats: "5 Passengers"
  }
},
{
  id: 4,
  name: "Mountain Cruiser",
  description: "Rugged off-road SUV with all-wheel drive and reinforced chassis, perfect for adventure seekers.",
  image: "img3.png",
  category: "Off-Road SUV",
  price: "$54,999",
  specs: {
    engine: "2.8L Turbo Diesel",
    power: "320 HP",
    acceleration: "7.5s 0-60mph",
    seats: "5 Passengers"
  }
},
{
  id: 5,
  name: "City Breeze",
  description: "Lightweight electric hatchback designed for easy parking and efficient urban travel.",
  image: "img2.png",
  category: "Electric Hatchback",
  price: "$29,999",
  specs: {
    engine: "Single Motor Electric",
    power: "170 HP",
    acceleration: "8.1s 0-60mph",
    seats: "4 Passengers"
  }
},
{
  id: 6,
  name: "Luxury Glider",
  description: "Executive sedan with plush interiors, advanced driver assist, and supreme comfort.",
  image: "https://images.pexels.com/photos/29952735/pexels-photo-29952735/free-photo-of-luxury-genesis-g80-electric-car-in-studio-lighting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  category: "Luxury Sedan",
  price: "$84,999",
  specs: {
    engine: "3.5L V6 Twin-Turbo",
    power: "375 HP",
    acceleration: "5.0s 0-60mph",
    seats: "5 Passengers"
  }
}
,
  {
  id: 7,
  name: "Toyota Camry",
  description: "Sedan",
  image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/192443/camry-exterior-right-front-three-quarter-14.jpeg?isig=0&q=80",
  category: "Mid-Size Sedan",
  price: "$34,999",
  specs: {
    engine: "2.5L Inline-4",
    power: "203 HP",
    acceleration: "7.6s 0-60mph",
    seats: "5 Passengers"
  }
},
{
  id: 8,
  name: "Tesla Model 3",
  description: "Tesla",
  image: "https://imgs.search.brave.com/Rbs7tuTPM756k5ngsbMcLQvbFLhCsc2ecMXYYin-abU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bW90b3J0cmVuZC5j/b20vZmlsZXMvNjdi/NjU3MWI2NmJmYjgw/MDA4NDczOTU0LzEt/MjAyNS10ZXNsYS1t/b2RlbC0zLWZyb250/LXZpZXcuanBnP3c9/NzY4JndpZHRoPTc2/OCZxPTc1JmZvcm1h/dD13ZWJw",
  category: "Electric Sedan",
  price: "$42,999",
  specs: {
    engine: "Dual-Motor Electric",
    power: "425 HP",
    acceleration: "3.1s 0-60mph",
    seats: "5 Passengers"
  }
},
{
  id: 9,
  name: "Ford Mustang",
  description: "Ford",
  image: "https://imgs.search.brave.com/a9UuQlvm3xKYf2oLyVmPLl4jbnrVfNH0jrb95xx4n3w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDU5/NDQ1MDU1L3Bob3Rv/L3JvdXNoLWZvcmQt/bXVzdGFuZy0yMDEw/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1FOGZuNG9zN1Jm/Tzd0aE1XVlpqRl90/ZWpPMW5ueElLUGxy/dnhPeTFWUnlJPQ",
  category: "Muscle Car",
  price: "$47,999",
  specs: {
    engine: "5.0L V8",
    power: "450 HP",
    acceleration: "4.2s 0-60mph",
    seats: "4 Passengers"
  }
},
];

export default function Models() {
  const [compareList, setCompareList] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null); 


  const toggleCompare = (car) => {
    if (compareList.some(c => c.id === car.id)) {
      setCompareList(compareList.filter(c => c.id !== car.id));
    } else if (compareList.length < 2) {
      setCompareList([...compareList, car]);
    } else {
      alert("You can only compare 2 cars at a time.");
    }
  };

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

            const size = window.innerWidth;
            ripple.style.width = `${size}px`;
            ripple.style.height = `${size}px`;

            ripple.style.top = `${e.clientY - size / 2}px`;
            ripple.style.left = `${e.clientX - size / 2}px`;
            ripple.style.borderRadius = "50%";
            ripple.style.pointerEvents = "none";
            ripple.style.transform = "scale(0)";
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
     <a href="/" className="text-gray-700 hover:text-blue-100">
      Home
    </a>
  <Link href="/model" className="text-gray-700 hover:text-blue-100">Models</Link>
  <Link href="/test" className="text-gray-700 hover:text-blue-700">Test Ride</Link>
  <Link href="/contact" className="text-gray-700 hover:text-blue-700">Contact</Link>
</nav>

      </header>

      <section className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 text-gray-800 mt-20 rounded-lg p-12 max-w-1em mx-auto mb-16 shadow-lg">
        <h1 className="text-5xl font-extrabold mb-6 text-center">Our Models</h1>
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
            <h2 className="text-xl font-bold text-gray-800 mb-1">{car.name}</h2>
            <p className="text-gray-600 flex-grow">{car.description}</p>
            <button
              onClick={() => toggleCompare(car)}
              className={`mt-4 py-2 rounded transition ${
                compareList.some(c => c.id === car.id)
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-blue-700 text-white hover:bg-blue-800'
              }`}
            >
              {compareList.some(c => c.id === car.id) ? 'Remove from Compare' : 'Add to Compare'}
            </button>
            <button
  onClick={() => setSelectedCar(car)}
  className="mt-2 py-2 rounded bg-green-600 text-white hover:bg-green-700 transition"
>
  View Details
</button>



          </div>
        ))}
      </div>

      {compareList.length === 2 && (
        <section className="mt-16 bg-white border-t pt-10">
          <h2 className="text-3xl font-bold text-center mb-8 text-black">Car Comparison</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {compareList.map(car => (
              <div key={car.id} className="border rounded-lg p-6 shadow bg-gray-50">
                <img src={car.image} alt={car.name} className="w-full h-48 object-cover rounded mb-4" />
                <h3 className="text-2xl font-bold text-gray-800">{car.name}</h3>
                <p className="text-gray-600 mb-2">{car.category}</p>
                <p className="text-gray-900 font-semibold mb-2">Price: {car.price}</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li><strong>Engine:</strong> {car.specs.engine}</li>
                  <li><strong>Power:</strong> {car.specs.power}</li>
                  <li><strong>Acceleration:</strong> {car.specs.acceleration}</li>
                  <li><strong>Seats:</strong> {car.specs.seats}</li>
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}


      {selectedCar && (
  <div className="fixed inset-0 bg-grey bg-opacity-0 z-50 flex justify-center items-center">
    <div className="bg-white p-6 rounded-xl shadow-xl relative w-full max-w-lg">
      <button
        className="absolute top-2 right-4 text-2xl text-gray-600 hover:text-gray-800"
        onClick={() => setSelectedCar(null)}
      >
        &times;
      </button>
      <img
        src={selectedCar.image}
        alt={selectedCar.name}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <h2 className="text-2xl font-bold mb-2">{selectedCar.name}</h2>
      <p className="text-gray-600 mb-2">{selectedCar.description}</p>
      <p className="text-gray-800 font-semibold">Category: {selectedCar.category}</p>
      <p className="text-gray-800 font-semibold mb-2">Price: {selectedCar.price}</p>
      <ul className="text-sm text-gray-700 space-y-1 mb-4">
        <li><strong>Engine:</strong> {selectedCar.specs.engine}</li>
        <li><strong>Power:</strong> {selectedCar.specs.power}</li>
        <li><strong>Acceleration:</strong> {selectedCar.specs.acceleration}</li>
        <li><strong>Seats:</strong> {selectedCar.specs.seats}</li>
      </ul>
      <Link
        href="/test"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Book a Test Ride
      </Link>
    </div>
  </div>
)}

    </main>
  );
}

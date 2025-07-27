"use client"
import { useEffect, useState } from "react";

const images = [
  "https://images.pexels.com/photos/21431027/pexels-photo-21431027/free-photo-of-a-car-in-a-garage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/21774799/pexels-photo-21774799/free-photo-of-genesus-neolun-car.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "img1.png",
  "https://images.pexels.com/photos/29952735/pexels-photo-29952735/free-photo-of-luxury-genesis-g80-electric-car-in-studio-lighting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[500px] overflow-hidden rounded-lg mb-16">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${img})`,
          }}
        />
      ))}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Welcome to Carkal
        </h2>
        <p className="max-w-xl mb-6 text-gray-200">
          Discover our latest range of electric and hybrid cars built for performance and style.
        </p>
        <div className="flex flex-wrap justify-center gap-4">

  <a
    href="/model"
    className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
  >
    Explore Models
  </a>


  <a
  href="./test"
  className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
>
  Schedule Test Drive
</a>
</div>

      </div>
    </section>
  );
}

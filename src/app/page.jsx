'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/image/banner5.png",
    "/image/banner2.png",
    "/image/banner3.png",
    "/image/banner4.png",
  ];

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('http://localhost:3000/products');
        const data = await res.json();
        setProducts(data.slice(0, 10)); // Lấy 10 sản phẩm
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchData();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      {/* Carousel */}
      <div className="container mx-auto p-20 ">
        <div className="relative">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute w-full transition-opacity duration-700 ease-in-out ${
                currentIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={img}
                className="block w-full h-full object-contain"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
          <button onClick={prevSlide}>Previous</button>
          <button onClick={nextSlide}>Next</button>
        </div>
      </div>

      {/* Products */}
      <h1 className="text-center text-3xl text-red-600 mb-6 mt-96">Gợi ý cho bạn</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(({ _id, name, image, price }) => (
          <div
            className="group relative p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
            key={_id}
          >
            <img
              className="size-52 object-cover mx-auto rounded-md"
              src={`http://localhost:3000/img/${image}`}
              alt={name}
            />
            <div className="mt-4 text-center">
              <h5 className="font-semibold text-green-600 text-lg">{name}</h5>
              <p className="text-red-600 font-bold mt-2 text-lg">
                {price.toLocaleString('vi-VN', {
                  style: 'currency',
                  currency: 'VND',
                })}
                đ
              </p>
              <div className="mt-4">
                <Link
                  href={`detail/${_id}`}
                  className="inline-block bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300"
                >
                  Xem chi tiết
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

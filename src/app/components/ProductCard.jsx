import React from 'react';
import Link from 'next/link';

function ProductCard(props) {
  return (
    <>
      {props.data.map((product) => {
        const { _id, name, image, price } = product;
        return (
          <div className="my-3" key={_id}>
            <div className="relative p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              {/* Center the image inside the card */}
              <div className="flex justify-center mb-4">
                <img
                  className=" size-48 object-cover rounded-md"
                  src={`http://localhost:3000/img/${image}`}
                  alt={name}
                />
              </div>
              <div className="text-center">
                <h5 className="text-xl font-semibold text-green-600">{name}</h5>
                <p className="text-red-600 font-bold mt-2">
                  <b>Giá: {price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</b>
                </p>
                <div className="mt-4">
                  <Link href={`detail/${_id}`} className="inline-block bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300">
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProductCard;

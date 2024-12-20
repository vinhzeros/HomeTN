'use client';
import React, { useEffect, useState } from 'react';

function Tintuc() {
  const [tinTuc, setTinTuc] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/tintuc')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Dữ liệu API:', data);
        setTinTuc(Array.isArray(data) ? data : data.items || []);
      })
      .catch((error) => console.error('Lỗi khi fetch API:', error));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Danh sách Tin Tức</h1>
      {tinTuc.length === 0 ? (
        <p className="text-center text-gray-600">Không có tin tức để hiển thị.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tinTuc.map((item) => (
            <div
              key={item._id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.TenTinTuc}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {item.TenTinTuc}
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                Ngày đăng: {new Date(item.createdAt).toLocaleDateString()}
              </p>
              <p className="text-gray-700 mb-4">
                {item.NoiDung.length > 100
                  ? `${item.NoiDung.slice(0, 100)}...`
                  : item.NoiDung}
              </p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => alert('Xem chi tiết: ' + item.TenTinTuc)}
              >
                Xem chi tiết
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Tintuc;

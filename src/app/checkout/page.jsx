"use client";
import { useState } from 'react';

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    email: '',
    city: '',
    phoneNumber: '',
    deliveryInstructions: '',
    paymentMethod: 'cash', // Phương thức thanh toán mặc định là tiền mặt
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto p-8">
         <div className="text-sm text-gray-500 mb-4">
          <a href="/" className="hover:underline">Trang chủ</a> &gt; <span>Giỏ hàng</span>&gt;<span>Thanh toán</span>
        </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Shipping Details */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold mb-6">Thanh toán</h1>
          <h2 className="text-2xl font-semibold mb-6">Điền thông tin</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-gray-700">Họ</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="block text-gray-700">Tên</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="streetAddress" className="block text-gray-700">Địa chỉ</label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="city" className="block text-gray-700">Thành phố</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-gray-700">Số điện thoại</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="deliveryInstructions" className="block text-gray-700">Ghi chú</label>
              <textarea
                id="deliveryInstructions"
                name="deliveryInstructions"
                value={formData.deliveryInstructions}
                onChange={handleChange}
                rows="4"
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </form>
        </div>

        {/* Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-6 text-center">TỔNG THANH TOÁN</h2>
          <div className="mb-4">
            <p className="text-gray-700">Giá (4 sản phẩm): <span className="font-bold">1450000</span></p>
          </div>
          <div className="mb-4">
            <p className="text-gray-700">Phí giao hàng: <span className="font-bold">15000</span></p>
          </div>
          <div className="mb-6">
            <p className="text-gray-700">Thành tiền: <span className="font-bold">1465000</span></p>
          </div>

          {/* Phương thức thanh toán */}
          <h2 className="text-xl font-semibold mb-6 text-center">Phương thức thanh toán</h2>
          <div className="mb-4">
            <label htmlFor="paymentMethod" className="block text-gray-700">Chọn phương thức thanh toán</label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="cash">Tiền mặt khi nhận hàng</option>
              <option value="momo">Ví ZaloPay</option>
            </select>
          </div>

          {/* Hiển thị hướng dẫn cho MoMo */}
          {formData.paymentMethod === 'momo' && (
            <div className="mt-4">
              <p className="text-gray-700">Hãy chắc chắn rằng bạn có đủ tiền trong ví ZaloPay để thanh toán.</p>
            </div>
          )}

          <button type="submit" className="w-full bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition mt-6">
            Tiến hành thanh toán
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

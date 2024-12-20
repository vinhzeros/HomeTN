'use client';
import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCartItemQuantity } from '@/redux/slices/cartslice';
import Link from 'next/link';
const Cart = () => {
  const cartItems = useSelector((state) => state.cart?.items) || [];
  const dispatch = useDispatch();

  // Tính tổng tiền
  const total = useMemo(() => cartItems.reduce((total, item) => total + item.price * item.quantity, 0), [cartItems]);

  // Xử lý thanh toán với ZaloPay
  const handlePayment = async () => {

    const token = localStorage.getItem("token_check")

    if (!token) return alert("Vui lòng đăng nhập để thanh toán")

    if (!cartItems || cartItems.length === 0) {
      return alert("Giỏ hàng đang trống")
    }

    const dataSz = [];

    cartItems.forEach((el) => {
      dataSz.push({
        id: el._id,
        name: el.name,
        price: el.price,
        quantity: el.quantity
      });
    })

    const dataSend = { token_id: token, data: dataSz }
    // Gửi yêu cầu đến API để tạo phiên thanh toán với ZaloPay
    const response = await fetch('http://localhost:3000/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataSend),
    });

    const dataSuccess = await response.json();
    console.log(dataSuccess);

    if (dataSuccess) {
      localStorage.removeItem("cart")
      alert("Thanh toán thành công");
      return window.location.href = "http://localhost:3001"
    } else {
      return alert("Thanh toán thất bại")
    }


  };

  if (cartItems.length === 0) {
    return (
      <div className="bg-gray-50 min-h-screen p-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-sm text-gray-500 mb-4">
            <a href="/" className="hover:underline">Trang chủ</a> &gt; <span>Giỏ hàng</span>
          </div>
          <h1 className="text-2xl font-bold mb-6">GIỎ HÀNG</h1>
          <div className="text-xl font-bold text-gray-700 text-center">Giỏ hàng của bạn hiện tại chưa có sản phẩm nào.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          <a href="/" className="hover:underline">Trang chủ</a> &gt; <span>Giỏ hàng</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold mb-6">GIỎ HÀNG</h1>

        {/* Cart Items */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item._id} className="bg-white p-4 shadow-md flex items-center justify-between">
                {/* Product Details */}
                <div className="flex items-center">
                  <div className="w-20 h-20 bg-gray-200 flex items-center justify-center">
                    <img
                      src={`http://localhost:3000/img/${item.image}`}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="ml-4">
                    <h2 className="font-bold">{item.name}</h2>
                    <div className="text-gray-400 line-through">{item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</div>
                    <div className="text-black font-semibold">{(item.price * item.quantity).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</div>
                  </div>
                </div>

                {/* Quantity & Remove */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-gray-300">
                    <button
                      onClick={() => dispatch(updateCartItemQuantity({ _id: item._id, quantity: item.quantity - 1 }))}
                      className="px-3 py-1 text-lg bg-gray-300"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      value={item.quantity}
                      className="w-10 text-center border-l border-r border-gray-300 focus:outline-none"
                      readOnly
                    />
                    <button
                      onClick={() => dispatch(updateCartItemQuantity({ _id: item._id, quantity: item.quantity + 1 }))}
                      className="px-3 py-1 text-lg bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => dispatch(removeFromCart(item._id))}
                    className="text-red-500 font-bold"
                  >
                    XOÁ
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">TỔNG THANH TOÁN</h2>

            {/* Mã khuyến mãi */}
            <div className="mb-6">
              <label htmlFor="promo" className="block text-sm text-gray-700 font-semibold mb-2">Mã khuyến mãi</label>
              <div className="flex">
                <input
                  id="promo"
                  type="text"
                  className="border border-gray-300 p-3 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nhập mã khuyến mãi"
                />
                <button className="bg-black text-white px-6 py-3 rounded-r-lg hover:bg-gray-800 transition-colors">
                  ÁP DỤNG
                </button>
              </div>
            </div>

            {/* Thanh toán */}
            <div className="border-t border-gray-300 pt-6">
              <div className="flex justify-between text-gray-700 text-sm mb-4">
                <span>Giá ({cartItems.length} sản phẩm)</span>
                <span>{total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
              </div>
              <div className="flex justify-between text-gray-700 text-sm mb-4">
                <span>Phí giao hàng</span>
                <span>14.000 đ</span>
              </div>
              <div className="flex justify-between font-bold text-lg mt-2">
                <span>Thành tiền</span>
                <span>{(total + 14000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex space-x-4">
              <Link href='/product' className="bg-gray-100 text-gray-800 border border-gray-300 px-6 py-3 rounded-lg text-center hover:bg-gray-200 transition duration-300 flex-grow">
                TIẾP TỤC ĐẶT HÀNG
              </Link>

              <button
                onClick={handlePayment}
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 flex-grow"
              >
                THANH TOÁN
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;

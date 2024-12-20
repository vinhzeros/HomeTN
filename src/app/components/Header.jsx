
 "use client";
 import Link from 'next/link';
 import { useSelector } from 'react-redux';
 import { useEffect, useState } from 'react';
import React from "react";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((count, item) => count + Number(item.quantity), 0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState([]);

  const fetchUsers = async () => {
    const res = await fetch("http://localhost:3000/users", {
      cache: 'no-store'
    });
    const newData = await res.json();
    setData(newData);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const token = document.cookie.split(';').find((c) => c.trim().startsWith('token='));
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  // Hàm đăng xuất
  const handleLogout = () => {
    document.cookie = 'token=; path=/; max-age=0'; // Xóa cookie chứa token
    setIsLoggedIn(false); // Cập nhật trạng thái đăng nhập
    window.location.href = '/login'; // Điều hướng về trang đăng nhập
  };
  return (
    <header className="bg-gray-200 shadow-xl">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <img src="image/logo1.png" className="w-52 h-42" alt="" />

        {/* Search Bar */}
        <form className="flex ml-4 items-center" action="/search">
          <input
            className="border border-gray-300 rounded-md px-4 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            name="keyword"
            placeholder="Nhập tên sản phẩm"
          />
          <button
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors"
            type="submit"
          >
            Tìm Kiếm
          </button>
        </form>


        {/* Icons */}
        <div className="flex items-center space-x-6">
        <div className="flex items-center ml-5">
  <div id="cart" className="relative flex items-center rounded-full  bg-opacity-10 px-2 py-1">
    <Link href="/cart" className="flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25q0-.075.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"
        />
      </svg>
      <span>GIỎ HÀNG</span>
    </Link>
    <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-green-500 text-white rounded-full px-2">
      {cartCount}
    </span>
  </div>
</div>


<div id="account" className="flex items-center space-x-4">
  {/* Đăng nhập */}
  {!isLoggedIn && (
    <a
      href="/login"
      className="flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 transition duration-200"
    >
      <i className="bi bi-box-arrow-in-right text-lg"></i>
      <span className="ml-2 text-sm font-medium">Đăng Nhập</span>
    </a>
  )}

  {/* Đăng ký */}
  {!isLoggedIn && (
    <a
      href="/register"
      className="flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 transition duration-200"
    >
      <i className="bi bi-person-plus text-lg"></i>
      <span className="ml-2 text-sm font-medium">Đăng Ký</span>
    </a>
  )}

  {/* Cá nhân */}
  {isLoggedIn && (
    <>
      <a
        href="/info"
        className="flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 transition duration-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M11 7c0 1.66-1.34 3-3 3S5 8.66 5 7s1.34-3 3-3s3 1.34 3 3"/><path fill="currentColor" fill-rule="evenodd" d="M16 8c0 4.42-3.58 8-8 8s-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8M4 13.75C4.16 13.484 5.71 11 7.99 11c2.27 0 3.83 2.49 3.99 2.75A6.98 6.98 0 0 0 14.99 8c0-3.87-3.13-7-7-7s-7 3.13-7 7c0 2.38 1.19 4.49 3.01 5.75" clip-rule="evenodd"/></svg>
      </a>

      {/* Đăng xuất */}
      <button
        onClick={handleLogout}
        className="flex items-center justify-center rounded-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 transition duration-200"
      >
        <i className="bi bi-box-arrow-left text-lg"></i>
        <span className="ml-2 text-sm font-medium">Đăng Xuất</span>
      </button>
    </>
  )}
</div>





        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-100 py-2">
        <div className="container mx-auto px-4 flex justify-between">
          <div className="flex space-x-6">
          <Link className="hover:text-gray-900" href="/">TRANG CHỦ</Link>
          <Link className="hover:text-gray-900" href="/about">DANH MỤC</Link>
          <Link className="hover:text-gray-900" href="/about">GIỚI THIỆU</Link>
          <Link className="hover:text-gray-900" href="/product">SẢN PHẨM</Link>
          <Link className="hover:text-gray-900" href="/tintuc">TIN TỨC</Link>
          <Link className="hover:text-gray-900" href="/about">LIÊN HỆ</Link>
         
          

          </div>
          {/* <a href="#" className="bg-black text-white px-4 py-2 rounded-md">THEO DỖI CHÚNG TUI</a> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;

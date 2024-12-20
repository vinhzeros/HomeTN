'use client';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


export default function Info() {
    // Lấy token từ cookie ở browser
    const token = document.cookie.split(';').find((c) => c.trim().startsWith('token='));
    const tokenValue = token?.split('=')[1];
    if (!tokenValue) {
        window.location.href = '/login';
    }
    
    // Lấy thông tin user bằng token
    const [user, setUser] = useState({});
    useEffect(() => {
        const getUser = async () => {
            const res = await fetch('http://localhost:3000/detailuser', {
                headers: {
                    Authorization: `Bearer ${tokenValue}`,
                },
            });
            const data = await res.json();
            setUser(data);
        };
        getUser();
    }, [tokenValue]);
    

    return (
        <div className="flex items-center justify-center ">
        <div className=" p-6 ">
          <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">
            Thông tin cá nhân
          </h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              <span className="font-semibold text-gray-800">Email:</span> {user.email}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold text-gray-800">Tên người dùng:</span> {user.username}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold text-gray-800">Số điện thoại:</span> {user.phonenumber}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold text-gray-800">Địa chỉ:</span> {user.address}
            </p>
          </div>
        </div>
      </div>
      
    );
}


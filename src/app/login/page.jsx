'use client';
import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { GoogleLogin } from '@react-oauth/google';

export default function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Kiểm tra trạng thái đăng nhập
    useEffect(() => {
        const token = document.cookie.split('; ').find((row) => row.startsWith('token='));
        setIsLoggedIn(!!token);
    }, []);

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Bắt buộc'),
            password: Yup.string().required('Bắt buộc'),
        }),
        onSubmit: async (values, { setSubmitting, setFieldError }) => {
            try {
                const res = await fetch('http://localhost:3000/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username: values.username, password: values.password }),
                });

                if (!res.ok) {
                    const errorData = await res.json();
                    throw new Error(errorData.message || 'Đăng nhập thất bại');
                }
                // Lưu token vào cookie
                const data = await res.json();
                document.cookie = `token=${data.token}; path=/; max-age=${60 * 60}`;


                setIsLoggedIn(true);
                // Chuyển trang theo role
                const token = data.token;
                localStorage.setItem("token_check", token)
                const payload = JSON.parse(atob(token.split('.')[1]));
                if (payload.role === 'admin') {
                    window.location.href = 'http://localhost:3002';
                } else {
                    window.location.href = '/';
                }

            } catch (error) {
                setFieldError('general', error.message);
            } finally {
                setSubmitting(false);
            }
        },
    });

    const handleLogout = () => {
        document.cookie = 'token=; path=/; max-age=0'; // Xóa token
        setIsLoggedIn(false); // Cập nhật trạng thái
    };

    const handleGoogleSuccess = async (credentialResponse) => {
        const tokenId = credentialResponse.credential;
        try {
            const res = await fetch('http://localhost:3000/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ tokenId }),
            });

            if (!res.ok) {
                throw new Error('Đăng nhập Google thất bại');
            }
            const data = await res.json();
            document.cookie = `token=${data.token}; path=/; max-age=${60 * 60}`;
            setIsLoggedIn(true);
            const payload = JSON.parse(atob(data.token.split('.')[1]));
            if (payload.role === 'admin') {
                window.location.href = 'http://localhost:3002';
            } else {
                window.location.href = '/';
            }
        } catch (error) {
            formik.setFieldError('general', error.message);
        }
    };

    const handleGoogleFailure = (error) => {
        console.error('Google Sign-In failed:', error);
        formik.setFieldError('general', 'Đăng nhập Google thất bại');
    };

    return (
        <div className="container mt-8 px-4 max-w-lg mx-auto">
            {isLoggedIn ? (
                <div className="text-center">
                    <h2 className="text-3xl font-semibold mb-6 text-green-600">Chào mừng bạn trở lại!</h2>
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white rounded-lg px-6 py-3 hover:bg-red-600 transition duration-200 transform hover:scale-105"
                    >
                        Đăng xuất
                    </button>
                </div>
            ) : (
                <>
                    <h2 className="text-3xl font-semibold text-center mb-8">Đăng nhập</h2>
                    <form onSubmit={formik.handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-lg font-medium text-gray-700">Tên đăng nhập</label>
                            <input
                                type="username"
                                name="username"
                                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                {...formik.getFieldProps('username')}
                            />
                            {formik.touched.username && formik.errors.username && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.username}</div>
                            )}
                        </div>

                        <div>
                            <label className="block text-lg font-medium text-gray-700">Mật khẩu</label>
                            <input
                                type="password"
                                name="password"
                                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                {...formik.getFieldProps('password')}
                            />
                            {formik.touched.password && formik.errors.password && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200 transform hover:scale-105"
                            disabled={formik.isSubmitting}
                        >
                            Đăng nhập
                        </button>

                        {formik.errors.general && (
                            <div className="text-red-500 mt-3 text-sm text-center">{formik.errors.general}</div>
                        )}
                    </form>

                    <div className="mt-6">
                        <div className="text-center mb-4">
                            <span className="text-gray-500"> Đăng nhập bằng Google</span>
                        </div>
                        <div className="flex justify-center space-x-4">
                            <GoogleLogin
                                onSuccess={handleGoogleSuccess}
                                onError={handleGoogleFailure}
                                useOneTap
                                shape="pill"
                                size="large"
                            />
                        </div>
                    </div>
                </>
            )}
        </div>


    );
}

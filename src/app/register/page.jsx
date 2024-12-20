'use client';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Trang đăng ký
export default function Register() {
    const formik = useFormik({
        initialValues: {
            username:'',
            phonenumber:'',
            address:'',
            email: '',
            password: '',
            rePassword: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
            password: Yup.string()
                .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, 'Mật khẩu phải có ít nhất 6 ký tự, bao gồm chữ và số')
                .required('Vui lòng nhập mật khẩu'),
            rePassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Mật khẩu không khớp')
                .required('Vui lòng nhập lại mật khẩu'),
        }),
        onSubmit: async (values, { setSubmitting, setFieldError }) => {
            try {
                const res = await fetch('http://localhost:3000/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username: values.username, email: values.email, phonenumber: values.phonenumber, address: values.address, password: values.password }),
                });
                if (!res.ok) {
                    const errorData = await res.json();
                    if (res.status === 400 && errorData.message === "Email đã tồn tại") {
                        setFieldError('email', 'Email đã tồn tại');
                    } else {
                        throw new Error(errorData.message || 'Đăng ký thất bại');
                    }
                }
                // Xử lý thành công
                alert('Đăng ký thành công');
            } catch (error) {
                setFieldError('general', error.message);
            } finally {
                setSubmitting(false);
            }
        },
    });

    return (
        <div className="container mx-auto px-6 py-6  max-w-lg bg-gradient-to-r  rounded-lg shadow-xl">
            <h2 className="text-3xl font-semibold text-center mb-1">Đăng ký </h2>
            <form onSubmit={formik.handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
                <div>
                    <label className="block text-lg font-medium text-gray-700">Tên đăng nhập</label>
                    <input
                        type="username"
                        className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                        {...formik.getFieldProps('username')}
                    />
                    {formik.touched.username && formik.errors.username && (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                    )}
                </div>
                <div>
                    <label className="block text-lg font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                        {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                    )}
                </div>
                <div>
                    <label className="block text-lg font-medium text-gray-700">Số điện thoại</label>
                    <input
                        type="phonenumber"
                        className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                        {...formik.getFieldProps('phonenumber')}
                    />
                    {formik.touched.phonenumber && formik.errors.phonenumber && (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                    )}
                </div>
                <div>
                    <label className="block text-lg font-medium text-gray-700">Địa chỉ</label>
                    <input
                        type="address"
                        className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                        {...formik.getFieldProps('address')}
                    />
                    {formik.touched.address && formik.errors.address && (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                    )}
                </div>

                <div>
                    <label className="block text-lg font-medium text-gray-700">Mật khẩu</label>
                    <input
                        type="password"
                        className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                        {...formik.getFieldProps('password')}
                    />
                    {formik.touched.password && formik.errors.password && (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
                    )}
                </div>

                <div>
                    <label className="block text-lg font-medium text-gray-700">Nhập lại mật khẩu</label>
                    <input
                        type="password"
                        className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                        {...formik.getFieldProps('rePassword')}
                    />
                    {formik.touched.rePassword && formik.errors.rePassword && (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.rePassword}</div>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg hover:bg-gradient-to-l hover:from-indigo-600 hover:to-blue-500 transition duration-300"
                    disabled={formik.isSubmitting}
                >
                    Đăng ký
                </button>

                {formik.errors.general && (
                    <p className="my-3 text-red-500 text-center">{formik.errors.general}</p>
                )}
            </form>
        </div>
    );
}

"use client";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartslice";
import { useState } from "react";
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function DetailPage({ params }) {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    console.log(cart);

    const { data: product, error, isLoading } = useSWR(`http://localhost:3000/productdetail/${params.id}`, fetcher, {
        refreshInterval: 6000,
    });

    if (error) return <div className="text-red-500">Lỗi load dữ liệu.</div>;
    if (isLoading) return <div className="text-blue-500">Đang tải...</div>;

    return (
        <div className="container mx-auto mt-6 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product Image */}
                <div className="flex justify-center">
                    <img className="w-full h-auto max-w-xs md:max-w-md" src={`http://localhost:3000/img/${product.image}`} alt={product.name} />
                </div>

                {/* Product Details */}
                <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">Chi tiết sản phẩm</h3>
                    <h4 className="text-xl font-bold text-green-600">{product.name}</h4>
                    <p className="text-lg text-gray-600 mt-2">Giá khởi điểm: <span className="text-red-600 font-semibold">{product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span></p>

                    {/* Quantity Input */}
                    <div className="mt-4">
                        <label htmlFor="quantity" className="block text-sm text-gray-700">Số lượng</label>
                        <input
                            id="quantity"
                            className="form-input mt-1 p-2 border border-gray-300 rounded-md w-24"
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                    </div>


                    <button
                        className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition"
                        onClick={() => dispatch(addToCart({ item: product, quantity: quantity }))}>
                        Thêm vào giỏ hàng
                    </button>

                    {/* Product Description */}
                    <h4 className="text-lg font-semibold mt-6">Mô tả:</h4>
                    <p className="text-gray-700">{product.description}</p>
                </div>
            </div>
        </div>
    );
}

import React from 'react';
import ProductCard from '../components/ProductCard';

export default async function search({ searchParams }) {
    const res = await fetch('http://localhost:3000/search/' + encodeURIComponent(searchParams.keyword));
    const product = await res.json(); 

    return (
        <div className="container mx-auto px-6 py-12">
            <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800">
                    Kết quả tìm kiếm cho từ khóa: <span className="text-blue-600">{searchParams.keyword}</span>
                </h3>
            </div>
     
            {product ? (
                <ProductCard data={product}  className=""/>
            ) : (
                <p className="text-gray-600">Không tìm thấy kết quả nào cho từ khóa này.</p>
            )}
        </div>
    );
}

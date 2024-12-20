'use client';
import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

export default function Product() {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState('asc');

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('http://localhost:3000/products');
      const newProducts = await res.json();
      setProducts(newProducts);
    }
    fetchProducts();
  }, []);

  const handleSort = (products) => {
    return [...products].sort((a, b) => {
      if (sortOption === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  }

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  }

  return (
    <div className="my-6 px-4">
      <div>
      <div className="text-sm text-gray-500 mb-4">
          <a href="/" className="hover:underline">Trang chủ</a> &gt; <span>Sản phẩm</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="p-1">
            <h5 className="text-green-600 text-xl font-semibold">DANH SÁCH SẢN PHẨM</h5>
          </div>
          <div className="space-x-4 flex items-center">
            <div>
              <input type="checkbox" id="showAll" name="showAll" className="mr-2" />
              <label htmlFor="showAll" className="mr-4">Hiển thị tất cả</label>
            </div>
            <div>
              <input type="checkbox" id="showPhone" name="showPhone" className="mr-2" />
              <label htmlFor="showPhone" className="mr-4">Nồi cơm điện</label>
            </div>
            <div>
              <input type="checkbox" id="showLaptop" name="showLaptop" className="mr-2" />
              <label htmlFor="showLaptop" className="mr-4">Tủ lạnh</label>
            </div>
            <div>
              <input type="checkbox" id="showLinhKien" name="showLinhKien" className="mr-2" />
              <label htmlFor="showLinhKien" className="mr-4">Tivi</label>
            </div>
          </div>
          <select className="form-select w-auto px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" onChange={handleSortChange}>
            <option value="asc">Giá tăng dần</option>
            <option value="desc">Giá giảm dần</option>
          </select>
        </div>

        {/* Product Grid - 4 items per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ProductCard data={handleSort(products)} />
        </div>
      </div>
    </div>
  );
}

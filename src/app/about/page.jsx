import React from 'react';

const Cart = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          <a href="/" className="hover:underline">Home</a> &gt; <span>Cart</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold mb-6">CART</h1>

        {/* Cart Items */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2 space-y-4">
            {[1, 2, 3, 4].map((item, index) => (
              <div key={index} className="bg-white p-4 shadow-md flex items-center justify-between">
                {/* Product Details */}
                <div className="flex items-center">
                  <div className="w-20 h-20 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Image</span>
                  </div>
                  <div className="ml-4">
                    <h2 className="font-bold">Product Title Goes Here</h2>
                    <div className="text-gray-400 line-through">AED 32.00</div>
                    <div className="text-black font-semibold">AED 25.60</div>
                  </div>
                </div>

                {/* Quantity & Remove */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-gray-300">
                    <button className="px-3 py-1 text-lg">-</button>
                    <input
                      type="text"
                      value="1"
                      className="w-10 text-center border-l border-r border-gray-300 focus:outline-none"
                      readOnly
                    />
                    <button className="px-3 py-1 text-lg">+</button>
                  </div>
                  <button className="text-red-500 font-bold">REMOVE</button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white p-4 shadow-md">
            <h2 className="text-lg font-bold mb-4">Summary</h2>
            <div className="mb-4">
              <label htmlFor="promo" className="block text-gray-700 mb-2">Add Promo Code</label>
              <div className="flex">
                <input
                  id="promo"
                  type="text"
                  className="border border-gray-300 p-2 flex-grow focus:outline-none"
                />
                <button className="bg-black text-white px-4">ADD</button>
              </div>
            </div>

            <div className="border-t border-gray-300 pt-4">
              <div className="flex justify-between">
                <span>Price (4 items)</span>
                <span>AED 128.60</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charge</span>
                <span>AED 15.00</span>
              </div>
              <div className="flex justify-between font-bold mt-2">
                <span>Total Price</span>
                <span>AED 143.00</span>
              </div>
            </div>

            <div className="mt-6 flex space-x-4">
              <button className="border border-gray-300 px-4 py-2 flex-grow">CONTINUE SHOPPING</button>
              <button className="bg-black text-white px-4 py-2 flex-grow">PLACE ORDER</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

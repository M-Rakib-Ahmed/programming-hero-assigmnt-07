import React from 'react';

const Newslater = () => {
    return (
        <div>
             <div className=" bg-gray-900 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 w-full max-w-lg relative">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-200 via-white to-yellow-200 opacity-30"></div>
        <div className="relative z-10 text-center">
          <h2 className="text-xl font-bold text-gray-900">Subscribe to our Newsletter</h2>
          <p className="text-gray-600 mt-2">Get the latest updates and news right in your inbox!</p>
          <div className="mt-4 flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="bg-gradient-to-r from-pink-400 to-yellow-400 text-white px-4 py-2 rounded-r-lg font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Newslater;
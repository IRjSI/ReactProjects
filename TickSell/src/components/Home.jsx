import React from 'react';
import { Link, NavLink } from 'react-router-dom'

function Home() {

  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <div className="absolute top-7 left-7">
            <p className="text-3xl font-medium text-white">
            Hello, <br />
            {/* <span className="text-3xl font-semibold">{users.name} 👋🏻</span> */}
            </p>
        </div>
      <div className="flex space-x-4 mt-4">
        <Link
          to='/buy'
          className="bg-blue-500 text-white py-3 px-10 rounded-full text-xl hover:bg-blue-400"
        >
          Buy
        </Link>
        <Link
          to='/sell'
          className="bg-blue-500 text-white py-3 px-10 rounded-full text-xl hover:bg-blue-400"
        >
          Sell
        </Link>
      </div>
    </div>
  );
}

export default Home;

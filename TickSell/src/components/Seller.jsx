import React from 'react'
import { Link } from 'react-router'

function Seller() {
  return (
    <>
    <div >
        <Link
            to='/'
            className="flex h-10 w-20 mt-5 ml-5 bg-blue-500 text-white py-2 px-5 mr-4 rounded-sm text-md hover:bg-blue-800"
        >
            Back
        </Link>
    </div>
    <div className="flex h-screen w-screen overflow-x-hidden items-center justify-center">
        
        <div className="border-2 border-blue-400 p-20 rounded-lg">
            
            <form className="flex flex-col items-center justify-center gap-4">
                <input
                    required
                    className="bg-transparent outline-none border-2 border-blue-400 py-3 px-5 text-xl rounded-full"
                    type="text"
                    placeholder="From"
                />
                <input
                    required
                    className="bg-transparent outline-none border-2 border-blue-400 py-3 px-5 text-xl rounded-full"
                    type="text"
                    placeholder="To"
                />
                <input
                    required
                    className="bg-transparent outline-none border-2 border-blue-400 py-3 px-5 text-xl rounded-full"
                    type="number"
                    placeholder="Price"
                />
                <button
                    type="submit"
                    className="mt-4 bg-blue-500 text-white border-none outline-none py-3 px-5 rounded-full text-xl hover:bg-blue-400"
                >
                    Sell
                </button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Seller

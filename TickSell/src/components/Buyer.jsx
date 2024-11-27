import React from 'react'
import { Link } from 'react-router'

function Buyer() {
  return (
    <>
        <Link
            to='/'
            aria-label="Go back to the home page"
            className="overflow-hidden flex h-10 w-20 mt-5 ml-5 bg-blue-500 text-white py-2 px-5 rounded-sm text-md hover:bg-blue-800"
        >
            Back
        </Link>

        <div className="flex h-screen w-screen items-center justify-center">
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
                    <button
                        type="submit"
                        className="mt-4 bg-blue-500 text-white border-none outline-none py-3 px-5 rounded-full text-xl hover:bg-blue-400"
                    >
                        Search
                    </button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Buyer

import { useState } from "react"

export function SearchBox({searchSubmit , change}) {
    return (
        <>
            <div className="relative max-w-96">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input type="search" id="default-search"
                    onChange={(e) => { change(e.target.value) }}
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 focus:ring-0 focus:outline focus:outline-1 focus:outline-indigo-500"
                    placeholder="جستجو بر اساس نام" required />
                <button type="submit"
                    onClick={searchSubmit}
                    className="text-white absolute end-2.5 bottom-2.5 bg-indigo-500 hover:bg-indigo-400 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2">جستجو
                </button>
            </div>
        </>
    )
}

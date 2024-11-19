"use client"

import Link from "next/link";

export function GuitarItem({ index, id, name, brand, price, deleteGuitar }: {
    index: number;
    id: string;
    name: string;
    brand: string;
    price: number;
    deleteGuitar: (id: string) => void
}) {
    return <>
        <div key={index} className="py-4 flex items-center justify-between relative">
            <div className='absolute right-[-12px] top-0 flex gap-1'>
                <Link
                    className="px-2 text-center bg-white border-2 font-semibold rounded-md transition hover:shadow-lg"
                    href={{
                        pathname: '/Homework/guitars/edit',
                        query: { id, name, brand, price },
                    }}>Edit
                </Link>
                <button
                    className="px-2 bg-[rgb(255,30,35)] text-center text-white font-semibold rounded-md transition hover:shadow-lg"
                    onClick={() => deleteGuitar(id)}
                >X
                </button>
            </div>
            <div className="flex flex-col text-lg">
                <span className="font-semibold text-gray-800">{name}</span>
                <span className="text-gray-600">{brand}</span>
            </div>
            <span className="text-green-500 font-semibold">${price.toLocaleString()}</span>
        </div>
    </>
}
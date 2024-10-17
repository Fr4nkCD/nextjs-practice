'use client'

import React, { useState } from "react"
import { useParams } from "next/navigation"
import Header from "@/app/music_store/components/header"
import Footer from "@/app/music_store/components/footer"
import { defaultProducts } from "@/app/music_store/data"

interface InfoProps {
    data: any[]
}

const ProductInfo: React.FC<InfoProps> = ({ data }) => {
    data = defaultProducts
    const params = useParams()
    const targetId = parseInt(params.id)

    const item = data.find(p => p.id === targetId)

    const [quantity, setQuantity] = useState(1)

    return (<>
        {<Header />}
        {(item) ?
            <div className="w-full p-10 flex justify-around items-start">
                <img src={item.image_url} className="w-[500px] h-[300px] border-2 p-5" style={{ objectFit: 'contain' }} />
                <div className="w-[50%] flex flex-col gap-3">
                    <h1 className="font-bold text-3xl"> {item.name} </h1>
                    <h3 className="font-semibold text-2xl"> ${item.price} </h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum assumenda amet praesentium non, placeat suscipit voluptatem eaque saepe in totam eum magnam doloribus unde delectus aliquam repellat dicta tempore tempora?</p>
                    <div className="flex gap-3 items-center py-5">
                        <span className="font-semibold">Quantity:</span>
                        <div className="w-[200px] h-[40px] drop-shadow-sm border-2 rounded-full flex justify-between items-center overflow-hidden">
                            <button className="w-[20%] h-full bg-gray-200 transition hover:bg-gray-100 text-lg"
                                onClick={() => (quantity > 0) ? setQuantity(quantity - 1) : 0}>-</button>
                            <span className="text-xl">{quantity}</span>
                            <button className="w-[20%] h-full bg-gray-200 transition hover:bg-gray-100 text-lg"
                                onClick={() => (setQuantity(quantity + 1))}>+</button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <button className="font-semibold text-[#e60023] text-lg drop-shadow-md p-[0.7em] w-[250px] rounded-[100px] bg-white border-[3px] border-[#e60023] transition hover:border-[#eda0ac] hover:text-[#eda0ac]">Add to Cart</button>
                        <button className="text-white font-semibold text-lg drop-shadow-md p-[0.7em] w-[250px] rounded-[100px] bg-[#e60023] transition hover:bg-[#e85066]">Buy Now</button>
                    </div>
                </div>
            </div>
            : <p className="text-2xl left-1/2 absolute top-1/2 translate-x-[-50%] translate-y-[-50%]">This item is not in the original data.</p>}
        {<Footer />}
    </>)
}

export default ProductInfo
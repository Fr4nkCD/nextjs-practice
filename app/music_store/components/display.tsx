import React from "react"

import Image from "next/image"
import newIcon from "../resources/New.webp"
import likeBlack from "../resources/Like Black.webp"

interface DisplayProps {
    data: any[];
}  

export const Display: React.FC<DisplayProps> = ({ data }) => {
    return (<>
        <div className="p-3">
            <h1 className="text-center text-3xl font-bold">Products</h1>

            <div className="products w-full p-10 grid grid-cols-5 gap-10">
                {data.map((item: any) =>
                    <button className="item text-start bg-white w-[150px] h-[195px] rounded-[15px] border-2 border-gray-300 transition hover:drop-shadow-lg">
                        {item.is_new &&
                            <Image src={newIcon} width={40} height={0} alt="New" className="absolute z-10 translate-x-[-50%] translate-y-[-50%]" />
                        }
                        <div className="image w-full h-[60%] translate-y-[-2px] rounded-t-[15px] overflow-hidden">
                            <img src={item.image_url} className="w-full h-full" style={{objectFit: 'cover'}}/>
                            <div className="w-full h-[10%] translate-y-[-99%] bg-[linear-gradient(0deg,rgba(255,255,255,1),rgba(255,255,255,0))]"></div>
                        </div>
                        <div className="info p-1 flex flex-col gap-[0.15em]">
                            <h4 className="font-bold text-xs">{item.name}</h4>
                            <h1 className="font-bold text-lg">${item.price.toLocaleString()}</h1>
                            <div className="wishlists flex flex-row gap-2 w-full h-[1em] items-center">
                                <Image src={likeBlack} width={15} height={0} alt="Wishlists"/>
                                {item.like}
                            </div>
                        </div>
                    </button>
                )}
            </div>
        </div>
    </>)
}
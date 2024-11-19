import React from "react"
import { useRouter } from "next/navigation"

import Image from "next/image"
import newIcon from "../resources/New.webp"
import likeBlack from "../resources/Like Black.webp"
import editIcon from "../resources/Edit.webp"
import deleteIcon from "../resources/Delete.webp"

interface DisplayProps {
    data: any[];

    setEditId: React.Dispatch<React.SetStateAction<number>>
    editing: number;
    setEvent: React.Dispatch<React.SetStateAction<string>>

    setName: React.Dispatch<React.SetStateAction<string>>
    setPrice: React.Dispatch<React.SetStateAction<number>>
    setImage: React.Dispatch<React.SetStateAction<string>>
    setLike: React.Dispatch<React.SetStateAction<number>>
    setNew: React.Dispatch<React.SetStateAction<boolean>>
}

export const Display: React.FC<DisplayProps> = ({ data, setEditId, editing, setEvent, setName, setPrice, setImage, setLike, setNew }) => {
    const mainPage = "music_store"
    
    const promptDelete = (id: number) => {
        setEvent('delete')
        setEditId(id)
    }

    const promptEdit = (id: number) => {
        setEvent('edit')
        const itemIndex = data.findIndex(item => item.id === id)
        setEditId(itemIndex)
        const item = data[itemIndex]
        setName(item.name)
        setPrice(item.price)
        setImage(item.image_url)
        setLike(item.like)
        setNew(item.is_new)
    }

    const router = useRouter()

    return (<>
        <div className="p-3">
            <h1 className="text-center text-3xl font-bold">Products</h1>

            {/* Display products */}
            <div className="products w-full p-10 grid grid-cols-5 gap-10">
                {data.map((item: any) =>
                    <button className="item text-start bg-white w-[200px] h-[250px] rounded-[15px] border-2 border-gray-300 transition hover:drop-shadow-lg"
                        onClick={() => {
                            if (editing == 0)
                                promptDelete(item.id)
                            else if (editing == 1)
                                promptEdit(item.id)
                            else
                                router.push(mainPage + '/item/' + item.id)
                        }}>
                        {item.is_new &&
                            <Image src={newIcon} width={40} height={0} alt="New" className="absolute z-10 translate-x-[-50%] translate-y-[-75%]" />
                        }

                        <div className="absolute drop-shadow-xl bg-white border-gray-600 rounded-lg w-10 h-10 z-10 p-1 translate-x-[175px] translate-y-[-50%]"
                            style={{ background: (editing == 0) ? 'red' : 'white', display: (editing != -1) ? 'block' : 'none' }}
                        ><Image src={(editing == 0) ? deleteIcon : editIcon} width={40} height={0} alt="" /></div>

                        <div className="image w-full h-[60%] translate-y-[-12px] rounded-t-[15px] overflow-hidden">
                            <img src={item.image_url} className="w-full h-full" style={{ objectFit: 'cover' }} />
                            <div className="w-full h-[10%] translate-y-[-95%] bg-[linear-gradient(0deg,rgba(255,255,255,1),rgba(255,255,255,0))]"></div>
                        </div>

                        <div className="info p-1 flex flex-col gap-[0.15em]">
                            <h4 className="font-bold text-xs">{item.name}</h4>
                            <h1 className="font-bold text-lg">${item.price.toLocaleString()}</h1>
                            <div className="wishlists flex flex-row gap-2 w-full h-[1em] items-center">
                                <Image src={likeBlack} width={15} height={0} alt="Wishlists" />
                                {item.like.toLocaleString()}
                            </div>
                        </div>

                    </button>
                )}
            </div>
        </div>
    </>)
}
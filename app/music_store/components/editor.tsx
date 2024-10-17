// OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
import React, { useState } from "react"

interface EditorProps {
    data: any[];
    setItem: React.Dispatch<React.SetStateAction<any[]>>
}

export const Editor: React.FC<EditorProps> = ({ data, setItem }) => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [image_url, setImage] = useState('')
    const [like, setLike] = useState(0)
    const [isNew, setNew] = useState(false)

    const [event, setEvent] = useState('none')
    const [editing, setEdit] = useState(-1)
    const [editId, setEditId] = useState(-1)

    const addItem = () => {
        if (name == "" || price == 0 || image_url == "") return

        setItem([...data, {
            name: name,
            price: price,
            image_url: image_url,
            like: like,
            is_new: isNew
        }])

        setName('')
        setPrice(0)
        setImage('')
        setLike(0)
        setNew(false)

        cancelEvent()
    }

    const cancelEvent = () => {
        setEvent('none')
        setEdit(-1)
        setEditId(-1)
    }

    return (<>
        <div className="flex flex-row justify-center m-5">
            <button
                className="font-semibold w-[100px] rounded-[100px] border-2 bg-white border-gray-300 m-1 p-2 transition hover:drop-shadow-lg"
                onClick={() => { setEvent('add') }}
                style={{ visibility: (editing == -1) ? "visible" : "hidden" }}
            >Add</button>
            <button
                className="font-semibold w-[100px] rounded-[100px] border-2 bg-white border-gray-300 m-1 p-2 transition hover:drop-shadow-lg"
                onClick={() => { setEdit(0) }}
                style={{ visibility: (editing == -1) ? "visible" : "hidden" }}
            >Delete</button>
            <button
                className="font-semibold w-[100px] rounded-[100px] border-2 bg-white border-gray-300 m-1 p-2 transition hover:drop-shadow-lg"
                onClick={() => { setEdit(1) }}
                style={{ visibility: (editing == -1) ? "visible" : "hidden" }}
            >Edit</button>
            <button
                className="font-semibold w-[100px] rounded-[100px] border-2 bg-white border-gray-300 m-1 p-2 transition hover:drop-shadow-lg"
                onClick={() => { setEdit(-1) }}
                style={{ visibility: (editing != -1) ? "visible" : "hidden" }}
            >Cancel</button>
        </div>

        <div className="fixed z-20 top-0 w-full h-full bg-[rgba(0,0,0,0.25)] text-center p-10"
            style={{ visibility: (event != 'none') ? "visible" : "hidden" }}>
            <div className="bg-white rounded-lg p-10 w-1/2 translate-x-1/2">
                <div className="flex flex-col items-center">
                    <h2 className="text-xl font-bold pb-2">Add Item</h2>
                    <p className="text-red-500 w-[75%] text-center">This is only the front-end. Changes will not be saved after you refresh the page.</p>
                </div>
                <div className="text-start w-full">
                    <span>Name:</span><input
                        className="bg-slate-100 w-full m-1 text-lg"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                    />
                    <span>Price:</span><input
                        className="bg-slate-100 w-full m-1 text-lg"
                        value={price}
                        onChange={(e) => setPrice(+e.target.value)}
                        type="number"
                    />
                    <span>Image URL:</span><input
                        className="bg-slate-100 w-full m-1 text-lg"
                        value={image_url}
                        onChange={(e) => setImage(e.target.value)}
                        type="text"
                    />
                    <span>Wishlists:</span><input
                        className=" bg-slate-100 w-full m-1 text-lg"
                        value={like}
                        onChange={(e) => setLike(+e.target.value)}
                        type="number"
                    />
                    <div className="flex flex-row items-center gap-2">
                        <span>Is New:</span><input
                            className=" bg-slate-100 w-5 h-5"
                            checked={isNew}
                            onChange={(e) => setNew(e.target.checked)}
                            type="checkbox"
                        />
                    </div>
                </div>
                <button
                    className="font-semibold w-[100px] rounded-[100px] border-2 bg-white border-gray-300 m-1 p-2 transition hover:drop-shadow-lg"
                    onClick={() => {

                    }}
                >Add</button>
                <button
                    className="font-semibold w-[100px] rounded-[100px] border-2 bg-white border-gray-300 m-1 p-2 transition hover:drop-shadow-lg"
                    onClick={cancelEvent}
                >Cancel</button>
            </div>
        </div>
    </>)
}
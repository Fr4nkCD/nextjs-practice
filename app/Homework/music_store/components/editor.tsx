import React, { useState } from "react"

interface EditorProps {
    data: any[];
    setItem: React.Dispatch<React.SetStateAction<any[]>>

    editId: number;
    setEditId: React.Dispatch<React.SetStateAction<number>>
    editing: number;
    setEdit: React.Dispatch<React.SetStateAction<number>>
    event: string;
    setEvent: React.Dispatch<React.SetStateAction<string>>

    name: string
    setName: React.Dispatch<React.SetStateAction<string>>
    price: number
    setPrice: React.Dispatch<React.SetStateAction<number>>
    image_url: string
    setImage: React.Dispatch<React.SetStateAction<string>>
    like: number
    setLike: React.Dispatch<React.SetStateAction<number>>
    isNew: boolean
    setNew: React.Dispatch<React.SetStateAction<boolean>>
}

export const Editor: React.FC<EditorProps> = ({ data, setItem, editId, setEditId, editing, setEdit, event, setEvent, 
    name, setName, price, setPrice, image_url, setImage, like, setLike, isNew, setNew }) => {

    const clearFormat = () => {
        setName('')
        setPrice(0)
        setImage('')
        setLike(0)
        setNew(false)
    }

    const promptAdd = () => {
        clearFormat()
        setEvent('add')
    }

    const addItem = () => {
        if (name == "" || price == 0 || image_url == "") return

        const id = (!data.length) ? 1 : data[data.length - 1].id + 1
        setItem([...data, {
            id,
            name,
            price,
            image_url,
            like,
            is_new: isNew
        }])

        clearFormat()

        cancelEvent()
    }

    function deleteItem(id: number) {
        const temp = data.filter((item) => item.id !== id)
        setItem([...temp])
        setEditId(-1)
        setEvent('none')
    }

    function updateItem() {
        const temp = data;
        temp[editId].name = name
        temp[editId].price = price
        temp[editId].image_url = image_url
        temp[editId].like = like
        temp[editId].is_new = isNew
        setItem([...temp])
        
        setEditId(-1)
        setEvent('none')

        clearFormat()
    }

    const cancelEvent = () => {
        setEvent('none')
        setEdit(-1)
        setEditId(-1)
    }

    const showItemName = (id: number) => {
        const itemIndex = data.findIndex(item => item.id === id)
        return data[itemIndex].name
    }

    return (<>
        {/* Edit Buttons */}
        <div className="m-5 flex flex-col items-center">
            <div className="flex flex-row justify-center" style={{ display: (editing == -1) ? "block" : "none" }}>
                <button
                    className="font-semibold w-[100px] rounded-[100px] border-2 bg-white border-gray-300 m-1 p-2 transition hover:drop-shadow-lg"
                    onClick={promptAdd}
                >Add</button>
                <button
                    className="font-semibold w-[100px] rounded-[100px] border-2 bg-white border-gray-300 m-1 p-2 transition hover:drop-shadow-lg"
                    onClick={() => { setEdit(0) }}
                >Delete</button>
                <button
                    className="font-semibold w-[100px] rounded-[100px] border-2 bg-white border-gray-300 m-1 p-2 transition hover:drop-shadow-lg"
                    onClick={() => { setEdit(1) }}
                >Edit</button>
            </div>
            <button
                className="font-semibold w-[150px] rounded-[100px] border-2 bg-white border-gray-300 m-1 p-2 transition hover:drop-shadow-lg"
                onClick={() => { setEdit(-1) }}
                style={{ display: (editing != -1) ? "block" : "none" }}
            >Done</button>
        </div>

        {/* Add/Edit Panel */}
        <div className="fixed z-20 top-0 w-full h-full bg-[rgba(0,0,0,0.25)] text-center p-10 flex items-center"
            style={{ display: (event != 'none' && event != 'delete') ? "flex" : "none" }}>
            <div className="bg-white rounded-lg p-10 w-1/2 translate-x-1/2">
                <div className="flex flex-col items-center">
                    <h2 className="text-xl font-bold pb-2">{(event == 'edit') ? "Edit Item" : "Add Item"}</h2>
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
                    onClick={(event != 'edit') ? addItem : updateItem}
                >{(event != 'edit') ? "Add" : "Update"}</button>
                <button
                    className="font-semibold w-[100px] rounded-[100px] border-2 bg-white border-gray-300 m-1 p-2 transition hover:drop-shadow-lg"
                    onClick={() => setEvent('none')}
                >Cancel</button>
            </div>
        </div>

        {/* Delete Panel */}
        <div className=" fixed z-20 top-0 w-full h-full bg-[rgba(0,0,0,0.25)] text-center p-10 flex items-center"
            style={{ display: (event == 'delete') ? "flex" : "none" }}>
            <div className="bg-white rounded-lg p-10 w-1/2 translate-x-1/2">
                <p>Confirm delete "{(editId > 0 && event == 'delete') && showItemName(editId)}"?</p>
                <br />
                <button
                    className="font-semibold w-[100px] rounded-[100px] border-2 bg-red-500 text-white border-red-700 m-1 p-2 transition hover:drop-shadow-lg"
                    onClick={() => deleteItem(editId)}
                >Delete</button>
                <button
                    className="font-semibold w-[100px] rounded-[100px] border-2 bg-white border-gray-300 m-1 p-2 transition hover:drop-shadow-lg"
                    onClick={() => setEvent('none')}
                >Cancel</button>
            </div>
        </div>
    </>)
}
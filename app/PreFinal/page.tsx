'use client'

import { useState, useEffect } from "react"

type Categories = {
    id: number,
    name: string,
}

type Products = {
    id: number,
    title: string,
    price: number
}

export default function ProductList() {
    const BASE_URL = `https://dummyjson.com/products`
    const URL_PRODUCT = `${BASE_URL}?limit=10&select=title,price`
    const URL_CATEGORY = `${BASE_URL}/categories`

    const [name, setName] = useState('')
    const [categories, setCategories] = useState<Categories[]>()
    const [products, setProducts] = useState<Products[]>()

    useEffect(() => {
        async function getCategories() {
            try {
                const raw = await fetch(URL_CATEGORY)
                const data = await raw.json()
                setCategories(data.map((item: { name: string }) => ({
                    id: data.indexOf(item) + 1,
                    name: item.name
                })))
            }
            catch (error) {
                console.error("Error: ", error)
            }
        }
        async function getProducts() {
            try {
                const raw = await fetch(URL_PRODUCT)
                const data = await raw.json()
                setProducts(data.products.map((item: { id: number, title: string, price: number }) => ({
                    id: item.id,
                    title: item.title,
                    price: item.price
                })))
            }
            catch (error) {
                console.error("Error: ", error)
            }
        }
        getCategories()
        getProducts()
    }, [])

    function addCategory() {
        setCategories([{ name }, ...categories])
    }

    if (!categories || !products) return <h1 className="text-2xl text-center mt-[10em]">Loading...</h1>

    return <>
        <h1 className="text-center text-2xl font-semibold mt-2">Product List 2024</h1>

        <div className="grid grid-cols-2 m-3">

            <div id="Category">
                <div id="Add panel">
                    <span>Add new category</span>
                    <div>
                        <input
                            className="border-2 border-black m-1 p-1"
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            value={name}
                        />
                        <button
                            className="border-2 border-black p-1"
                            onClick={addCategory}
                        >Add</button>
                    </div>
                </div>

                <div id="List">
                    <p className="text-2xl mt-2">Categories</p>
                    <ol>
                        {categories.map((item) =>
                            <li>
                                {categories.indexOf(item) + 1}{". "}
                                {item.name}
                            </li>
                        )}
                    </ol>
                </div>
            </div>

            <div id="Products">
                <p className="text-2xl mb-2">Products</p>
                <ol className="flex flex-col gap-2">
                    {products.map((item) =>
                        <div className=" bg-indigo-200 rounded-md border-2 border-black relative">
                            <div className="flex justify-between p-6">
                                <span>{item.title}</span>
                                <span>{item.price}</span>
                            </div>
                            <span className="text-center text-xs text-blue-800 bg-blue-50 w-[1.25em] absolute right-0 bottom-0">
                                {item.id}
                            </span>
                        </div>
                    )}
                </ol>
            </div>

        </div>

    </>
}

import prisma from "@/utils/db";
import { redirect } from "next/navigation";

export default function EditGuitar({ searchParams }: {
    searchParams: { id: string; name: string, brand: string, price: number }
}) {

    const { id, name, brand, price } = searchParams

    async function updateGuitar(formData: FormData) {
        "use server"
        const name = formData.get("name") as string
        const brand = formData.get("brand") as string
        const price = parseFloat(formData.get("price") as string)
        await prisma.guitars.update({ data: { name, brand, price }, where: { id } })
        redirect("/Homework/guitars")
    }

    return <>
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg mb-8 mx-auto">
            <h2 className="text-xl font-semibold mb-6 text-center text-gray-700">Edit Guitar</h2>
            <form action={updateGuitar} className="flex flex-col gap-6">
                <div>
                    <label htmlFor="name" className="block font-medium text-gray-700 mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        defaultValue={name}
                        required
                        className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 text-black"
                    />
                </div>
                <div>
                    <label htmlFor="brand" className="block font-medium text-gray-700 mb-2">Brand</label>
                    <input
                        type="text"
                        name="brand"
                        defaultValue={brand}
                        required
                        className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 text-black"
                    />
                </div>
                <div>
                    <label htmlFor="price" className="block font-medium text-lg text-gray-700 mb-2">Price</label>
                    <input
                        type="number"
                        name="price"
                        defaultValue={price}
                        required
                        className="w-full border-2 border-gray-300 rounded-lg p-3 text-lg focus:outline-none focus:ring-2 text-black"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-[rgb(25,30,35)] text-white font-semibold py-3 rounded-lg mt-6 transition hover:shadow-lg"
                >
                    Update
                </button>
            </form>
        </div>
    </>
}
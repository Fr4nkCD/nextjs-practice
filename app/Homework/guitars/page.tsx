import { revalidatePath } from 'next/cache';
import prisma from '../../../utils/db';

import { GuitarItem } from './guitarItem';

export default async function GuitarPage() {
    const guitars = await prisma.guitars.findMany();

    async function addGuitar(formData: FormData) {
        "use server";
        try {
            const id = formData.get("id") as string;
            const name = formData.get("name") as string;
            const brand = formData.get("brand") as string;
            const price = parseFloat(formData.get("price") as string);

            if (isNaN(price) || price <= 0) {
                throw new Error("Invalid price value.");
            }

            const guitarData: any = { data: { name, brand, price } };
            if (id) {
                guitarData.data.id = id;
            }

            await prisma.guitars.create(guitarData);

            revalidatePath("/Homework/guitars");
        } catch (error) {
            console.error("Error adding guitar:", error);
            throw new Error("Failed to add guitar. Please check the input data.");
        }
    }

    async function deleteGuitar(id: string) {
        "use server"
        try {
            await prisma.guitars.delete({ where: { id } })
            revalidatePath("/Homework/guitars")
        } catch (error) {
            console.error("Error adding guitar:", error);
            throw new Error("Failed to add guitar. Please check the input data.");
        }
    }

    return (
        <div className="flex flex-row min-h-screen m-3">

            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg mx-auto h-full">
                <h2 className="text-3xl font-semibold mb-6 text-center text-gray-700">Guitar List</h2>
                <ul className="divide-y divide-gray-200">
                    {guitars.map((guitar, index) => (
                        <GuitarItem
                            index={index}
                            id={guitar.id}
                            name={guitar.name}
                            brand={guitar.brand}
                            price={guitar.price}
                            deleteGuitar={deleteGuitar}
                        />
                    ))}
                </ul>
                <h2 className='text-lg text-center' style={{display: guitars.length == 0 ? 'block' : 'none'}}>None</h2>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg mb-8 mx-auto">
                <h2 className="text-xl font-semibold mb-6 text-center text-gray-700">Add New Guitar</h2>
                <form action={addGuitar} className="flex flex-col gap-6">
                    <div>
                        <label htmlFor="name" className="block font-medium text-gray-700 mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 text-black"
                        />
                    </div>
                    <div>
                        <label htmlFor="brand" className="block font-medium text-gray-700 mb-2">Brand</label>
                        <input
                            type="text"
                            name="brand"
                            required
                            className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 text-black"
                        />
                    </div>
                    <div>
                        <label htmlFor="price" className="block font-medium text-lg text-gray-700 mb-2">Price</label>
                        <input
                            type="number"
                            name="price"
                            required
                            className="w-full border-2 border-gray-300 rounded-lg p-3 text-lg focus:outline-none focus:ring-2 text-black"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[rgb(25,30,35)] text-white font-semibold py-3 rounded-lg mt-6 transition hover:shadow-lg"
                    >
                        Add
                    </button>
                </form>
            </div>

        </div>
    );
}
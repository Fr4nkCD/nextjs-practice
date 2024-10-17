import { best_Item } from "../data"

export default function Highlight() {
    return (<>
        <div className="w-full h-[500px] bg-gray-600">
            <img src={best_Item.image_url} className="w-full h-full" style={{objectFit: 'cover'}}/>
            <div className="main p-10 gap-6 flex flex-col absolute translate-y-1/2 bottom-1/2">
                <h1 className="text-white text-4xl font-semibold">{best_Item.name}</h1>
                <p className="text-white text-xl">The Best Selling Music Instrument of 2024</p>
                <button className="text-white font-semibold text-lg drop-shadow-lg p-[0.7em] w-[140px] rounded-[100px] bg-[#e60023] transition hover:bg-[#e85066]">Shop Now</button>
            </div>
        </div>
    </>)
}
import Image from "next/image"

import logo from "../resources/Icon.webp"
import tuneland from "../resources/Tuneland.webp"
import account from "../resources/Account.webp"
import shop from "../resources/Shop.webp"
import like from "../resources/Like.webp"

export default function Header() {
    return (<>
        <div className="bg-[#1a00ff] w-[100%] h-[60px] flex justify-between items-center p-2">
            <button className="logo flex flex-row items-center">
                <Image src={logo} width={80} height={0} alt="Logo" />
                <Image src={tuneland} width={140} height={0} alt="Tuneland" />
            </button>

            <div className="buttons flex gap-0">
                <button className="h-[50px] px-[1.5em] py-[0.5em] rounded-md text-white transition hover:bg-[rgb(255,255,255,0.25)]">About</button>
                <button className="h-[50px] px-[1.5em] py-[0.5em] rounded-md text-white transition hover:bg-[rgb(255,255,255,0.25)]">Products</button>
                <button className="h-[50px] px-[1.5em] py-[0.5em] rounded-md text-white transition hover:bg-[rgb(255,255,255,0.25)]">Contact</button>

                <button className="w-[50px] h-[50px] p-[0.5em] rounded-md transition hover:bg-[rgb(255,255,255,0.25)] flex justify-center items-center">
                    <Image src={account} width={40} height={0} alt="Account" />
                </button>
                <button className="w-[50px] h-[50px] p-[0.5em] rounded-md transition hover:bg-[rgb(255,255,255,0.25)] flex justify-center items-center">
                    <Image src={shop} width={40} height={0} alt="Shop" />
                </button>
                <button className="w-[50px] h-[50px] p-[0.5em] rounded-md transition hover:bg-[rgb(255,255,255,0.25)] flex justify-center items-center">
                    <Image src={like} width={27} height={0} alt="Wishlist" />
                </button>
            </div>
        </div>
    </>)
}
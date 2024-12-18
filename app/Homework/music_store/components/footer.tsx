export default function Footer() {
    return (<>
        <div className="text-white text-xs bg-[#222328] w-full h-[2.5rem] px-6 py-2 flex justify-between items-center absolute bottom-0">
            <span className="text-base">© Tuneland Music.</span>
            <div className="settings flex gap-2">
                <button className="hover:underline">Privacy Statement</button>
                <span>|</span>
                <button className="hover:underline">Terms of Use</button>
                <span>|</span>
                <button className="hover:underline">Accessibility Statement</button>
                <span>|</span>
                <button className="hover:underline">Worldwide Social Network</button>
            </div>
        </div>
    </>)
}
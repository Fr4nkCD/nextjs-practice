'use client'

import Header from "./components/header"
import Highlight from "./components/highlight"
import { Store } from "./components/store"
import Footer from "./components/footer"

// import { Instrument_Sans } from "next/font/google"
// const instrument_sans = Instrument_Sans ({
//     weight: '400',
//     subsets:['latin']
// })

export default function MusicShop() {
    return(<>
        <html lang="en">
            <body>
                {<Header/>}
                {<Highlight/>}
                {<Store/>}
                {<Footer/>}
            </body>
        </html>
    </>)
}
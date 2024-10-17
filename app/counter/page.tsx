'use client'
import { useState } from "react";

export default function Counter() {
    const [num, setNum] = useState(1)

    return (<>
        <body className="flex items-center justify-center h-[100vh] gap-2">
            <h1> Counter: {num} </h1>
            <button
                className="border-2 border-black p-2 w-[2em] h-[2em] text-center"
                onClick={() => (setNum(num + 1))}
            >+</button>
            <button
                className="border-2 border-black p-2 w-[2em] h-[2em] text-center"
                onClick={() => (setNum(num - 1))}
            >-</button>
        </body>
    </>)
}
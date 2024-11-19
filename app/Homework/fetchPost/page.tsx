'use client'

import { useEffect, useState } from 'react'

type Vercel = {
    id: number,
    title: string,
    content: string,
    author: string,
    date: string,
    category: string,
}

type Typicode = {
    id: number,
    title: string,
    thumbnailUrl: string
}


export default function MyFetch() {

    const [imageUrl, setImageUrl] = useState('')
    const [name, setName] = useState('')

    const [vercel, setVercel] = useState<Vercel[]>()
    const [typicode, setTypicode] = useState<Typicode[]>()

    useEffect(() => {
        async function getGithub() {
            try {
                const raw = await fetch('https://api.github.com/users/fr4nkcd')
                const data = await raw.json()
                setName(data.login)
                setImageUrl(data.avatar_url)
            }
            catch (error) {
                console.error("Error: ", error)
            }
        }

        async function getVercel() {
            try {
                const raw = await fetch('/Homework/api/vercel')
                const data = await raw.json()
                setVercel(data)
            }
            catch (error) {
                console.error("Error: ", error)
            }
        }

        async function getTypicode() {
            try {
                const raw = await fetch('/Homework/api/typicode')
                const data = await raw.json()
                setTypicode(data.slice(0, 25).map((photo: { id: number, title: string }) => ({ id: photo.id, title: photo.title })))
            }
            catch (error) {
                console.error("Error: ", error)
            }
        }

        getGithub()
        getVercel()
        getTypicode()

    }, [])

    if (!vercel || !typicode) return <div className='text-center text-4xl'>Loading...</div>

    return (<>
        <style>{'body {background: linear-gradient(172deg, rgb(34,216,198), rgb(55,134,224), rgba(252,254,255) 33em); background-repeat: no-repeat;}'}</style>

        <div className='flex flex-col items-center gap-3 m-5'>
            <div className='drop-shadow-md flex flex-col items-center'>
                <section className='p-3 bg-slate-800 rounded-lg text-white text-xl'>Hi, this is {name}'s blog.</section>
                <div className='w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[20px] border-slate-800 rotate-180'></div>
            </div>
            <img src={imageUrl} width={200} height={200} alt='Profile Picture' />
        </div>

        <div className='grid grid-cols-2 m-20 gap-10'>
            {typicode.map((i) => {
                const item = vercel.find((j) => j.id === i.id);
                if (!item) return null;
                return (
                    <div className='leading-10 bg-[linear-gradient(190deg,rgb(255,255,255),rgb(225,225,225))] border-[3px] drop-shadow-lg rounded-3xl p-3 flex flex-col'>
                        <h2 className='text-2xl font-bold'>{i.title}</h2>
                        <span >Author: {item.author}</span>
                        <span className='text-sm'>Category: {item.category}</span>
                        <span className='text-sm'>Date: {item.date}</span>
                        <p>{item.content}</p>
                    </div>
                )
            })}
        </div>

        <div className="text-white text-xs bg-[#222328] w-full h-[2.5rem] px-6 py-2 flex items-center">
            <span className="text-base">© 2024 Fr4nkCD</span>
        </div>
    </>)
}
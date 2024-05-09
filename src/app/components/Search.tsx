'use client'

import { useState, FormEvent } from "react"
import { useRouter } from "next/navigation"

export default function Search(){

    const [Search, setSearch]=useState('')
    const router=useRouter()

    const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
       if (Search) router.push(`/results/${Search}`)
        setSearch('')
    }

    return (
        <form className="flex justify-center md:justify-between"
        onSubmit={handleSubmit}>
            <input 
                type="text"
                value={Search}
                onChange={(e)=>setSearch(e.target.value)}
                placeholder="search"
                className="bg-white p-2 w-[260px] sm:w-80 texl-xl 
                rounded-xl text-black"
                 />
        </form>
    )

}
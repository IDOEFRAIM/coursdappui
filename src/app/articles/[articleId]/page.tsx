'use client'
import React from 'react'
import Link from 'next/link'
import { use } from 'react'

const page = ({params,searchParams}:{
    params:Promise<{articleId:string}>,
    searchParams:Promise<{lang?: "en" | "es" | "moore"}>
}) => {
    

    const {articleId} =  use(params)
    const {lang="en"} =  use(searchParams)

    return (
        <div className='mx-8'>
            <h1> {articleId}</h1>
            <p>reading in {lang}</p>
            <div className='grid grid-cols-3 text-gray-400 my-4'>
                <Link href={`/articles/${articleId}?lang=en`}>English</Link>
                <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
                <Link href={`/articles/${articleId}?lang=moore`}>Moore</Link>
            </div>
        </div>
    )
}

export default page

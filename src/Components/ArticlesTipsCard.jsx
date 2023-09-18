import React from 'react'
import { BiChevronRight } from 'react-icons/bi'

export default function ArticlesTipsCard({ data }) {
    return (
        <div>
            <img alt={data.time} src={data.img}></img>
            <div className='p-4'>
                <h4 className='uppercase text-sm font-semibold'>{data.time}</h4>
                <h2 className='font-semibold text-xl'>{data.name}</h2>
                <h6 className='mt-3 line-clamp-2'>{data.des}</h6>
                <div className='flex items-center gap-2 mt-4 opacity-70 hover:opacity-100'>
                    <span>Read More</span>
                    <BiChevronRight />
                </div>
            </div>
        </div>
    )
}

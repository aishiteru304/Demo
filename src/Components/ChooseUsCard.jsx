import React from 'react'

export default function ChooseUsCard({ data }) {
    return (
        <div className='flex flex-col items-center'>
            <img alt={data.title} src={data.img} className='w-[150px] h-[150px] object-cover'></img>
            <h3 className='text-center font-semibold text-xl mt-5'>{data.title}</h3>
            <h6 className='text-center mt-3'>{data.des}</h6>
        </div>
    )
}

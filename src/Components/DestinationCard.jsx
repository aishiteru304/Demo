import React from 'react'

export default function DestinationCard({ destination }) {
    return (
        <div className='relative h-[300px]'>
            <img alt={destination.name} src={destination.img} className='w-full h-full object-cover rounded-lg'></img>
            <h3 className='text-white absolute text-2xl font-semibold left-5 bottom-3 z-10'>{destination.name}</h3>
            <div className='bg-black rounded-lg opacity-50 absolute inset-0'></div>
        </div>
    )
}

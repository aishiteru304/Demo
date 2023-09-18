import React from 'react'
import Star from '../Components/Star'
import { AiOutlineClockCircle } from 'react-icons/ai'

export default function BestTripCard({ trip }) {
    return (
        <div className='relative'>
            <img alt={trip.name} src={trip.img} className='w-full h-[260px] object-cover rounded-lg'></img>
            <div className='p-5'>
                <h4 className='text-2xl font-semibold'>{trip.name}</h4>
                <h6>{trip.city}</h6>
                <div className='mt-2 flex justify-between'>
                    <div className='text-subMain flex gap-1 items-center'>
                        <Star value={trip.star} />
                        <span className='text-black font-semibold'>{trip.reviews} {"reviews"}</span>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <AiOutlineClockCircle />
                        <span className='text-black font-semibold'>{trip.days} {"days"}</span>
                    </div>
                </div>
            </div>
            <div className='bg-main absolute text-white top-[230px] px-2 py-1 rounded font-semibold'>
                {trip.sale && <span className='mr-1 opacity-80 line-through'>${trip.oldPrice}</span>}
                ${trip.price}
            </div>
            {
                trip.sale &&
                <div className='text-white w-10 h-10 rounded-full flex items-center justify-center bg-subMain -top-2 -right-2 font-semibold absolute'>
                    Sale
                </div>
            }
        </div>
    )
}

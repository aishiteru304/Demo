import React from 'react'
import { AiOutlineClockCircle, AiOutlinePhone, AiFillFacebook, AiFillTwitterSquare, AiFillYoutube, AiFillInstagram } from 'react-icons/ai'
import { GiPositionMarker } from 'react-icons/gi'
import { BsPinterest } from 'react-icons/bs'

export default function Footer() {
    return (
        <div className=' bg-black text-white mt-20'>
            <div className='max-w-[1245px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto p-10 gap-20'>
                <div>
                    <h2 className='mb-5 font-extrabold text-2xl'>Our Awards</h2>
                    <h4 className='opacity-80 tracking-wide leading-8'>London is a megalopolis of people, ideas and frenetic energy. The capital and largest city of the United Kingdom.</h4>
                    <img alt='footer1' src='./footer1.png' className='w-full object-cover mt-5'></img>
                </div>
                <div>
                    <h2 className='mb-5 font-extrabold text-2xl'>Contact Info</h2>
                    <div className='flex items-center gap-4'>
                        <AiOutlinePhone />
                        <span>1-567-124-44227</span>
                    </div>
                    <div className='flex items-center gap-4 my-3'>
                        <GiPositionMarker />
                        <span>184 Main Street East Perl Habour 8007</span>
                    </div>
                    <div className='flex items-center gap-4'>
                        <AiOutlineClockCircle />
                        <span>Mon - Sat 8.00 - 18.00 Sunday CLOSED</span>
                    </div>
                    <div className='flex gap-3 mt-10 text-5xl'>
                        <AiFillFacebook />
                        <AiFillTwitterSquare />
                        <AiFillYoutube />
                        <BsPinterest />
                        <AiFillInstagram />
                    </div>
                </div>
                <div>
                    <h2 className='mb-5 font-extrabold text-2xl'>Recent Trips</h2>
                    <div className='grid grid-cols-3 gap-3'>
                        <img alt="" className=" rounded-md h-[90px]" src='./tokyo.jpg'></img>
                        <img alt="" className=" rounded-md h-[90px]" src='./paris.jpg'></img>
                        <img alt="" className=" rounded-md h-[90px]" src='./london.jpg'></img>
                        <img alt="" className=" rounded-md h-[90px]" src='./paris.jpg'></img>
                        <img alt="" className=" rounded-md h-[90px]" src='./london.jpg'></img>
                        <img alt="" className=" rounded-md h-[90px]" src='./tokyo.jpg'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

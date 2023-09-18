import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BiChevronDown, BiChevronRight } from 'react-icons/bi'
import { AiOutlineMenu, AiOutlineShoppingCart, AiFillFacebook, AiFillTwitterSquare, AiFillYoutube, AiFillInstagram } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'
import { BsPinterest } from 'react-icons/bs'

export default function Header() {

    const [isScrollingUp, setIsScrollingUp] = useState(false);
    const [isShowHeader, setIsShowHeader] = useState(true)
    const [isShowMobileMenu, setIsShowMobileMenu] = useState(false)

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    // const handleScroll = () => {
    //     if (window.scrollY > 0) {
    //         setScrolling(true);
    //     } else {
    //         setScrolling(false);
    //     }
    // };

    useEffect(() => {
        let prevScrollY = window.scrollY;

        const handleScroll = () => {
            if (window.scrollY < 1) setIsShowHeader(true)
            else {
                setIsShowHeader(false)
                const currentScrollY = window.scrollY;
                setIsScrollingUp(currentScrollY < prevScrollY);
                prevScrollY = currentScrollY;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`${isShowHeader ? "" : isScrollingUp ? 'bg-white' : 'hidden'} h-[74px] fixed top-0 right-0 left-0 px-[40px] z-10`}>
                <div className='h-full max-w-[1245px] mx-auto flex justify-between'>
                    {/* Logo section */}
                    <div className='h-full w-[92px] flex items-center'>
                        <Link to='/'><img alt='logo' src={`${isShowHeader ? "./logo.png" : "./logo2.png"}`} className=''></img></Link>
                    </div>

                    <div className='flex h-full gap-8'>
                        {/* Navbar section */}
                        <div className='lg:flex items-center gap-4 hidden font-semibold'>
                            {/* Home */}
                            <div className={`${isShowHeader ? "text-white" : "text-black"} flex gap-1 h-full items-center group relative`}>
                                <Link to='/'>Home</Link>
                                <div className='cursor-pointer'><BiChevronDown /></div>
                                <div className='z-20 bg-white opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none flex absolute top-[74px] rounded-lg p-4 w-max flex-col gap-2 transition-opacity duration-700 ease-in-out'>
                                    <Link to='/' className='block text-black hover:text-main'>Home 1-Background Image</Link>
                                    <Link to='/' className='block text-black hover:text-main'>Home 2-Background Video</Link>
                                    <Link to='/' className='block text-black hover:text-main'>Home 3-Background Image</Link>
                                    <Link to='/' className='block text-black hover:text-main'>Home 4-Background Video</Link>
                                </div>
                            </div>


                            {/* Tours */}
                            <div className={`${isShowHeader ? "text-white" : "text-black"} flex gap-1 h-full items-center group/big relative`}>
                                <Link to='/'>Tours</Link>
                                <div className='cursor-pointer'><BiChevronDown /></div>
                                <div className='bg-white hidden group-hover/big:flex absolute top-[74px] rounded-lg py-4 w-max flex-col gap-2'>
                                    <div className='text-black hover:text-main flex justify-between gap-4 h-[20px] relative px-4 group/small'>
                                        <Link to='/'>Tour Classic Fullwidth</Link>
                                        <div className='h-full flex items-center'><BiChevronRight /></div>
                                        <div className='p-4 bg-white hidden group-hover/small:flex absolute left-[100%] rounded-lg w-max flex-col gap-2'>
                                            <Link to='/' className='block text-black hover:text-main'>2 columns</Link>
                                            <Link to='/' className='block text-black hover:text-main'>3 columns</Link>
                                            <Link to='/' className='block text-black hover:text-main'>4 columns</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Booking */}
                            <div className={`${isShowHeader ? "text-white" : "text-black"} flex gap-1 h-full items-center group relative`}>
                                <Link to='/'>Booking</Link>
                                <div className='cursor-pointer'><BiChevronDown /></div>
                                <div className='bg-white hidden group-hover:flex absolute top-[74px] rounded-lg p-4 w-max flex-col gap-2'>
                                    <Link to='/' className='block text-black hover:text-main'>Home 1-Background Image</Link>
                                    <Link to='/' className='block text-black hover:text-main'>Home 2-Background Video</Link>
                                    <Link to='/' className='block text-black hover:text-main'>Home 3-Background Image</Link>
                                    <Link to='/' className='block text-black hover:text-main'>Home 4-Background Video</Link>
                                </div>
                            </div>

                            {/* Destinations */}
                            <div className={`${isShowHeader ? "text-white" : "text-black"} flex gap-1 h-full items-center group relative`}>
                                <Link to='/'>Destinations</Link>
                                <div className='cursor-pointer'><BiChevronDown /></div>
                                <div className='bg-white hidden group-hover:flex absolute top-[74px] rounded-lg p-4 w-max flex-col gap-2'>
                                    <Link to='/' className='block text-black hover:text-main'>Home 1-Background Image</Link>
                                    <Link to='/' className='block text-black hover:text-main'>Home 2-Background Video</Link>
                                    <Link to='/' className='block text-black hover:text-main'>Home 3-Background Image</Link>
                                    <Link to='/' className='block text-black hover:text-main'>Home 4-Background Video</Link>
                                </div>
                            </div>

                            {/* Pages */}
                            <div className={`${isShowHeader ? "text-white" : "text-black"} flex gap-1 h-full items-center group relative`}>
                                <Link to='/'>Pages</Link>
                                <div className='cursor-pointer'><BiChevronDown /></div>
                                <div className='bg-white hidden group-hover:flex absolute top-[74px] rounded-lg p-4 w-max flex-col gap-2'>
                                    <Link to='/' className='block text-black hover:text-main'>Home 1-Background Image</Link>
                                    <Link to='/' className='block text-black hover:text-main'>Home 2-Background Video</Link>
                                    <Link to='/' className='block text-black hover:text-main'>Home 3-Background Image</Link>
                                    <Link to='/' className='block text-black hover:text-main'>Home 4-Background Video</Link>
                                </div>
                            </div>

                            {/* Blog */}
                            <div className={`${isShowHeader ? "text-white" : "text-black"} flex gap-1 h-full items-center group relative`}>
                                <Link to='/'>Blog</Link>
                                <div className='cursor-pointer'><BiChevronDown /></div>
                                <div className='bg-white hidden group-hover:flex absolute top-[74px] rounded-lg p-4 w-max flex-col gap-2'>
                                    <Link to='/' className='block text-black hover:text-main'>Home 1-Background Image</Link>
                                    <Link to='/' className='block text-black hover:text-main'>Home 2-Background Video</Link>
                                    <Link to='/' className='block text-black hover:text-main'>Home 3-Background Image</Link>
                                    <Link to='/' className='block text-black hover:text-main'>Home 4-Background Video</Link>
                                </div>
                            </div>

                            {/* Tours */}
                            <div className={`${isShowHeader ? "text-white" : "text-black"} flex gap-1 h-full items-center group relative`}>
                                <Link to='/'>Tours</Link>
                                <div className='cursor-pointer'><BiChevronDown /></div>
                                <div className='bg-white hidden group-hover:flex absolute top-[74px] rounded-lg p-4 w-max flex-col gap-2'>
                                    <Link to='/' className='block text-black hover:text-main'>Home 1-Background Image</Link>
                                    <Link to='/' className='block text-black hover:text-main'>Home 2-Background Video</Link>
                                    <Link to='/' className='block text-black hover:text-main'>Home 3-Background Image</Link>
                                    <Link to='/' className='block text-black hover:text-main'>Home 4-Background Video</Link>
                                </div>
                            </div>

                            {/* Shortcodes */}
                            <div className={`${isShowHeader ? "text-white" : "text-black"} flex gap-1 h-full items-center group relative`}>
                                <Link to='/'>Shortcodes</Link>
                                <div className='cursor-pointer'><BiChevronDown /></div>
                                <div className='bg-white hidden group-hover:flex absolute top-[74px] rounded-lg p-4 w-max flex-col gap-2'>
                                    <Link to='/' className='block text-black hover:text-main'>Home 1-Background Image</Link>
                                    <Link to='/' className='block text-black hover:text-main'>Home 2-Background Video</Link>
                                    <Link to='/' className='block text-black hover:text-main'>Home 3-Background Image</Link>
                                    <Link to='/' className='block text-black hover:text-main'>Home 4-Background Video</Link>
                                </div>
                            </div>

                            {/* Shop */}
                            <div className={`${isShowHeader ? "text-white" : "text-black"} flex gap-1 h-full items-center group relative`}>
                                <Link to='/'>Shop</Link>
                                <div className='cursor-pointer'><BiChevronDown /></div>
                                <div className='bg-white hidden group-hover:flex absolute top-[74px] rounded-lg p-4 w-max flex-col gap-2'>
                                    <Link to='/' className='block text-black hover:text-main'>Home 1-Background Image</Link>
                                    <Link to='/' className='block text-black hover:text-main'>Home 2-Background Video</Link>
                                    <Link to='/' className='block text-black hover:text-main'>Home 3-Background Image</Link>
                                    <Link to='/' className='block text-black hover:text-main'>Home 4-Background Video</Link>
                                </div>
                            </div>

                        </div>

                        {/* Menu item */}
                        <div className={`${isShowHeader ? "text-white" : "text-black"} cursor-pointer flex items-center lg:hidden text-xl`}>
                            <AiOutlineMenu onClick={() => setIsShowMobileMenu(true)} />
                        </div>

                        {/* Cart item */}
                        <div className={`${isShowHeader ? "text-white" : "text-black"} cursor-pointer flex items-center text-xl relative`}>
                            <AiOutlineShoppingCart />
                            <div className='w-4 h-4 rounded-full bg-main text-white absolute text-sm flex justify-center items-center top-5 -right-1'>
                                0
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Menu Mobile */}
            <div onClick={() => setIsShowMobileMenu(false)} className={`fixed inset-0 bg-black bg-opacity-80 z-10 ${isShowMobileMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div onClick={e => e.stopPropagation()} className={`${isShowMobileMenu ? 'right-0' : '-right-[100%]'} absolute z-50 min-h-screen max-h-screen top-0 w-[360px] bg-[#f2e6e1] p-10 transition-right duration-700 overflow-y-auto`}>
                    <div onClick={() => setIsShowMobileMenu(false)} className='w-10 h-10 rounded-full bg-main absolute right-10 cursor-pointer top-11 hover:top-10 flex justify-center items-center text-white'>
                        <GrClose />
                    </div>
                    <div className='mt-40 flex flex-col gap-4 font-semibold'>
                        <Link to='/' className='hover:text-main text-3xl'>Home</Link>
                        <Link to='/' className='hover:text-main text-3xl'>Tours</Link>
                        <Link to='/' className='hover:text-main text-3xl'>Booking</Link>
                        <Link to='/' className='hover:text-main text-3xl'>Destinations</Link>
                        <Link to='/' className='hover:text-main text-3xl'>Pages</Link>
                        <Link to='/' className='hover:text-main text-3xl'>Blog</Link>
                        <Link to='/' className='hover:text-main text-3xl'>Shortcodes</Link>
                        <Link to='/' className='hover:text-main text-3xl'>Shop</Link>
                    </div>
                    <div className='mt-40 flex gap-4'>
                        <div className='text-4xl hover:text-main cursor-pointer'><AiFillFacebook /></div>
                        <div className='text-4xl hover:text-main cursor-pointer'><AiFillTwitterSquare /></div>
                        <div className='text-4xl hover:text-main cursor-pointer'><AiFillYoutube /></div>
                        <div className='text-4xl hover:text-main cursor-pointer'><BsPinterest /></div>
                        <div className='text-4xl hover:text-main cursor-pointer'><AiFillInstagram /></div>
                    </div>

                </div>
            </div>
        </>
    )
}

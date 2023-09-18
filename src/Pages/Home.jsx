import React, { useState, useEffect } from 'react'
import MainLayout from '../Layout/MainLayout'
import { CiSearch } from 'react-icons/ci'
import { AiOutlineSchedule, AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { BiSortAlt2 } from 'react-icons/bi'
import TitleSection from '../Components/TitleSection'
import DestinationCard from '../Components/DestinationCard'
import { PopularDestinations, BestTrips, ChooseUsData, ArticlesTips } from '../Data'
import BestTripCard from '../Components/BestTripCard'
import ChooseUsCard from '../Components/ChooseUsCard'
import ArticlesTipsCard from '../Components/ArticlesTipsCard'
import { MdKeyboardArrowUp } from 'react-icons/md'



export default function Home() {

    const [isShowAdvancedSearch, setIsShowAdvancedSearch] = useState(false)

    const [isVisible, setIsVisible] = useState(false);

    // Khi trang được cuộn, kiểm tra vị trí cuộn và hiển thị/ẩn nút cuộn lên
    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Xử lý sự kiện khi click vào nút cuộn lên
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <MainLayout>
            <div className='h-[800px] relative'>
                <img alt='banner' src='./banner.jpeg' className='h-full w-full object-cover'></img>
                <div className='z-0 text-white absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 w-full px-10 max-w-[1245px]'>
                    <h2 className='text-center md:text-5xl text-3xl md:font-extrabold font-semibold'>Where do you want to go?</h2>
                    <h4 className='text-center md:text-xl text-md opacity-70 mt-3'>Trips, experiences, and places. All in one service.</h4>

                    <div className='grid md:grid-cols-4 grid-cols-1 mt-5 gap-4'>
                        <div className='relative h-11'>
                            <input placeholder='Destination, city' className='h-full py-2 pl-4 rounded-md w-full outline-none placeholder:font-thin'></input>
                            <div className='absolute right-1 top-1/2 -translate-y-1/2 transform text-gray-800'><CiSearch /></div>
                        </div>
                        <div className='relative h-11'>
                            <select className="block w-full py-2 px-3 outline-none h-full rounded-lg text-gray-600">
                                <option value="" disabled selected hidden>Any Month</option>
                                <option value="1">January</option>
                                <option value="2">February</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                                <option value="6">June</option>
                                <option value="7">July</option>
                                <option value="8">August</option>
                                <option value="9">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                            <div className='absolute right-1 top-1/2 -translate-y-1/2 transform text-gray-800 bg-white'><AiOutlineSchedule /></div>
                        </div>
                        <div className='relative h-11'>
                            <select className="block w-full py-2 px-3 outline-none h-full rounded-lg text-gray-600">
                                <option value="0">Sort By Date</option>
                                <option value="1">Sort By Name</option>
                                <option value="2">Price High To Low</option>
                                <option value="3">Price Low To High</option>
                            </select>
                            <div className='absolute right-1 top-1/2 -translate-y-1/2 transform text-gray-800 bg-white'><BiSortAlt2 /></div>
                        </div>
                        <div className='h-11'>
                            <button className='w-full h-full text-center py-3 bg-main rounded-lg hover:bg-subMain'>Search</button>
                        </div>
                    </div>

                    <div onClick={() => setIsShowAdvancedSearch(!isShowAdvancedSearch)} className='flex gap-2 items-center mt-4 cursor-pointer'>
                        {!isShowAdvancedSearch && <AiOutlineDown />}
                        {isShowAdvancedSearch && <AiOutlineUp />}
                        <span>Advanced Search</span>
                    </div>
                    {
                        isShowAdvancedSearch &&
                        <div className='grid md:grid-cols-4 grid-cols-1 mt-5 gap-4'>
                            <div className='relative h-11'>
                                <input placeholder='Destination, city' className='h-full py-2 pl-4 rounded-md w-full outline-none placeholder:font-thin'></input>
                                <div className='absolute right-1 top-1/2 -translate-y-1/2 transform text-gray-800'><CiSearch /></div>
                            </div>
                            <div className='relative h-11'>
                                <select className="block w-full py-2 px-3 outline-none h-full rounded-lg text-gray-600">
                                    <option value="" disabled selected hidden>Any Month</option>
                                    <option value="1">January</option>
                                    <option value="2">February</option>
                                    <option value="3">March</option>
                                    <option value="4">April</option>
                                    <option value="5">May</option>
                                    <option value="6">June</option>
                                    <option value="7">July</option>
                                    <option value="8">August</option>
                                    <option value="9">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>
                                <div className='absolute right-1 top-1/2 -translate-y-1/2 transform text-gray-800 bg-white'><AiOutlineSchedule /></div>
                            </div>
                            <div className='relative h-11'>
                                <select className="block w-full py-2 px-3 outline-none h-full rounded-lg text-gray-600">
                                    <option value="0">Sort By Date</option>
                                    <option value="1">Sort By Name</option>
                                    <option value="2">Price High To Low</option>
                                    <option value="3">Price Low To High</option>
                                </select>
                                <div className='absolute right-1 top-1/2 -translate-y-1/2 transform text-gray-800 bg-white'><BiSortAlt2 /></div>
                            </div>

                        </div>
                    }
                </div>
            </div>

            {/* Popular Destinations */}
            <div>
                <div className='py-20'>
                    <TitleSection mainTitle={"Popular Destinations"} subTitle={"World's best tourist destinations"} />
                </div>

                <div className='max-w-[1245px] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mx-auto p-10 gap-5 cursor-pointer'>
                    {
                        PopularDestinations.map((destination, index) => (
                            <div key={index} className='tranform hover:-translate-y-1 transtions-transform duration-300'>
                                <DestinationCard destination={destination} />
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* Best Value Trips */}
            <div>
                <div className='py-20'>
                    <TitleSection mainTitle={"Best Value Trips"} subTitle={"Best offers trips from us"} />
                </div>
                <div className='max-w-[1245px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto p-10 gap-5 cursor-pointer'>
                    {
                        BestTrips.map((trip, index) => (

                            <div key={index} className='tranform hover:-translate-y-1 transtions-transform duration-300 rounded-lg border'>
                                <BestTripCard trip={trip} />
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* Why Choose Us */}
            <div>
                <div className='py-20'>
                    <TitleSection mainTitle={"Why Choose Us"} subTitle={"Here are reasons you should plan trip with us"} />
                </div>
                <div className='max-w-[1245px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto p-10 gap-5 cursor-pointer'>
                    {
                        ChooseUsData.map((data, index) => (
                            <div key={index}>
                                <ChooseUsCard data={data} />
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* Video section */}
            <div className='h-[200px] mt-10'>
                <video autoPlay muted loop className='h-full w-full object-cover'>
                    <source src='./travel.mp4' type='video/mp4' />
                </video>
            </div>

            {/* Articles & Tips */}
            <div>
                <div className='py-20'>
                    <TitleSection mainTitle={"Articles & Tips"} subTitle={"Explore some of the best tips from around the world"} />
                </div>
                <div className='max-w-[1245px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto p-10 gap-5 cursor-pointer'>
                    {
                        ArticlesTips.map((data, index) => (
                            <div key={index} className='tranform hover:-translate-y-1 transtions-transform duration-300 rounded-lg border overflow-hidden'>
                                <ArticlesTipsCard data={data} />
                            </div>
                        ))
                    }
                </div>
            </div>
            {
                isVisible &&
                <div onClick={scrollToTop} className='fixed w-[50px] h-[50px] rounded-full bg-subMain right-[50px] bottom-[100px] cursor-pointer text-white flex justify-center items-center text-5xl'>
                    <MdKeyboardArrowUp />
                </div>
            }
        </MainLayout>
    )
}

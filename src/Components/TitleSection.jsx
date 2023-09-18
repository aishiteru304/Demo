import React from 'react'

export default function TitleSection({ mainTitle, subTitle }) {
    return (
        <>
            <h2 className='text-center md:font-extrabold font-semibold md:text-5xl text-2xl'>{mainTitle}</h2>
            <h4 className='text-center mt-4 font-semibold opacity-70 text-xl'>{subTitle}</h4>
        </>
    )
}

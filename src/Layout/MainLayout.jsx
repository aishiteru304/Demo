import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

export default function MainLayout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

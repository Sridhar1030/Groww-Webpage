import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Headers/Header'
import Footer from './components/Footers/Footers'

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet className="pt-[64px] min-h-[calc(100vh-340px)]" />
            <Footer />
        </>
    )
}

export default Layout
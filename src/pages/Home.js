import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Catigories from '../components/Catigories'
import Products from '../components/Products'
import Newletter from '../components/Newletter'
import Footer from '../components/Footer'
function Home() {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Catigories />
            <Products />
            <Newletter />
            <Footer />
        </div>
    )
}

export default Home

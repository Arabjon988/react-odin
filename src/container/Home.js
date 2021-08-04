import React from 'react'
import '../components/Navbar.css'
import img from '../Image/logo.png'

function Home() {
    return (
        <div>
            <div className="home">
                <img src={img} alt=" img" className='img' />
                <ul className='home_collect'>
                    <li>kdfljsdljfsldjf</li>
                    <li>kfjlsdkfjlsdfg</li>
                    <li>sdkgjslfkgfhdgh</li>
                </ul>
            </div>
        </div>
    )
}

export default Home

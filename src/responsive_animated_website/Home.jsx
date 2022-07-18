import React from 'react'
import img1 from './img/img1.jpg'
import Commen from './Common'

const Home = (props) => {
    return (
        <>
            <Commen 
                name="Grow your business with"
                visit="/service"
                btnName="Get Started"
                imgsrc={img1}
            />
        </>
    )
}

export default Home;
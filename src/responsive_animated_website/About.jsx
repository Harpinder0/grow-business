import React from 'react'
import Commen from './Common';
import img2 from './img/img2.jpg'

const About = () => {
    return (
        <>
            <Commen 
                name="Welcome to About page"
                visit="/contact"
                btnName="Contact Noew"
                imgsrc={img2}
            />
        </>
    )
}

export default About;
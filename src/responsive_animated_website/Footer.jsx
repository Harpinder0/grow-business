import React from 'react'



const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <>
           <div className="w-100 bg-light text-center mt-5 footer">
               <p>@ {year} HappyBhullar. All Right Reserved | Terms And Conditions</p>
               <p>hello word</p>
           </div>
        </>
    )
}

export default Footer;
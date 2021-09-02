import React from 'react'
import Common from './Common';
import AboutImage from '../src/Comp/Images/About.jpg'
const About=()=>{
    return(
        <>
        <Common name="Welcome to About Page"
                imgsrc={AboutImage}
                btnclass="Contact Now"
                visit='/contact'></Common>
        </>

    )
}
export default About;
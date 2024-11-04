import { Info } from "../User"
import React, { useState, useEffect, useRef } from 'react'
//@ts-ignore
import DOTS from "vanta/dist/vanta.dots.min.js";
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const About = () => {
    const [dots, setDots] = useState<any>(null)
    useEffect(() => {
        if (!dots) {
            setDots(DOTS({
                el:"#bg",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 400.00,
                minWidth: 400.00,
                scale: 1.00,
                scaleMobile: 1.00,
                backgroundColor: 0xd0d66,
                size: 4.20,
                showLines: false,
                spacing:20
            }))
}
return () => {
    if (dots) dots.destroy()
}
    }, [])
return (
    <div className="flex" id="bg">
        <div>
            <div>Hi, I am</div>
            <div>{Info.name}</div>
            <div>I'm a <span></span></div>
            <div>{Info.bio}</div>
        </div>
    </div>
)
}
export default About
import React from 'react'
import SEO from "../components/seo"
import "../components/hero.scss"

const Hero = () =>(
    <div style={{ textAlign: 'center', maxHeight: '100vh' }}>

    <SEO title="Home" />
    <h1 className="heroStyle">Digital Art Direction <span>&</span> Product Design</h1>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg  className="hero-arrow bounce" style={{ width: '3.25rem', display: 'block',transform: 'translate(-50%, -50%) rotate(90deg)' }} id="arrow-long" image-rendering="auto" baseProfile="basic" version="1.1" preserveAspectRatio="xMidYMid meet" viewBox="0 0 62 35"><rect fill='#505050' x="0" y="14.7" width="55.2" height="4.55"></rect><g transform="translate(40.9 0)"><path fill="#505050" d="M.35 3L14.3 17.2 0 31.25 3.35 34.25 20.85 17.15 3.5 0 .35 3Z"></path></g>
        </svg></div>
    </div>
)

export default Hero;
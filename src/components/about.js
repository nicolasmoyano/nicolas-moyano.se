import React from "react"
import '../components/global.scss'
import profileImage from '../images/Profile-image.png'

const AboutMe = () => (
    <div style={{ display:'flex'}}>
        <div style={{ flex: '1' }}>
            <h3>Nicolas Moyano</h3>

            <p>HI! I'm a 33 year old Art Dircetor and Digital Designer based in Stockholm, Sweden.
            I'm a movie and tv-series addicted pixel pusher who loves design in all of its form. I also enjoy working with concept development.</p>

            <p>I’m currently working at Utopia Music as a Digital Designer in Stockholm.</p>

            <a style={{ color: 'rgb(236, 92, 89)', textDecoration: 'none', textTransform: 'uppercase' }}href="mailto:name@email.com" subject="Let's work together">Get in touch</a>

        </div>
        
        <div style={{flex: '1'}}>
                <img style ={{ marginLeft: '40px' }}src={ profileImage } alt="Nicolas Moyano Profile" />
        </div>
    
    </div>

)

export default AboutMe;



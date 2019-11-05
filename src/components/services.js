import React from 'react'
import "../components/services.scss"
import graphicIcon from '../images/pencil-ruler-solid.svg'
import webdesignIcon from '../images/desktop_mac.svg'
import magicIcon from '../images/magic-solid.svg'

const MyServices = () =>(
    <div className="Services" style={{ maxWidth: 1200, display: 'flex', paddingTop: '160px'}}>
        <div className="Service" style={{ flex: '1'}}>
                <a href="/#web">
                <i> <img src={ webdesignIcon } style={{ height: '120px', padding: '24px' }}></img></i>
                <h4>Web design</h4>
                <p>Every idea, decision and detail  i make must directly contribute to creating a web experience that people want, enjoy and gain benefit from using.</p>
                </a>
        </div>

        <div className="Service" style={{ flex: '1'}}>
                <a href="/#graphic">
                <i style={{height:'24px', width: '24px' }}> <img src={ graphicIcon } style={{ width: '120px', padding: '24px' }}></img></i>
                <h4>Graphic Design</h4>
                <p>Having a professional appearance is key for new business development.
I do business cards, brouchoures and designs ready for print.</p>
                </a>
        </div>

        <div className="Service" style={{ flex: '1'}}>
                <a href="/#magic">
                <i> <img src={ magicIcon } style={{ height: '120px', padding: '24px' }}></img></i>
                <h4>Magic</h4>
                <p style={{ textAlign: "justify" }}>  I thrive on complex briefs and revolutionary ideas. Don't be afraid to contact me for a consultation on your ground-breaking ideas.</p>
                </a>
        </div>

    </div>
)

export default MyServices;
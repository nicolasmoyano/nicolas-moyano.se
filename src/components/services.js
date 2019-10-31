import React from 'react'
import "../components/services.scss"

const MyServices = () =>(
    <div className="Services" style={{ maxWidth: 1200, display: 'flex', paddingTop: '160px'}}>
        <div className="Service" style={{ flex: '1'}}>
                <a href="/#web">
                <i class="icon-desktop icon-4x light-gray"></i>
                <h4>Web design</h4>
                <p>Every idea, decision and detail  i make must directly contribute to creating a web experience that people want, enjoy and gain benefit from using.</p>
                </a>
        </div>

        <div className="Service" style={{ flex: '1'}}>
                <a href="/#graphic">
                <i class="icon-desktop icon-4x light-gray"></i>
                <h4>Graphic Design</h4>
                <p>Having a professional appearance is key for new business development.
I do business cards, brouchoures and designs ready for print.</p>
                </a>
        </div>

        <div className="Service" style={{ flex: '1'}}>
                <a href="/#magic">
                <i class="icon-desktop icon-4x light-gray"></i>
                <h4>Magic</h4>
                <p> I thrive on complex briefs and revolutionary ideas. Contact me for a consultation on your ground-breaking ideas.</p>
                </a>
        </div>

    </div>
)

export default MyServices;
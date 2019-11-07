import React from 'react'
import GodelBG from '../images/godel_BG.png'
import IcaBG from '../images/IcaBG.png'
import UtopiaBG from '../images/UtopiaBG.png'
import { Link } from "gatsby"
import '../components/global.scss'
import readArrow from '../images/ReadArrow.svg'
import '../components/project.scss'

const SelectedProject = () =>(
    <div className="Projects" style={{ maxWidth: 1200, marginTop: '160px'}}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }} > <h5>Selected work</h5></div>
        <div><img src={GodelBG} alt="Godel"></img>
            <div className="project-info" style={{ position: 'relative', top: '-20vh', marginLeft: '50%', width:'590px', backgroundColor: '#FFFFFF', padding: '40px', boxShadow: '0px 8px 20px 0px rgba(0,0,0,0.1)'}}>
                <h2>Godel</h2>
                <p>There is one thing that all electricity companies must do: sell electricity. So we do as well. But our profits goes to organizations that tries to save the world.</p>
                <span>
                <Link to="/godel/" className="readMore" style={{ color: '#ec5c59', textDecoration: `none`, fontWeight: 500, textTransform: 'uppercase'}}>
                Read more
                <img className="readmoreArrow"  style={{ width: '16px', marginLeft: '8px'}}src={readArrow} alt="read more"></img>
                </Link>
                </span>
            </div>
        </div>

        <div><img src={IcaBG} alt="Ica handla app"></img>
            <div className="project-info" style={{ position: 'relative', top: '-20vh', marginLeft: '50%', width:'590px', backgroundColor: '#FFFFFF', padding: '40px', boxShadow: '0px 8px 20px 0px rgba(0,0,0,0.1)'}}>
                <h2>Ica handla</h2>
                <p>The supermarket industry is a saturated market, where customer loyalty is hard to acquire, and even harder to maintain. Building one of Sweden’s best-loved apps </p>
               
                <span>
                <Link to="/icahandla/" className="readMore" style={{ color: '#ec5c59', textDecoration: `none`, fontWeight: 500, textTransform: 'uppercase'}}>
                Read more
                <img className="readmoreArrow" style={{ width: '16px', marginLeft: '8px' }}src={readArrow} alt="read more"></img>
                </Link>
                </span>
            </div>
        </div>

        <div><img src={UtopiaBG} alt="Utopia music"></img>
            <div className="project-info" style={{ position: 'relative', top: '-20vh', marginLeft: '50%', width:'590px', backgroundColor: '#FFFFFF', padding: '40px', boxShadow: '0px 8px 20px 0px rgba(0,0,0,0.1)'}}>
                <h2>Utopia Music</h2>
                <p>Music is incredible. But as an industry, it has been slow, complicated, and disparate. While the tech world has moved into the future, the music industry continues to be shaped by inefficient systems of the past.</p>
               
                <span>
                <Link to="/utopiamusic" className="readMore" style={{ color: '#ec5c59', textDecoration: `none`, fontWeight: 500, textTransform: 'uppercase'}}>
                Read more
                <img className="readmoreArrow" style={{ width: '16px', marginLeft: '8px' }}src={readArrow} alt="read more"></img>
                </Link>
                </span>
            </div>
        </div>  
    
    </div>
)

export default SelectedProject;
import React from 'react'
import TargetAidBG from '../images/TargetAidBG.png'
import IcaBG from '../images/IcaBG.png'
import UtopiaBG from '../images/UtopiaBG.png'
import { Link } from "gatsby"
import '../components/global.scss'
import readArrow from '../images/ReadArrow.svg'
import '../components/project.scss'

const AllProject = () =>(
    <div className="allProjects" style={{ maxWidth: 1200, marginBottom: '40px'}}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }} > <h5>browse all</h5></div>

        <div style={{display: 'flex', textAlign: 'center'}}>

        <div style={{ flex: '1', marginRight: '16px'}} ><img src={TargetAidBG} alt="Targetaid"></img>
            <div className="project-info-small">
                <h3>Targetaid</h3>
                <p>Connect people to different charities. Providing a new way of giving where you can search and choose what you are passionate about quickly and easily.</p>
                <span>
                <Link to="/godel/" className="readMore">
                Read more
                <img className="readmoreArrow" style={{ width: '16px', marginLeft: '8px'}}src={readArrow} alt="read more"></img>
                </Link>
                </span>
            </div>
        </div>

        <div style={{ flex: '1', marginRight: '16px'}}><img src={IcaBG} alt="Ica handla app"></img>
            <div className="project-info-small">
                <h3>Ica handla</h3>
                <p>The supermarket industry is a saturated market, where customer loyalty is hard to acquire, and even harder to maintain. Building one of Sweden’s best-loved apps </p>
               
                <span>
                <Link to="/icahandla/" className="readMore">
                Read more
                <img className="readmoreArrow" style={{ width: '16px', marginLeft: '8px' }} src={readArrow} alt="read more"></img>
                </Link>
                </span>
            </div>
        </div>

        <div style={{ flex: '1', marginRight: '16px'}} ><img src={UtopiaBG} alt="Utopia music"></img>
            <div className="project-info-small">
                <h3>Utopia Music</h3>
                <p>Music is incredible. But as an industry, it has been slow, complicated, and disparate. While the tech world has moved into the future, the music industry continues to be shaped by inefficient systems of the past.</p>
               
                <span>
                <Link to="/utopiamusic" className="readMore">
                Read more
                <img className="readmoreArrow" style={{ width: '16px', marginLeft: '8px' }}src={readArrow} alt="read more"></img>
                </Link>
                </span>
            </div>
        </div> 
        </div>
    
    </div>
)

export default AllProject;
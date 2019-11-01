import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import godelCover from '../images/Godel-Cover.jpg'
import godel1 from '../images/GodEl.png'
import godelWidgets from '../images/GodEl-Widgets.png'
import godelSitemap from '../images/GodEl-Widget-Design.png'


const GodEl = () => (

  <Layout>
    <SEO title="Godel" />
    
    <img style={{ marginTop: '70px' }}src={ godelCover } alt="godel cover"></img>
    
    <div style={{ maxWidth: 1200, paddingTop: '40px'}}>
    <h1>Feel the power of klimatpositivitet.</h1>
    </div>    
    <div style={{maxWidth: '720px'}}><p>Godels vision is to create a better world by driving the change to a cool electricity market for customers, the environment and the outside world. We have already done a lot to change the electricity industry, now we stick out and can be the first electricity company in the world to offer climate-positive electricity. We believe that it inspires both colleagues in the industry and other companies to start measuring, reducing and binding their greenhouse gas emissions - we want to create a positive change by inspiring sustainable business.</p>
    </div>

    <div style={{ maxWidth: '720px' }}>
        <h5>The project</h5>
        <p>Godel noticed a big change within their organization and in their target audience. This became the start of an entire rebrand of godels visual identity. Having a younger target audience in mind and simplifying their signup process.</p>
    </div>

    <div style={{ maxWidth: '720px' }}>
        <h5>Our solution</h5>
        <p>We choose to present a vision for the entire GodEl.se. That includes technical solutions to go hand in hand with the brand change begun at GodEl. We see our vision as an end to the project of rebuilding godel.se but not as a finished product. After launch the collaboration continues with new improvements and iterations based on the knowledge we can draw from users.</p>
    </div>

    <div style={{ paddingTop: '40px'}}>
        <h5 style={{ textAlign: 'center' }}>Userflow & sitemap</h5>
    </div>

    <img src={godelSitemap} alt="GodEl Widgets" />

    <div style={{ paddingTop: '40px'}}>
        <h5 style={{ textAlign: 'center' }}>Wireframes of widgets</h5>
    </div>

    <img src={godelWidgets} alt="GodEl Widgets" />

    <div>
    <h5 style={{ textAlign: 'center', paddingTop: '40px' }}>Final delivery</h5>
    <img src={godel1} alt="godEl final"></img>
    </div>
 
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default GodEl;

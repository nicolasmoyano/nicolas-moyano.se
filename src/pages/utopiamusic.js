import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import icahandlaCover from '../images/IcaHandla-Cover.png'
// import utopiaBrandguide from '../images/Utopia-brandguide.png'
import UtopiaIMG from "../components/utopiaImage"


const GodEl = () => (

  <Layout>
    <SEO title="Ica Handla" />
    
    <img style={{ marginTop: '70px' }}src={ icahandlaCover } alt="ICA handla cover"></img>
    
    <div style={{ maxWidth: 1200, paddingTop: '40px'}}>
    <h1>Ica handla - Swedens grocery app</h1>
    </div>    
    <div style={{maxWidth: '720px'}}><p>The supermarket industry is a saturated market, where customer loyalty is hard to acquire, and even harder to maintain. This makes it crucial for ICA to engage with and offer value to their customers in every channel. We were approached with an interesting brief - to create an app that would simplify the everyday tasks of shopping and cooking.</p>
    <a style={{ color: '#ec5c59', textDecoration: `none`, fontWeight: 500, textTransform: 'uppercase'}} href="https://apps.apple.com/se/app/ica/id458324110" target="blank_">Download app</a>
    </div>

    <div style={{ maxWidth: '720px' }}>
        <h5 style={{ paddingTop: '24px'}}>The project</h5>
        <p>Simplify the everyday shopping experience. ICA is acting in a occupied category, where it’s crucial to increase loyalty in every channel there is. For the mobile application they wanted to create a great customer experience to simplify the everyday shopping experience.</p>
    </div>

    <div style={{ maxWidth: '720px' }}>
        <h5>The solution</h5>
        <p>One of the great innovations of the app, is the new system of digital coupons. This makes it possible to load offers directly to the ICA Card in realtime via the QR-reader in the app. Unlike other digital coupons on the market, this means that customers do not have to show their phone at checkout, it’s enough to draw the ICA card. Another feature that we are quite proud of is that the shopping list in the app is in sync with how the groceries show up in the store</p> 
    </div>

    <div style={{ paddingTop: '40px'}}>
        <h5 style={{ textAlign: 'center' }}>Utopia Digital Brandbook</h5>
    </div>

    <UtopiaIMG></UtopiaIMG>
    {/* <img src={utopiaBrandguide} alt="Utopia music brand guide" /> */}

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default GodEl;

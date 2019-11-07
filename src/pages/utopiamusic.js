import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import UTCover from '../images/UT-Cover.jpg'
// import utopiaBrandguide from '../images/Utopia-brandguide.png'
import UtopiaIMG from "../components/utopiaImage"


const GodEl = () => (

  <Layout>
    <SEO title="Utopia Music" />
    
    <img style={{ marginTop: '70px' }}src={ UTCover } alt="ICA handla cover"></img>
    
    <div style={{ maxWidth: 1200, paddingTop: '40px'}}>
    <h1>Utopia Music</h1>
    </div>    
    <div style={{maxWidth: '720px'}}><p>Utopia Music is a Swiss-based technology company that leverages big data in order to enhance the global music industry through increased revenues, reduced costs, accelerated payment cycles and improved insights, while creating an ecosystem where music & tech foster creativity & joy.</p>
    <a style={{ color: '#ec5c59', textDecoration: `none`, fontWeight: 500, textTransform: 'uppercase'}} href="http://www.utopiamusic.com" target="blank_">Visit site</a>
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

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default GodEl;

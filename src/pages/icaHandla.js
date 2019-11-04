import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import icahandlaCover from '../images/IcaHandla-Cover.png'
import icahandlaAir from '../images/IcaHandla-Aircooking.png'
import icahandlaCoupons from '../images/Icahandla-Coupon.png'


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
        <h5 style={{ textAlign: 'center' }}>Digital coupons</h5>
    </div>

    <img src={icahandlaCoupons} alt="Ica Handla coupons" />

    <div style={{ paddingTop: '40px'}}>
    
        <h5 style={{ textAlign: 'center' }}>Air cooking</h5>
        <p>In February 2014 we released an iPad version that has all of the appreciated features from the ICA Handla iPhone. But this time around we put extra effort into the cooking experience. On the iPad you can see your ingredient list and the instructions steps in the same view. The ingredient list also automatically scrolls as you advance. When you are cooking by a recipe you can switch to handsfree mode and use air gestures to navigate the app. Very convenient when you have your hands covered in different ingredients.</p>
    <img src={icahandlaAir} alt="ICA handla air cooking" />
    </div>

    <div style={{ paddingTop: '40px'}}>
    <iframe width="100%" height="640" title="aircooking"src="https://www.youtube.com/embed/II2w47HOlOU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
 
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default GodEl;

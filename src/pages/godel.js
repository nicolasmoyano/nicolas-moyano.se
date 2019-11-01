import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import godelCover from '../images/Godel-Cover.jpg'

const GodEl = () => (

  <Layout>
    <SEO title="Godel" />
    
    <img style={{ marginTop: '70px' }}src={ godelCover } alt="godel cover"></img>
    
    <div style={{ maxWidth: 1200}}>
    <h1>Feel the power of klimatpositivitet.</h1>
    </div>    
    <div style={{maxWidth: '720px'}}><p>Godels vision is to create a better world by driving the change to a cool electricity market for customers, the environment and the outside world. We have already done a lot to change the electricity industry, now we stick out and can be the first electricity company in the world to offer climate-positive electricity. We believe that it inspires both colleagues in the industry and other companies to start measuring, reducing and binding their greenhouse gas emissions - we want to create a positive change by inspiring sustainable business.</p>
    </div>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default GodEl;

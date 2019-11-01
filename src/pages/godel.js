import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import godelCover from '../images/Godel-Cover.jpg'

const GodEl = () => (

  <Layout>
    <SEO title="Godel" />
    <img style={{ marginTop: '70px' }}src={ godelCover } alt="godel cover"></img>
    <div style={{display: 'flex'}}>
    <h1>Feel the power of klimatpositivitet.</h1>
    </div>
    <div>
        <div style={{}}><h5>What We Did</h5>
        <p>Strategy, Product Design, Prototyping, A/B Testing</p>
        <p>Welcome to page 2</p>
        </div>
        <div>
        <h5>My Responsibilities</h5>
        <p>
    Design strategy
    User experience
    Task flow & wireframing 
    </p>
    </div>
</div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default GodEl;

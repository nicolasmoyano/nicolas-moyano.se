import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import godelCover from '../images/Godel-Cover.jpg'

const GodEl = () => (

  <Layout>
    <SEO title="Godel" />
    <div style={{ marginTop: '160px'}}><label style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#505050', }}>Case</label>
    <h2>GodEL</h2>
    </div>
    
    <div style={{}}><p>There is one thing that all electricity companies must do: sell electricity. So we do as well. But our profits goes to organizations that tries to save the world.</p>
    </div>
    
    <img style={{ marginTop: '40px' }}src={ godelCover } alt="godel cover"></img>
    
    <div style={{flex: '1'}}>
    <h1>Feel the power of klimatpositivitet.</h1>
    </div>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default GodEl;

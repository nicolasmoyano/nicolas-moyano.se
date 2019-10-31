import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import godelCover from '../images/Godel-Cover.jpg'

const GodEl = () => (

  <Layout>
    <SEO title="Godel" />
    <img style={{ marginTop: '70px' }}src={ godelCover } alt="godel cover"></img>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default GodEl;

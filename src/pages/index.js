import React from "react"
import { Link } from "gatsby"
import '../components/global.scss'
import Layout from "../components/layout"
import Hero from "../components/heroSection"
import MyServices from "../components/services"
import SelectedProject from "../components/project"
import AboutMe from "../components/about"

const IndexPage = () => (
  <Layout>
    <Hero />
    <MyServices />
    <SelectedProject />
    <AboutMe />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

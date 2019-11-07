import React from "react"
import { Link } from "gatsby"
import '../components/global.scss'
import Layout from "../components/layout"
import Hero from "../components/heroSection"
import MyServices from "../components/services"
import SelectedProject from "../components/selectedProjects"
import AboutMe from "../components/about"
import AllProjects from "../components/projects"

const IndexPage = () => (
  <Layout>
    <Hero />
    <SelectedProject />
    <AllProjects />
    <MyServices />
    <AboutMe />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

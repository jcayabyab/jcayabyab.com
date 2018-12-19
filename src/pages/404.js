import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import {Link} from "gatsby";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <p>{"Nothing here! However, there might be a random URL that may lead to something interesting..."}</p>
    <Link to="/">Go home</Link> 
  </Layout>
)

export default NotFoundPage

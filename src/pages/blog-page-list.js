import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {grphql, StaticQuery} from 'gatsby'
import { divide } from "lodash"

const IndexPage = () => (
  <Layout>
    <StaticQuery query={graphql`
    {
      allWordpressPost {
        edges {
          node {
            title
            id
            content
          }
        }
      }
    }
    `} render={props => (
      <div>
        {props.allWordpressPost.edges.map( page => (
          <div key={page.node.id}>
            <h2> {page.node.title}</h2>
            <div dangerouslySetInnerHTML={{__html: page.node.content}}></div>
          </div>
        ))}
      </div>
      )}/>  
  </Layout>
  )

export default IndexPage

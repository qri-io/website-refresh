import React from "react"
import { graphql } from "gatsby"

import StandardLayout from "../components/standard-layout"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <StandardLayout location={this.props.location} title={siteTitle}>
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </StandardLayout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

import React from 'react'
import { Link } from 'gatsby'

const DocsPage = () => (
  <div>
    <h1>Docs Landing page</h1>
    <Link to='/docs/getting-started/qri-desktop-quickstart'>Qri Desktop Quickstart</Link>
    <br/>
    <Link to='/docs/dataset-components/overview'>Dataset Components</Link>
  </div>
)

export default DocsPage

import React from 'react'
import { Link } from 'gatsby'

const IndexPage = () => (
  <>
    <h1>This is Home</h1>
    <br/>
    <Link to='/about'>Go to About</Link>
    <br/>
    <Link to='/docs'>Go to Docs</Link>
    <br/>
    <Link to='/contact'>Go to Contact</Link>
    <br/>
    <Link to='/faq'>Go to FAQ</Link>
    <br/>
    <Link to='/jobs'>Go to Jobs</Link>
  </>
)

export default IndexPage

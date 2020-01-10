import React from 'react'
import styled from '@emotion/styled'

import Footer from '../components/Footer'

export const Wrapper = styled('div')`
  height: 100%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 767px) {
    display: block;
  }
`

export const Content = styled('main')`
  overflow: auto;
  padding-top: 3rem;
  padding-bottom: 3rem;
`

const StandardLayout = ({ children }) => {
  return (
    <div className='standard-layout-container d-flex flex-column'>
      <div className='container flex-grow-1'>
        <Content>
          {children}
        </Content>
      </div>
      <Footer />
    </div>
  )
}

export default StandardLayout

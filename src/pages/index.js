import React from 'react'
import { Link } from 'gatsby'

const IndexPage = () => (
  <div className='index-page'>
    <div className='index-row' style={{
      backgroundImage: 'url("img/blobs-sharing-datasets.png")',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right'
    }}>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-5'>
            <table className="hero-table">
              <tbody>
                <tr>
                  <td className="highlighted-border-bottom"><span>DATA</span></td>
                  <td><span>WITH</span></td>
                </tr>
                <tr>
                  <td className="highlighted"><span>FRIENDS</span></td>
                </tr>
              </tbody>
            </table>
            <p>Qri helps you clean, version, organize, and share datasets.  Free & Open Source.</p>
            <div className='btn btn-lg btn-primary'>download</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div className='btn btn-lg btn-secondary'>learn more</div>
          </div>
        </div>
      </div>
    </div>
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
  </div>
)

export default IndexPage

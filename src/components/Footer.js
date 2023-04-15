import React from 'react'
import { Link } from 'react-router-dom';
import { BsLinkedin, FiFacebook, BsYoutube, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className='footer-top'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-2'>
              <div className='footer-logo '>
                <img src='images/vector.svg' alt='not' />
                <h4 className='pl-3'>Referrizer</h4>
              </div>

            </div>
            <div className='col-md-2'>
              <div className='footer-widget'>
                <h6 className=''>Company</h6>
                <ul>
                  <li><a href=''>About Us</a></li>
                  <li><a href=''>We’re Hiring</a></li>
                  <li><a href=''>Investors</a></li>
                  <li><a href=''>Contact</a></li>

                </ul>
              </div>

            </div>
            <div className='col-md-2'>
              <div className='footer-widget'>
                <h6>Solutions</h6>
                <ul>
                  <li><a href=''>Customer Lead Generation</a></li>
                  <li><a href=''>Reputation Manageent</a></li>
                  <li><a href=''>Marketing Automation</a></li>
                  <li><a href=''>PartnerUp Network</a></li>

                </ul>
              </div>

            </div>
            <div className='col-md-2'>
              <div className='footer-widget'>
                <h6>Resources</h6>
                <ul>
                  <li><a href=''>Blog</a></li>
                  <li><a href=''>Videos</a></li>
                  <li><a href=''>Case Studies</a></li>
                  <li><a href=''>Marketplace</a></li>
                  <li><a href=''>Industries</a></li>
                  
                </ul>
              </div>
              
            </div>
            <div className='col-md-2'>
              <div className='footer-widget'>
                <h6>Help</h6>
                <ul>
                  <li><a href=''>Support </a></li>
                  <li><a href=''>Knowledge Base</a></li>
                  <li><a href=''>Live Chat</a></li>

                </ul>
              </div>

            </div>
            <div className='col-md-2'>
              <div className='footer-widget'>
                <h6>Partners</h6>
                <ul>
                  <li><a href=''>Development Partners</a></li>
                  <li><a href=''>Affiliate Program</a></li>
                  <li><a href=''>Partner Offers</a></li>
                </ul>
              </div>

            </div>

          </div>
        </div>

      </footer>
      <footer className='footer-bottom'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='social icons d-flex align-item-center gap-30 mt-4'>
                <a className='text-white' href="#"><img  src='images/linkedin-logo.svg' alt='not'/></a>
                {/* <a className='text-white' href=""><SlSocialReddit className='fs-4' /></a> */}
                <a className='text-white' href=""><img src='' alt=''/></a>
                <a className='text-white' href=""><img src='' alt=''/></a>
                <a className='text-white' href=""><img src='' alt=''/></a>
                

              </div>
            </div>
            <div className='col-md-6'>
              <div className='footer-link d-flex float-start gap-30 justify-content-between'>
                <div>© 2013-2021 Referrizer Inc.</div>
                <div><a></a>Login</div>
                <div>Sign up for free</div>
              </div>
            </div>
          </div>
        </div>

      </footer>


    </>
  )
}

export default Footer;
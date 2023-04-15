import React from 'react'
export const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <div className='container '>

          <div className='nav-logo d-flex gap-10'>
            <img src='images/vector.svg' alt='not'></img>
            <h3>Referrizer</h3>
          </div>

          <div className='md'>
            <ul className='nav-ul d-flex float-right gap-30 '>
              <li><a href=''>Solution</a></li>
              <li><a href=''>Pricing</a></li>
              <li><a href=''>Testmonials</a></li>
              <li><a href=''>Resources</a></li>
            </ul>
          </div>


          <div className='nav-btn d-flex gap-10'>
            <button type="button" class="btn btn-outline-primary">Login</button>
            <button type="button" class="btn btn-primary">Sign Up for Free</button>
          </div>

        </div>

      </div>
      {/* <nav className='NavbarItems '>
        <div className='container-fluid'>
            <div className='row '>
              <div className='col-3'>
                <div className='logo d-flex align-item-center gap-10  '>
                  <img src='images/vector.svg' alt='not found'/>
                  <p className='logo-name'>Referrizer</p>
                </div>
              </div>
              <div className='col-6 d-flex'>
             
                <div  className='nav-link'>
                  <a href='/#' >Solution</a>
                </div>
                <div className='nav-link'>
                  <a href='/#' >Pricing</a>
                </div>
                <div className='nav-link'>
                  <a href='/#' >Testimonials</a>
                </div>
                <div className='nav-link'>
                  <a href='/#' >Resources</a>
                </div>


              </div>
              
              <div className='col-3 d-flex gap-10'>
                <div>
                <button type="button" class="btn btn-outline-primary">Primary</button>
                </div>
                <div>
                <button class="btn btn-primary" type="submit">Sign Up For Free</button>                </div>

              </div>
            </div>
           </div>


      </nav> */}
    </>
  )
}
export default Navbar;

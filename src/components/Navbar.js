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
    </>
  )
}
export default Navbar;

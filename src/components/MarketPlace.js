import React from 'react'

export const MarketPlace = () => {
  return (
    <>
      <section className='market d-flex justify-content-center align-items-center'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='marketplace d-flex justify-content-center align-items-end'>

                <div className='information d-flex flex-column justify-content-center m-0'>
                  <div className='one '><p className='text-center text-primary'>App Partners</p></div>
                  <div className='two'>
                    <h1 className='text-center '>Join our thriving App Marketplace</h1>
                  </div>
                  <div className='three'><p className='text-center text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel aliquam, massa nec hendrerit laoreet</p></div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='market-2 '>
        <div className='container-sm py-10'>
          <div className='row'>

            <div className='col-6'>

              <div className='main-tools d-flex justify-content-start flex-column'>


                <div className='information d-flex flex-column justify-content-center p-20'>
                  <div className='one '><p className=' text-primary '>Tools & Resourses</p></div>
                  <div className='two'>
                    <h4 className=' '>Tools & Other Resourses</h4>
                  </div>
                  <div className='three'><p className=' text-secondary'>Consectetur adipiscing elit, consectetur adipiscing amet.</p></div>
                </div>


                <div className='visual'>
                    <h6>Visual Builder</h6>
                </div>


                <div className='video-lib'> 
                  <h6>Videos library</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur laoreet.</p>
                  <a href='' > View More</a>
                </div>


                <div className='support'>
                    <h6>Quick Support</h6>
                </div>

              </div>

            </div>
            <div className='col-6 ' >

              <div >
              <img src="images/col-img.png" class="img-fluid market-img" alt="Responsive image"/>

              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
export default MarketPlace;
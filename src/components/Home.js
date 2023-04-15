import React from 'react';
export const Home = () => {
  return (
    <>
       
       <section className='home img-fluid'  style={{ backgroundImage: "url(http://localhost:3000/images/background-img.svg)" }}>
        <div className='container-xxl'>
          <div className='row banner-parent'>

            <img src='images/background-img.svg' className='img-fluid bg-img' alt='Not found' />


            <div className='banner-child align-item-center align-content-space-between'>
              <div className='banner-01 text-center'>
                <h1 className='py-3 text-white'>Become a Referrizer<br />
                  API Integration Partner</h1>
                  </div>

              <div className='banner-02 text-center py-4'><p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p></div>

              <div className='banner-03 d-flex justify-content-center'>
                <div className='start-btn px-2'>
                  <button type="button" class="btn btn-light text-primary">Get Started</button>
                  </div>
                <div className='play d-flex px-2  '>
                  <div className='play-btn px-2'><img src='images/Ellipse 356.svg'></img>
                    <div className='polygon'><img src='images/Polygon 5.svg'></img></div>
                  </div>
                  <div className='play-txt py-2 text-white'>Play Video</div>
                </div>

              </div>
            </div>
            <div className='editor-top-strip'>
              <img src='images/Rectangle 561.svg' className='editor-main editor-strip' alt='Not found'></img>
            </div>
            <div className='editor'>
              <img src='images/main.svg' className=' editor-main' alt='Not found'></img>

            </div>
          </div>


        </div>
      </section> 
      
    </>
  )
}
export default Home;

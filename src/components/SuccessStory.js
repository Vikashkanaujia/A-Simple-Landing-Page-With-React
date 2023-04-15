import React from 'react'

export const SuccessStory = () => {
    return (
        <>
            <section className='SuccessStory-section-1'>
                <div className='container-sm'>
                    <div className='row'>
                        <div className='col-12'>

                            <div className='information d-flex flex-column justify-content-center m-0'>
                                <div className='one '><p className='text-center text-primary'>Success Stories</p></div>
                                <div className='two'>
                                    <h1 className='text-center '>Success Stories</h1>
                                </div>
                                <div className='three'><p className='text-center text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel aliquam, massa nec hendrerit laoreet.</p></div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className='SuccessStory-section-2'>
                <div className='container-sm'>
                    <div className='row '>


                        <div className='col-4'>
                            <div className='succ-story-box'>
                                <div className='story-box '>
                                    <div className='story '>
                                        <h5 >Helped me grow my small business...</h5>
                                        <p className='py-3'> It makes it easy to communicate and send out marketing campaigns through email and text templates.</p>
                                    </div>
                                    <div className='d-flex gap-10'>
                                        <div className='linkedin p-2'><img src='images/LinkedIn Circled.svg' alt='not' className='px-1' /><span className='text-primary'>LinkedIn</span></div>
                                        <div className='view py-2'><img src='images/Eye.svg' alt='not' className='px-1' /><span className='text-primary'>View Story</span></div>
                                    </div>

                                </div>
                                <div className='customer d-flex '>
                                    <div className='customer-img '><img src='images/Ellipse 3.svg' alt='not found' /></div>
                                    <div className='customer-desc py-4'>
                                    <h5 className='m-0'>Meteus Felipe</h5>
                                        <p>Owner at Core & More Fitness</p>
                                        </div>
                                </div>

                                <div className='comma'><img src='images/comma-rec.svg' /></div>

                            </div>
                        </div>


                        <div className='col-4'>
                            <div className='succ-story-box'>
                                <div className='story-box '>
                                    <div className='story '>
                                        <h5 >All-in-one Marketing Automation...</h5>
                                        <p className='py-3'> Prior to using Referrizer I was paying over 8 different companies a monthly fee for individual services. I have been able to save over $1,200 a month by streamlining all of my services by just using Referrizer.</p>
                                    </div>
                                    <div className='d-flex gap-10'>
                                        <div className='linkedin p-2'><img src='images/LinkedIn Circled.svg' alt='not' className='px-1' /><span className='text-primary'>LinkedIn</span></div>
                                        <div className='view py-2'><img src='images/Eye.svg' alt='not' className='px-1' /><span className='text-primary'>View Story</span></div>
                                    </div>

                                </div>
                                <div className='customer d-flex '>
                                    <div className='customer-img'><img src='images/succ-img2.svg' alt='not found' /></div>
                                    <div className='customer-desc py-4'>
                                    <h5 className='m-0'>Meteus Felipe</h5>
                                        <p>Owner at Goosebumps Cryotherapy</p>
                                        </div>
                                </div>
                                <div className='comma'><img src='images/comma-rec.svg' /></div>


                            </div>
                        </div>

                        <div className='col-4'>
                            <div className='succ-story-box '>
                                <div className='story-box '>
                                    <div className='story '>
                                        <h5 >We're able to spread the word about our new promos...</h5>
                                        <p className='py-3'> Being able to create custom offers that you can email & text to your clients is wonderful! You have so much flexibility in selecting which clients to send the offers to.</p>
                                    </div>
                                    <div className='d-flex gap-10'>
                                        <div className='linkedin p-2'><img src='images/LinkedIn Circled.svg' alt='not' className='px-1' /><span className='text-primary'>LinkedIn</span></div>
                                        <div className='view py-2'><img src='images/Eye.svg' alt='not' className='px-1' /><span className='text-primary'>View Story</span></div>
                                    </div>
                                    <div className='comma'><img src='images/comma-rec.svg' /></div>


                                </div>
                                <div className='customer d-flex '>
                                    <div className='customer-img'><img src='images/succ-img3.svg' alt='not found' /></div>
                                    <div className='customer-desc py-4'>
                                    <h5 className='m-0'>Meteus Felipe</h5>
                                        <p className='text-#9CA9C4'>Owner at Goosebumps Cryotherapy</p></div>
                                </div>


                            </div>
                        </div>
                        <div className='d-flex justify-content-center'><button type="button " class="btn btn-outline-primary d-inline">Read all Stories</button>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}
export default SuccessStory;
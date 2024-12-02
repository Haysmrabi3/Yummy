import { useEffect } from 'react'
import img1 from '../../Assets/images/About-us/1.jpg'
import img2 from '../../Assets/images/About-us/2.jpg'
import img3 from '../../Assets/images/About-us/3.jpg'
import img4 from '../../Assets/images/About-us/4.jpg'
import Aos from 'aos'







export default function AboutUs() {







  useEffect(() => {

    Aos.init({
        offset: 200,
        // duration: 1000,
        easing: 'ease-in-sine',
        delay: 0,   
    });
}, [])




  return <>
   <section className='About' >
          <div className="container p-5">
            <div className="row mt-5 gx-5">
              <div className="col-md-6 col-sm-12">
                  <div className="imgs">
                    <div className="row overflow-hidden g-3">

                      <div className="col-6 ">
                        <div className="img1 w-100 ">
                        <img src={img1} className='w-100 rounded-4'  alt="meal" data-aos="flip-left" data-aos-duration="1000" />
                        </div>
                      </div>
                      <div className="col-6  align-self-end">
                        <div className="img2 w-75 ">
                        <img src={img2} className='w-100 rounded-4'  alt="meal" data-aos="flip-up" data-aos-duration="1000" />
                        </div>
                      </div>
                      <div className="col-6  ">
                        <div className="img3 ms-5 w-75">
                        <img src={img3} className='w-100 rounded-4'  alt="meal" data-aos="flip-right" data-aos-duration="1000" />
                        </div>
                      </div>
                      <div className="col-6 ">
                        <div className="img4 w-100 ">
                        <img src={img4} className='w-100 rounded-4'  alt="meal" data-aos="flip-down" data-aos-duration="1000" />
                        </div>
                      </div>




                    </div>
                  </div>
              </div>

              <div className="col-md-6 col-sm-12align-content-center overflow-hidden" >
                      <div className="about-data" data-aos="zoom-out-left" data-aos-duration="2000" >
                      <h2>About Us</h2>
                    <h3>Welcome to <i className="fa-solid fa-burger"></i> Yummy</h3>
                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
                        <br />
                        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>

                        <div className="aboutDetails">
                              <div className="row g-5 align-content-center">
                                <div className="col-lg-6 col-sm-12">
                                <div className="item">
                                        <span className='span1'>15</span>
                                          <div className='DetailOne-info'>
                                          <span className='text-muted fw-bold'>Years Of</span>
                                          <p>EXPERIENCE</p>
                                          </div>
                                        </div>

                                </div>
                          
                                <div className="col-lg-6 col-sm-12">
                                <div className="item">
                                        <span className='span1'> 50</span>
                                            <div className="DetailOne-info">
                                            <span className='text-muted fw-bold'>Popular</span>
                                            <p>MASTER CHEFS</p>
                                            </div>
                                        </div>

                                </div>
                              </div>
                        </div>
                        <button>Read More</button>
                      </div>
              </div>  
            </div>
          </div>
    </section>


  
  
  </>
}

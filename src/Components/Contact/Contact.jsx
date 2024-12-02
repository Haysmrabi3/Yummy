import { useEffect } from 'react';
import MinHeader from '../Min-Header/MinHeader'
import { Helmet } from 'react-helmet';
import Aos from 'aos';














export default function Contact() {

  useEffect(() => {
    Aos.init({
        offset: 100,
        easing: 'ease-in-sine',
        delay: 0,
    });
}, [])



  return <>
        <Helmet>
        <title>Yummy | Contact</title>
        </Helmet>
  <MinHeader title={`Contacts`}/>
  <section className='Contacts  '>
    <div className="container ">
      <div className="row g-3 "> 
            <div className="contact-head ">
                    <div className="text-center">
                    <h2>Contact Us</h2>
                    <h3>Contact For Any Query</h3>
                    </div>
                  <div className="Lay row g-4  px-4">
                        <div className="col-lg-4 col-md-7 col-sm-12 ">
                          <div className="Contact-info " data-aos="flip-up" data-aos-duration="1000">
                          <h5>Booking</h5>
                          <span><i className="fa-solid fa-envelope"></i>haysmrabi325@gmail.com</span>
                          </div>
                  </div>
                  
                  <div className="col-lg-4 col-md-7 col-sm-12 ">
                    <div className="Contact-info "data-aos="flip-up" data-aos-duration="1000" >
                    <h5>General</h5>
                    <span><i className="fa-solid fa-envelope"></i>haysmrabi325@gmail.com</span>
                    </div>
                  </div>
                  
                  <div className="col-lg-4 col-md-7 col-sm-12 ">
                    <div className="Contact-info " data-aos="flip-up" data-aos-duration="1000">
                    <h5>Technical</h5>
                    <span><i className="fa-solid fa-envelope"></i>haysmrabi325@gmail.com</span>
                    </div>
                  </div>
                  
                  </div>

            </div>

              <div className="col-md-6 col-sm-4">
              <iframe 
               data-aos="zoom-in" data-aos-duration="1000"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.28433177951!2d31.1761242!3d29.9999911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145846765e2334ff%3A0x29022126e13689c5!2z2KfZhNmH2LHZhdiMINmF2K3Yp9mB2LjYqSDYp9mE2KzZitiy2Kk!5e0!3m2!1sar!2seg!4v1732975198703!5m2!1sar!2seg"   allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
                  <div className="col-md-6">
                    <form action="">
                      <div className="d-flex">
                        <input  placeholder='Your Name ' className='form-control form-input' type="text" data-aos="zoom-in" data-aos-duration="1000" />
                        <input  placeholder='Your Email ' className='form-control form-input ms-3' type="text" data-aos="zoom-in" data-aos-duration="1000"/>
                      </div>
                      <input  placeholder='Your Email' className='form-control form-input mt-3' type="text" data-aos="zoom-in" data-aos-duration="1000"/>
                      <textarea   className='form-control mt-3 form-input' cols={40}  rows={9} name="message" id="message" data-aos="zoom-in" data-aos-duration="1000"></textarea>
                      <button data-aos="zoom-in" data-aos-duration="1000" className='form-button' >Send Message </button>
                    </form>
                  </div>

      </div>
    </div>
  </section>
  </>
}

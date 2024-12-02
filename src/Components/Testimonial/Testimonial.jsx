import React from 'react'
import Slider from "react-slick";




export default function Testimonial() {


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    autoplay: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
    ],
};





  return <>
    <div className="test-bg ">
    <div className='container mt-0 mb-0 pt-5 testimonial'>
      <h5>Testimonial</h5>
      <h2>Our Clients Say!!!</h2>
      <div className="content">

          <Slider {...settings}>
              <div className='p-2'>
                  <div className='item shadow'>
                      <i className="fa fa-quote-left 3">  </i>
                      <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                      <div className='info'>
                          <figure>
                              <img src={require('../../Assets/images/Testimonial/testimonial-1.jpg')} alt="member" />
                          </figure>
                          <div className="text">

                              <h6>Client Name</h6>
                              <small>Profession</small>
                          </div>
                      </div>
                  </div>
              </div>

              <div className='p-2' >

                  <div className='item shadow'>
                      <i className="fa fa-quote-left 3">  </i>
                      <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                      <div className='info'>
                          <figure>
                              <img src={require('../../Assets/images/Testimonial/testimonial-2.jpg')} alt="member" />
                          </figure>
                          <div className="text">

                              <h6>Client Name</h6>
                              <small>Profession</small>
                          </div>
                      </div>
                  </div>
              </div>

              <div className='p-2'>

                  <div className='item shadow'>
                      <i className="fa fa-quote-left 3">  </i>
                      <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                      <div className='info'>
                          <figure>
                              <img src={require('../../Assets/images/Testimonial/testimonial-4.jpg')} alt="member" />
                          </figure>
                          <div className="text">

                              <h6>Client Name</h6>
                              <small>Profession</small>
                          </div>
                      </div>
                  </div>
              </div>

              <div className='p-2' >

                  <div className='item shadow'>
                      <i className="fa fa-quote-left 3">  </i>
                      <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                      <div className='info'>
                          <figure>
                              <img src={require('../../Assets/images/Testimonial/testimonial-3.jpg')} alt="member" />
                          </figure>
                          <div className="text">

                              <h6>Client Name</h6>
                              <small>Profession</small>
                          </div>
                      </div>
                  </div>
              </div>

          </Slider>
      </div>
  </div>
    </div>

</>
}

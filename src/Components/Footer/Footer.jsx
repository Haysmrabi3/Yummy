import React from 'react'


export default function Footer() {






  return<>
  
      <footer>
        <div className="container">
          <div className="row">
           <div className="col-lg-3 col-md-6 ">  
           <div className="f-info1">
                <h5>Comapany</h5>
                <ul>
                  <li>- About Us</li>
                  <li>- Contact Uss</li>
                  <li>- Privacy Poicy</li>
                  <li>- About Us</li>
                  <li>- Terms & Condition</li>
                </ul>
              </div>
           </div>
           <div className="col-lg-3 col-md-6 ">
              <div className="f-info1">
                <h5>Contact</h5>
                <ul>
                  <li><i className="fa-solid fa-location-dot me-2"></i> 10 A , Haram</li>
                  <li>
                  <i className="fa-solid fa-phone me-2"></i> 01097521770</li>
                  <li><i className="fa-solid fa-envelope me-2"></i> haysmrabi325@gmail.com</li>
                    <ul className='d-flex'>
                      <li><i className="fa-brands fa-facebook me-2 "></i></li>
                      <li><i className="fa-brands fa-linkedin mx-2"></i></li>
                      <li><i className="fa-brands fa-instagram mx-2"></i></li>
                      <li><i className="fa-brands fa-google mx-2"></i></li>
                    </ul>
                </ul>
                </div>
              </div>
            <div className="col-lg-3 col-md-6 ">
            <div className="f-info1">
                <h5>Opening</h5>
                <ul>
                  <li>- Monday - Saturday</li>
                  <li>- 09AM - 09PM</li>
                  <li>- Sunday</li>
                  <li> 10AM - 08PM</li>
                </ul>
              </div>
            </div>
              <div className="col-lg-3 col-md-6 ">
              <div className="f-input">
                  <h5>Newsletter</h5>
                  <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                  <div className="f-email position-relative">
                    <input placeholder=' Your Email' className='form-contorl w-100' type="text" />
                    <button className='position-absolute end-0'>Sent</button>
                  </div>
            </div>
              </div>
          </div>
        </div>
      </footer>
  
  
  
  </>
}

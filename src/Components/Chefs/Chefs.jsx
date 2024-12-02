import Aos from 'aos'
import img1 from '../../Assets/images/Team/team-1.jpg'
import img2 from '../../Assets/images/Team/team-2.jpg'
import img3 from '../../Assets/images/Team/team-3.jpg'
import img4 from '../../Assets/images/Team/team-4.jpg'
import { useEffect } from 'react'












export default function Chefs() {






  useEffect(() => {
    Aos.init({
        offset: 100,
        easing: 'ease-in-sine',
        delay: 0,
    });
}, [])


  return <>
  <section className='Chefs' >
    <div className="container">
      <div className="Chefs-head text-center">
        <h2>Team Member</h2>
        <p>Our Master Chefs</p>
      </div>
      <div className="row g-3">

        <div className="col-lg-3 col-md-6 col-sm-10 mx-auto overflow-hidden">
          <div className="cover shadow rounded-3" data-aos="fade-right" data-aos-duration="1000">
            <div className="cart   p-1">
              <figure className='w-75 mx-auto ' >
                <img src={img1} className='w-100 rounded-circle' alt="Chef photo" />
                <figcaption>
                  <h3>Full Name</h3>
                  <p>Designation</p>
                </figcaption>
              </figure>
              <div className="social">
                <ul>
                  <li><i className="fa-brands fa-facebook "></i></li>
                  <li><i className="fa-brands fa-twitter "></i></li>
                  <li><i className="fa-brands fa-instagram "></i></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-10 mx-auto overflow-hidden">
          <div className="cover shadow rounded-3" data-aos="fade-down" data-aos-duration="1000">
            <div className="cart   p-1">
              <figure className='w-75 mx-auto' >
                <img src={img2} className='w-100 rounded-circle' alt="Chef photo" />
                <figcaption>
                  <h3>Full Name</h3>
                  <p>Designation</p>
                </figcaption>
              </figure>
              <div className="social">
                <ul>
                  <li><i className="fa-brands fa-facebook "></i></li>
                  <li><i className="fa-brands fa-twitter "></i></li>
                  <li><i className="fa-brands fa-instagram "></i></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-10 mx-auto overflow-hidden">
          <div className="cover shadow rounded-3" data-aos="fade-up" data-aos-duration="1000">
            <div className="cart  -3 p-1">
              <figure className='w-75 mx-auto' >
                <img src={img3} className='w-100 rounded-circle' alt="Chef photo" />
                <figcaption >
                  <h3>Full Name</h3>
                  <p>Designation</p>
                </figcaption>
              </figure>
              <div className="social">
                <ul>
                  <li><i className="fa-brands fa-facebook "></i></li>
                  <li><i className="fa-brands fa-twitter "></i></li>
                  <li><i className="fa-brands fa-instagram "></i></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-10 mx-auto overflow-hidden">
          <div className="cover shadow rounded-3" data-aos="fade-left" data-aos-duration="1000">
            <div className="cart   p-1">
              <figure className='w-75 mx-auto' >
                <img src={img4} className='w-100 rounded-circle' alt="Chef photo" />
                <figcaption>
                  <h3>Full Name</h3>
                  <p >Designation</p>
                </figcaption>
              </figure>
              <div className="social">
                <ul>
                  <li><i className="fa-brands fa-facebook "></i></li>
                  <li><i className="fa-brands fa-twitter "></i></li>
                  <li><i className="fa-brands fa-instagram "></i></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  </section>
  </>
  
  
}
  
  


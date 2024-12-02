import React from 'react'
import Img from '../../Assets/images/header/header.png'












export default function Head() {







  return <> 
  <section className='Header'>
    <div className="container">
       <div className="row gy-5 mt-5 align-items-center ">
          <div className="col-lg-6  col-md-6 col-sm-12">
                <div className="Head-cap">
                    <h1>Enjoy Our Delicious Meal</h1>
                   <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                   <button>Book A Table</button>
               </div>
          </div>
                  <div className="col-lg-6  col-md-6 col-sm-12">
                     <div className="head-pic">
                      <img src={Img} className='w-100' alt="main Dish" />
                      </div>
                  </div>
      </div>
     </div>
  </section>


  </>
}

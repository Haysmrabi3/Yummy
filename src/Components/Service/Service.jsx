import { useEffect } from "react";
import Aos from 'aos'


export default function Service() {




    useEffect(() => {

        Aos.init({
            offset: 100,
            easing: 'ease-in-sine',
            delay: 0,
        });
    }, [])



  return <>
  <section className='Service'>
    <div className="container py-5">
        <div className="row g-3">

            <div className="col-lg-3   col-md-6 overflow-hidden">
                <div className="my-1 ">
                    <div className="cart rounded-3 Cart-shadow" data-aos="fade-right" data-aos-duration="1000">
                        <i className="fa-solid fa-utensils"></i>
                        <h3>Quality Food</h3>
                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 overflow-hidden">
                <div className=" my-1">
                    <div className="cart  rounded-3 Cart-shadow " data-aos="fade-down" data-aos-duration="1000">
                        <i className="fa-solid fa-utensils"></i>
                        <h3>Quality Food</h3>
                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 overflow-hidden">
                <div className=" my-1">
                    <div className="cart rounded-3 Cart-shadow " data-aos="fade-up" data-aos-duration="1000">
                        <i className="fa-solid fa-utensils"></i>
                        <h3>Quality Food</h3>
                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 overflow-hidden">
                <div className=" my-1">
                    <div className="cart rounded-3 Cart-shadow " data-aos="fade-left" data-aos-duration="1000">
                        <i className="fa-solid fa-utensils"></i>
                        <h3>Quality Food</h3>
                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                    </div>
                </div>
            </div>
 

        </div>
    </div>
  </section>
  
  
  </>
}


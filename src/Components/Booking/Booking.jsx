import React from 'react'
















export default function Booking() {




  return <>
        <div className="Booking">
          <div className="container">
            <div className="row">
              <div className="col-md-6 imge">
              </div>
              <div className="col-md-6">
                <div className="Book-form p-3">
                    <form action="">
                    <h4>Yummy</h4>
                    <p>Book A Table Online</p>
                    <div className="row  g-3">

                      <div className="col-md-6">
                        <div className="">
                        <input placeholder=' Name' className='form-control' type="text" />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="">
                        <input placeholder=' Name' className='form-control' type="text" />
                        </div>
                      </div>
                      

                      <div className="col-md-6">
                        <div className="">
                        <input placeholder=' Name' className='form-control' type="text" />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="">
                        <input placeholder=' Name' className='form-control' type="text" />
                        </div>
                      </div>



                      <div className="col-12">
                        <div className="">
                        <textarea  placeholder=' Name' rows={5} cols={30} className='form-control' id=""></textarea>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="text-center">
                        <button className='form-btn' >Book Now</button>
                        </div>
                      </div>

                    </div>
                    </form>
                </div>
              </div>
            </div>
          </div>
        </div>
  
  </>
}

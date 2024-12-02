import React from 'react'
import MinHeader from '../Min-Header/MinHeader'
import img from '../../Assets/images/NotFound/5203299.ce293654fc5b055593cf.jpg'














export default function NotFoundPage() {





  return <>
  <MinHeader title={`Not Found`}/>
  <div className="NotFound container">
          <img src={img} className='w-100' alt="notfound imge" />
  </div>
  </>
}

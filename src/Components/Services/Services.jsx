import React from 'react'
import Service from './../Service/Service';
import MinHeader from '../Min-Header/MinHeader';
import { Helmet } from 'react-helmet';

export default function Services() {





  return <>
          <Helmet>
        <title>Yummy | Service</title>
        </Helmet>
  <MinHeader title={`Services`}/>

    <div className="Services ">
    <Service/>
    <Service/>
    </div>
  
  </>





}

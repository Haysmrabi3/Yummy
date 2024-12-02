import React from 'react'
import Head from './../Head/Head';
import Testimonial from './../Testimonial/Testimonial';
import Service from '../Service/Service';
import Chefs from '../Chefs/Chefs';
import AboutUs from './../AboutUs/AboutUs';
import Menu from './../Menu/Menu';
import Booking from '../Booking/Booking';
import { Helmet } from 'react-helmet';

export default function Home() {
  return <>
  

        <Head/>
        <Service/>
        <AboutUs/>
        <Menu/>
        <Chefs/>
        <Booking/>
        <Testimonial/>
        <Helmet>
        <title>Yummy | Home</title>
        </Helmet>

    
  </>
}

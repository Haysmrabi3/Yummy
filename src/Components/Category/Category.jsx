import Aos from 'aos';
import axios from 'axios/unsafe/axios.js';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

















export default function Category({num}) {


    const [Category , setCategory]= useState([])

    async function getCategories() {
        try {
                const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
                setCategory(data.categories)       
        } catch (error) {
            console.log(error);
        }
    }
    
    
    
    useEffect(()=>{
        getCategories()
        Aos.init({
            offset: 100,
            easing: 'ease-in-sine',
            delay: 0,
        });
    } , [])
    


  return <>
  <section className='Category' >
    <div className="container">
            <div className="row g-3">
            {Category?.slice(0,num).map((item , index)=>{
                return <div key={index} className="col-6 col-md-4" 
                data-aos="fade-up" data-aos-duration="1000"
                >
                    <Link to={`/CategoryMeals/${item.strCategory}`}>
                            <figure className="cat-img">
                                <img src={item.strCategoryThumb} className='w-100' alt="Category photo" />
                                <div className="Lyer">
                                    <figcaption>{item.strCategory}</figcaption>
                                </div>
                            </figure>
                    </Link>
                </div>
            } )}
            </div>
    </div>
  </section>
  
  
  </>
}

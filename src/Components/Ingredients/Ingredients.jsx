import Aos from 'aos';
import axios from 'axios/unsafe/axios.js';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';















export default function Ingredients() {




    const [Ingredients , setIngredients]= useState([])

    async function getIngredients() {
        try {
                const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
                setIngredients(data.meals)       
        } catch (error) {
            console.log(error);
        }
    }
    
    
    
    useEffect(()=>{
        getIngredients()
        Aos.init({
            offset: 100,
            easing: 'ease-in-sine',
            delay: 0,
        });
    } , [])
    



  return <>
            <section className='Ingredients'>
                <div className="container">
                    <div className="row g-3">
                        {Ingredients?.slice(0,6).map((item , index)=>{
                            return <div key={index} className="col-6 col-md-4"
                            data-aos="fade-up" data-aos-duration="1000"
                            >
                                        <   figure className="ing-img">
                                            <img src={require(`../../Assets/images/Ingradients/${index + 1}.jpg`)} className='w-100' alt="category photo" />
                                            <div className="Lyer">
                                                 <figcaption>{item.strIngredient.split(' ').splice(0 , 2).join(" ")} </figcaption>
                                            </div>
                                        </figure>
                                     </div>
                        })}
                    </div>
                </div>
            </section>
  
  </>

}

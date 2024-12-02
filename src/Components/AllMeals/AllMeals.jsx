import React, { useEffect, useState } from 'react'
import axios from './../../../node_modules/axios/lib/axios';
import { Link } from 'react-router-dom'
import Aos from 'aos';

export default function AllMeals({num}) {


const [Meals , setMeals]= useState([])

async function getAllMeals() {
    try {
            const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
            setMeals(data.meals)
            
    } catch (error) {
        console.log(error);
        
    }
}



useEffect(()=>{
    getAllMeals()
    Aos.init({
      offset: 100,
      easing: 'ease-in-sine',
      delay: 0,
  });
} , [])








  return <>

    <section className='Meals'>
                <div className="container">
                    <div className="row g-3">
                      {Meals?.splice(0,num)?.map((Meal , index)=>{
                        return <div key={index} className="col-6 col-md-4  " 
                        data-aos="fade-up" data-aos-duration="1000"
                        >
                          <div className="">
                          <Link to={`/MealDetails/${Meal.idMeal}`}>
                              <figcaption className="Meal-img ">
                                <img src={Meal.strMealThumb} className='w-100' alt="Meal" />
                                <div className="Layer">
                                    <figcaption>{Meal?.strIngredient1.split(' ').splice(0, 1).join(' ')}</figcaption>
                                </div>
                              </figcaption>
                            </Link>
                          </div>
                        </div>
                      }) }
                    </div>
                </div>
    </section>


  
  </>
}

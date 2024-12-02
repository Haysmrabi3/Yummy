import axios from 'axios/unsafe/axios.js';
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import MinHeader from '../Min-Header/MinHeader';














export default function CategoryMeals() {

const {name} = useParams()


  const [CatMeals , setCatMeals]= useState([])

  async function getCategoryMeals() {
      try {
              const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
              setCatMeals(data.meals)       
      } catch (error) {
          console.log(error);
      }
  }
  
  
  
  useEffect(()=>{
    getCategoryMeals()
  } , [])
  











  return <>
          <MinHeader title={`CategoryMeals`} />
        <section className='CategoryMeals '>
          <div className="container pt-5">
            <div className="row pb-5">
                  {CatMeals?.splice(0 , 9).map((item , index)=>{
                    return <div key={index} className="col-6 col-md-4">
                              <Link to={`/MealDetails/${item.idMeal}`}>
                              <figure className="Cat-img">
                                  <img src={item.strMealThumb} className='w-100' alt="Meal image" />
                                  <div className="Layer">
                                    <figcaption>{item?.strMeal.split(' ').splice(0 , 2 ).join(' ')}</figcaption>
                                  </div>
                            </figure>
                              </Link>
                    </div>
                  }) }
            </div>
          </div>
        </section>

  </>
}

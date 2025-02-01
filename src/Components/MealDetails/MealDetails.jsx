import React, { useEffect, useState } from 'react'
import MinHeader from './../Min-Header/MinHeader';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios/unsafe/axios.js';















export default function MealDetails() {

const {id}= useParams()

const [Meal , setMeal]= useState({})

async function getMeal() {
    try {
            const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)            
            setMeal(data.meals[0])
            console.log(data.meals[0]);
            
            return data.meals[0]            
    } catch (error) {
        console.log(error);
        
    }
}


async function getRecipes() {

  let mealDetails = await getMeal()
  
  mealDetails.ingredients = []
  const mealDetailsMap = new Map(Object.entries(mealDetails))

  for (let i = 0; i < mealDetailsMap.size; i++) {
      if (mealDetailsMap.get(`strIngredient${i}`)) {
          mealDetails.ingredients.push(`
          ${mealDetailsMap.get(`strMeasure${i}`)}  -
          ${mealDetailsMap.get(`strIngredient${i}`)}
          
          `);
      }

      setMeal(mealDetails)
  }

}

useEffect(()=>{
  getRecipes()
} , [])

  return <>
          <div className="MealDetails">
            <MinHeader title={`${Meal.strMeal}`}/>
            <div className="Meal-D ">
                      <div className="container  ">
                      <div className="text-center">
                              <h2 className='text-center'>{Meal.strMeal}</h2>

                        </div>
                        <div className="row mt-5">
                          <div className="col-lg-4 col-md-5  col-sm-12">
                            <div className="Meal-img">
                              <img src={Meal.strMealThumb} className='w-100' alt="meal" />
                              <div className="">
                              <h3>{Meal.strMeal}</h3>
                              </div>
                              <div className="buttons">
                                <button className='Source'><Link to={Meal.strSource} target='_blank' >Source</Link></button>
                                <button className='YouTub'><Link to={Meal.strYoutube} target='_blank' >YouTub</Link></button>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-7  co-sm-12">
                                  <div className="Meal-info ">
                                    <p>{Meal.strInstructions}</p>
                                  <h4>Category : <span>{Meal.strCategory}</span></h4>
                                  <h4 className='ms-5 mb-2'>Area : <span>{Meal.strArea}</span></h4>
                                  <div className="Replice">
                                    <h4>Recipes : </h4>
                                      <div className="spans">
                                      {Meal.ingredients?.map((ingredient, index) =>
                                              <span key={index}>{ingredient} </span>
                                              )}
                                      </div>
                                  </div>
                                  </div>
                          </div>
                        </div>
                      </div>
            </div>
          </div>
  </>
}

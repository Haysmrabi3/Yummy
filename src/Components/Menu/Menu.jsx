import React from 'react'
import AllMeals from './../AllMeals/AllMeals';
import Category from './../Category/Category';
import Ingredients from './../Ingredients/Ingredients';

export default function Menu() {








  return <>
  <section className='Food-Menu '>
            <div className="container">
              <div className="Food-head pt-5 text-center">
                <h2>Food Menu</h2>
                <h3>Most Popular Items</h3>
              </div>
                <div className="Nav-meals">
                <ul className="nav nav-tabs  d-flex justify-content-center" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className="nav-link1 active" id="Meals-tab" data-bs-toggle="tab" data-bs-target="#Meals" type="button" role="tab" aria-controls="Meals" aria-selected="true"><i className="fa-solid fa-utensils"></i> All Meals</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link1" id="Category-tab" data-bs-toggle="tab" data-bs-target="#Category" type="button" role="tab" aria-controls="Category" aria-selected="false"><i className="fa-solid fa-burger"></i> Category</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link1" id="ingredients-tab" data-bs-toggle="tab" data-bs-target="#ingredients" type="button" role="tab" aria-controls="ingredients" aria-selected="false"><i className="fa-solid fa-fish-fins"></i> ingredients</button>
                      </li>     
                </ul>
                    <div className="tab-content mt-5" id="myTabContent">
                      <div className="tab-pane fade show active  bg-danger" id="Meals" role="tabpanel" aria-labelledby="Meals-tab">
                        <AllMeals num={6}/>
                      </div>
                      <div className="tab-pane fade " id="Category" role="tabpanel" aria-labelledby="Category-tab">
                        <Category num={6}/>
                      </div>
                      <div className="tab-pane fade" id="ingredients" role="tabpanel" aria-labelledby="ingredients-tab">
                        <Ingredients/>
                      </div>
                    </div>
                </div>

            </div>
          </section>
  </>
}

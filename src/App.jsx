import './App.css';
import {Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Foodmenu from './Components/Foodmenu/Foodmenu';
import Contact from './Components/Contact/Contact';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import LayOut from './Components/LayOut/LayOut';
import MealDetails from './Components/MealDetails/MealDetails';
import CategoryMeals from './Components/CategoryMeals/CategoryMeals';












const router = createBrowserRouter([
  {path : `` , element : <LayOut/> , children : [
    {path:`` , element : <Navigate to={`Home`}/>},
    {path:`Home` , element : <Home/>},
    {path:`About` , element : <About/>},
    {path:`Services` , element : <Services/>},
    {path:`Foodmenu` , element : <Foodmenu/>},
    {path:`Contact` , element : <Contact/>},
    {path:`MealDetails/:id` , element : <MealDetails/>},
    {path:`CategoryMeals/:name` , element : <CategoryMeals/>},
    {path:`Yummy/` , element : <Navigate to={`/Home`}/>},
    {path:`*` , element : <NotFoundPage/>},
  ]}

])














function App() {



  return <>
        <RouterProvider router={router}></RouterProvider>



  </>
}

export default App;

import {Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import RecipeDetails from "../pages/RecipeDetails/RecipeDetails";
import RecipeList from "../pages/RecipeList/RecipeList";

const PageRoutes = ()=>{
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/recipelist/:search" element={<RecipeList/>} />
      <Route path="/recipedetails/:index" element={<RecipeDetails />} />
      <Route path="*" element={<ErrorPage/>} />
    </Routes>
  )
}

export default PageRoutes;
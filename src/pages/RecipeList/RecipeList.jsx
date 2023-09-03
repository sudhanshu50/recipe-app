/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import Recipes from "../../components/Recipes/Recipes";
import useAxios from "../../hooks/useAxios";
import { addRecipes } from "../../reducers/recipeSlice";

const RecipeList = () => {
  const { search } = useParams();
  const apiUrl = `recipe?query=${search}`

  const { response, loading, error } = useAxios({ url: apiUrl })
  const dispatch = useDispatch();

  //const navigate = useNavigate();
  
  useEffect(()=>{
    if(response){
    dispatch(addRecipes(response))
    } 
  }, [response, dispatch])

  
  
  //console.log(response);

  return (
    <div style={{margin:"40px auto"}}>
      <h2 className="heading">Recipe List</h2>
      {loading && (<Spinner animation="border" variant="primary" />)}
      {!loading && (
        <Recipes data={response} />
      )}
      {!loading && response?.length===0 && (<div>
      <h2 className="heading2">No recipe found</h2>
        <NavLink style={{fontSize:"25px", textDecoration:"none", border:"2px solid white", borderRadius:"5px", padding:"5px" }} to="/" >Home</NavLink>
      </div>
      )}
    </div>
  )
};

export default RecipeList;
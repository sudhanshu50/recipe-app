import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "./RecipeDetails.css";

const RecipeDetails = ()=>{
  const {index} = useParams();
  const data = useSelector((state)=>state.recipe.recipes);
  //console.log(data);

  const navigate = useNavigate();
  
  const selectedRecipe = data[index];
  useEffect(() => {
    if (selectedRecipe===undefined) {
      navigate("/error")
    }
  }, [])
  
  //console.log(selectedRecipe)
  
  return (
    <div className="box">
      {selectedRecipe && (
      <div className="childBox" >
        <h2 className="title">{selectedRecipe.title}</h2>
        <p className="text"><b className="label">Ingredients:</b> {selectedRecipe.ingredients}</p>
        
        <p className="text"><b className="label">Instructions: </b> {selectedRecipe.instructions}</p>
        <p className="text"><b className="label">Servings: </b> {selectedRecipe.servings}</p>
      </div>)}
      
    </div>
  )
}

export default RecipeDetails;
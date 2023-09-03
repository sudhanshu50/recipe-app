import { NavLink } from "react-router-dom";

const Recipes = ({ data }) => {

  
  //console.log(data)
  
  return (
    <div>
      <ul style={{listStyleType:"none"}}>
      {data && data.map((item, index) => (
        <li style={{margin:"20px", color:"white", fontSize:"22px"}} key={index}>{item.title} <NavLink style={{marginLeft:"5px", color:"#40c9a9", textDecoration:"none"}} to={`/recipedetails/${index}`} >View</NavLink> </li>
      ))}
        </ul>
    </div>
  )
}

export default Recipes;
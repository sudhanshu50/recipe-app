import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./HomePage.css";

const HomePage = ()=>{
  const [query, setQuery] = useState("");
  
  const navigate = useNavigate();
  
  const searchChangeHandler = (value) => {
    setQuery(value); 
  }


  const clickHandler = ()=>{
    if(query.trim().length!==0){
    navigate(`/recipelist/${query}`)
    }
  }
  
  return(
    <div className="mainBox">
      <div>
        <h1 className="heading">Recipe App</h1>
        <div>
          <h3 className="heading2">Find Your Recipe Here</h3>
          <marquee className="marq" >
            <span className="dish"> <img width="20" height="20" src="https://img.icons8.com/fluency/48/000000/poultry-leg.png" alt="poultry-leg"/>Tasty Chicken</span>&nbsp;
            <span className="dish"><img width="20" height="20" src="https://img.icons8.com/fluency/48/spaghetti.png" alt="spaghetti"/> Yummy Pasta</span>&nbsp;
            <span className="dish"><img width="20" height="20" src="https://img.icons8.com/fluency/48/000000/green-tea.png" alt="green-tea"/>Hot Coffee</span>&nbsp;
          </marquee>
        </div>
      </div>
      <div>
        <SearchBar onSearchChange={searchChangeHandler}/>
        <button className="btn" onClick={clickHandler} >Search</button>
      </div>
      <div>
        
      </div>
      
    </div>
  )
};

export default HomePage;
import { useState } from "react"

const SearchBar = ({onSearchChange})=>{
  
  const [search, setSearch] = useState("");
  
  const changeHandler = (e)=>{
    setSearch(e.target.value)
    onSearchChange(e.target.value)
  }
  
  return (
            <input style={{color:"black"}} type="text" placeholder="Search here..." value={search} onChange={changeHandler} required />
  )
}

export default SearchBar;
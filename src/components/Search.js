import { useState, useEffect } from "react"
import { Container, Dropdown, Form } from "react-bootstrap"
import { IoSearchSharp } from "react-icons/io5";
import Axios from 'axios'


const Search = ({setCountry}) => {


    let [Fliter, setFliter] = useState("all")

  
    useEffect(() => {
         fetchCoutntry(Fliter)
      console.log("works")
   }, [])
  
    useEffect(() => {
         fetchCoutntry(Fliter)
      console.log("works")
   }, [Fliter])

  
    const fetchCoutntry = async (value) => {
      
      if (Fliter === "all" ) {
        
        const res = await Axios(`https://restcountries.com/v3.1/${value}`)

      setCountry(res.data)
        return; 
      } else {
        
       const res = await Axios(`https://restcountries.com/v3.1/region/${value}`)

          console.log(res.data)
        setCountry(res.data)
       return;
      }
  
}


  console.log(Fliter)

  const searchInput = async (e) => {
    const input = e.target.value

    if (input.length > 1) {
      const res = await Axios(`https://restcountries.com/v3.1/name/${input}`)

      setCountry(res.data)
        return; 
    } else {
      fetchCoutntry(Fliter)
    }
    console.log(input)
  }

  
  return (
    <Container className="searchCon">
      <div>
      <div>
          <Form className="input-group sreachinput">
            <span class="input-group-text" id="basic-addon1">
              <IoSearchSharp className="searchIcon"/>
            </span>
            <input type="text" placeholder="Search" onChange={searchInput} className="px-6 w-25 float-right form-control"  aria-label="Search"/>
          </Form>
          <Dropdown>
   <Dropdown.Toggle className="dropdown float-none float-lg-end float-sm-end"  id="dropdown-basic-button">
      Fliter by Region
    </Dropdown.Toggle>
        
         <Dropdown.Menu variant="dark">
            <Dropdown.Item onClick={() => setFliter("all")} id="dropdown-item" href="#">All</Dropdown.Item>
            <Dropdown.Item onClick={() => setFliter("africa")} id="dropdown-item" href="#">Africa</Dropdown.Item>
            <Dropdown.Item onClick={() => setFliter("america")} id="dropdown-item" href="#">America</Dropdown.Item>
            <Dropdown.Item onClick={() => setFliter("asia")} id="dropdown-item" href="#">Asia</Dropdown.Item>
            <Dropdown.Item onClick={() => setFliter("europe")} id="dropdown-item" href="#">Europe</Dropdown.Item>
            <Dropdown.Item onClick={() => setFliter("oceania")} id="dropdown-item" href="#">Oceania</Dropdown.Item>
         </Dropdown.Menu>
            </Dropdown>
      </div>
      </div>
    </Container>
  )
}

export default Search;
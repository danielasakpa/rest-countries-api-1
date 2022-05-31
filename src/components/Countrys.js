import { useState } from "react"
import Country from "./Country";
import Search from './Search'



const Countrys = ({fetchCountryPage}) => {
  let [country, setCountry] = useState([])

  console.log(country)

  country = country.slice(0, 54)
  
  return (
    <div >
      <Search setCountry={setCountry} />
    <div className="countryCon container">
       <div className="row row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4 g-lg-5">
         {
           country.map((con, i) => (
           <Country 
               key={i}
               con={con}
               fetchCountryPage={fetchCountryPage}
             />
           ))
        }
      </div>
    </div>
    </div>
  )
}

export default Countrys;
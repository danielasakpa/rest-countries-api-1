import { useState,  } from "react"
import './App.css'
import Axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from "./components/Navbar"
import Countrys from "./components/Countrys"
import CountryPage from "./components/CountryPage"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {

  let [countryName, setCountryName] = useState({})
  const [value, setValue] = useState(false);



  if (countryName.length > 0) {
    countryName.name = countryName.name.split(' ')[0]
  }
  
  const fetchCountryPage = async (value) => {
        setCountryName(value)
      console.log(value)
        return; 
  }


  const fetchCountryByBorder = async (value) => {
    if (value.length > 0) {
      const res = await Axios(`https://restcountries.com/v3.1/alpha/${value}`)
      console.log(res.data)
      setCountryName(res.data[0])
    }
  }


  
  console.log(countryName)
  
  return (
  <Router>
    <div>
      <AppNavbar value={value} setValue={setValue}/>
    <Routes> 
      <Route exact path="/" element={<Countrys fetchCountryPage={fetchCountryPage} />} />
      <Route path={`/${countryName.cca3}`} exact 
        element={<CountryPage fetchCountryByBorder={fetchCountryByBorder} countryName={countryName} />}
        />
    </Routes> 
    </div>
  </Router>
  );
}

export default App;

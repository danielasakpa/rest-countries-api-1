import {
  Link
} from "react-router-dom";
import Switch from "./Switch"
const AppNavbar = ({value, setValue}) => {

  const darkMode = () => {
    console.log("darkMode")
  }
  
  return (
    <div>
   < nav class="navbar">
  <div class="container pt-2">
    <Link className="countryLink" to="/">
    <h3 className="light-txt">Where in the world?</h3>
   </Link>
    <div class="d-flex pt-2"  onClick={() => darkMode()}>
        <Switch 
           isOn={value}
           handleToggle={() => setValue(!value)}
          className="d-inline-block me-2 mb-1 align-text-center" />
      <p className="light-txt ms-2">
        <span className="" >Dark Mode</span>
      </p>
    </div>
  </div>
</nav>
    </div>
  )
}

export default AppNavbar;
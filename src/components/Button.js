import {
  Link
} from "react-router-dom";


const Button = ({borderName, fetchCountryByBorder}) => {
  
  return (
    <div>
    <Link to={`/${borderName}`}>
      <button className="btn me-2 border-btn" onClick={() => fetchCountryByBorder(borderName)}>
       {borderName}
      </button>
     </Link>
    </div>
  )
}
export default Button;
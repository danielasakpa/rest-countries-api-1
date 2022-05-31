import {
  Link
} from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import CountryPageContent from "./CountryPageContent"
import "./countryPage.css"

const CountryPage = ({ countryName, fetchCountryByBorder }) => {



  return (
    <>
      <div className="container">
        <div className="container float-start mb-5 mt-5">
          <Link to="/">
            <button className="btn country-btn">
              <IoArrowBackOutline /> <span className="">Back</span>
            </button>
          </Link>
        </div>
        <div className="row d-flex flex-lg-row flex-column mt-5">
          <div className="col me-5">
            <img className="countryPageImg" src={countryName.flags["png"]}  />
          </div>
          <CountryPageContent countryName={countryName} fetchCountryByBorder={fetchCountryByBorder}/>
        </div>
      </div>
    </>
  )
}

export default CountryPage
import Button from "./Button"


const CountryPageContent = ({countryName, fetchCountryByBorder}) => {


  let nativeName = countryName.name["nativeName"]
  nativeName = Object.values(nativeName)[0]["official"]

  let currencies = countryName.currencies
  currencies = Object.values(currencies)[0]["name"]

  let languages = countryName.languages
  languages = Object.values(languages)[0]

  countryName.borders = countryName.borders.slice(0, 3)
  
  return (
   <div className="col ms-lg-5 mt-5">
   <h3 className="countryPageTxt"><span>{countryName.name["common"]}</span></h3>
   <div className="mb-5">
     <div className="row ms-1 d-flex flex-column flex-lg-row mt-5">
       <ul className="countryPageUl col me-5">
         <li>Native Name:  <span>{nativeName}</span></li>
         <li>Population:  <span>{countryName.population}</span></li>
         <li>Region: <span>{countryName.region}</span></li>
         <li>Sub Region: <span> {countryName.subregion}</span></li>
         <li>Capital:  <span>{countryName.capital}</span></li>
       </ul>
       <ul className="countryPageUl mt-lg-0 mt-3 col">
         <li>Top Level Domain:  <span>{countryName.tld}</span></li>
         <li>currencies:  <span>{currencies}</span></li>
         <li>Languages:  <span>{languages}</span></li>
       </ul>
     </div>
   </div>
                 <div className="d-flex flex-column flex-lg-row mt-5">
              <span className="countryPageTxt border-txt mt-2">Borders Countries: </span>
              <div className="row">
                <div className="d-flex col d-flex mt-lg-0 mt-2 mb-lg-0 mb-2 ms-lg-2 flex-row">

                  {countryName.borders.map(border => (
                     <Button borderName={border} fetchCountryByBorder={fetchCountryByBorder} />
                  ))}
                </div>
              </div>
            </div>
   </div>
  )
}

export default CountryPageContent
            
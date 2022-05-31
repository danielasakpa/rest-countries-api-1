import {
  Link
} from "react-router-dom";
import { Card, } from "react-bootstrap"

const Country = ({ con, fetchCountryPage}) => {

  return (
    <div className="col col-12">
      <div>
        <Link className="countryLink" to={`/${con.cca3}`}>
          <Card
            onClick={() => fetchCountryPage(con)}
            style={{
              height: "23rem",
              backgroundColor: "hsl(209, 23%, 22%)"
            }}>
            <Card.Img variant="top" className="card-img" alt="Country flag" src={con.flags["png"]}/>
            <Card.Body className="light-txt">
              <Card.Title><span>{con.name["common"]}</span></Card.Title>
              <Card.Text>
                <ul className="countryUl">
                  <li>Population: <span>{con.population}</span></li>
                  <li>Region: <span>{con.region}</span></li>
                  <li>Capital: <span>{con.capital}</span></li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </div>
    </div>
  )
}

export default Country;

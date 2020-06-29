import React from "react";

//Stateless functional components if there is no state then there is no need to make class based components
//Explicitly anything can be returned from arrow functions
//If we are returning only one argument then we can also get rid of parentheses
const Weather = props => (
    <div className="weather__info">
        { 
            props.city && props.country && <p className="weather__key">Location: 
                <span className="weather__value"> { props.city }, { props.country } </span>
            </p>
        }
        { 
            props.temperature && <p className="weather__key">Temperature: 
                <span className="weather__value"> { props.temperature } </span>
            </p>
        }
        { 
            props.humidity && <p className="weather__key">Humidity: 
                <span className="weather__value"> { props.humidity } </span>
            </p>
        }
        { 
            props.description && <p className="weather__key">Conditions: 
                <span className="weather__value"> { props.description } </span>
            </p>
        }
        { 
            props.error && <p className="weather__error">{ props.error }</p>
        }
    </div>
); 

export default Weather;
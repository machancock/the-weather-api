import React from "react";

// because component is stateless it does not need to import from React.

const Weather = props => {
	const { city, country, temperature, humidity, description, error } = props
	return (
	<div className="weather__info">
	 {	
	 	props.city && props.country && <p className="weather__key"> location: 
	 		<span className="weather__value"> { city }, { country }</span>
	 	</p> 
	 }
	 { 	
	 	props.temperature && <p className="weather__key"> temperature: 
	 		<span className="weather__value"> { temperature }	</span>
	 	</p> 
	 }
	 { 	
	 	props.humidity && <p className="weather__key"> humidity: 
	 		<span className="weather__value"> { humidity } </span>
	 	</p> 
	 }
	 { 	
	 	props.description && <p className="weather__key"> conditions: 
	 		<span className="weather__value"> { description } </span>
	 </p> 
	 }
	 { 
	 	props.error && <p className="weather__error">{ error }</p>  
	 }
	</div>
)};

export default Weather;

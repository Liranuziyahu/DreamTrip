import React from 'react'
import Image from '../Unsplash/Image'

const Card = ({props}) => {
const city = props
console.log(city);
  return (
        <div>
          <h3>{city.city}</h3>
          <h6>{city.description}</h6>
          <div>
          <Image city={city.city}></Image>
          </div>
        </div>  
      );
    }
  

export default Card
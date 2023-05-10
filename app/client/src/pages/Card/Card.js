import React, { useEffect, useState } from 'react';
import Card08 from "./Card08";
import { createApi } from 'unsplash-js';

const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: process.env.REACT_APP_UNSPLASH,
});

const Card = ({props}) => {
  const {city , country , mountCard , numberCard} = props
  const [data, setPhotosResponse] = useState(null);
  const [scrolldown, setScrollDown] = useState(true);

  useEffect(() => {
    if(numberCard + 1 == mountCard) setScrollDown(false)
    api.search
      .getPhotos({ query: city.city, orientation: 'landscape' })
      .then((result) => {
        setPhotosResponse(result);
      })
      .catch(() => {
        console.log('something went wrong!');
      });
  }, []);
  
  return (
      <div style={{position:'relative'}} >
        {
          <Card08 
            bg_photo={data?.response.results[0].urls.full}
            preTitle="November 2017"
            tag={country}
            cta="View more"
            title={city.city}
            creditPhoto={{name:data?.response.results[0].user}}
            description={city.description}
            scrolldown={scrolldown}
          >
          </Card08>
        }
   
      </div>  
      );
    }
  

export default Card
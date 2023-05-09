import React, { useEffect, useState } from 'react';
import Card08 from "./Card08";
import { createApi } from 'unsplash-js';
import ScrollingDivs from '../Scroll/ScrollDown'

const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: process.env.REACT_APP_UNSPLASH,
});

const Card = ({props}) => {
  const {city , country} = props
  const [data, setPhotosResponse] = useState(null);

  useEffect(() => {
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
      <div style={{position:'relative'}}>
        {
          <Card08 
            bg_photo={data?.response.results[0].urls.full}
            preTitle="November 2017"
            tag={country}
            cta="View more"
            title={city.city}
            creditPhoto={{name:data?.response.results[0].user}}
            description={city.description}
          >
          </Card08>
        }
        {
          <ScrollingDivs></ScrollingDivs>
        }
   
      </div>  
      );
    }
  

export default Card
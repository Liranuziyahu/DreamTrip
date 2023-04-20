import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom';
// import Map from '../googleMaps/Map';

const ResponeChat = () => {
  const location = useLocation();
  const [data , setData] = useState()

    useEffect(() =>{
      if(location.state != null)
      { 
        console.log('Props exist:',location.state.props);
        setData(location.state.props)
      }
      else{
        console.log('not exist');
        console.log(location);
      }
    },[])

    const CreateDurringDays = (daysBefore , durringDays) =>{
      return daysBefore == 0 && durringDays < 2 ? `${durringDays} Day` : daysBefore == 0 && durringDays >= 2 ? `1 - ${durringDays} Days`: `${daysBefore+2} - ${durringDays+1} Days `


    }

    const CreateAtrrection = (attraction) => {
      return(
        <>
          <div>{attraction.name}</div>
          <div>{attraction.description}</div>
        </>
      )
    }

  return (
    <div>
           {
           location?.state != null && (
          <>
              <h1>{data?.country} trip plan</h1>
              {data?.cities?.map((route ,index) => (
                <div>
                <h3>{route.city}</h3>
                <div>{route.description}</div>
                <div>Durring Day at City :
                {
                  index == 0 ? CreateDurringDays(0 , route.travelDay) : 
                  CreateDurringDays(data?.cities[index-1].travelDay , route.travelDay)
                }
                </div>
               {
                 route.attractions? 
                 route.attractions?.map((city) =>{
                 return CreateAtrrection(city)
                })
                 : route.attraction ?
                route.attraction?.map((city) =>{
                  CreateAtrrection(city)
                 }) :null
               }
                                {/* <Map></Map> */}

                </div>
            ))} 
          </>
        )}
    </div>
  )
}

export default ResponeChat
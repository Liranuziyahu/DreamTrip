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

    const CreateDurringDays = (index , durringDays , cities) =>{
      let durringdays;

      if(index == 0 && durringDays == 1)
        durringdays = '1 Day';
      else if(index == 0 && durringDays >= 2)
        durringdays = `1-${durringDays} Days`;
      else{
        let sumDaysBefore = 0;
        for(let i = 0; i < index;i++){
          sumDaysBefore = sumDaysBefore + cities[i].travelDay
        }
        durringdays = `${sumDaysBefore+1} - ${sumDaysBefore+durringDays} Days`
      }
      return durringdays
       
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
                  CreateDurringDays(index, route.travelDay , data?.cities)
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
                </div>
            ))} 
          </>
        )}
    </div>
  )
}

export default ResponeChat
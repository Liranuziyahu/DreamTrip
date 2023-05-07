import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom';
import Card from '../Card/Card';
// import Map from '../googleMaps/Map';

const ResponeChat = () => {
  const location = useLocation();
  const [data , setData] = useState()

    useEffect(() =>{
      if(location.state != null)
      { 
        console.log('Props exist:',location.state.props);
        console.log('type',typeof location.state.props);
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
          {
            data?.cities.map(city =>{
             return <Card props={city}></Card>
            })
          }
          </>
        )}
    </div>
  )
}

export default ResponeChat
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
        setData(location.state.props)
      }
      else{
        console.log('not exist');
      }
    },[])

  return (
    <div>
           {
           location?.state != null && (
          <>
            {
              data?.cities.map((city ,index) =>{
                return <Card key={index} props={{city:city , country:data.country , mountCard:data?.cities.length , numberCard:index}}></Card>
              })
            }
          </>
        )}
    </div>
  )
}

export default ResponeChat
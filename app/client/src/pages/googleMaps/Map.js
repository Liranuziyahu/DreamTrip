import React , {useMemo} from 'react'
import { GoogleMap, Marker , useLoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAVdg5JlgC2_Qtb9iq7QCHPmaaFbX_9evw'
  })

if(!isLoaded) return <div>loading...</div>
else return Map()
}

function Map(){
    return (
    <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName='map-container'
    >
        <Marker position={center}></Marker>
    </GoogleMap>)
}


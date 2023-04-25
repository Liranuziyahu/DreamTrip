import {useMemo} from "react"
import {GoogleMap , Marker, useLoadScript } from "@react-google-maps/api"
import '../../index.css'

export default function Home(){
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.GOOGLE_API_KEY
    })

    if(!isLoaded) return<div>Loading...</div> 
    return <GoogleMap zoom={10} center={{lat:44,lag:-80}} mapContainerClassName="map-container"></GoogleMap>
}
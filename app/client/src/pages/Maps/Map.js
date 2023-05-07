import {useMemo , useState} from "react"
import {GoogleMap , Marker, useLoadScript } from "@react-google-maps/api"
import axios from "axios"
const API_KEY = "AIzaSyAYzAzCit62RTHfQ5k0D7oJDSzci3hDXQs";

const Map = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    async function handleSearch() {
        const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?key=${API_KEY}&query=${encodeURIComponent(query)}`;
        try {
          const response = await axios.get(url);
          setResults(response.data.results);
        } catch (error) {
          console.error(error);
        }
      }
    
      return (
        <div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
          <ul>
            {results.map((result) => (
              <li key={result.place_id}>
                <h3>{result.name}</h3>
                <p>{result.formatted_address}</p>
                <PlaceDetails placeId={result.place_id} />
              </li>
            ))}
          </ul>
        </div>
      );
    }
    
    function PlaceDetails({ placeId }) {
      const [details, setDetails] = useState(null);
    
      async function getPlaceDetails() {
        const url = `https://maps.googleapis.com/maps/api/place/details/json?key=${API_KEY}&place_id=${placeId}`;
    
        try {
          const response = await axios.get(url);
          setDetails(response.data.result);
        } catch (error) {
          console.error(error);
        }
      }

  return (
    <div>
    <button onClick={getPlaceDetails}>Get Details</button>
    {details && (
      <div>
        <p>Phone: {details.formatted_phone_number}</p>
        <p>Website: {details.website}</p>
        {/* Add more details as needed */}
      </div>
    )}
  </div>
  )
}

export default Map
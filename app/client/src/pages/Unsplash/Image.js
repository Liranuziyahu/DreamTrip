import React, { Fragment, useEffect, useState , useRef } from 'react';
import { createApi } from 'unsplash-js';
import './style.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: process.env.REACT_APP_UNSPLASH,
});

const PhotoComp = ({ photo }) => {
  const { user, urls } = photo;

  return (
    <Fragment>
      <img className="img" src={urls.regular} />
      <a
        className="credit"
        target="_blank"
        href={`https://unsplash.com/@${user.username}`}
      >
        Photo by {user.name}
      </a>
    </Fragment>
  );
};
const Image = ({city}) => {
  const [data, setPhotosResponse] = useState(null);
  const slider = useRef(null);

  useEffect(() => {
    api.search
      .getPhotos({ query: city, orientation: 'landscape' })
      .then((result) => {
        setPhotosResponse(result);
      })
      .catch(() => {
        console.log('something went wrong!');
      });
  }, []);

  if (data === null) {
    return <div>Loading...</div>;
  } else if (data.errors) {
    return (
      <div>
        <div>{data.errors[0]}</div>
        <div>PS: Make sure to set your access token!</div>
      </div>
    );
  } else {
    return (
      <div className="feed">
        <ul className="columnUl" ref={slider}>
          {data.response.results.map((photo) => (
            <li key={photo.id} className="li">
              <PhotoComp photo={photo} />
            </li>
          ))}
        </ul>
          <div className='warp-controller'>
            <KeyboardArrowLeftIcon className ="controller" fontSize='small' onClick={()=> {slider.current.scrollLeft = slider.current.scrollLeft - 200}}/>
            <KeyboardArrowRightIcon className ="controller" fontSize='small' onClick={()=> {slider.current.scrollLeft = slider.current.scrollLeft + 200}}/>
          </div>
      </div>
    );
  }
}

export default Image
import React from 'react'

const ResponeChat = ({props}) => {
  console.log(props.responseBot );
  return (
    <div>
           {
           props.responseBot != '' && (
          <>
              <h3>{props.responseBot.itinerary[0].country}</h3>
             {props.responseBot.itinerary?.map((route) => (
                <>
                <div>{route.city}</div>
                <div>{route.description}</div>
                </>
            ))}
          </>
        )}
           
    </div>
  )
}

export default ResponeChat
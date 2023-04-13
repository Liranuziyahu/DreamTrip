import React from 'react'

const ResponeChat = ({props}) => {
  console.log(props);
  return (
    <div>
           {props.responseBot != '' && (
          <>
             {props.responseBot?.map((line) => (
              <div>{line}</div>
            ))}
          </>
        )}
           
    </div>
  )
}

export default ResponeChat
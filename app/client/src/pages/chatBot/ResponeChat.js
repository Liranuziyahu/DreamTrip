import React from 'react'

const ResponeChat = ({props}) => {
  return (
    <div>
           {props.responseBot?.length > 0 && (
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
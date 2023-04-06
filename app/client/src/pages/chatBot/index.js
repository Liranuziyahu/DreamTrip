  import React,{useState} from 'react'
  import axios from 'axios'
  
  const FormSurvey = () => {
    const [responseBot , setResponseBot] = useState([])

      const RequestChat = (e) =>{
          axios.post('http://localhost:3001/chatbot',{people:e.target[0].value ,budget:e.target[1].value,mainland:e.target[2].value })
          .then(res => {
              const responseServer = res.data.message.message.content
              setResponseBot(responseServer.split('\n'))
          })
      }
    
    return (
      <form onSubmit={(e)=>{
          e.preventDefault()
          RequestChat(e)
      }}>
          <div>How many People</div>
          <input type='number'></input>
          <div>What is your Budget</div>
          <input type='text'></input>
          <div>Which mainland</div>
          <select>
              <option value="America">America</option>
              <option value="Eroupe">Eroupe</option>
              <option value="Asia">Asia</option>
              <option value="Africa">Africa</option>
          </select>
          <button type='submit'>Searching</button>
          {
            responseBot.length > 0  ? <div>{responseBot?.map(line => <div>{line}</div>)}</div>:null
          }
          {
           

          
          }
      </form>
    ) 
}
  export default FormSurvey
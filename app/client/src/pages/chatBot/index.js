  import React from 'react'
  import axios from 'axios'
  
  const FormSurvey = () => {
      const RequestChat = (e) =>{
          console.log("People:",e.target[0].value)
          console.log("Budget",e.target[1].value)
          console.log("Mainland",e.target[2].value)
          axios.post('http://localhost:3001/chatbot',{people:e.target[0].value ,budget:e.target[1].value,mainland:e.target[2].value })
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
      </form>
    ) 
}
  export default FormSurvey
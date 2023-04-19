const axios = require('axios');

const {Configuration , OpenAIApi } = require('openai')

  const configuration = new Configuration({
    apiKey: process.env.USER_KEY
  })
  const openai = new OpenAIApi(configuration)


  exports.ChatBot = async (req, res) => {
    const data =  await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{
        role: 'user',
        content:`Can you provide me a Trip to  ${req.body.mainland},for ${req.body.travelers} trip,budget ${req.body.budget},${req.body.durring},return me the answerc as format {country,cities:[{city:,description:,attraction:[name:],travelDay:}]}`
      }]
    })
    try{
      const ResponeData = data.data.choices[0].message.content
      console.log(ResponeData);
      let x = JSON.stringify(ResponeData)
      console.log("Your looking",x[1]);
       if(x[1] != '{' && x.indexOf('{') != -1){
          const jsonStartIndex = x.indexOf('{'); // Find the start index of the JSON object
          const jsonEndIndex = x.lastIndexOf('}'); // Find the end index of the JSON object
          const json = x.substring(jsonStartIndex, jsonEndIndex + 1); // Extract the JSON object as a substring
          res.status(200).send({message:json})
        }
        else{
          res.status(200).send({message:JSON.parse(x)})
        }
    }
    catch(e){
      console.log(e);
    }
  }

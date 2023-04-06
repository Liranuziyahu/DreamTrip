const axios = require('axios');

const {Configuration , OpenAIApi } = require('openai')

  const configuration = new Configuration({
    apiKey: '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'
  })
  const openai = new OpenAIApi(configuration)


  exports.ChatBot = async (req, res) => {
    const data =  await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{
        role: 'user',
        content:  `I'm looking for a vacation, for ${req.body.people} friends, with budget of ${req.body.budget}$, destination:  ${req.body.mainland}, give me also details about the attractions there`
      }]
    })
    try{
      res.status(200).send({message:data.data.choices[0]})
    }
    catch(e){
      console.log(e);
    }
  }

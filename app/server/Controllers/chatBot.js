const axios = require('axios');
// const { Configuration, OpenAIApi } = require("openai");
// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);
// const config = openai.createCompletion({
//   model: "text-davinci-003",
//   prompt: "Say this is a test",
//   temperature: 0,
//   max_tokens: 7,
// });

  exports.ChatBot = async (req, res) => {
    console.log(`I'm looking for a vacation, for ${req.body.people} friends, every one has a budget of ${req.body.budget}$, we are looking for a vacation to  ${req.body.mainland} , give me also details about attraction there`);

    // axios.post('https://api.openai.com/v1/completions', data ,config)
    // .then(function (response) {
    //     res.status(200).send({message:response.data.choices[0].text})
    // })
    // .catch(function (error) {
    //     console.log(error);})
  }

var rp = require('request-promise')
var express = require('express')
const app = express()
const giphy_url = "http://api.giphy.com/v1/gifs/random"
const api_key="dc6zaTOxFJmzC"

const giphy = (keyword) => {
}

app.get('/search/:keyword?', (req, res) => {
  let tag = req.params.keyword ? req.params.keyword : ""
  let options = {
    uri: giphy_url,
    qs: {
        api_key: api_key,
        rating: "g",
        tag: tag
    },
    headers: {
        'User-Agent': 'mj-giphy'
    },
    json: true
};
 
rp(options)
    .then(gif => {
      console.log(`gif found for ${tag}: ${gif.data.image_original_url}`)
      res.redirect(gif.data.image_original_url)
    })
    .catch(err => {
        console.log(err)
    });
})



app.listen(process.env.PORT || 3000, () => {
  console.log('mj-giphy-server running!')
})
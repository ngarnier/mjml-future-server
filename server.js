const rp = require('request-promise')
const express = require('express')
const app = express()
const giphy_url = "http://api.giphy.com/v1/gifs/random"
const api_key="dc6zaTOxFJmzC" // To export as env variable

app.get('/search', (req, res) => {
  let tag = req.query.s ? req.query.s : ""
  let options = {
    uri: giphy_url,
    qs: {
        api_key: api_key,
        rating: "g",
        tag: tag
    },
    headers: {
        'User-Agent': 'mjml-future-server'
    },
    json: true
};
 
rp(options)
    .then(gif => {
      res.redirect(gif.data.image_original_url)
    })
    .catch(err => {
        console.log(err)
    });
})

app.listen(process.env.PORT || 3000, () => {
  console.log('mj-giphy-server running!')
})
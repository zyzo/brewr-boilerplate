import express from 'express'

const app = new express()
const port = 3000

app.get('/', function(req, res) {
  res.status(200).sendFile(__dirname + '/src/index.html')
})

app.get('/dist/client.js', function(req, res) {
  res.status(200).sendFile(__dirname + '/dist/client.js')
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info('==>  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port)
  }
})

var express = require('express')
var path = require('path')
var app = express()
var buildPath = path.join(__dirname, 'build')

app.use(require('compression')())
app.use(require('body-parser').urlencoded({ extended: false }))
app.use(express.static(buildPath))
app.use(function (req, res, next) {
  if (req.method === 'GET' && req.accepts('html')) {
    res.sendFile('index.html', {root: buildPath}, function (err) {
      return err && next()
    })
  } else next()
})

var port = process.env.PORT || 4000
app.listen(port, function () {
  console.log('Server listening on port: ' + port)
})

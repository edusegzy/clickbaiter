"use strict"

const express  = require('express'),
      fs       = require('fs'),
      Firebase = require('firebase'),
      app      = express()

const ref = new Firebase("https://clickbaiter.firebaseio.com/")

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res, next) => {
  req.send("hi")
})

app.get('/article/:key', (req, res) => {
  ref.child("articles").child(req.params.key).once("value", (snapshot) => {
    var article = snapshot.val() || {
      description: "You won't believe it.",
      imageLink: "https://farm4.staticflickr.com/3822/13856600645_1a8196a200.jpg",
      site_name: "TheTruthDoctor.com",
      title: " I had no idea that Russia was actually unhealthy ... until this happened."
    }
    var url = "https://clickbaiter.herokuapp.com/article/" + req.params.key

    fs.readFile(__dirname + "/public/template.html", 'utf-8', (err, data) => {
      var html = data
      var findVariable = /{{(.*)}}/g
      var match = findVariable.exec(html)

      while (match) {
        var replValue = new RegExp ("{{" + match[1] + "}}")
        if (eval(match[1]) != null) {
          html = html.replace(replValue, "\"" + eval(match[1]) + "\"")
        } else {
          html = html.replace(replValue, "\"\"")
        }
        match = findVariable.exec(html)
      }

      res.send(html)
    })
  })
})

app.get('/new', (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
})

app.listen(process.env.PORT || 3000, () => {
  console.log('listening')
})

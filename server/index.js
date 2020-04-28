if (typeof window === 'undefined') {
  global.window = {}
}

const express = require('express')
const { renderToString } = require('react-dom/server')
const SSR = require('../dist/search-server')
const path = require('path')
const fs = require('fs')


const server = (port) => {
  const app = new express()

  app.use(express.static('dist'))
  app.get('/search', (req, res) => {
    const html = renderMarkup(renderToString(SSR))
    res.status(200).send(html)
  })

  app.listen(port, () => {
    console.log("Server is runing on port " + port)
  })
}

server(process.env.PORT || 3000)

const template = fs.readFileSync(path.join(__dirname,'../dist/search.html'),'utf-8')

const renderMarkup = (str) => {
  return template.replace('<!--HTML PLACEHOADER-->',str)
}
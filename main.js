// Set up a simple server for static resource downloading
//  https://www.expressjs.com.cn/resources/middleware/serve-static.html

var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

const app = express()

const rootPath = path.join(__dirname, 'public')
app.use(serveStatic(rootPath))
app.listen(3000, ()=> {
    console.log('http://localhost:3000 started. Location: ' + rootPath)
})
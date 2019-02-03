var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.set('port', 8000)
app.use(express.static(__dirname + '/public'))
app.set('views', __dirname + '/public/views')
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.render('index-release.html')
})

app.get('/login', function (req, res) {
    res.render('login.html')
})
    .post('login',function(req,res){
    res.send(req)
})

app.get('/feed', function (req, res) {
    res.render('feed.html')
})

app.listen(app.get('port'), function () {
    console.log('Listening server on 8000')
})

module.exports = app
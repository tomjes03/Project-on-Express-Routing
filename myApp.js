var express = require('express');
var router = express.Router();
const path = require('path')
const app = express()


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});



app.set('views', path.join(__dirname, 'views'))
app.set('view engine', "pug")

//Home route
app.get('/',(req, res) => {
    res.send('Home')
})

//route for Contact us
app.get('/Contact-us', (req, res) => {
    res.send("Contact us")
})

app.get('/Our-service', (req, res) => {
    res.send('Our-service')
}) 

//Starting server
app.listen(3001, (req, res) => {
    console.log('server is running on port 3001');
})

module.exports = router;
const user = require('../controllers/Users')
const path = require('path')

module.exports = (app) => {

    /* This is what passes the routes into angular if none above are hitting */
    app.all('*', (req,res,next) => {
        res.sendFile(path.resolve('./public/dist/public/index.html'))
    })
}

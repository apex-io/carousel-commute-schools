// import a function that queries the database
const getPictures = require('../db/dbQueries.js').getPictures
getPictures()
const handlers = {
    handleGet: (req, res) => {
        getPictures(function (fakeHouse, fakeUrls) {
           res.send(fakeHouse) 
        })
        
    }
}




module.exports = handlers
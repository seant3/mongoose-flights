const Flight = require('../models/flights')

module.exports = {
    create
}

function create(req,res) {
    console.log('CREATIONNNN! Controllers/Destinations');
    Flight.findById(req.params.id, function(err, flightDoc) {
        flightDoc.destinations.push(req.body);
        flightDoc.save(function(err) {
            res.redirect(`/flights/${flightDoc._id}`);

        })
    })
    
}
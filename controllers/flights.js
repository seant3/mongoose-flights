const Flight = require('../models/flights');
const Ticket = require('../models/tickets');

module.exports = {
    new: newFlight,
    create,
    index,
    show
}

function show(req, res) {
    console.log('Are you showing??? Controllers/Flights')
    Flight.findById(req.params.id, function(err, flightDoc) {
        Ticket.find({flight: flightDoc._id}, function(err, ticketsDoc){
            res.render('flights/show', {flight: flightDoc, tickets: ticketsDoc});
        })            
    })
}
function newFlight(req, res){
    console.log('New Flight function - Controllers/Flights')
    res.render('flights/new');
}

function create(req, res) {
    console.log("You created!!!! - Controllers/Flights")
    const flight = Flight(req.body);

    flight.save(function(err) {
        if(err) return res.render('flights/new')
        // console.log(flight)
        res.redirect('/flights/new')
    })
}

function index(req, res) {
    Flight.find({}, function(err, flightDoc) {
        // console.log(flightDoc)
        res.render('flights/index', {flights: flightDoc})
    })
    
}
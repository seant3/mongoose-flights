const Flight = require('../models/flights')
const Ticket = require('../models/tickets');


module.exports = {
    new: newTicket,
    create,
    delete: deleteTicket
}

async function deleteTicket (req, res, next) {
try {
    console.log('Delete something =======')
    const ticketDoc = await Ticket.findByIdAndDelete(req.params.id);
    res.redirect(`/flights/${ticketDoc.flight}`);
} catch(err) {
    console.log(err);
    res.send('Check terminal for your errors')
    }
}

function newTicket(req, res) {
    console.log('New ticket time???? Controllers/Tickets');
    res.render('tickets/new', {flightID: req.params.id});
}

function create(req,res) {
    console.log('==============Controllers/Tickets')
    req.body.flight = req.params.id

    const ticket = new Ticket(req.body)
    ticket.save(req.body, function (err, ticketDoc) {
        console.log(ticketDoc, " <<<----Ticket info")
        
        res.redirect(`/flights/${req.params.id}`)
    })
}
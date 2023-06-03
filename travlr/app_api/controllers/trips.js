const mongoose = require('mongoose');
const Model = mongoose.model('trips');

// GET: /trips - lists all the trips
const tripsList = async (req, res) => {
    Model
        .find({}) // all
        .exec((err, trips) => {
            if(!trips) {
                return res
                    .status(404)
                    .json({"message": "trips not found"});
            } else if(err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(trips);
            }
        })
}

const tripsAddTrip = async (req, res) => {
    model
        .create({
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        }, (err, trip) => {
            if(err) {
                return res.status(400).json(err);
            } else {
                return res.status(201).json(trip)
            }
        });
}

// GET: /trips/:tripCode - returns single trip
const tripsFindByCode = async (req, res) => {
    Model
        .find({'code': req.params.tripCode}) // specific code
        .exec((err, trips) => {
            if(!trips) {
                return res
                    .status(404)
                    .json({"message": "trip not found"});
            } else if(err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(trips);
            }
        })
}

const tripsUpdateTrip = async (req, res) => {
    console.log(req.params.tripCode)
    console.log(req.body);
    model
        .findOneAndUpdate({'code': req.params.tripCode}, {
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        }, {new: true})
        .then(trip => {
            if(!trip){
                return res
                    .status(404)
                    .send({
                        message: "Trip not found with code " + req.params.tripCode
                    });
            }
            res.send(trip);
        }).catch(err => {
            if(err.kind === 'ObjectId') {
                return res
                    .status(404)
                    .send({
                        message: 'Trip not found with code ' + req.params.tripCode
                    });
            }
            return res.status(500).json(err);
        })
}

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};
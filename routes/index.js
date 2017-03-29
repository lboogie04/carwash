var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'LA Car Wash' });
});

router.get('/transaction/:vehicle', function(req, res, next) {
 res.render('transaction', {output: req.params.vehicle, first: req.params.first, mud: req.params.mud } );
});

router.post('/submit', function(req, res, next) {
 var vehicle = req.body.vehicle;
 var first = req.body.firstTime;
 var mud = req.body.mud;
 var license = req.body.license;
 res.redirect('/transaction/' + vehicle);
});

function selectCheck(vehicleSelect) {
 console.log(vehicleSelect)
}

const vehicleType = {
 Car: 'Car',
 Truck: 'Truck'
}

module.exports = router;


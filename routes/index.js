var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'LA Car Wash', success:false, errors: req.session.errors });
  req.session.erros = null;
});

router.get('/transaction/:vehicle', function(req, res, next) {
 res.render('transaction', {output: req.params.vehicle, first: req.params.first, mud: req.params.mud, type: req.params.type } );
});

router.post('/submit', function(req, res, next) {
 req.check('license', 'Invalid Licesne').notEmpty().isInt();
 var errors = req.validationErrors();
 if (errors) {
  req.session.errors = errors;
 }
 var vehicle = req.body.vehicle;
 if (vehicle == 'Truck')
  var type = 'test' 
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


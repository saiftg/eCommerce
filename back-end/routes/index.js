var express = require('express');
var router = express.Router();

var config = require('../config/config')
var request_module = require('request')
var mysql = require('mysql');
var bcrypt = require('bcrypt-nodejs');


var connection = mysql.createConnection({
	host: config.host,
	user: config.user,
	password: config.password,
	database: config.database
});
connection.connect((error)=>{
	if (error){
		throw error;
	}
	console.log(error);
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.post('/register', function(req,res,next){
	res.json(req.body);
	console.log(req.body);
});
// router.post('/registerprocess',function(req,res,next){
// 	var name = req.body.name;
// 	var email = req.body.email;
// 	var password = req.body.password;


// const selectQuery = "SELECT * FROM users WHERE email = ?;";
// 	connection.query(selectQuery,[email],(error,results)=>{
// 		if(results.length != 0){
// 			console.log("EMAIL REG ALREADY");
// 			// res.redirect('/register?msg=EMAIL already registered');
// 			res.render('/', {
// 				onLoad: true
// 			})

// 		}else{
// 			var hash = bcrypt.hashSync(password);

// 			var insertQuery = `INSERT INTO users (name, email) VALUES (?,?,);`;
		

// 		connection.query(insertQuery,[name, email], (error)=>{
// 				if (error){
// 					throw error;

// 				}else{
// 					res.render('/', {
// 						onLoad: true
// 		});
// 				}
// 				});

// 		}
			
			
	
// 	});
// });



module.exports = router;

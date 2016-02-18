var express =require('express');
var app =express();
var mongojs =require('mongojs');
 var db =mongojs('local',['player']);
 var db1 =mongojs('local',['coach']);
 var bodyParser =require('body-parser');
 
// var db1 =mongojs('contactlist',['education']);
// var db2 =mongojs('contactlist',['personal']);
// var db3 =mongojs('contactlist',['job']);
// var db4 =mongojs('contactlist',['organization']);
// var db5 =mongojs('contactlist',['skill']);
// var db6 =mongojs('contactlist',['learning']);
// var db7 =mongojs('contactlist',['accounts']);
// var db8 =mongojs('contactlist',['role']);
// var db9 =mongojs('contactlist',['location']);




app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
  





app.get('/player', function (req, res) {
	console.log("i received a GET request")
db.player.find(function (err, docs){
	console.log(docs);
	console.log(JSON.stringify(docs));
	res.json(docs);
	
});
 });

app.get('/coach', function (req, res) {
	console.log("i received a GET request")
db1.coach.find(function (err, docs){
	console.log(docs);
	console.log(JSON.stringify(docs));
	res.json(docs);
	
});
 });


// app.get('/education', function (req, res) {
// 	console.log("i received a GET request")
// db1.education.find(function (err, docs){
// 	console.log(docs);
// 	res.json(docs);
// 	});
// });

// app.get('/personal', function (req, res) {
// 	console.log("i received a GET request")
// db2.personal.find(function (err, docs){
// 	console.log(docs);
// 	res.json(docs);

// });
// });

// app.get('/job', function (req, res) {
// 	console.log("i received a GET request")
// db3.job.find(function (err, docs){
// 	console.log(docs);
// 	res.json(docs);
// });
// });

// app.get('/organization', function (req, res) {
// 	console.log("i received a GET request")
// db4.organization.find(function (err, docs){
// 	console.log(docs);
// 	res.json(docs);
// });
// });
// app.get('/skill', function (req, res) {
// 	console.log("i received a GET request")
// db5.skill.find(function (err, docs){
// 	console.log(docs);
// 	res.json(docs);
// });
// });
// app.get('/learning', function (req, res) {
// 	console.log("i received a GET request")
// db6.learning.find(function (err, docs){
// 	console.log(docs);
// 	res.json(docs);
// });
// });
// app.get('/accounts', function (req, res) {
// 	console.log("i received a GET request")
// db7.accounts.find(function (err, docs){
// 	console.log(docs);
// 	res.json(docs);
// });
// });
// app.get('/role', function (req, res) {
// 	console.log("i received a GET request")
// db8.role.find(function (err, docs){
// 	console.log(docs);
// 	res.json(docs);
// });
// });
// app.get('/location', function (req, res) {
// 	console.log("i received a GET request")
// db9.location.find(function (err, docs){
// 	console.log(docs);
// 	res.json(docs);
// });
// });
// // get end
// // post start
// app.post('/contactlist', function (req, res) {
// 	console.log(res.body);

// 	db.contactlist.insert(req.body, function( err, docs){
// 		res.json(docs);
// 	});
// });

// app.post('/education', function (req, res) {
// 	console.log(res.body);

// 	db1.education.insert(req.body, function( err, docs){
// 		res.json(docs);
// 	});
// });

// app.post('/personal', function (req, res) {
// 	console.log(res.body);

// 	db2.personal.insert(req.body, function( err, docs){
// 		res.json(docs);
// 	});
// });

// app.post('/job', function (req, res) {
// 	console.log(res.body);

// 	db3.job.insert(req.body, function( err, docs){
// 		res.json(docs);
// 	});
// });
// app.post('/organization', function (req, res) {
// 	console.log(res.body);

// 	db4.organization.insert(req.body, function( err, docs){
// 		res.json(docs);
// 	});
// });
// app.post('/skill', function (req, res) {
// 	console.log(res.body);

// 	db5.skill.insert(req.body, function( err, docs){
// 		res.json(docs);
// 	});
// });
// app.post('/learning', function (req, res) {
// 	console.log(res.body);

// 	db6.job.insert(req.body, function( err, docs){
// 		res.json(docs);
// 	});
// });
// app.post('/accounts', function (req, res) {
// 	console.log(res.body);

// 	db7.accounts.insert(req.body, function( err, docs){
// 		res.json(docs);
// 	});
// });
// app.post('/role', function (req, res) {
// 	console.log(res.body);

// 	db8.role.insert(req.body, function( err, docs){
// 		res.json(docs);
// 	});
// });
// app.post('/location', function (req, res) {
// 	console.log(res.body);

// 	db9.location.insert(req.body, function( err, docs){
// 		res.json(docs);
// 	});
// });
// // post end

app.listen(3000);
console.log("server runing port in 3000");
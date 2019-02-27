var express = require('express');
var userModel = require.main.require('./model/user-model');
var router = express.Router();

router.get('*', function(req, res, next){
		if(req.session.name != null){
			next();
		}else{
			res.redirect('/login');
		}
});

router.get('/', (req, res)=>{
		var user = {
			name: req.session.name
		};
		res.render('teacherHome/index', user);
});	


router.get('/userlist', (req, res)=>{
	
	userModel.getAll(function(results){
		if(results.length > 0){
			console.log("User List : "+results);
			var user = {
				name: req.session.name,
				uList: results
			};
			res.render('teacherHome/userlist', user);
		}
	});	
});

router.get('/profile', (req, res)=>{

	userModel.get(req.session.uid, function(result){
		console.log("Profile "+result);
		if(result.length > 0){
			res.render('teacherHome/profile', result[0]);
		}
	});	
});

router.get('/adduser', (req, res)=>{
	res.render('teacherHome/adduser');
});	

router.post('/adduser', (req, res)=>{
	
	var user ={
		uname : req.body.uname,
		password : req.body.password,
		type : req.body.type
	};
	
	userModel.insert(user, function(success){
		if(success){
			res.redirect('/teacherHome/userlist');
		}else{
			res.render("/teacherHome/adduser");
		}
	});
});

router.get('/edit/:id', (req, res)=>{

	userModel.get(req.params.id, function(result){
		if(result.length >0 ){
			res.render('teacherHome/edit', result[0]);
		}else{
			res.redirect('/teacherHome/userlist');
		}
	});
});	

router.post('/edit/:id', (req, res)=>{
	
	var user ={
		id: req.params.id,
		uname : req.body.uname,
		password : req.body.password,
		type : req.body.type
	};
	
	userModel.update(user, function(success){
		if(success){
			res.redirect('/teacherHome/userlist');
		}else{
			res.render("/teacherHome/edit/"+req.params.id);
		}
	});
});

router.get('/delete/:id', (req, res)=>{

	userModel.get(req.params.id, function(result){
		if(result.length >0 ){
			res.render('teacherHome/delete', result[0]);
		}else{
			res.redirect('/teacherHome/userlist');
		}
	});
});	

router.post('/delete/:id', (req, res)=>{
	
	userModel.delete(req.params.id, function(success){
		if(success){
			res.redirect('/teacherHome/userlist');
		}else{
			res.redirect("/teacherHome/delete/"+req.params.id);
		}
	});
});
module.exports = router;
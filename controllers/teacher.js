var express = require('express');
var userModel = require.main.require('./model/user-model');
var teacherModel = require.main.require('./model/teacher-model');
var studentModel = require.main.require('./model/student-model');
var router = express.Router();

router.get('*', function(req, res, next){
		if(req.session.uId != null){
			next();
		}else{
			res.redirect('/login');
		}
});

router.get('/', (req, res)=>{
		var user = {
			userId: req.session.uId
		};
		res.render('teacher/index', user);
});	


router.get('/userlist', (req, res)=>{
	
	userModel.getAll(function(results){
		if(results.length > 0){
			var user = {
				name: req.session.uId,
				uList: results
			};
			res.render('teacher/userlist', user);
		}
	});	
});

router.get('/profile', (req, res)=>{

	teacherModel.get(req.session.uId, function(result){
		if(result.length > 0){
			res.render('teacher/profile', result[0]);
		}
	});	
});

router.get('/adduser', (req, res)=>{
	res.render('teacher/adduser');
});	

router.post('/adduser', (req, res)=>{
	
	var user ={
		uname : req.body.uname,
		password : req.body.password,
		type : req.body.type
	};
	
	userModel.insert(user, function(success){
		if(success){
			res.redirect('/teacher/userlist');
		}else{
			res.render("/teacher/adduser");
		}
	});
});

router.get('/edit/:id', (req, res)=>{

	userModel.get(req.params.id, function(result){
		if(result.length >0 ){
			res.render('teacher/edit', result[0]);
		}else{
			res.redirect('/teacher/userlist');
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
			res.redirect('/teacher/userlist');
		}else{
			res.render("/teacher/edit/"+req.params.id);
		}
	});
});

router.get('/delete/:id', (req, res)=>{

	userModel.get(req.params.id, function(result){
		if(result.length >0 ){
			res.render('teacher/delete', result[0]);
		}else{
			res.redirect('/teacher/userlist');
		}
	});
});	

router.post('/delete/:id', (req, res)=>{
	
	userModel.delete(req.params.id, function(success){
		if(success){
			res.redirect('/teacher/userlist');
		}else{
			res.redirect("/teacher/delete/"+req.params.id);
		}
	});
});
module.exports = router;
var express 		= require('express');
var userModel 		= require.main.require('./model/user-model');
var teacherModel 	= require.main.require('./model/teacher-model');
var studentModel 	= require.main.require('./model/student-model');
var adminModel 		= require.main.require('./model/admin-model');
var router 			= express.Router();

router.get('/', (req, res)=>{
	res.render('signup/index');
});

router.get('/teacher', (req, res)=>{
	res.render('signup/teacher');
});

router.get('/student', (req, res)=>{
	res.render('signup/student');
});

router.get('/admin', (req, res)=>{
	res.render('signup/admin');
});

router.post('/teacher', (req, res)=>{	
	if(req.body.password == req.body.conPassword)
	{
		var user={
			userId 	 : req.body.username,
			password : req.body.password,
			type 	 : "TEACHER"
		};
		userModel.insert(user, function(success){
			if(success){
				var  teacher ={
					teacherId		:req.body.username,
					teacherPassword	:req.body.password,
					teacherName 	:req.body.name,
					teacherEmail 	:req.body.email,
					teacherAddress	:req.body.address,
					teacherMobile 	:req.body.mobile,
					teacherImage	:"/pictures/" + res.req.file.filename
				}; 
				teacherModel.insert(teacher, function(success){
					if(success){
						res.redirect('/login');
					}
					else{
						res.redirect('/signup/teacher');
					}
				});
			}
			else{
				res.redirect('/signup/teacher');
			}
		});	
	}
	else
	{
		res.redirect('signup/teacher');
	}
});

router.post('/student', (req, res)=>{	

	var  user ={
		studentName 		:req.body.fname,
		studentEmail 		:req.body.email,
		studentDOB 			:req.body.dob,
		studentAddress	 	:req.body.address,
		userId 				:req.body.uname,
		password 			:req.body.pass,
		type 				:"STUDENT",
		studentImage		:"/pictures/" + res.req.file.filename
	};

	userModel.insert(user, function(success){
		if(success){
			studentModel.insert(user, function(success){
				if(success){
					res.redirect('/login');
				}
				else{
					res.redirect('/signup');
				}
			});
		}
		else{

			res.redirect('/signup');
			
		}
	});
});




router.post('/admin', (req, res)=>{	

	var  user ={
		adminName 			:req.body.name,
		adminEmail 			:req.body.email,
		adminMobile			:req.body.mobile,
		adminAddress	 	:req.body.address,
		userId 				:req.body.username,
		password 			:req.body.password,
		type 				:"ADMIN",
		adminImage			:"/pictures/" + res.req.file.filename
	};

	userModel.insert(user, function(success){
		if(success){
			adminModel.insert(user, function(success){
				if(success){
					res.redirect('/login');
				}
				else{
					
					res.redirect('/signup');
					
				}
			});
		}
		else{

			res.redirect('/signup');
			
		}
	});
});









module.exports = router;
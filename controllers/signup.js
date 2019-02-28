var express 		= require('express');
var userModel 		= require.main.require('./model/user-model');
var teacherModel 	= require.main.require('./model/teacher-model');
var studentModel 	= require.main.require('./model/student-model');
var router 			= express.Router();

router.get('/', (req, res)=>{
	res.render('signup/index');
});

router.post('/', (req, res)=>{
	


	// console.log(res.req.file.filename);
	// console.log(res.req.file.destination);
	// var destination = res.req.file.destination;
	// var studentImage = 
	// console.log(studentImage);

	var  user ={
		studentName 		:req.body.fname,
		studentEmail 		:req.body.email,
		studentDOB 			:req.body.dob,
		studentAddress	 	:req.body.address,
		userId 				:req.body.uname,
		password 			:req.body.pass,
		type 				:req.body.types,
		studentImage		:res.req.file.destination+res.req.file.filename
	};

	// userModel.insert(user, function(success){
	// 	if(success){
	// 		res.redirect('/login');
	// 	}
	// 	else{

	// 		res.redirect('/signup');
			
	// 	}
	// });

	studentModel.insert(user, function(success){
		if(success){
			res.redirect('/login');
		}
		else{
			console.log(req.body.imageFile);
			res.redirect('/signup');
			console.log(user.studentImage);
		}
	});

	
	
});












module.exports = router;
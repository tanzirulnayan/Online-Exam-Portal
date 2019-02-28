var express 		= require('express');
var userModel 		= require.main.require('./model/user-model');
var teacherModel 	= require.main.require('./model/teacher-model');
var studentModel 	= require.main.require('./model/student-model');
var router 			= express.Router();

router.get('/', (req, res)=>{
	res.render('signup/index');
});

router.post('/', (req, res)=>{
	
	var  user ={
		studentName 		:req.body.fname,
		studentEmail 		:req.body.email,
		studentDOB 			:req.body.dob,
		studentAddress	 	:req.body.address,
		studentImage 		:req.body.imageFile,
		userId 				:req.body.uname,
		password 			:req.body.pass,
		type 				:req.body.types,
		
	};

	userModel.insert(user, function(success){
		if(success){
			//res.redirect('/login');
			studentModel.insert(user, function(success){
				if(success){
					res.redirect('/login');
				}
				// else{
				// 	console.log(req.body.imageFile);
				// 	res.redirect('/signup');
				// }
			});
			
		}
		else{

			res.redirect('/signup');
			
		}
	});

	
	
});












module.exports = router;
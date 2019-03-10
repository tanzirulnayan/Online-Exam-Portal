var express 		= require('express');
var userModel 		= require.main.require('./model/user-model');
var teacherModel 	= require.main.require('./model/teacher-model');
var studentModel 	= require.main.require('./model/student-model');
var examRoom 		= require.main.require('./model/examRoom-model');
var examParticipant	= require.main.require('./model/examParticipant-model');
var notice			= require.main.require('./model/notice-model');
var router 			= express.Router();

// ********************************************
// *************Index************************
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
	
	studentModel.get(req.session.uId, function(result){
		res.render('student/index', result[0]);	
	});	
});	
// ********************************************
// *************Profile************************
router.get('/profile', (req, res)=>{

	studentModel.get(req.session.uId, function(result){
		res.render('student/profile', result[0]);	
	});	
});

// ********************************************
// *************Change Password************************
router.get('/changePassword', (req, res)=>{
	studentModel.get(req.session.uId, function(result){
		res.render('student/changePassword', result[0]);	
	});	
});

router.post('/changePassword', (req, res)=>{
	var user ={
		userId : req.session.uId,
		password : req.body.oldPassword
	};

	userModel.validate(user, function(result){
		if(result.length > 0){
			if(result[0].U_TYPE == "STUDENT" && result[0].U_STATUS == "ACTIVE")
			{
				if(req.body.newPassword == req.body.conPassword){
					var updateUser={
						userId : req.session.uId,
						password : req.body.newPassword,
						type : "STUDENT",
						status : "ACTIVE"
					};
					console.log("before update");
					userModel.update(updateUser, function(success){
						if(success){
							res.redirect('/student');
						}else{
							res.redirect("/student/changePassword");
						}
					});
				}
			}
		}else{
			res.redirect("/student/changePassword");
		}
	});
});	
// ********************************************
// *************Edit Profile************************
router.get('/editProfile', (req, res)=>{

	studentModel.get(req.session.uId, function(result){
		res.render('student/editProfile', result[0]);	
	});	
});

router.post('/editProfile', (req, res)=>{
	var update ={
		studentId 		: req.session.uId,
		studentName 	: req.body.studentName,
		studentEmail 	: req.body.studentEmail,
		studentDOB 		: req.body.studentDOB,
		studentAddress	: req.body.studentAddress,
	};
	studentModel.update(update, function(success){
		if(success){
			studentModel.get(req.session.uId, function(result){
				res.redirect('/student/profile');	
			});	
		}else{
			res.redirect('/student/editProfile');
		}
	});
});	
// ********************************************
// *************Edit Picture************************
router.get('/editPicture', (req, res)=>{

	studentModel.get(req.session.uId, function(result){
		res.render('student/editPicture', result[0]);	
	});	
});
router.post('/editPicture', (req, res)=>{
	var update2 ={
		studentId 		: req.session.uId,
		studentImage	:"/pictures/" + res.req.file.filename
	};
	studentModel.update2(update2, function(success){
		if(success){
			res.redirect('/student/profile');
		}else{
			res.redirect('/student/editPicture');
		}
	});
});	
// ********************************************
// *************Teacher Search*******************
router.get('/teacherProfile', (req, res)=>{

	studentModel.get(req.session.uId, function(result){
		res.render('student/teacherProfile', result[0]);	
	});	
});

// ********************************************
// *************Teacher Profile****************
router.get('/teacherProfiles/:id', (req, res)=>{
	teacherModel.get(req.params.id, function(result){	
		 res.send(result[0]);
	});	
});
// ********************************************
// *************Search Exam*******************
router.get('/searchExam', (req, res)=>{

	studentModel.get(req.session.uId, function(result){
		res.render('student/searchExam', result[0]);	
	});	
});

router.post('/searchExam', (req, res)=>{


	var info ={
		participantId 		: req.session.uId,
		status				: "PENDING",
		examId				: req.body.search
	};
	examParticipant.insert(info, function(success){
		if(success){
			studentModel.get(req.session.uId, function(result){
				res.render('student/wait', result[0]);	
			});	
		}else{
			res.redirect('/student/searchExam');
		}
	});	
});
// *************************************
// *************Search Exam AJAX*******************
router.get('/searchExam/:id', (req, res)=>{
	examRoom.get(req.params.id, function(result){	
		 res.send(result[0]);
	});	
});
// *************************************
// *************Join Exam*******************
router.get('/joinExam', (req, res)=>{

	studentModel.get(req.session.uId, function(result){
		res.render('student/joinExam', result[0]);	
	});	
});
// ********************************************
// *************Forum*******************
router.get('/forum', (req, res)=>{

	studentModel.get(req.session.uId, function(result){
		res.render('student/forum', result[0]);	
	});	
});
router.post('/forum', (req, res)=>{

});	
// ********************************************
// *************Result*******************
router.get('/result', (req, res)=>{

	studentModel.get(req.session.uId, function(result){
		res.render('student/result', result[0]);	
	});	
});
router.post('/result', (req, res)=>{

});	
// ********************************************
// *************Download*******************
router.get('/download', (req, res)=>{

	studentModel.get(req.session.uId, function(result){
		res.render('student/download', result[0]);	
	});	
});
router.post('/download', (req, res)=>{

});	
// ********************************************
// *************History*******************
router.get('/history', (req, res)=>{

	studentModel.get(req.session.uId, function(result){
		res.render('student/history', result[0]);	
	});	
});
router.post('/history', (req, res)=>{

});	
// ********************************************

// *************Notice*******************
// router.get('/notice', (req, res)=>{
// 	var data = {};
// 	examParticipant.getSpecific(req.session.uId, function(result){
// 		if(result.length>0){
			
// 			for (var i = 0; i < result.length; i++) {
				 
// 				notice.getByExamId(result[i].E_ID , function(results){

// 					for (var i = 0; i < results.length; i++){
					
// 						 data[i] = results; 
						 
// 					}
// 					console.log(data);
							
						
// 							res.render('student/notice', data[i] );	
							
// 				  });

// 			}
// 		}
// 		else{
// 			res.redirect('/student');
// 		}
// 	});	
// });
		router.get('/notice', (req, res)=>{

			studentModel.get(req.session.uId, function(result){
				res.render('student/notice', result[0]);	
			});	
		});

// *************************************
// *************Search Exam Notice AJAX*********
router.get('/searchExamNotice/:id', (req, res)=>{
	notice.getByExamId(req.params.id, function(result){	
		 res.send(result[0]);
	});	
});
// *************************************





module.exports = router;
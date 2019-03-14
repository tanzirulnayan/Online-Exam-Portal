var express = require('express');
var userModel = require.main.require('./model/user-model');
var teacherModel = require.main.require('./model/teacher-model');
var studentModel = require.main.require('./model/student-model');
var supportModel = require.main.require('./model/support-model');
var examRoomModel = require.main.require('./model/examRoom-model');
var noticeModel = require.main.require('./model/notice-model');
var participantModel = require.main.require('./model/examParticipant-model');
var forumModel = require.main.require('./model/forum-model');
var questionModel = require.main.require('./model/question-model');
var rankModel = require.main.require('./model/rank-model');
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

router.get('/profile', (req, res)=>{

	teacherModel.get(req.session.uId, function(result){
		if(result.length > 0){
			res.render('teacher/profile', result[0]);
		}
	});	
});

router.post('/profile', (req, res)=>{
	res.redirect('/teacher/profile/edit');
});

router.get('/profile/edit', (req, res)=>{

	teacherModel.get(req.session.uId, function(result){
		if(result.length >0 ){
			res.render('teacher/editProfile', result[0]);
		}else{
			res.redirect('/profile');
		}
	});
});	

router.post('/profile/edit/', (req, res)=>{

	var teacher ={
		teacherId : req.session.uId,
		teacherName : req.body.teacherName,
		teacherEmail : req.body.teacherEmail,
		teacherAddress : req.body.teacherAddress,
		teacherMobile : req.body.teacherMobile,
		teacherImage : req.body.teacherImage
	};

	teacherModel.update(teacher, function(success){
		if(success){
			res.redirect('/teacher/profile');
		}else{
			res.redirect('/teacher/profile/edit');
		}
	});
});

router.get('/exam/myExams/view/:id', (req, res)=>{
	req.session.examRoom = req.params.id;
	examRoomModel.get(req.params.id, function(result){
		if(result.length >0 ){
			res.render('teacher/viewExam', result[0]);
		}else{
			res.redirect('/teacher/exam/myExams');
		}
	});
});

router.get('/exam/myExams/edit/:id', (req, res)=>{
	examRoomModel.get(req.params.id, function(result){
		if(result.length >0 ){
			res.render('teacher/editExam', result[0]);
		}else{
			res.redirect('/teacher/exam/myExams');
		}
	});
});	

router.post('/exam/myExams/edit/:id', (req, res)=>{
	
	var examRoom ={
		examId 		  : req.params.id,
		examTitle 	  : req.body.title,
		examDate 	  : req.body.date,
		examStartTime : req.body.start,
		examEndTime   : req.body.end,
		teacherId	  : req.session.uId
	};
	
	examRoomModel.update(examRoom, function(success){
		if(success){
			res.redirect('/teacher/exam/myExams');
		}else{
			res.render("/teacher/exam/myExams/edit/"+req.params.id);
		}
	});
});

router.get('/exam/myExams/delete/:id', (req, res)=>{

	examRoomModel.get(req.params.id, function(result){
		if(result.length >0 ){
			res.render('teacher/deleteExam', result[0]);
		}else{
			res.redirect('/teacher/exam/myExams');
		}
	});
});	

router.post('/exam/myExams/delete/:id', (req, res)=>{
	examRoomModel.delete(req.params.id, function(success){
		if(success){
			res.redirect('/teacher/exam/myExams');
		}else{
			res.redirect("/teacher/exam/myExams/delete/"+req.params.id);
		}
	});
});

router.get('/exam/myExams/view/:id/addStudent', (req, res)=>{
	participantModel.getPendingStudentsByExamId(req.params.id, function(results){
		if(results.length >0 ){
			var participants = {
				E_ID			: req.params.id,
				participantList : results
			};
			res.render('teacher/addStudent', participants);
		}else{
			var participants = {
				E_ID			: req.params.id,
				participantList : ""
			};
			res.render('teacher/addStudent', participants);
		}
	});
});

router.get('/exam/myExams/view/:examId/addStudent/:studentId', (req, res)=>{
	var participant ={
		studentId : req.params.studentId,
		examId	  : req.params.examId
	};

	participantModel.updateStatusActive(participant, function(success){
		if(success){
			res.redirect('/teacher/exam/myExams/view/'+req.params.examId+'/studentList');
		}else{
			res.redirect('/teacher/exam/myExams/view/'+req.params.examId+'/studentList');
		}
	});
});

router.get('/exam/myExams/view/:examId/deleteStudent/:studentId', (req, res)=>{
	var participant ={
		studentId : req.params.studentId,
		examId	  : req.params.examId
	};

	participantModel.deleteStudent(participant, function(success){
		if(success){
			res.redirect('/teacher/exam/myExams/view/'+req.params.examId+'/studentList');
		}else{
			res.redirect('/teacher/exam/myExams/view/'+req.params.examId+'/studentList');
		}
	});
});

router.get('/exam/myExams/view/:id/studentList', (req, res)=>{
	participantModel.getActiveStudentsByExamId(req.params.id, function(results){
		if(results.length >0 ){
			var participants = {
				E_ID			: req.params.id,
				participantList : results
			};
			res.render('teacher/studentList', participants);
		}else{
			var participants = {
				E_ID			: req.params.id,
				participantList : ""
			};
			res.render('teacher/studentList', participants);
		}
	});
});

router.get('/exam/myExams/view/:id/setQuestion', (req, res)=>{
	res.render('teacher/addQuestion');
});

router.post('/exam/myExams/view/:id/setQuestion', (req, res)=>{
	var question = {
		title	: req.body.title,
		type	: 'MCQ',
		op1		: req.body.op1,
		op2		: req.body.op2,
		op3		: req.body.op3,
		op4		: req.body.op4,
		answer	: req.body.answer,
		mark	: req.body.mark,
		examId	: req.params.id
	};
	questionModel.insert(question, function(success){
		if(success){
			res.redirect('/teacher/exam/myExams/view/'+req.params.id+'/questions');
		}else{
			res.redirect('/teacher/exam/myExams/view/'+req.params.id+'/setQuestion');
		}
	});
});

router.get('/exam/myExams/view/:id/questions', (req, res)=>{
	questionModel.getByExamId(req.params.id, function(results){
		if(results.length > 0)
		{
			var questions = {
				E_ID 		 : req.params.id,
				questionList : results
			};
			res.render('teacher/questionList', questions);
		}
		else{
			var questions = {
				E_ID 		 : req.params.id,
				questionList : ""
			};
			res.render('teacher/questionList', questions);
		}
	});
});

router.get('/exam/myExams/view/:examId/questions/:questionId/delete', (req, res)=>{
	questionModel.get(req.params.questionId, function(result){
		if(result.length > 0)
		{
			res.render('teacher/deleteQuestion', result[0]);
		}
		else{
			res.redirect('/teacher/exam/myExams/view/'+req.params.examId+'/questions');
		}
	});
});

router.post('/exam/myExams/view/:examId/questions/:questionId/delete', (req, res)=>{
	questionModel.delete(req.params.questionId, function(success){
		if(success){
			res.redirect('/teacher/exam/myExams/view/'+req.params.examId+'/questions');
		}else{
			res.redirect('/teacher/exam/myExams/view/'+req.params.examId+'/questions/'+req.params.questionId+'/delete');
		}
	});
});

router.get('/exam/myExams/view/:examId/questions/:questionId/edit', (req, res)=>{
	questionModel.get(req.params.questionId, function(result){
		if(result.length > 0)
		{
			res.render('teacher/editQuestion', result[0]);
		}
		else{
			res.redirect('/teacher/exam/myExams/view/'+req.params.examId+'/questions');
		}
	});
});

router.post('/exam/myExams/view/:examId/questions/:questionId/edit', (req, res)=>{
	var question = {
		title		: req.body.title,
		type		: 'MCQ',
		op1			: req.body.op1,
		op2			: req.body.op2,
		op3			: req.body.op3,
		op4			: req.body.op4,
		answer		: req.body.answer,
		mark		: req.body.mark,
		examId		: req.params.examId,
		questionId	: req.params.questionId
	};
	questionModel.update(question, function(success){
		if(success){
			res.redirect('/teacher/exam/myExams/view/'+req.params.examId+'/questions');
		}else{
			res.redirect('/teacher/exam/myExams/view/'+req.params.examId+'/questions/'+req.params.questionId+'/edit');
		}
	});
});

router.get('/exam/myExams/view/:id/addNotice', (req, res)=>{
	res.render('teacher/addNotice');
});

router.post('/exam/myExams/view/:id/addNotice', (req, res)=>{
	var examRoom ={
		noticeText 	  : req.body.text,
		noticeTime 	  : new Date(),
		examId		  : req.params.id,
		teacherId	  : req.session.uId
	};

	noticeModel.insert(examRoom, function(success){
		if(success){
			res.redirect('/teacher/exam/myExams/view/'+req.params.id+'/notices');
		}else{
			res.redirect('/teacher/exam/myExams/view/'+req.params.id+'/addNotice');
		}
	});
});

router.get('/exam/myExams/view/:id/notices', (req, res)=>{
	noticeModel.getByExamId(req.params.id, function(results){
		if(results.length > 0){
			var notice = {
				name: req.session.uId,
				noticeList: results
			};
			res.render('teacher/noticeList', notice);
		}
		else{
			var notice = {
				name: req.session.uId,
				noticeList: ""
			};
			res.render('teacher/noticeList', notice);
		}
	});
});

router.get('/exam/myExams/view/:examId/rank', (req, res)=>{
	rankModel.getRankByExamId(req.params.examId, function(results){
		if(results.length > 0)
		{
			var rank = {
				E_ID 		: req.params.examId,
				rankList : results
			};
			res.render('teacher/rank', rank);
		}
		else{
			var rank = {
				E_ID		: req.params.examId,
				rankList : ""
			}
			res.render('teacher/rank', rank);
		}
	});
});

router.get('/exam/myExams/view/:examId/rank/student/:studentId', (req, res)=>{
	studentModel.get(req.params.studentId, function(result){
		if(result.length > 0)
		{
			res.render('teacher/studentProfile', result[0]);
		}
		else{
			res.redirect('/teacher/exam/myExams/view/'+req.params.examId+'/rank');
		}
	});
});

router.get('/support', (req, res)=>{
	res.render('teacher/support');
});

router.post('/support', (req, res)=>{
	var support ={
		teacherId : req.session.uId,
		supportText : req.body.supportText,
		supportTime : new Date(),
		supportStatus : "PENDING"
	};
	supportModel.insert(support, function(success){
		if(success){
			res.redirect('/teacher');
		}else{
			res.redirect('/teacher/support');
		}
	});
});	

router.get('/account', (req, res)=>{
	res.render('teacher/account');
});

router.post('/account', (req, res)=>{
	var user ={
		userId : req.session.uId,
		password : req.body.oldPassword
	};

	userModel.validate(user, function(result){
		if(result.length > 0){
			if(result[0].U_TYPE == "TEACHER" && result[0].U_STATUS == "ACTIVE")
			{
				if(req.body.newPassword == req.body.conPassword){
					var updateUser={
						userId : req.session.uId,
						password : req.body.newPassword,
						type : "TEACHER",
						status : "ACTIVE"
					};
					userModel.update(updateUser, function(success){
						if(success){
							res.redirect('/teacher');
						}else{
							res.redirect("/teacher/account");
						}
					});
				}
			}
		}else{
			res.redirect("/teacher/account");
		}
	});
});
router.get('/exam', (req, res)=>{
	res.render('teacher/exam');
});

router.get('/exam/createExam', (req, res)=>{
	res.render('teacher/createExam');
});

router.post('/exam/createExam', (req, res)=>{
	var examRoom ={
		examTitle 	  : req.body.title,
		examDate 	  : req.body.date,
		examStartTime : req.body.start,
		examEndTime   : req.body.end,
		teacherId	  : req.session.uId
	};

	examRoomModel.insert(examRoom, function(success){
		if(success){
			res.redirect('/teacher/exam/myExams');
		}else{
			res.redirect("/teacher/exam/createExam");
		}
	});
});

router.get('/exam/myExams', (req, res)=>{
	examRoomModel.getByTeacherId(req.session.uId, function(results){
		if(results.length > 0){
			var exam = {
				name: req.session.uId,
				examList: results
			};
			res.render('teacher/myExams', exam);
		}
		else
		{
			var exam = {
				name: req.session.uId,
				examList: ""
			};
			res.render('teacher/myExams', exam);
		}
	});
});

router.get('/exam/myExams/view/:id/forum', (req, res)=>{
	forumModel.getByExamId(req.params.id, function(results){
		if(results.length > 0)
		{
			var comments = {
				E_ID 		: req.params.id,
				commentList : results
			};
			res.render('teacher/forum', comments);
		}
		else{
			var comments = {
				E_ID		: req.params.id,
				commentList : ""
			}
			res.render('teacher/forum', comments);
		}
	});
});

//AJAX
router.get('/exam/myExams/view/:examId/:commentText', (req, res)=>{
	var comment ={
		userId : req.session.uId,
		commentText : req.params.commentText,
		time : new Date(),
		examId : req.params.examId
	};
	forumModel.insert(comment, function(success){
		if(success){
			forumModel.getByExamId(req.params.examId, function(results){
				if(results.length > 0)
				{
					res.send(results);
				}
				else{
					res.send(results);
				}
			});
		}
	});

});

router.get('/addQuestion', (req, res)=>{
	res.render('teacher/setQuestion');
});

module.exports = router;
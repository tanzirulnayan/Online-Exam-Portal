var express 		= require('express');
var userModel 		= require.main.require('./model/user-model');
var teacherModel 	= require.main.require('./model/teacher-model');
var studentModel 	= require.main.require('./model/student-model');
var supportModel = require.main.require('./model/support-model');
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
    res.render('student/index', user);
});	
// ********************************************
// *************Profile************************
router.get('/profile', (req, res)=>{
	studentModel.get(req.session.uid, function(result){

		if(result.length > 0){
			res.render('student/profile', result[0]);
		}
	});	
});

router.post('/profile', (req, res)=>{
	
});	


// ********************************************
// *************Support************************
router.get('/support', (req, res)=>{
	res.render('student/support');
});

router.post('/support', (req, res)=>{
	var support ={
		studentId : req.session.uId,
		supportText : req.body.supportText,
		supportTime : new Date(),
		supportStatus : "PENDING"
	};
	supportModel.insert2(support, function(success){
		if(success){
			res.redirect('/student');
		}else{
			res.redirect('/student/support');
		}
	});
});	
// ********************************************











module.exports = router;
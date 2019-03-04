var express 		= require('express');
var userModel 		= require.main.require('./model/user-model');
var teacherModel 	= require.main.require('./model/teacher-model');
var studentModel 	= require.main.require('./model/student-model');
var adminModel 	    = require.main.require('./model/admin-model');
var supportModel    = require.main.require('./model/support-model');
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
    res.render('admin/index', user);
});	
//********************************************
//*************Profile************************
router.get('/profile', (req, res)=>{

	adminModel.get(req.session.uId, function(result){
		res.render('admin/profile', result[0]);	
	});	
});

router.post('/profile', (req, res)=>{

});	

//********************************************
//*************account************************
router.get('/account', (req, res)=>{

	adminModel.get(req.session.uId, function(result){
		res.render('admin/account', result[0]);	
	});	
});

router.post('/account', (req, res)=>{

});	


//********************************************
//*************Edit_profile************************



router.get('/edit_profile', (req, res)=>{

	adminModel.get(req.session.uId, function(result){
		res.render('admin/edit_profile', result[0]);	
	});	
});

router.post('/edit_profile', (req, res)=>{

});	

//********************************************
//*************admin_list************************



router.get('/admin_list', (req, res)=>{

	adminModel.get(req.session.uId, function(result){
		res.render('admin/admin_list', result[0]);	
	});	
});

router.post('/admin_list', (req, res)=>{

});	



//********************************************
//*************pending_list************************



router.get('/pending_list', (req, res)=>{

	adminModel.get(req.session.uId, function(result){
		res.render('admin/pending_list', result[0]);	
	});	
});

router.post('/pending_list', (req, res)=>{

});	



//********************************************
//*************student_list************************



router.get('/student_list', (req, res)=>{

	adminModel.get(req.session.uId, function(result){
		res.render('admin/student_list', result[0]);	
	});	
});

router.post('/student_list', (req, res)=>{

});	



//********************************************
//*************teacher_list************************



router.get('/teacher_list', (req, res)=>{

	adminModel.get(req.session.uId, function(result){
		res.render('admin/teacher_list', result[0]);	
	});	
});

router.post('/teacher_list', (req, res)=>{

});	











module.exports = router;
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

		if(result.length > 0)
		    {
			res.render('admin/profile', result[0]);	
		    }
		
	});	
});

//********************************************
//*************account************************
router.get('/account', (req, res)=>{
	res.render('admin/account');
});

router.post('/account', (req, res)=>{
	var user ={
		userId : req.session.uId,
		password : req.body.oldPassword
	};

	userModel.validate(user, function(result){
		if(result.length > 0){
			if(result[0].U_TYPE == "ADMIN" && result[0].U_STATUS == "ACTIVE")
			{
				if(req.body.newPassword == req.body.conPassword){
					var updateUser={
						userId : req.session.uId,
						password : req.body.newPassword,
						type : "ADMIN",
						status : "ACTIVE"
					};
					console.log("before update");
					userModel.update(updateUser, function(success){
						if(success){
							res.redirect('/admin');
						}else{
							res.redirect("/admin/account");
						}
					});
				}
			}
		}else{
			res.redirect("/admin/account");
		}
	});
});	


//********************************************
//*************Edit_profile***************


router.get('/edit_profile', (req, res)=>{

	adminModel.get(req.session.uId, function(result){
		res.render('admin/edit_profile', result[0]);	
	});	
});

router.post('/edit_profile', (req, res)=>{
	var update ={
		admintId 		: req.body.admintId,
		adminName   	: req.body.adminName,
		adminEmail 	    : req.body.adminEmail,
		adminMobile 	: req.body.adminMobile,
		adminAddress	: req.body.adminAddress,
	};
	adminModel.update(update, function(success){
		if(success){
			adminModel.get(req.session.uId, function(result){
				res.redirect('/admin');	
			});	
		}else{
			res.redirect('/admin/edit_profile');
		}
	});
});	

//********************************************
//*************admin_list************************


router.get('/admin_list', (req, res)=>{
	
	adminModel.getAll(function(results){
		if(results.length > 0){
			var user = {
				name: req.session.uId,
				uList: results
			};
			res.render('admin/admin_list', user);
		}
	});	
});

//********************************************
//*************admin_list--->>profile************************

router.get('/admin_list/:id', (req, res)=>{
	//console.log("qwerty");
	adminModel.get(req.params.id, function(result){
		if(result.length >0 ){
			res.render('admin/adminview_profile', result[0]);
		}else{
			res.redirect('/admin/admin_list');
		}
	});
});	

//********************************************
//*****************adminview_profile********************
router.get('/adminview_profile', (req, res)=>{

	adminModel.get(req.session.uId, function(result){
		if(result.length > 0){
		res.render('admin/adminview_profile', result[0]);	
		}
	});	
});

router.post('/adminview_profile', (req, res)=>{

});	

//********************************************
//*************pending_list************************



router.get('/pending_list', (req, res)=>{
	
	userModel.getPending(function(results){
		if(results.length > 0){
			var user = {
				name: req.session.uId,
				uList: results
			};
			res.render('admin/pending_list', user);
		}
		// else{
		// 	//Kisu ekta likhte hobe
		// }
	});	
});

//********************************************
//*************pending_list-->> change************************

router.get('/pending_list/:id', (req, res)=>{
	//console.log("dfs");

	userModel.updatestatus(req.params.id,function(success){

		if(success){
			res.redirect('/admin/pending_list');
		 }
		 //else{
		// 	res.redirect('/admin');
		// }
	});	
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


// ********************************************
// *************Edit Picture************************
router.get('/edit_picture', (req, res)=>{

	studentModel.get(req.session.uId, function(result){
		res.render('admin/edit_picture', result[0]);	
	});	
});
router.post('/edit_picture', (req, res)=>{
	var update2 ={
		studentId 		: req.session.uId,
		studentImage	:"/pictures/" + res.req.file.filename
	};
	adminModel.pictureedit(pictureedit, function(success){
		if(success){
			res.redirect('/admin');
		}else{
			res.redirect('/admin/edit_picture');
		}
	});
});	








module.exports = router;
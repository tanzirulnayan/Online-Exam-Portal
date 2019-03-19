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
	var admin ={
		adminId 		: req.session.uId,
		adminName   	: req.body.adminName,
		adminEmail 	    : req.body.adminEmail,
		adminMobile 	: req.body.adminMobile,
		adminAddress	: req.body.adminAddress,
	};

	adminModel.update(admin, function(success){
		if(success){
			adminModel.get(req.session.uId, function(result){
				res.redirect('/admin/profile');	
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
		 else{
			res.render('/admin');
		}
	   
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
			
			else{
				var user = {
					name: req.session.uId,
					uList: ""
						  };
				res.render('admin/pending_list', user);
				}	
	});	
});


//********************************************
//*************student_list************************


router.get('/student_list', (req, res)=>{
	
	studentModel.getAll(function(results){
		if(results.length > 0){
			var user = {
				name: req.session.uId,
				uList: results
			};
			res.render('admin/student_list', user);
		}
		else{
			var user = {
				name: req.session.uId,
				uList: ""
			          };
			res.render('admin/student_list', user);


		    }	
		
	});	
});


//********************************************
//*************teacher_list************************



router.get('/teacher_list', (req, res)=>{
	
	 teacherModel.getAll(function(results){
		if(results.length > 0){
			var user = {
				name: req.session.uId,
				uList: results
			};
			res.render('admin/teacher_list', user);
		}
		else{
			var user = {
				name: req.session.uId,
				uList: ""
			          };
			res.render('admin/teacher_list', user);


		    }	

	});	
});


// ********************************************
// *************Edit Picture************************
router.get('/edit_picture', (req, res)=>{

	adminModel.get(req.session.uId, function(result){
		res.render('admin/edit_picture', result[0]);	
	});	
});
router.post('/edit_picture', (req, res)=>{
	var pictureedit ={
		adminId 		: req.session.uId,
		adminImage	:"/pictures/" + res.req.file.filename
	};
	adminModel.pictureedit(pictureedit, function(success){
		if(success){
			res.redirect('/admin/profile');
		}else{
			res.redirect('/admin/edit_picture');
		}
	});
});	


//********************************************
//*************student_list--->>profile************************

router.get('/student_list/:id', (req, res)=>{
	studentModel.get(req.params.id, function(result){
		if(result.length >0 ){
			res.render('admin/studentview_profile', result[0]);
		}else{
			res.redirect('/admin/student_list');
		}
	});
});	


//********************************************
//*************teacher_list--->>profile************************

router.get('/teacher_list/:id', (req, res)=>{
	//console.log("qwerty");
	teacherModel.get(req.params.id, function(result){
		if(result.length >0 ){
			res.render('admin/teacherview_profile', result[0]);
		}else{
			res.redirect('/admin/teacher_list');
		}
	});
});	

//********************************************
//*************admin_list-->> delete************************

router.get('/admin_list/delete/:id', (req, res)=>{
	//console.log("dfs");

	userModel.delete(req.params.id,function(success){

		if(success){
			adminModel.delete(req.params.id, function(success){
				if(success){
					res.redirect('/admin/admin_list');
				}
				else{
					res.render('/admin');
				}
			});
		 }
		 else{
			res.render('/admin');
		}
	});	
});


//********************************************
//*************student_list-->> delete************************

router.get('/student_list/delete/:id', (req, res)=>{
	//console.log("dfs");

	userModel.delete(req.params.id,function(success){

		if(success){
			studentModel.delete(req.params.id, function(success){
				if(success){
					res.redirect('/admin/student_list');
				}
				else{
					res.render('/admin');
				}
			});
		 }
		 else{
			res.render('/admin');
		}
	});	
});




//********************************************
//*************teacher_list-->> delete************************

router.get('/teacher_list/delete/:id', (req, res)=>{
	//console.log("dfs");

	userModel.delete(req.params.id,function(success){

		if(success){
			teacherModel.delete(req.params.id, function(success){
				if(success){
					res.redirect('/admin/teacher_list');
				}
				else{
					res.render('/admin');
				}
			});
		 }
		 else{
			res.render('/admin');
		}
	});	
});


//********************************************
//*************Support************************
router.get('/support', (req, res)=>{

	userModel.getAllSupport(function(results){
		if(results.length > 0){
			var user = {
				name: req.session.uId,
				uList: results
			};
			res.render('admin/support', user);
		} 

		else{
			var user = {
				name: req.session.uId,
				uList: ""
			          };
			res.render('admin/support', user);


		    }	
		
		
	});	
});

//********************************************
//*************Support_seen************************
router.get('/support/seen/:id', (req, res)=>{
	userModel.updatesupport(req.params.id,function(success){

		if(success){
			res.redirect('/admin/support');
		 }
		 //else{
		// 	res.redirect('/admin');
		// }
	});	
});



// *************Teacher Student Profile****************
router.get('/teacher_search/:id', (req, res)=>{
	teacherModel.getLIKE(req.params.id, function(result){	
		 res.send(result[0]);
		 console.log(result);
	});	
});
// ********************************************


// *************Student Search Profile****************
router.get('/student_search/:id', (req, res)=>{
	studentModel.get(req.params.id, function(result){	
		 res.send(result[0]);
		 console.log(result);
	});	
});
// ********************************************







module.exports = router;



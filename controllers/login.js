var express = require('express');
var userModel = require.main.require('./model/user-model');
var router = express.Router();

router.get('/', (req, res)=>{
	res.render('login/index');
});

router.post('/', (req, res)=>{
	
	var user ={
		userId : req.body.uname,
		password : req.body.password
	};
	
	userModel.validate(user, function(result){
		if(result.length > 0){
			req.session.uId = req.body.uname;
			if(result[0].U_TYPE == "TEACHER" && result[0].U_STATUS == "ACTIVE")
			{
				res.redirect('/teacher');
			}
			else if(result[0].U_TYPE == "STUDENT" && result[0].U_STATUS == "ACTIVE")
			{
				res.redirect('/student');
			}
			else if(result[0].U_TYPE == "ADMIN" && result[0].U_STATUS == "ACTIVE")
			{
				res.redirect('/admin');
			}
			else
			{
				res.render("login/index");
			}
		}else{
			res.render("login/index");
		}
	});
});

module.exports = router;
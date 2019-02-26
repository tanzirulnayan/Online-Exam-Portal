var db = require('./db');

module.exports={

	get: function(teacherId, callback){
		var sql = "select * from teachers where T_ID = '"+teacherId+"'";
		db.getResult(sql, function(result){
			callback(result);
		});
	},
	getAll: function(callback){
		var sql = "select * from teachers";
		db.getResult(sql, function(results){
			callback(results);
		});
	},
	insert: function(teacher, callback){
		var sql = "insert into teachers values ('"+teacher.teacherId+"','"+teacher.teacherName+"','"+teacher.teacherEmail+"', '"+teacher.teacherAddress+"', '"+teacher.teacherMobile+"', '"+teacher.teacherImage+"')";
		db.execute(sql, function(status){
			callback(status);
		});
	},
	update: function(teacher, callback){
		var sql = "update teachers set T_ID = '"+teacher.teacherId+"', T_NAME = '"+teacher.teacherName+"', T_EMAIL ='"+teacher.teacherEmail+"', T_ADDRESS ='"+teacher.teacherAddress+"', T_MOBILE ='"+teacher.teacherMobile+"', T_IMAGE ='"+teacher.teacherImage+"' where T_ID ='"+teacher.teacherId+"'";
		db.execute(sql, function(status){
			callback(status);
		});
	},
	delete: function(teacherId, callback){
		var sql = "delete from teachers where T_ID = '"+teacherId+"'";
		db.execute(sql, function(status){
			callback(status);
		});
	},
}




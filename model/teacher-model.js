var db = require('./db');

module.exports={

	get: function(teacherId, callback){
		var sql = "select * from teachers where T_ID = ?";
		db.getResult(sql, [teacherId], function(result){
			callback(result);
		});
	},
	getLIKE: function(teacherId, callback){
		var sql = "select * from teachers where T_ID LIKE ?";
		db.getResult(sql, [teacherId], function(result){
			callback(result);
		});
	},
	getAll: function(callback){
		var sql = "select * from teachers";
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},
	insert: function(teacher, callback){
		var sql = "insert into teachers values ( ?, ?, ?, ?, ?, ?)";
		
		db.execute(sql, [teacher.teacherId, teacher.teacherName, teacher.teacherEmail, teacher.teacherAddress, teacher.teacherMobile, teacher.teacherImage], function(status){
			callback(status);
		});
	},
	update: function(teacher, callback){
		var sql = "update teachers set T_ID = ?, T_NAME = ?, T_EMAIL = ?, T_ADDRESS = ?, T_MOBILE = ?, T_IMAGE = ? where T_ID = ?";
		db.execute(sql, [teacher.teacherId, teacher.teacherName, teacher.teacherEmail, teacher.teacherAddress, teacher.teacherMobile, teacher.teacherImage, teacher.teacherId], function(status){
			callback(status);
		});
	},
	delete: function(teacherId, callback){
		var sql = "delete from teachers where T_ID = ?";
		db.execute(sql, [teacherId], function(status){
			callback(status);
		});
	}
}




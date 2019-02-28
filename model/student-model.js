var db = require('./db');

module.exports={

	get: function(studentId, callback){
		var sql = "select * from students where S_ID = ?";
		db.getResult(sql, [studentId], function(result){
			callback(result);
		});
	},
	getAll: function(callback){
		var sql = "select * from students";
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},
	insert: function(student, callback){
        var sql = "insert into students values ( ?, ?, ?, ?, ?, ?)";
		db.execute(sql, [student.userId , student.studentName, student.studentEmail, student.studentDOB, student.studentAddress, student.studentImage], function(status){
			callback(status);
		});
	},
	update: function(student, callback){
		var sql = "update students set T= S_ID = ?, S_NAME = ?, S_EMAIL = ?, S_DOB = ?, S_ADDRESS = ?, S_IMAGE = ? where S_ID = ?";


		db.execute(sql, [student.studentId, student.studentName, student.studentEmail, student.studentDOB, student.studentAddress, student.studentImage, student.studentId], function(status){
			callback(status);
		});
	},
	delete: function(studentId, callback){
		var sql = "delete from students where S_ID = ?";
		db.execute(sql, [studentId], function(status){
			callback(status);
		});
	},
}




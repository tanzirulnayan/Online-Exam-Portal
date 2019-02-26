var db = require('./db');

module.exports={

	get: function(studentId, callback){
		var sql = "select * from students where S_ID = '"+studentId+"'";
		db.getResult(sql, function(result){
			callback(result);
		});
	},
	getAll: function(callback){
		var sql = "select * from students";
		db.getResult(sql, function(results){
			callback(results);
		});
	},
	insert: function(student, callback){
        var sql = "insert into students values ('"+student.studentId+"','"+student.studentName+"','"+student.studentEmail+"', '"+student.studentDOB+"', '"+student.studentAddress+"', '"+student.studentImage+"')";
		db.execute(sql, function(status){
			callback(status);
		});
	},
	update: function(student, callback){
		var sql = "update students set T= S_ID = '"+student.studentId+"', S_NAME = '"+student.studentName+"', S_EMAIL ='"+student.studentEmail+"', S_DOB ='"+student.studentDOB+"', S_ADDRESS ='"+student.studentAddress+"', S_IMAGE ='"+student.studentImage+"' where S_ID ='"+student.studentId+"'";
		db.execute(sql, function(status){
			callback(status);
		});
	},
	delete: function(studentId, callback){
		var sql = "delete from students where S_ID = '"+studentId+"'";
		db.execute(sql, function(status){
			callback(status);
		});
	},
}




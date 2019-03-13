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
		var sql = "update students set S_NAME = ?, S_EMAIL = ?, S_DOB = ?, S_ADDRESS = ? where S_ID = ?";
		db.execute(sql, [student.studentName, student.studentEmail, student.studentDOB, student.studentAddress, student.studentId], function(status){
			callback(status);
		});
	},
	update2: function(student2, callback){
		console.log(student2.studentId);
		var sql = "update students set  S_IMAGE = ? where S_ID = ?";
		db.execute(sql, [student2.studentImage, student2.studentId], function(status){
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




// getActive: function(studentId, callback){
// 	var sql = "SELECT students.S_ID, students.S_NAME, students.S_EMAIL, students.S_ADDRESS, students.S_IMAGE FROM students INNER JOIN users ON students.S_ID = users.U_ID WHERE U_STATUS = 'ACTIVE'";
	
// 	db.getResult(sql, [userID], function(results){
// 		callback(results);
// 	});
// }







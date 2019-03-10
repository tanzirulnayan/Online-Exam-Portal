var db = require('./db');

module.exports={
  get: function(examId, callback){
		var sql = "select * from exam_participants where E_ID = ?";
		db.getResult(sql, [examId], function(results){
			callback(results);
		});
	},
	getAll: function(callback){
		var sql = "select * from exam_participants";
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},
	getSpecific: function(specific, callback){
		var sql = "select * from exam_participants where P_ID=?";
		db.getResult(sql, [specific], function(results){
			callback(results);
		});
	},
	insert: function(participant, callback){
		var sql = "insert into exam_participants values ( ?, ?, ?)";
		
		db.execute(sql, [participant.participantId, participant.status, participant.examId], function(status){
			callback(status);
		});
	},
	delete: function(participantId, callback){
		var sql = "delete from exam_participants where P_ID = ?";
		
		db.execute(sql, [participantId], function(status){
			callback(status);
		});
	},
	getPendingStudentsByExamId: function(examId, callback){
		var sql = "SELECT students.S_ID, students.S_NAME, students.S_EMAIL, students.S_ADDRESS, students.S_IMAGE FROM students INNER JOIN exam_participants ON students.S_ID = exam_participants.P_ID WHERE exam_participants.E_ID = ? AND P_STATUS = 'PENDING'";
		
		db.getResult(sql, [examId], function(results){
			callback(results);
		});
	},
	getActiveStudentsByExamId: function(examId, callback){
		var sql = "SELECT students.S_ID, students.S_NAME, students.S_EMAIL, students.S_ADDRESS, students.S_IMAGE FROM students INNER JOIN exam_participants ON students.S_ID = exam_participants.P_ID WHERE exam_participants.E_ID = ? AND P_STATUS = 'ACTIVE'";
		
		db.getResult(sql, [examId], function(results){
			callback(results);
		});
	},
	updateStatusActive: function(participant, callback){
		var sql = "update exam_participants set P_STATUS = 'ACTIVE' where P_ID = ? AND E_ID = ?";
		
		db.execute(sql, [participant.studentId, participant.examId],function(status){
			callback(status);
		});
	},
	deleteStudent: function(participant, callback){
		var sql = "delete from exam_participants where P_ID = ? and E_ID = ?";
		
		db.execute(sql, [participant.studentId, participant.examId], function(status){
			callback(status);
		});
	}
}




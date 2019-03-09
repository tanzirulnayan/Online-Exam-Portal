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
	delete: function(participant, callback){
		var sql = "delete from exam_participants where P_ID = ?";
		
		db.execute(sql, [participantId], function(status){
			callback(status);
		});
	}
}




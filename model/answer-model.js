var db = require('./db');

module.exports={
	get: function(answerId, callback){
		var sql = "select * from answers where P_ID = ?";
		db.getResult(sql, [answerId], function(result){
			callback(result);
		});
    },
    getByExamId: function(examId, callback){
		var sql = "select * from answers where E_ID = ? ORDER BY Q_ID";
		db.getResult(sql, [examId], function(result){
			callback(result);
		});
	},
	getAll: function(callback){
		var sql = "select * from answers";
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},
	insert: function(answers, callback){
		var sql = "insert into answers values (?, ?, ?, ?)";
		
		db.execute(sql, [answers.P_ID, answers.E_ID, answers.Q_ID, answers.ANSWER], function(status){
			callback(status);
		});
	}
}




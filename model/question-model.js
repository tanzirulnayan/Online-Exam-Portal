var db = require('./db');

module.exports={
	get: function(questionId, callback){
		var sql = "select * from questions where Q_ID = ?";
		db.getResult(sql, [questionId], function(result){
			callback(result);
		});
    },
    getByExamId: function(examId, callback){
		var sql = "select * from questions where E_ID = ? ORDER BY Q_ID";
		db.getResult(sql, [examId], function(result){
			callback(result);
		});
	},
	getAll: function(callback){
		var sql = "select * from questions";
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},
	insert: function(question, callback){
		var sql = "insert into questions values ( NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
		
		db.execute(sql, [question.title, question.type, question.op1, question.op2, question.op3, question.op4, question.answer, question.mark, question.examId], function(status){
			callback(status);
		});
	},
	update: function(question, callback){
		var sql = "update questions set Q_TITLE = ?, Q_OPTION1 = ?, Q_OPTION2 = ?, Q_OPTION3 = ?, Q_OPTION4 = ?, Q_ANSWER = ?, Q_MARK = ? where Q_ID = ?";
		db.execute(sql, [question.title, question.op1, question.op2, question.op3, question.op4, question.answer, question.mark, question.questionId], function(status){
			callback(status);
		});
	},
	delete: function(questionId, callback){
		var sql = "delete from questions where Q_ID = ?";
		db.execute(sql, [questionId], function(status){
			callback(status);
		});
	}
}




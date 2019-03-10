var db = require('./db');

module.exports={
	getByExamId: function(examId, callback){
		var sql = "select * from comments where E_ID = ? ORDER BY C_TIME DESC";
		db.getResult(sql, [examId], function(results){
			callback(results);
		});
	},
	getAll: function(callback){
		var sql = "select * from comments";
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},
	insert: function(comment, callback){
		var sql = "insert into comments values (?, ?, ?, ?)";
		
		db.execute(sql, [comment.userId, comment.commentText, comment.time, comment.examId], function(status){
			callback(status);
		});
	}
}
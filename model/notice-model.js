var db = require('./db');

module.exports={

    get: function(noticeId, callback){
		var sql = "select * from notices where N_ID = ?";
		db.getResult(sql, [noticeId], function(result){
			callback(result);
		});
	},
	getByExamId: function(examId, callback){
		var sql = "select * from notices where E_ID = ?";
		db.getResult(sql, [examId], function(results){
			callback(results);
		});
	},
	getAll: function(callback){
		var sql = "select * from notices";
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},
	insert: function(notice, callback){
		var sql = "insert into notices values ( NULL, ?, ?, ?)";
		
		db.execute(sql, [notice.noticeText, notice.noticeTime, notice.examId], function(status){
			callback(status);
		});
	},
	update: function(examRoom, callback){
		var sql = "update notices set N_ID = ?, N_TEXT = ?, N_TIME = ?, E_ID = ? where N_ID = ?";
		db.execute(sql, [notice.noticeId, notice.noticeText, notice.noticeTime, notice.examId, notice.noticeId], function(status){
			callback(status);
		});
	},
	delete: function(noticeId, callback){
		var sql = "delete from notices where N_ID = ?";
		db.execute(sql, [noticeId], function(status){
			callback(status);
		});
	},
}
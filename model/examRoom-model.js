var db = require('./db');

module.exports={

    get: function(examId, callback){
		var sql = "select * from exam_rooms where E_ID = ?";
		db.getResult(sql, [examId], function(result){
			callback(result);
		});
	},
	getByTeacherId: function(teacherId, callback){
		var sql = "select * from exam_rooms where T_ID = ?";
		db.getResult(sql, [teacherId], function(results){
			callback(results);
		});
	},
	getAll: function(callback){
		var sql = "select * from exam_rooms";
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},
	insert: function(examRoom, callback){
		var sql = "insert into exam_rooms values (NULL, ?, ?, ?, ?, ?)";
		
		db.execute(sql, [examRoom.examTitle, examRoom.examDate, examRoom.examStartTime, examRoom.examEndTime, examRoom.teacherId], function(status){
			callback(status);
		});
	},
	update: function(examRoom, callback){
		var sql = "update exam_rooms set E_ID = ?, E_TITLE = ?, E_DATE = ?, E_START_TIME = ?, E_END_TIME = ?, T_ID = ? where E_ID = ?";
		db.execute(sql, [examRoom.examId, examRoom.examTitle, examRoom.examDate, examRoom.examStartTime, examRoom.examEndTime, examRoom.teacherId, examRoom.examId], function(status){
			callback(status);
		});
	},
	delete: function(examId, callback){
		var sql = "delete from exam_rooms where E_ID = ?";
		db.execute(sql, [examId], function(status){
			callback(status);
		});
	},
}




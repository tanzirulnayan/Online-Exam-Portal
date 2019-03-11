var db = require('./db');

module.exports={
    get: function(teacherId, callback){
		var sql = "select * from support where T_ID = ?";
		db.getResult(sql, [teacherId], function(results){
			callback(results);
		});
	},
	getAll: function(callback){
		var sql = "select * from support";
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},
	insert: function(support, callback){
		var sql = "insert into support values ( ?, ?, ?, ?)";
		
		db.execute(sql, [support.teacherId, support.supportText, support.supportTime, support.supportStatus], function(status){
			callback(status);
		});
	},
	insert2: function(support2, callback){
		var sql = "insert into support values ( ?, ?, ?, ?)";
		
		db.execute(sql, [support2.studentId, support2.supportText, support2.supportTime, support2.supportStatus], function(status){
			callback(status);
		});
	}

     






}




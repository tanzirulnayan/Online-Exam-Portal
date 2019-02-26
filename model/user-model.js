var db = require('./db');

module.exports={

	get: function(userId, callback){
		var sql = "select * from users where U_ID = '"+userId+"'";
		db.getResult(sql, function(result){
			callback(result);
		});
	},
	getAll: function(callback){
		var sql = "select * from users";
		db.getResult(sql, function(results){
			callback(results);
		});
	},
	validate: function(user, callback){
		var sql = "select * from users where U_ID = '"+user.uname+"' and U_PASSWORD='"+user.password+"'";
		db.getResult(sql, function(result){
			callback(result);
		});
	},
	insert: function(user, callback){
		var sql = "insert into users values ('"+user.uname+"','"+user.password+"','"+user.type+"', 'PENDING')";
		db.execute(sql, function(status){
			callback(status);
		});
	},
	update: function(user, callback){
		var sql = "update users set U_ID = '"+user.uname+"', U_PASSWORD = '"+user.password+"', U_TYPE ='"+user.type+"' where U_ID ='"+user.id+"'";
		db.execute(sql, function(status){
			callback(status);
		});
	},
	delete: function(userId, callback){
		var sql = "delete from users where U_ID = '"+userId+"'";
		db.execute(sql, function(status){
			callback(status);
		});
	},
}




var db = require('./db');


module.exports = {
	get: function(userId, callback){
		var sql = "select * from users where U_ID = "+userId;
		db.getResults(sql, function(result){

			if(result.length >0){
				callback(result[0]);
			}else{
				callback([]);
			}
		});
	},
	getAll: function(callback){
		var sql = "select * from users";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	validate: function(user, callback){
		var sql = "select * from users where U_ID = '"+user.uname+"' and U_PASSWORD = '"+user.password+"'";
		db.getResults(sql, function(result){

			if(result.length > 0 ){
				callback(result[0]);
			}else{
				callback([]);
			}
		})
	},
	insert: function(user, callback){
		var sql = "insert into users values(null, '"+ user.uname+"', '"+ user.password+"', '"+ user.type+"', 'PENDING')"
		db.execute(sql, function(success){
			callback(success);
		});
	},
	update: function(user, callback){
		var sql = "update users set U_ID = '"+user.uname+"', U_PASSWORD = '"+user.password+"', U_TYPE = '"+user.type+"' where U_ID ="+user.id;
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	delete: function(user, callback){
		var sql = "delete from users where U_ID ="+user.id;
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}
}
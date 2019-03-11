var db = require('./db');

module.exports={

	get: function(userId, callback){
		var sql = "select * from users where U_ID = ?";
		db.getResult(sql, [userId], function(result){
			callback(result);
		});
		
	},
	getAll: function(callback){
		var sql = "select * from users";
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},

	getPending: function(callback){
		var sql = "select * from users where U_STATUS='PENDING' ";
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},




	validate: function(user, callback){
		var sql = "select * from users where U_ID = ? and U_PASSWORD= ?";
		db.getResult(sql, [user.userId, user.password],function(result){
			callback(result);
		});
	},
	insert: function(user, callback){
		var sql = "insert into users values (? ,? ,? , 'PENDING')";
		db.execute(sql, [user.userId, user.password, user.type],function(status){
			callback(status);
		});
	},
	update: function(user, callback){
		var sql = "update users set U_ID = ?, U_PASSWORD = ?, U_TYPE = ?, U_STATUS = ? where U_ID = ?";
		
		db.execute(sql, [user.userId, user.password, user.type, user.status, user.userId],function(status){
			callback(status);
		});
	},
	delete: function(userId, callback){
		var sql = "delete from users where U_ID = ?";
		db.execute(sql, [userId], function(status){
			callback(status);
		});
	},

    updatestatus: function(userId, callback){
		var sql = "update users set  U_STATUS ='ACTIVE'  where U_ID =?";
		
		db.execute(sql, [userId] ,function(status){
			callback(status);
		});
	},

	getAllSupport: function(callback){
		var sql = "select * from support where S_STATUS ='PENDING' ";
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},

	updatesupport: function(userId, callback){
		var sql = "update support set  S_STATUS ='ACTIVE'  where T_ID =?";
		
		db.execute(sql, [userId] ,function(status){
			callback(status);
		});
	},




  

}




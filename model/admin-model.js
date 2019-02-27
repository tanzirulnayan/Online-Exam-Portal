var db = require('./db');

module.exports={

	get: function(adminId, callback){
		var sql = "select * from admins where A_ID = ?";
		db.getResult(sql, [adminId], function(result){
			callback(result);
		});
	},
	getAll: function(callback){
		var sql = "select * from admins";
		db.getResult(sql, function(results){
			callback(results);
		});
	},
	insert: function(admin, callback){
		var sql = "insert into admins values ( ?, ?, ?, ?, ?, ?)";
		
		db.execute(sql, [admin.adminId, admin.adminName, admin.adminEmail, admin.adminMobile, admin.adminAddress, admin.adminImage], function(status){
			callback(status);
		});
	},
	update: function(admin, callback){
		var sql = "update admins set A_ID = ?, A_NAME = ?, A_EMAIL = ?, A_MOBILE = ?, A_ADDRESS = ?, A_IMAGE = ? where A_ID = ?";
		
		db.execute(sql, [admin.adminId, admin.adminName, admin.adminEmail, admin.adminMobile, admin.adminAddress, admin.adminImage, admin.adminId], function(status){
			callback(status);
		});
	},
	delete: function(adminId, callback){
		var sql = "delete from teachers where T_ID = ?";
		db.execute(sql, [adminId], function(status){
			callback(status);
		});
	},
}




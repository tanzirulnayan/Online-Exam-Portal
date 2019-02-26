var mysql = require('mysql');

var config = {
	host: '127.0.0.1',
	user: 'root',
	password: '',
	database: 'onlineexamportal'
};

//var connection = "";

function getConnection(callback){
	connection = mysql.createConnection(config);
	connection.connect(function(err){
		if(err){
			console.log(err.stack);
		}
		console.log('connection id is: '+ connection.threadId);
	});

	callback(connection);
}

module.exports= {
	getResult: function(sql, callback){		
		getConnection(function(connection){
			connection.query(sql, function(err, result){		
		
			if(err){
					callback([]);
				}else{
					callback(result);
				}
			});

			connection.end(function(error){
				console.log('connection ending ...');
				//console.log('connection ending ...');
			});
		});
	},
	execute: function(sql, callback){		
		getConnection(function(connection){
			connection.query(sql, function(err, status){		
		
				if(err){
					callback(false);
				}else{
					callback(status);
				}
			});

			connection.end(function(error){
				console.log('connection ending ...');
				//console.log('connection ending ...');
			});
		});
	}
}





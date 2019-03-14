var db = require('./db');

module.exports={
    getRankByExamId: function(examId, callback){
		var sql = "SELECT answers.P_ID AS S_ID, SUM(questions.Q_MARK) AS MARKS FROM answers INNER JOIN questions ON answers.Q_ID = questions.Q_ID WHERE answers.E_ID = ? AND answers.ANSWER = questions.Q_ANSWER GROUP BY S_ID ORDER BY MARKS DESC";
		db.getResult(sql, [examId], function(results){
			callback(results);
		});
	}
}




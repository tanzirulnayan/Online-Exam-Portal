$(document).ready(()=>{
    $('#commentButton').click(()=>{  
        var commentText = $('#commentText').val();
        var examId      = $('#examId').val();
        $.ajax({
                url: '/teacher/exam/myExams/view/'+examId+'/'+commentText,
                success: function(response) {
                    if(response)
                    {
                        var view = $('#show');
                        var output = '<span class="login100-form-title">\
                                <h1>Forum</h1>\
                            </span>\
                            <table width="80%" >'
                                for(var i=0; i < response.length; i++){
                                output += '<tr>\
                                    <td>\
                                        <b>'+response[i].U_ID+'</b>\
                                    </td>\
                                </tr>\
                                <tr>\
                                    <td>\
                                        <i>'+response[i].C_TEXT+'</i>\
                                    </td>\
                                </tr>\
                                <tr height="15px"></tr>\
                                '}
                            output += '</table>'
                        view.html(output);          
                    }
                    else{
                        var views = $('#show');
    
                        views.html(
                            'No message yet!'
                        )
                    }
            }    
        });
    });
});
    
    
    
    
    
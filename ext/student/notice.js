$(document).ready(()=>{

    $('#searchbtn').click(()=>{  
        var id = $('#noticeSearch').val();
    
        $.ajax({
                url: '/student/searchExamNotice/' + id ,
                success: function(response) {
                    if(response)
                    {
                        var views = $('#show');
    
                        views.html(
                             '<table border="1" width="400px" class="table table-dark table-hover"\
                             style="font-size:20px">\
                                <tr>\
                                    <th>E_ID</th>\
                                    <th>N_ID</th>\
                                    <th>N_TIME</th>\
                                    <th>N_TEXT</th>\
                                </tr>\
                                <tr>\
                                    <td>'+response.E_ID+'</td>\
                                    <td>'+response.N_ID+'</td>\
                                    <td>'+response.N_TIME+'</td>\
                                    <td>'+response.N_TEXT+'</td>\
                                </tr>\
                            </table>'
                        );
                }
                else{
                        
                var views = $('#show');
    
                views.html(
                    '<div class="container emp-profile">\
                    <h1 align:middle>No Exam Notice</h1>\
                    </div>'
                    )
            
                }
                }  
                    
            
            


            
            
        });
    });
});
    
    
    
    
    
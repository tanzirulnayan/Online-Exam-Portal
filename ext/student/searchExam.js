$(document).ready(()=>{

    $('#searchbtn').click(()=>{  
        var id = $('#examSearch').val();
    
        $.ajax({
                url: '/student/searchExam/' + id ,
                success: function(response) {
                    if(response)
                    {
                        var views = $('#show');
    
                        views.html(
                            '<div class="container emp-profile">\
                                        <div class="tab-content profile-tab" id="myTabContent">\
                                                <div class="row">\
                                                        <div class="col-md-4">\
                                                        <label> \
                                                        Exam Id</label>\
                                                        </div>\
                                                        <div class="col-md-4">\
                                                        <p >'+response.E_ID+'</p>\
                                                        </div>\
                                                </div>\
                                                <div class="row">\
                                                    <div class="col-md-4">\
                                                    <label>Title</label>\
                                                    </div>\
                                                    <div class="col-md-4">\
                                                    <p>'+response.E_TITLE+'</p>\
                                                    </div>\
                                                </div>\
                                                <div class="row">\
                                                    <div class="col-md-4">\
                                                    <label>Exam Date</label>\
                                                    </div>\
                                                    <div class="col-md-4">\
                                                    <p>'+response.E_DATE+'</p>\
                                                    </div>\
                                                </div>\
                                                <div class="row">\
                                                    <div class="col-md-4">\
                                                    <label>Start Time</label>\
                                                    </div>\
                                                    <div class="col-md-4">\
                                                    <p>'+response.E_START_TIME+'</p>\
                                                    </div>\
                                                </div>\
                                                <div class="row">\
                                                    <div class="col-md-4">\
                                                    <label>End Time</label>\
                                                    </div>\
                                                    <div class="col-md-4">\
                                                    <p>'+response.E_END_TIME+'</p>\
                                                    </div>\
                                                    </div>\
                                                <div class="row">\
                                                    <div class="col-md-4">\
                                                    <label>Teacher ID</label>\
                                                    </div>\
                                                    <div class="col-md-4">\
                                                    <p>'+response.T_ID+'</p>\
                                                    </div>\
                                                    </div>\
                                                </div>\
                            </div>\
                        </div>\
                    <input class="login100-form-btn" id="reqJoin" type = "submit" value = "Request to join" />'
                        );          
                }
                else{
                        
                var views = $('#show');
    
                views.html(
                    '<div class="container emp-profile">\
                    <h1 align:middle>Exam not found</h1>\
                    </div>'
                    )
            
                }
                }  
                    
            
            


            
            
        });
    });
});
    
    
    
    
    
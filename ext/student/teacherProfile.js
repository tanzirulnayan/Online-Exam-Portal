$(document).ready(()=>{

    $('#searchbtn').click(()=>{  
        var id = $('#tsearch').val();
    
        $.ajax({
                url: '/student/teacherProfiles/' + id ,
                success: function(response) {
                    if(response)
                    {
                        var views = $('#getall');
    
                        views.html(
                            '<div class="container emp-profile">\
                            <div class="row" >\
                                <div class="col-md-4" >\
                                </div>\
                                <div class="col-md-6">\
                                    <div class="profile-head">\
                                        <h5>\
                                        '+response.T_NAME+'\
                                        </h5>\
                                        <h6>\
                                        TEACHER\
                                        </h6>\
                                    </div>\
                                </div>\
                            </div>\
                            <div class="row">\
                                <div class="col-md-4">\
                                    <div class="profile-img">\
                                    <img src='+response.T_IMAGE+' alt="image" title="myPicture" />\
                                    </div>\
                                </div>\
                                <div class="col-md-8">\
                                    <br><br><br>\
                                        <div class="tab-content profile-tab" id="myTabContent">\
                                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">\
                                                <div class="row">\
                                                        <div class="col-md-6">\
                                                        <label> \
                                                        User Id</label>\
                                                        </div>\
                                                        <div class="col-md-6">\
                                                        <p>'+response.T_ID+'</p>\
                                                        </div>\
                                                </div>\
                                                <div class="row">\
                                                    <div class="col-md-6">\
                                                    <label>Name</label>\
                                                    </div>\
                                                    <div class="col-md-6">\
                                                    <p>'+response.T_NAME+'</p>\
                                                    </div>\
                                                </div>\
                                                <div class="row">\
                                                    <div class="col-md-6">\
                                                    <label>Email</label>\
                                                    </div>\
                                                    <div class="col-md-6">\
                                                    <p>'+response.T_EMAIL+'</p>\
                                                    </div>\
                                                </div>\
                                                <div class="row">\
                                                    <div class="col-md-6">\
                                                    <label>Mobile</label>\
                                                    </div>\
                                                    <div class="col-md-6">\
                                                    <p>'+response.T_MOBILE+'</p>\
                                                    </div>\
                                                </div>\
                                                <div class="row">\
                                                    <div class="col-md-6">\
                                                    <label>Address</label>\
                                                    </div>\
                                                    <div class="col-md-6">\
                                                    <p>'+response.T_ADDRESS+'</p>\
                                                    </div>\
                                                    </div>\
                                                </div>\
                                        </div>\
                                </div>\
                            </div>\
                            <div class="row">\
                                <div class="col-md-4">\
                                    <div class="profile-work">\
                                        <p>Contact</p>\
                                        <a href="#">Chat</a><br/>\
                                    </div>\
                                </div>\
                            </div>\
                            </div>'
                            
                        );          
                }
                else{
                        
                var views = $('#getall');
    
                views.html(
                    '<div class="container emp-profile">\
                    <h1 align:middle>Teacher not found</h1>\
                    </div>'
                    )
            
                }
                }  
                    
            
            


            
            
        });
    });
});
    
    
    
    
    
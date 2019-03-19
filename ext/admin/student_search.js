$(document).ready(()=>{

    $('#searchbtn').click(()=>{  
        var id = $('#ssearch').val();
    
        $.ajax({
                url: '/admin/student_search/' + id ,
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
                                        '+response.S_NAME+'\
                                        </h5>\
                                        <h6>\
                                        STUDENT\
                                        </h6>\
                                    </div>\
                                </div>\
                            </div>\
                            <div class="row">\
                                <div class="col-md-4">\
                                    <div class="profile-img">\
                                    <img src='+response.S_IMAGE+' alt="image" title="myPicture" />\
                                    </div>\
                                </div>\
                                <div class="col-md-06">\
                                    <br><br><br>\
                                        <div class="tab-content profile-tab" id="myTabContent">\
                                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">\
                                                <div class="row">\
                                                        <div class="col-md-6">\
                                                        <label> \
                                                        User Id</label>\
                                                        </div>\
                                                        <div class="col-md-6">\
                                                        <p>'+response.S_ID+'</p>\
                                                        </div>\
                                                </div>\
                                                <div class="row">\
                                                    <div class="col-md-6">\
                                                    <label>Name</label>\
                                                    </div>\
                                                    <div class="col-md-6">\
                                                    <p>'+response.S_NAME+'</p>\
                                                    </div>\
                                                </div>\
                                                <div class="row">\
                                                    <div class="col-md-6">\
                                                    <label>Email</label>\
                                                    </div>\
                                                    <div class="col-md-6">\
                                                    <p>'+response.S_EMAIL+'</p>\
                                                    </div>\
                                                </div>\
                                                <div class="row">\
                                                    <div class="col-md-6">\
                                                    <label>Date of Birth</label>\
                                                    </div>\
                                                    <div class="col-md-6">\
                                                    <p>'+response.S_DOB+'</p>\
                                                    </div>\
                                                </div>\
                                                <div class="row">\
                                                    <div class="col-md-6">\
                                                    <label>Address</label>\
                                                    </div>\
                                                    <div class="col-md-6">\
                                                    <p>'+response.S_ADDRESS+'</p>\
                                                    </div>\
                                                    </div>\
                                                </div>\
                                        </div>\
                                </div>\
                            </div>\
                            \
                                </div>\
                            </div>\
                            </div>'
                            
                        );          
                }
                else{
                        
                var views = $('#getall');
    
                views.html(
                    '<div class="container emp-profile">\
                    <h1 align:middle>No Result Found</h1>\
                    </div>'
                    )
            
                }
                }  
                    
            
            


            
            
        });
    });
});
    
    
    
    
    
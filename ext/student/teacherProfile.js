$(document).ready(()=>{

    $('#searchbtn').click(()=>{  
        var id = $('#tsearch').val();

        $.ajax({
            url: '/student/teacherProfiles/' + id ,
            method:'get',
            success: function(response) {

                alert(response.T_ID +" "+ response.T_NAME+" "+response.T_EMAIL+" "
                +response.T_MOBILE +" "+response.T_ADDRESS);

                var views = $('#getall');

                views.html('<h1>' +response.T_NAME+'</h1>');

                




               

            }
        });
    });
});





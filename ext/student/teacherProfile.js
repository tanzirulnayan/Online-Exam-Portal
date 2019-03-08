$(document).ready(()=>{

    $('#searchbtn').click(()=>{  
        var id = $('#tsearch').val();

        $.ajax({
            url: '/student/teacherProfiles/' + id ,
            method:'get',
            success: function(response) {
               alert(response.T_NAME);
            }
        });
    });
});





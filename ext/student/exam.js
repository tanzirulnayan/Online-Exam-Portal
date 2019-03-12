$(document).ready(()=>{

    $('#getQuestion').click(()=>{  
        
        var box = document.getElementById("show");
        var answer = $('input[name=radio]:checked').val();
        var Q_ID   = document.getElementById("Q_ID").value;
        
        $.ajax({
                url: '/student/exam/' + Q_ID + '/'+ answer ,
                success: function(response) {
                    if(response)
                    {
                        var views = $('#getall');
    
                        views.html(
                            
                            
                        );          
                }
                else{
                        
               
                }
                }  
                    
              
            
        });
    });
});
    
    
    
    
    
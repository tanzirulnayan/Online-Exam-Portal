$(document).ready(()=>{

  $('#getQuestion').click(()=>{  
      
      var box = document.getElementById("show");
      var answer = $('input[name=radio]:checked').val();
      var Q_ID   = document.getElementById("Q_ID").value;
      var E_ID    = window.location.href.split('=')[1] ;
      
      $.ajax({
              url: '/student/exam/' + E_ID + '/' + Q_ID + '/'+ answer ,
              success: function(response) {
                  if(response)
                  {
                    
                      var nextQuestion = $('#show');
             
                    for(var i=1 ; i<=response[i].length ; i++){

                      nextQuestion.html(
                                  '<input type="text" id='+Q_ID+' value='+response[i].Q_ID+'> \
                                  <h1>'+i+'1%> > '+response[i].Q_TITLE+'</h1>\
                                  <label class="container">&nbsp&nbsp&nbsp     '+response[i].Q_OPTION1+'\
                                     <input type="radio" name="radio" value='+response[i].Q_OPTION1+'>\
                                     <span class="checkmark"></span>\
                                   </label>\
                                   <label class="container">&nbsp&nbsp&nbsp     '+response[i].Q_OPTION2+'\
                                     <input type="radio" name="radio" value='+response[i].Q_OPTION2+'>\
                                     <span class="checkmark"></span>\
                                   </label>\
                                   <label class="container">&nbsp&nbsp&nbsp     '+response[i].Q_OPTION3+'\
                                     <input type="radio" name="radio" value='+response[i].Q_OPTION3+'>\
                                     <span class="checkmark"></span>\
                                   </label>\
                                   <label class="container">&nbsp&nbsp&nbsp     '+response[i].Q_OPTION4+'\
                                     <input type="radio" name="radio" value='+response[i].Q_OPTION4+'>\
                                     <span class="checkmark"></span>\
                                   </label>');
                                   
                                  }                   
             }     
          }     
      });
   });
});
  
  
  
  
  
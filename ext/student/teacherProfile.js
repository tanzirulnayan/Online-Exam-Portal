$(document).ready(() => {
    $('#searchbtn').click(() => {
      const requestURL = 'users/' + $('#nameBox').val();
      console.log('making ajax request to:', requestURL);
      // From: http://learn.jquery.com/ajax/jquery-ajax-methods/
      // Using the core $.ajax() method since it's the most flexible.
      // ($.get() and $.getJSON() are nicer convenience functions)
      $.ajax({
        // all URLs are relative to http://localhost:3000/
        url: requestURL,
        type: 'GET',
        dataType : 'json', // this URL returns data in JSON format
        success: (data) => {
          console.log('You received some data!', data);
          if (data.job && data.pet) {
            $('#status').html('Successfully fetched data at URL: ' + requestURL);
            $('#jobDiv').html('My job is ' + data.job);
            $('#petImage').attr('src', data.pet).attr('width', '300px');
          } else {
            $('#status').html('Error: could not find user at URL: ' + requestURL);
            // clear the display
            $('#jobDiv').html('');
            $('#petImage').attr('src', '').attr('width', '0px');
          }
        },
      });
    });
    // $('#allUsersButton').click(() => {
    //   $.ajax({
    //     url: 'users',
    //     type: 'GET',
    //     dataType : 'json',
    //     success: (data) => {
    //       console.log('You received some data!', data);
    //       $('#status').html('All users: ' + data);
    //     },
    //   });
    // });
    // define a generic Ajax error handler:
    // http://api.jquery.com/ajaxerror/
    $(document).ajaxError(() => {
      $('#status').html('Error: unknown ajaxError!');
    });
  });
  
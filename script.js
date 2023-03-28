$(document).ready(function() {
    $('#employee-form').submit(function(e) {
      e.preventDefault();
      $.ajax({
        type: "GET",
        url: "process.php",
        data: $('#employee-form').serialize(),
        success: function(response) {
          alert(response);
        }
      });
    });
  });
  
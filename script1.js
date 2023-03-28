$(document).ready(function() {
    $('#employee-form').submit(function(e) {
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "process.php", // update URL here
        data: $('#employee-form').serialize(),
        success: function(response) {
          alert(response);
        }
      });
    });
  });
  
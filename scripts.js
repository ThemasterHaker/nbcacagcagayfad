$(document).ready(function() {
    $("#signupForm").submit(function(event) {
        event.preventDefault();
        var formData = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "signup.php",
            data: formData,
            success: function(response) {
                alert(response);
            }
        });
    });

    $("#loginForm").submit(function(event) {
        event.preventDefault();
        var formData = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "login.php",
            data: formData,
            success: function(response) {
                alert(response);
            }
        });
    });
});

$(document).ready(function() {
    $('.next-link').on("click", function(){
        alert($('#title').val() + '. ' + $('#firstname').val() + ' ' + $('#middle-initial').val() + '. ' + $('#lastname').val());

        var address = {};
        var data = {};

        address["street"] = "2711 N 1st St";
        address["city"] = "San Jose";
        address["state"] = "CA";
        address["zipCode"] = 95134;

        data["propAdd"] = address;
        data["ownerName"] = "Dr. Gregory O'Brien";
        data["phoneNumber"] = "2384983488";
        data["email"] = "info@itu.edu"

        $.ajax({
            type: "POST",
            url: "https://taxcy.herokuapp.com/chatbot/propertyInfo",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            crossDomain: true,
            dataType: "json",
            success: function(data) {
                alert("Certificate Number: " + data.certNo);
            },
            error: function(jqXHR, status) {
                alert('Error! ' + status.code);
            }
        });
    });
});
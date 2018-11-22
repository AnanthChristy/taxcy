$(document).ready(function() {
    $('.next-link').on("click", function(){
        alert($('#title').val() + '. ' + $('#firstname').val() + ' ' + $('#middle-initial').val() + '. ' + $('#lastname').val());

        var name;
        var data = {};
        var address = {};

        name = $('#title').val() + '. ' + $('#firstname').val() + ' ' + $('#middle-initial').val() + '. ' + $('#lastname').val();

        address["street"] = $('#street').val();
        address["city"] = $('#city').val();
        address["state"] = $('#state').val();
        address["zipCode"] = $('#zipCode').val();

        data["propAdd"] = address;
        data["ownerName"] = name;
        data["phoneNumber"] = $('#phoneNumber').val();
        data["email"] = $('#email').val();

        $.ajax({
            type: "POST",
            url: "https://taxcy.herokuapp.com/chatbot/propertyInfo",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            crossDomain: true,
            dataType: "json",
            success: function(data) {
                alert("Certificate Number: " + data.certNo + ', Name: ' + data.ownerName + ', Street: ' + data.propAdd.street + ', City: ' + data.propAdd.city + ', State: ' + data.propAdd.state + ', ZipCode: ' )+ data.propAdd.zipCode + ', Phone Number: ' + data.phoneNumber + ', Email: ' + data.email;
            },
            error: function(jqXHR, status) {
                alert('Error! ' + status.code);
            }
        });
    });
});
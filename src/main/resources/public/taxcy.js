$(document).ready(function() {
    $('.next-link').on("click", function(){
        alert($('#title').val() + '. ' + $('#firstname').val() + ' ' + $('#middle-initial').val() + '. ' + $('#lastname').val());
    });

    /*
    .ajax({
        type: "POST",
        url: "https://taxcy.herokuapp.com/chatbot/personalInfo"
    });
    */

    $.ajax({
        type: "GET",
        dataType: "json",
        url: "https://taxcy.herokuapp.com/chatbot/getAllPropertyInfo/50e1f1a3-e165-4bda-a291-35a024177c33",
        success: function(data) {
            alert(data);
        },
        error: function() {
            alert('Error!');
        }
    });
});
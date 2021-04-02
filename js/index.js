$(document).ready(function () {
    $('#btn1').click(function () {
        $("div.bg-danger").hide()
        $.ajax({
            type: "GET",
            url: '#',
            success: function () {
                alert("hide all the danger div")
            }
        });
    })
})
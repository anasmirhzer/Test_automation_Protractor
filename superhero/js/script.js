$("#addHero-form").submit(function (event) {

    $("#addhero-Alert").addClass("hide")

    if ($("#heroInput").val() == "") {
        $("#addhero-Alert").removeClass("hide")
        $("#addhero-Alert").text("Please enter a SuperHero name")
    } else {
        $("#hero-list").append("<li class='list-group-item'>" + $("#heroInput").val() + "</li>")
        $("#heroInput").val("")
    }

    event.preventDefault();
});


$("#vote-form").submit(function (event) {

    var movie1Votes = $("#movieVote1").text()
    var movie2Votes = $("#movieVote2").text()
    var movie3Votes = $("#movieVote3").text()
    var movie4Votes = $("#movieVote4").text()
    var movie5Votes = $("#movieVote5").text()

    $("#vote-form").addClass("hide");
    $("#vote-alert").removeClass("hide");

    if ($("#heroMovieRadio1").is(":checked")) {
        movie1Votes = parseInt(movie1Votes) + 1
        $("#movieVote1").text(movie1Votes)

    } else if ($("#heroMovieRadio2").is(":checked")) {

        movie2Votes = parseInt(movie2Votes) + 1
        $("#movieVote2").text(movie2Votes)

    } else if ($("#heroMovieRadio3").is(":checked")) {

        movie3Votes = parseInt(movie3Votes) + 1
        $("#movieVote3").text(movie3Votes)

    } else if ($("#heroMovieRadio4").is(":checked")) {

        movie4Votes = parseInt(movie4Votes) + 1
        $("#movieVote4").text(movie4Votes)

    } else if ($("#heroMovieRadio5").is(":checked")) {

        movie5Votes = parseInt(movie5Votes) + 1
        $("#movieVote5").text(movie5Votes)

    }

    event.preventDefault();
});


$("#search-form").submit(function (event) {
    if ($("#search-box").val() == "") {

    } else if ($("#search-box").val().toLowerCase() == "wolverine") {
        alert("Wolverine is awesome!")
    } else {
        alert("Your search for " + $("#search-box").val() + " returned zero results ")
    }


    event.preventDefault();
});


$("#form-login").submit(function (event) {
    $("#login-alert").addClass("hide")
    if ($("#LoginEmail").val() == "" || $("#LoginPassword").val() == "") {
        $("#login-alert").removeClass("hide")
    } else {
        if ($("#RememberLoginCheck").is(":Checked")) {
            console.log("inside remeber login check condition")
            var email = $("#LoginEmail").text()
            console.log("email",email)
            var password = $("#LoginPassword").text()
            console.log("password",password)
        } else {
            $("#LoginEmail").val("")
            $("#LoginPassword").val("")
        }
        $("#overlay").hide()
    }
    event.preventDefault();
});


function logout() {
    $("#overlay").show()
    $("#LoginEmail").val(email)
    $("#LoginPassword").val(password)
    
}


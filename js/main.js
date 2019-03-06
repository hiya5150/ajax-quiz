//Run jQuery after the document is fully loaded.
$(document).ready(function() {
    //The function that does the stuff.

    $("#btn1").click(function (e) {
        e.preventDefault();

        let currentShow = document.getElementById("name1").value;
        currentShow=currentShow.replace(/\s/g, "+");
        console.log(currentShow);
         $.ajax ('http://api.tvmaze.com/singlesearch/shows?q=' + currentShow + '&embed=episodes', {
            method: "GET",
            dataType: "json"

        })

        //After the data comes back, use this function
            .done(
                function (data) {
                    // Add the name
                    $("name").html("");
                    $('#name').html(data.name);
                    $("#episodeList").html("");
                    // Add the episodes
                    data._embedded.episodes.forEach(function (episode) {
                        $('#episodeList').append('<tr>' +
                            '<td>' + episode.season + '</td>' +
                            '<td>' + episode.number + '</td>' +
                            '<td>' + episode.name + '</td>' +
                            '<td>' + episode.summary + '</td>' +
                            +' </tr>')
                    })
                })
    })

    //Make the AJAX call



})

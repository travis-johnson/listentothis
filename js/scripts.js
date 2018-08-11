$("#show_text").hide();
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    function showPosition(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var location = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.songkick.com/api/3.0/search/locations.json?location=geo:"+ latitude + "," + longitude + "&apikey=vd0DLqbmxEVIfAIR",
            "method": "GET",
            "headers": {
                "Cache-Control": "no-cache",
                "Postman-Token": "67da8043-cb86-4f75-9679-74bf7e1c5e30"
            }
        }
        $.ajax(location).done(function (response) {
            console.log(response.resultsPage.results.location[0].city.displayName);
            $("#show_text").show();
            $("#city_name").append(response.resultsPage.results.location[0].city.displayName);
            

        });
    }
    
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.songkick.com/api/3.0/metro_areas/16391/calendar.json?apikey=vd0DLqbmxEVIfAIR",
            "method": "GET",
            "headers": {
                "Cache-Control": "no-cache",
                "Postman-Token": "0771f4f8-f86e-4f0c-a352-f7dbc30e4e8b"
            }
        }
        $.ajax(settings).done(function (data) {
            var isconcert = data.resultsPage.results.event;
            var concerts = $("#concerts");
            // console.log(data);
            $.each(isconcert, function(index,value){
                // console.log(value);
                if(value.type === "Concert"){
                    concerts.append("<li>"+ value.displayName + "</li>");
                }
            });

        });










// var artist = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://api.spotify.com/v1/search?q=black%20mountain&type=artist",
//     "method": "GET",
//     "headers": {
//         "Authorization": "Bearer BQCr7v-5b5pT2m5Zd1I_MMsLvitidVwzL2gCJQd0XOr2icZ4p_EdiHl3U4vapE1keAA3BP4Tb48s1Q3Z7bSIdTJg9_2USrSuo54PshOppZtgZ-idz4H_1N7oNb0WYjtqgStgF9r6gUvqlqE",
//         "Cache-Control": "no-cache",
//         "Postman-Token": "e6d66410-fb1f-48b7-85a0-6550a46fb3df"
//     }
// }
//
// $.ajax(artist).done(function (response) {
//     console.log(response);
// });
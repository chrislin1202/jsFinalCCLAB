var city ="";//means city type is a empty string
var state = "";
var APIKey = "59f4e335b8c5390e";

var d = new Date();
$(".demo").html(d.toDateString());

$(document).on('DOMContentLoaded', function () {
   q = "finger guns"; // search query

   request = new XMLHttpRequest;
   request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+q, true);

   request.onload = function() {
      if (request.status >= 200 && request.status < 400){
         data = JSON.parse(request.responseText).data.image_url;
         console.log(data);
         $("#giphyme").html('<center><img src = "'+ data +'"  title="GIF via Giphy"></center>');
      } else {
         console.log('reached giphy, but API returned an error');
       }
   };

   request.onerror = function() {

      console.log('connection error');
   };

   request.send();
});

var loadWeather = function(response){

    if(response.response.error){
        alert(response.response.error.description);
        return;
    }

    var thisCity = response.current_observation.display_location.city;
    var temp = response.current_observation.temp_f + "°F";
    var cel = (response.current_observation.temp_f -32)*(5/9);
    var celT = cel.toFixed(1) + "°C";
    var weather = response.current_observation.weather;
    var icon = response.current_observation.icon_url;

    console.log("The current weather in " + thisCity + " is " + weather + ' with a temperature of ' + temp);

    $(".temperature").text(temp + " / " + celT);
    $(".weather").text(weather);
    $(".currentCity").val(thisCity);
    $(".weatherIcon").html('<img src="'+ icon + '">');

    var tempInt = Math.ceil(response.current_observation.temp_f);
    var tempRemap = mapRange(tempInt, 0, 134, 180, 360);
    var widgetcolor = getTempColor(tempRemap);

    console.log(widgetcolor);

    $('body').animate({ backgroundColor : widgetcolor}, 100);
    // $('#submit').animate({ backgroundColor : widgetcolor}, 100);
    // $('.currentCity').animate({ backgroundColor : widgetcolor}, 100);
    // $('.currentState').animate({ backgroundColor : widgetcolor}, 100);

    if(temp >= "104"){

        q = "on fire"; // search query

       request = new XMLHttpRequest;
       request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+q, true);

       request.onload = function() {
          if (request.status >= 200 && request.status < 400){
            data = JSON.parse(request.responseText).data.image_url;
             console.log(data);
             $("#giphyme").html('<center><img src = "'+data+'"  title="GIF via Giphy"></center>');
          } else {
             console.log('reached giphy, but API returned an error');
            }
       };

       request.onerror = function() {

          console.log('connection error');
       };

       request.send();
    }

    if(temp >= "86" && temp <"104"){
        q = "summer"; // search query

       request = new XMLHttpRequest;
       request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+q, true);

       request.onload = function() {
          if (request.status >= 200 && request.status < 400){
            data = JSON.parse(request.responseText).data.image_url;
             console.log(data);
             $("#giphyme").html('<center><img src = "'+data+'"  title="GIF via Giphy"></center>');
          } else {
             console.log('reached giphy, but API returned an error');
            }
       };

       request.onerror = function() {

          console.log('connection error');
       };

       request.send();
    }

    if(temp >= "68" && temp < "86"){
        q = "cooling"; // search query

       request = new XMLHttpRequest;
       request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+q, true);

       request.onload = function() {
          if (request.status >= 200 && request.status < 400){
            data = JSON.parse(request.responseText).data.image_url;
             console.log(data);
             $("#giphyme").html('<center><img src = "'+data+'"  title="GIF via Giphy"></center>');
          } else {
             console.log('reached giphy, but API returned an error');
            }
       };

       request.onerror = function() {

          console.log('connection error');
       };

       request.send();
    }

    if(temp >= "50" && temp < "68"){
        q = "windy wind"; // search query

       request = new XMLHttpRequest;
       request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+q, true);

       request.onload = function() {
          if (request.status >= 200 && request.status < 400){
            data = JSON.parse(request.responseText).data.image_url;
             console.log(data);
             $("#giphyme").html('<center><img src = "'+data+'"  title="GIF via Giphy"></center>');
          } else {
             console.log('reached giphy, but API returned an error');
            }
       };

       request.onerror = function() {

          console.log('connection error');
       };

       request.send();
    }

    if(temp >= "32" && temp < "50"){
        q = "cold"; // search query

       request = new XMLHttpRequest;
       request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+q, true);

       request.onload = function() {
          if (request.status >= 200 && request.status < 400){
            data = JSON.parse(request.responseText).data.image_url;
             console.log(data);
             $("#giphyme").html('<center><img src = "'+data+'"  title="GIF via Giphy"></center>');
          } else {
             console.log('reached giphy, but API returned an error');
            }
       };

       request.onerror = function() {

          console.log('connection error');
       };

       request.send();
    }

    if(temp < "32"){
        q = "freezing cold"; // search query

       request = new XMLHttpRequest;
       request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+q, true);

       request.onload = function() {
          if (request.status >= 200 && request.status < 400){
            data = JSON.parse(request.responseText).data.image_url;
             console.log(data);
             $("#giphyme").html('<center><img src = "'+data+'"  title="GIF via Giphy"></center>');
          } else {
             console.log('reached giphy, but API returned an error');
            }
       };

       request.onerror = function() {

          console.log('connection error');
       };

       request.send();
    };

};

function mapRange(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}



var getTempColor = function(hue){
    return 'hsl(' + hue + ', 22%, 23%)';
}


var getWeather = function(){

    var thisURL = 'http://api.wunderground.com/api/' + APIKey +'/conditions/q/' + state + "/" + city + ".json"

    $.ajax({
        url: thisURL,
        dataType: "jsonp",
        success: function(response){ // if it succeed, call function response, and then pass the value to loadWeather
            loadWeather(response);
        }
    });
};

var setLocation = function(){
    city = $(".currentCity").val();//get the currentCity value and give it to variable:city
    if(city == null || city == ""){
        alert("you need to list a city");
        return;
    };
    state = $(".currentState").val();
    console.log("You want the weather for " + city + "," + state + "?");
    getWeather();

};

var init = function(){
    $("#submit").click(function(e){
    //run whatever code that's inside of this function, when click the "submit" button
        e.preventDefault();
        setLocation();
    });

    $(".currentCity").click(function(){
        $(".currentCity").val("");
    })

}

$(document).ready(function(){
    init();
    $(".currentCity").val("Type in a city");
});




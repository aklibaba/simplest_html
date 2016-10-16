/**
 * Created by SAMSUNG on 06.10.2016.
 */
var callbackFunction = function (data)
{
    var channel = data.query.results.channel;
    var wind = channel.wind;
//        var temp = channel.item.condition.temp;
    var location = channel.location;
    var weatherBox = document.getElementById('weather');

//        weatherBox.innerHTML = "the temperature today in " + location + " is " + temp + "<br> and the wind is "  + wind;
    weatherBox.innerHTML = "the wind is " + wind + " and location is" + location;

};


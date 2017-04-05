$.getJSON("http://freegeoip.net/json/", function(data) {
      
        var country = data.country_name;
        var city = data.city;
        var ipy = data.ip;
        var cod = data.country_code;
        var reg = data.region_name;
        var cc = "flag-icon flag-icon-"+data.country_code.toLowerCase(); // now we neeed to add dynamically this class in html
        var yourLat = data.latitude;
        var yourLong = data.longitude;
        
    $("#con").text(country);
    $("#cit").text(city);
    $("#ipy").text(ipy);
    $("#cod").text(cod);
    $("#reg").text(reg);
    $("#flag").addClass(cc);
    
    var yourPosition = new google.maps.LatLng(/*{lat: -34, lng: 151}*/yourLat, yourLong); 
    
    var mapOptions = {
        //this two only required...
        zoom: 10,    // check out this link for info about zoom: 1: World 5: Landmass/continent 10: City 15: Streets 20: Buildings
                     // https://developers.google.com/maps/documentation/javascript/tutorial
        
        center: yourPosition,
        disableDefaultUI: true,
        /*styles: [{"stylers":[{"hue":"#ff1a00"},{"invert_lightness":true},{"saturation":-100},{"lightness":25},{"gamma":0.5}]}]*/
        styles: [{"stylers":[{"hue":"#blue"},{"invert_lightness":true},{"saturation":10},{"lightness":40},{"gamma":1}]}]
    }
    var map =  new google.maps.Map(document.getElementById("map"), mapOptions);
});
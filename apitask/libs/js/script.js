
$('#btnTz').click(function() {

  $.ajax({
    url: "libs/php/getTimeZone.php",
    type: 'POST',
    dataType: 'json',
    data: {
      lat: $('#tzLat').val(),
      lng: $('#tzLng').val()
    },
    success: function(result) {
      console.log(JSON.stringify(result));

      if (result.status.name == "success") {
        $('#txtCountry').html(result['data']['countryName']);
        $('#txtTime').html(result['data']['time']);
      }
    },
    error: function(jqXHR, textStatus, errorThrown) {

    }
  });

});




$('#btnWeather').click(function() { 
  $.ajax({
    url: "libs/php/getWeather.php",
    type: 'POST',
    dataType: 'json',
    data: {
      lat: $('#wLat').val(),
      lng: $('#wLng').val()
    },
    success: function(result) {
      console.log(JSON.stringify(result));

      if (result.status.name == "success") {
        $('#txtTemp').html(result['data']['weatherObservation']['temperature']);
        $('#txtStation').html(result['data']['weatherObservation']['stationName']);
      }
    },
    error: function(jqXHR, textStatus, errorThrown) {
      
    }
  }); 
});






$('#btnEarth').click(function() {

  $.ajax({
    url: "libs/php/getEarthquakes.php",
    type: 'POST',
    dataType: 'json',
    data: {
      north: $('#eqNorth').val(),
      south: $('#eqSouth').val(),
      east: $('#eqEast').val(),
      west: $('#eqWest').val()
    },
    success: function(result) {
      console.log(JSON.stringify(result));

      if (result.status.name == "success") {
        
        $('#txtMag').html(result['data'][0]['magnitude']);
      }
    },
    error: function(jqXHR, textStatus, errorThrown) {
      
    }
  }); 

});


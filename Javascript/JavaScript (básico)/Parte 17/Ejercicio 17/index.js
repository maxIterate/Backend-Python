function initMap() {
    // The location of Death valley
    const deathValley = { lat: 36.46832650723282, lng: -117.11877858919874 };
    // The location of Atacama Desert
    const atacamaDesert = { lat: -23.807838556917385, lng: -69.11431306810634 };
    // The location of El Leoncito
    const elLeoncito = { lat: -31.796570142809, lng: -69.37433406269295 }

    // The marker, positioned at Death Valley
    const valleyMarker = new google.maps.Marker({
      position: deathValley,
      map: map,
    });

    // The marker, positioned at Atacama Desert
    const atacamaMarker = new google.maps.Marker({
        position: atacamaDesert,
        map: map,
    });

    // The marker, positioned at El Leoncito
    const leoncitoMarker = new google.maps.Marker({
        position: elLeoncito,
        map: map,
    });
}
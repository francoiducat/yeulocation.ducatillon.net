let map;

async function initGoogleMap(mapConfig) {
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // Map Options
  const mapOptions = {
    center: { lat: mapConfig.map.lat, lng: mapConfig.map.lng },
    zoom: mapConfig.map.zoom,
    mapTypeId: mapConfig.map.type,
    mapId: mapConfig.map.id,
  };

  // The map
  map = new Map(document.getElementById("map"), mapOptions);

  const genetsOptions = {
    map,
    position: {
      lat: mapConfig.markers[0].lat,
      lng: mapConfig.markers[0].lng,
    },
    title: mapConfig.markers[0].title,
  };

  const plantesOptions = {
    map,
    position: {
      lat: mapConfig.markers[1].lat,
      lng: mapConfig.markers[1].lng,
    },
    title: mapConfig.markers[1].title,
  };

  const contentGenets =
    "<h3>" +
    genetsOptions.title +
    "</h3>" +
    "<p>" +
    mapConfig.markers[0].description +
    "</p>";

  const contentPlantes =
    "<h3>" +
    plantesOptions.title +
    "</h3>" +
    "<p>" +
    mapConfig.markers[1].description +
    "</p>";

  const infowindowGenets = new google.maps.InfoWindow({
    content: contentGenets,
    ariaLabel: genetsOptions.title,
  });

  const infowindowPlantes = new google.maps.InfoWindow({
    content: contentPlantes,
    ariaLabel: plantesOptions.title,
  });

  const genetsMarker = new AdvancedMarkerElement(genetsOptions);
  const plantesMarker = new AdvancedMarkerElement(plantesOptions);

  infowindowGenets.open({
    anchor: genetsMarker,
    map,
  });

  genetsMarker.addListener("click", () => {
    infowindowGenets.open({
      anchor: genetsMarker,
      map,
    });
  });

  plantesMarker.addListener("click", () => {
    infowindowPlantes.open({
      anchor: plantesMarker,
      map,
    });
  });
}

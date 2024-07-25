maptilersdk.config.apiKey = mapApi;

const map = new maptilersdk.Map({
  container: "map", // container's id or the HTML element to render the map
  style: maptilersdk.MapStyle.STREETS,
  center: mapCoordinates, // starting position [lng, lat]
  zoom: 9, // starting zoom
});

const marker = new maptilersdk.Marker({
  color: "red",
  style: maptilersdk.MapStyle.STREETS,
})
  .setLngLat(mapCoordinates)
  .addTo(map)
  .setPopup(
    new maptilersdk.Popup()
      .setOffset(25)
      .setHTML("<p><b>Exact Location will be provided after Booking</b></p>")
  ); // add popup

 
/* js/script.js */

/* =========================
   HOMEPAGE IMAGE SLIDER
   ========================= */

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("slider");

  if (slider) {
    const images = [
      "media/IMG_0875.jpg",
      "media/IMG_0872.jpg",
      "media/dog_3.jpg",
      "media/IMG_1040.jpg"
    ];

    let current = 0;

    setInterval(function () {
      current++;
      if (current >= images.length) {
        current = 0;
      }
      slider.src = images[current];
    }, 3000);
  }
});


/* =========================
   GOOGLE MAPS PAGE
   ========================= */

function initMap() {
  const mapElement = document.getElementById("map");

  if (!mapElement) {
    return;
  }

  const chicago = { lat: 41.8781, lng: -87.6298 };

  const map = new google.maps.Map(mapElement, {
    zoom: 11,
    center: chicago,
    mapTypeId: "roadmap"
  });

  /* Marker 1 */
  const marker1 = new google.maps.Marker({
    position: chicago,
    map: map,
    title: "Downtown Chicago"
  });

  const info1 = new google.maps.InfoWindow({
    content: "<h3>Downtown Chicago</h3><p>The heart of the city.</p>"
  });

  marker1.addListener("click", function () {
    info1.open(map, marker1);
  });

  /* Marker 2 */
  const navyPier = { lat: 41.8917, lng: -87.6078 };

  const marker2 = new google.maps.Marker({
    position: navyPier,
    map: map,
    title: "Navy Pier"
  });

  const info2 = new google.maps.InfoWindow({
    content: "<h3>Navy Pier</h3><p>A popular Chicago attraction.</p>"
  });

  marker2.addListener("click", function () {
    info2.open(map, marker2);
  });
}

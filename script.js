document.addEventListener("DOMContentLoaded", () => {
  const map = L.map("map").setView([-23.55052, -46.633309], 12);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  const points = [
    { lat: -23.55052, lng: -46.633309, name: "Ponto de Coleta 1" },
    { lat: -23.55152, lng: -46.634309, name: "Ponto de Coleta 2" },
  ];

  points.forEach((point) => {
    L.marker([point.lat, point.lng])
      .addTo(map)
      .bindPopup(point.name)
      .openPopup();
  });

  const searchInput = document.getElementById("search");
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    points.forEach((point) => {
      if (point.name.toLowerCase().includes(query)) {
        map.setView([point.lat, point.lng], 14);
      }
    });
  });
});

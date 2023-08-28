// viewFlights.js

document.getElementById("loadFlights").addEventListener("click", function() {
    fetch('/flights')
    .then(response => response.json())
    .then(data => {
        console.log(data);
      let output = '<h2>Flights:</h2>';
      data.forEach(flight => {
        output += `
          <div>
            <h3>${flight.name}</h3>
            <p>Tier Points: ${flight.tierPoints}</p>
            <p>Avios: ${flight.avios}</p>
          </div>
        `;
      });
      document.getElementById("flightsList").innerHTML = output;
    })
    .catch(error => console.error('Error fetching data:', error));
  });
  
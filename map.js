// Initialize the map
function initMap(donorLocation) {
    var map = L.map('map').setView(donorLocation, 13);

    // Set up the OpenStreetMap layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a marker at donor's location
    L.marker(donorLocation).addTo(map)
        .bindPopup('Donor Location')
        .openPopup();
}

// Fetch donor location from backend
function fetchDonorLocation(donorId) {
    fetch(http://localhost:3000/donor-location/${donorId})
        .then(response => response.json())
        .then(data => {
            // Initialize map with the fetched donor location
            const donorLocation = [data.latitude, data.longitude];
            initMap(donorLocation);
        })
        .catch(error => console.error('Error fetching donor location:', error));
}

// When the page loads, fetch donor location (Example: donor ID 1)
document.addEventListener('DOMContentLoaded', function() {
    fetchDonorLocation(1);  // Change the ID as needed
});

// Handle the form submission to update recipient information
document.getElementById('recipientForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the values from the form input fields
    var name = document.getElementById('name').value;
    var contact = document.getElementById('contact').value;

    // Update the recipient information displayed on the page
    document.getElementById('recipientName').textContent = name;
    document.getElementById('recipientContact').textContent = contact;
});
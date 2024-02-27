document.addEventListener("DOMContentLoaded", function() {
    // Fetch data from NASA API
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(response => response.json())
        .then(data => {
            // Update the HTML content with the relevant data
            displayNasaData(data);
        })
        .catch(error => {
            console.error('Error fetching NASA data:', error);
        });
});

function displayNasaData(data) {
    const nasaDataContainer = document.getElementById('nasa-data-container');

    // Display the title
    const titleElement = document.createElement('h2');
    titleElement.textContent = data.title;
    nasaDataContainer.appendChild(titleElement);

    // Display the date
    const dateElement = document.createElement('p');
    dateElement.textContent = `Date: ${data.date}`;
    nasaDataContainer.appendChild(dateElement);

    // Display the explanation
    const explanationElement = document.createElement('p');
    explanationElement.textContent = data.explanation;
    nasaDataContainer.appendChild(explanationElement);

    // Display the image
    if (data.media_type === 'image') {
        const imageElement = document.createElement('img');
        imageElement.src = data.url;
        imageElement.alt = data.title;
        nasaDataContainer.appendChild(imageElement);
    } else {
        // Handle other media types if needed
        const unsupportedMediaTypeElement = document.createElement('p');
        unsupportedMediaTypeElement.textContent = 'Unsupported media type';
        nasaDataContainer.appendChild(unsupportedMediaTypeElement);
    }
}


// Select the form and the portfolio items container
const portfolioForm = document.getElementById('portfolioForm');
const portfolioItems = document.getElementById('portfolioItems');

// Listen for form submissions
portfolioForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get the input values
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const imageFile = document.getElementById('image').files[0]; // Get the image file

    // Check if an image was selected
    if (imageFile) {
        const reader = new FileReader();

        // When the image is loaded, display it
        reader.onload = function(e) {
            const imageUrl = e.target.result; // This is the image's base64 URL

            // Call the function to add the portfolio item with the image
            addPortfolioItem(title, description, imageUrl);
        };

        // Read the image file as a data URL
        reader.readAsDataURL(imageFile);
    } else {
        alert("Please select an image file.");
    }

    // Clear the form after submission
    portfolioForm.reset();
});

// Function to add a portfolio item dynamically
function addPortfolioItem(title, description, imageUrl) {
    // Create a new card for the portfolio item
    const portfolioItem = `
        <div class="col-md-6">
            <div class="card portfolio-card">
                <img src="${imageUrl}" class="card-img-top" alt="${title}">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${description}</p>
                </div>
            </div>
        </div>
    `;

    // Insert the new item into the portfolio items container
    portfolioItems.innerHTML += portfolioItem;
}



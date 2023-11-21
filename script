// script.js
document.getElementById('foodInput').addEventListener('input', function(e) {
    // Autocomplete functionality
    // You'll need a list of top 100 Thanksgiving foods
    // For simplicity, let's say you have it in an array `thanksgivingFoods`
    let input = e.target.value;
    let suggestions = thanksgivingFoods.filter(food => food.toLowerCase().startsWith(input.toLowerCase()));
    
    // Display these suggestions (you might want to create a dropdown or similar)
});

function addFood() {
    // Function to add food to the list
    let food = document.getElementById('foodInput').value;
    let list = document.getElementById('signupList');
    list.innerHTML += '<p>' + food + ' - Your Name</p>'; // Replace 'Your Name' with the user's name if available

    // Clear the input field
    document.getElementById('foodInput').value = '';
}

// Example array, replace it with real data
const thanksgivingFoods = ["Turkey", "Stuffing", "Cranberry Sauce", ...]; // top 100 foods

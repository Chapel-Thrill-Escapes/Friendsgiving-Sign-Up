// Initialize the list from LocalStorage
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('foodList')) {
        document.getElementById('signupList').innerHTML = localStorage.getItem('foodList');
    }
});

function addFood() {
    let food = document.getElementById('foodInput').value;
    let list = document.getElementById('signupList');
    let newItem = '<p>' + food + ' - Your Name</p>'; // Replace 'Your Name' with the user's name if available

    list.innerHTML += newItem;

    // Store the updated list in LocalStorage
    localStorage.setItem('foodList', list.innerHTML);

    // Clear the input field
    document.getElementById('foodInput').value = '';
}

// Example array for autocomplete, replace it with real data
const thanksgivingFoods = ["Turkey", "Stuffing", "Cranberry Sauce", ...]; // top 100 foods

document.getElementById('foodInput').addEventListener('input', function(e) {
    // Implement autocomplete functionality here
});

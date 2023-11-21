// Example names for autocomplete. Replace with actual names or fetch from a source.
const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah", "Ivy", "Jack"];

function filterNames() {
    let input = document.getElementById('nameInput');
    let filter = input.value.toUpperCase();
    let suggestions = document.getElementById('nameSuggestions');
    suggestions.innerHTML = '';

    if (!filter) {
        suggestions.style.display = "none";
        return;
    }

    names.forEach(function(name) {
        if (name.toUpperCase().indexOf(filter) > -1) {
            let div = document.createElement("div");
            div.innerHTML = name;
            div.onclick = function() {
                input.value = name;
                suggestions.style.display = "none";
            };
            suggestions.appendChild(div);
        }
    });
    suggestions.style.display = "block";
}

function loadSignUpList() {
  fetch('https://script.google.com/macros/s/AKfycby8WUivfYIMfXMziR-hF4zllyPfZn5P9m5asHub8lFilUcmC15fDEbS1eLzk8ZDJvC3/exec')
    .then(response => response.text())
    .then(html => {
      document.getElementById('signupList').innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}

// Call this function when the page loads
document.addEventListener('DOMContentLoaded', function() {
  loadSignUpList();
});

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

function addFood() {
    let name = document.getElementById('nameInput').value;
    let food = document.getElementById('foodInput').value;
    if (food && name) {
        google.script.run.withSuccessHandler(function(response) {
            console.log(response);
        }).addFoodToSheet(food, name);
    }
    document.getElementById('foodInput').value = '';
    document.getElementById('nameInput').value = '';
    document.getElementById('nameSuggestions').style.display = "none";
}

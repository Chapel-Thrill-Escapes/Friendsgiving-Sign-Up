function addFood() {
    let food = document.getElementById('foodInput').value;
    if (food) {
        google.script.run.withSuccessHandler(function(response) {
            console.log(response);
        }).addFoodToSheet(food);
    }
    document.getElementById('foodInput').value = '';
}

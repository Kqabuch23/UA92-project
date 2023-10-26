// my own code
document.getElementById("recipeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var recipeName = document.getElementById("recipeName").value;
    var ingredients = document.getElementById("ingredients").value;
    var instructions = document.getElementById("instructions").value;


    alert("Recipe submitted!\nName: " + recipeName + "\nIngredients: " + ingredients + "\nInstructions: " + instructions);
});
// my own code
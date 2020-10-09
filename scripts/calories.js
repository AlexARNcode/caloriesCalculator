function calculateCalories(){

const height = document.getElementById('heigth').value / 100;
const weight = document.getElementById('weight').value;
const age = document.getElementById('age').value;
const sex = document.getElementById('sex').value;
let metabolism;

// Basal Metabolism depending sex
if (sex == "Femme"){
     metabolism = (9.740 * weight + 172.9 * height - 4.737 * age + 667.051).toFixed(0);
}
else {
     metabolism = (13.707 * weight + 492.3 * height - 6.673 * age + 77.607).toFixed(0);
}


// Output for end user
let output = "Metabolisme de base pour " + sex + " : " + metabolism;

document.getElementById("output").innerHTML = output;
}
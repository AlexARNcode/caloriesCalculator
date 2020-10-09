function calculateCalories(){

const height = document.getElementById('heigth').value / 100;
const weight = document.getElementById('weight').value;
const age = document.getElementById('age').value;
const gender = document.getElementById('gender').value;
let metabolism;

// Basal Metabolism calculation depending gender
if (gender == "Femme"){
     metabolism = (9.740 * weight + 172.9 * height - 4.737 * age + 667.051).toFixed(0);
}
else {
     metabolism = (13.707 * weight + 492.3 * height - 6.673 * age + 77.607).toFixed(0);
}

// Daily calories intake needed depending on physical activity
const sedentary = (metabolism * 1.2).toFixed(0);
const lightlyActive = (metabolism * 1.375).toFixed(0);
const active = (metabolism * 1.55).toFixed(0);
const reallyActive = (metabolism * 1.725).toFixed(0);
const extremelyActive = (metabolism * 1.9).toFixed(0);


// Output for end user
let output ="<h2>Métabolisme de base</h2>";
output += `<p class="lead">Metabolisme de base pour <strong>${gender}</strong> : <strong>${metabolism} kilocalories par jour.</strong><br> C'est le nombre de kilocalories que dépense votre corps au repos.</p>`;

output += "<h2>Calories à consommer quotidiennement selon votre profil</h2>";
output += `<ul class="list-group"><li class="list-group-item">Sédentaire : ${sedentary} Kcal / jour</li>`;
output += `<li class="list-group-item">Légèrement actif (sport 1 à 3 fois par semaine) : ${lightlyActive} Kcal / jour</li>`;
output += `<li class="list-group-item">Actif (sport 3 à 5 fois par semaine) : ${active} Kcal / jour</li>`;
output += `<li class="list-group-item">Très actif (sport quotidien)  : ${reallyActive} Kcal / jour</li>`;
output += `<li class="list-group-item">Extrêmement actif (travail extrêmement physique ou sportif de haut niveau) : ${extremelyActive} Kcal / jour</li></ul>`;

document.getElementById("output").innerHTML = output;
}
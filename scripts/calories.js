const app = {
     init: function () {
          // Event listeners
          app.addAllEventListeners();
     },

     addAllEventListeners: function () {
          // Calculate calories Form listener on Submit
          const calculateKcalFormElement = document.getElementById('calculateKcalForm');
          calculateKcalFormElement.addEventListener('submit', app.handleCalculateKcalFormElement);
     },

     handleCalculateKcalFormElement: function (evt) {
          // Avoid page refresh on submit
          evt.preventDefault();
          // Calculate calories and display them on the page
          app.calculateCalories();
     },

     calculateCalories() {
          // Calculations
          const height = document.getElementById('heigth').value / 100;
          const weight = document.getElementById('weight').value;
          const age = document.getElementById('age').value;
          const gender = document.getElementById('gender').value;
          let metabolism;

          // Functions
          function womanBasalMetabolism(weight, height, age) {
               const womanBasalMetabolism = (9.740 * weight + 172.9 * height - 4.737 * age + 667.051).toFixed(0);
               return womanBasalMetabolism;
          }

          function manBasalMetabolism(weight, height, age) {
               const manBasalMetabolism = (13.707 * weight + 492.3 * height - 6.673 * age + 77.607).toFixed(0);
               return manBasalMetabolism;
          }

          // Basal Metabolism calculation depending gender
          if (gender == "Femme") {
               metabolism = womanBasalMetabolism(weight, height, age);
          } else {
               metabolism = manBasalMetabolism(weight, height, age);
          }

          // Daily calories intake needed depending on physical activity
          const sedentary = (metabolism * 1.2).toFixed(0);
          const lightlyActive = (metabolism * 1.375).toFixed(0);
          const active = (metabolism * 1.55).toFixed(0);
          const reallyActive = (metabolism * 1.725).toFixed(0);
          const extremelyActive = (metabolism * 1.9).toFixed(0);


          // Output for end user
          const outputElement = document.getElementById('output');
          const outputTemplate = document.getElementById('outputTemplate');

          // Clone the template
          const templateClone = outputTemplate.content.cloneNode(true);

          // Modify the template values
          templateClone.getElementById('gender').textContent = gender;
          templateClone.getElementById('BasalMetabolismKcalPerDay').textContent = metabolism;

          templateClone.getElementById('sedentaryKcalPerDay').textContent = sedentary;
          templateClone.getElementById('lightlyActiveKcalPerDay').textContent = lightlyActive;
          templateClone.getElementById('activeKcalPerDay').textContent = active;
          templateClone.getElementById('veryActiveKcalPerDay').textContent = reallyActive;
          templateClone.getElementById('extremlyActiveKcalPerDay').textContent = extremelyActive;

          // Reset the output area (to avoid repetition)
          outputElement.innerHTML = '';
          // Display the template on the page
          outputElement.appendChild(templateClone);
     },
}

document.addEventListener('DOMContentLoaded', app.init);
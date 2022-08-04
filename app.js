// https://calculator.swiftutors.com/normal-force-calculator.html

// the results are false i think Math.cos isnot working

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const normalForceRadio = document.getElementById('normalForceRadio');
const massoftheObjectRadio = document.getElementById('massoftheObjectRadio');
const accelerationofGravityRadio = document.getElementById('accelerationofGravityRadio');
const angleofInclinationRadio = document.getElementById('angleofInclinationRadio');

let normalForce;
let massoftheObject = v1;
let accelerationofGravity = v2;
let angleofInclination = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

normalForceRadio.addEventListener('click', function() {
  variable1.textContent = '(m) Mass of the Object (kg)';
  variable2.textContent = '(g) Acceleration of Gravity (m/s²)';
  variable3.textContent = '(x) Angle of Inclination (degrees)';
  massoftheObject = v1;
  accelerationofGravity = v2;
  angleofInclination = v3;
  result.textContent = '';
});

massoftheObjectRadio.addEventListener('click', function() {
  variable1.textContent = '(N) Normal Force (N)';
  variable2.textContent = '(g) Acceleration of Gravity (m/s²)';
  variable3.textContent = '(x) Angle of Inclination (degrees)';
  normalForce = v1;
  accelerationofGravity = v2;
  angleofInclination = v3;
  result.textContent = '';
});

accelerationofGravityRadio.addEventListener('click', function() {
  variable1.textContent = '(N) Normal Force (N)';
  variable2.textContent = '(m) Mass of the Object (kg)';
  variable3.textContent = '(x) Angle of Inclination (degrees)';
  normalForce = v1;
  massoftheObject = v2;
  angleofInclination = v3;
  result.textContent = '';
});

angleofInclinationRadio.addEventListener('click', function() {
  variable1.textContent = '(N) Normal Force (N)';
  variable2.textContent = '(m) Mass of the Object (kg)';
  variable3.textContent = '(g) Acceleration of Gravity (m/s²)';
  normalForce = v1;
  massoftheObject = v2;
  accelerationofGravity = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(normalForceRadio.checked)
    result.textContent = `Normal Force = ${computeNormalForce().toFixed(2)} N`;

  else if(massoftheObjectRadio.checked)
    result.textContent = `Mass of the Object = ${computeMassoftheObject().toFixed(2)} kg`;

  else if(accelerationofGravityRadio.checked)
    result.textContent = `Acceleration of Gravity = ${computeAccelerationofGravity().toFixed(2)} m/s²`;

  else if(angleofInclinationRadio.checked)
    result.textContent = `Angle of Inclination = ${computeAngleofInclination().toFixed(2)} degrees`;
})

// calculation

function computeNormalForce() {
  return Number(massoftheObject.value) * Number(accelerationofGravity.value) * Math.cos(Number(angleofInclination.value));
}

function computeMassoftheObject() {
  return Number(normalForce.value) / (Number(accelerationofGravity.value) * Math.cos(Number(angleofInclination.value)));
}

function computeAccelerationofGravity() {
  return Number(normalForce.value) / (Number(massoftheObject.value) * Math.cos(Number(angleofInclination.value)));
}

function computeAngleofInclination() {
  return Math.acos(Number(normalForce.value) / (Number(massoftheObject.value) * Number(accelerationofGravity.value)));
}
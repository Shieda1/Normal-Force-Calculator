// https://calculator.swiftutors.com/normal-force-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const normalForceRadio = document.getElementById('normalForceRadio');
const massoftheObjectRadio = document.getElementById('massoftheObjectRadio');
const angleofInclinationRadio = document.getElementById('angleofInclinationRadio');

let normalForce;
const g = 9.80665;
let massoftheObject = v1;
let angleofInclination = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

normalForceRadio.addEventListener('click', function() {
  variable1.textContent = '(m) Mass of the Object (kg)';
  variable2.textContent = '(x) Angle of Inclination (degrees)';
  massoftheObject = v1;
  angleofInclination = v2;
  result.textContent = '';
});

massoftheObjectRadio.addEventListener('click', function() {
  variable1.textContent = '(N) Normal Force (N)';
  variable2.textContent = '(x) Angle of Inclination (degrees)';
  normalForce = v1;
  angleofInclination = v2;
  result.textContent = '';
});

angleofInclinationRadio.addEventListener('click', function() {
  variable1.textContent = '(N) Normal Force (N)';
  variable2.textContent = '(m) Mass of the Object (kg)';
  normalForce = v1;
  massoftheObject = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(normalForceRadio.checked)
    result.textContent = `Normal Force = ${computeNormalForce().toFixed(2)} N`;

  else if(massoftheObjectRadio.checked)
    result.textContent = `Mass of the Object = ${computeMassoftheObject().toFixed(2)} kg`;

  else if(angleofInclinationRadio.checked)
    result.textContent = `Angle of Inclination = ${computeAngleofInclination().toFixed(2)} degrees`;
})

// calculation

function computeNormalForce() {
  return Number(massoftheObject.value) * g * Math.cos(degrees_to_radians(Number(angleofInclination.value)));
}

function computeMassoftheObject() {
  return Number(normalForce.value) / (g * Math.cos(degrees_to_radians(Number(angleofInclination.value))));
}

function computeAngleofInclination() {
  return radians_to_degrees(Math.acos(Number(normalForce.value) / (Number(massoftheObject.value) * g)));
}

const radians_to_degrees = radians => radians * (180/Math.PI);

const degrees_to_radians = deg => (deg * Math.PI) / 180.0;

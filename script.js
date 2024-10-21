function calculateGeometry() {
  var radius = parseFloat(document.getElementById('radius').value);
  
  if (isNaN(radius) || radius <= 0) {
    document.getElementById('result').innerHTML = 'Please enter a valid radius.';
    return;
  }

  var circumference = (2 * Math.PI * radius).toFixed(2);
  var area = (Math.PI * Math.pow(radius, 2)).toFixed(2);

  document.getElementById('result').innerHTML = 
    `Radius: ${radius} <br>` +
    `Circumference: ${circumference} <br>` +
    `Area: ${area}`;
}

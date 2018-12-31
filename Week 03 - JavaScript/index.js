// Import stylesheets
import './style.css';
// Write Javascript code!
var getTable = document.getElementById('table').getElementsByTagName('tbody')[0];

var clone = document.getElementById('clone').innerHTML;
var doc = new DOMParser().parseFromString(clone, "text/xml");
console.log(doc);

// Get the index of the clicked row to delete
var table = document.getElementById("table"), rIndex;

for (var i = 1; i < table.rows.length; i++) {
  for (var j = 0; j < table.rows[i].cells.length; j++) {
    table.rows[i].cells[j].onclick = function () {
      rIndex = this.parentElement.rowIndex;
      console.log(rIndex);
    };
  }
}

var form = document.querySelector('#form-holder');

// Get all inputs
var name = document.getElementById('name-form');
var address = document.getElementById('address');
var city = document.getElementById('city');
var pin = document.getElementById('pin-code');
var country = document.getElementById('country');
var submit = document.getElementById('submitBtn');

// Submit button
form.addEventListener('submit', function (event) {
  if (!name.validity.valid || !address.validity.valid || !city.validity.valid || !pin.validity.valid || !country.validity.valid) {
    event.preventDefault();
  } else {
    var newName = name.value;
    var newAddress = address.value;
    var newCity = city.value;
    var newPin = pin.value;
    var newCountry = country.value;
  }
  var newRow = getTable.insertRow(getTable.rows.length);
  var newIndex = document.createTextNode(getTable.rows.length);
  var newNameInput = document.createTextNode(newName);
  var newAddressInput = document.createTextNode(newAddress);
  var newCityInput = document.createTextNode(newCity);
  var newPinInput = document.createTextNode(newPin);
  var newCountryInput = document.createTextNode(newCountry);
  var newActions = document.createTextNode(clone);

  var cell0 = newRow.insertCell(0);
  var cell1 = newRow.insertCell(1);
  var cell2 = newRow.insertCell(2);
  var cell3 = newRow.insertCell(3);
  var cell4 = newRow.insertCell(4);
  var cell5 = newRow.insertCell(5);
  var cell6 = newRow.insertCell(6);

  cell0.appendChild(newIndex);
  cell1.appendChild(newNameInput);
  cell2.appendChild(newAddressInput);
  cell3.appendChild(newCityInput);
  cell4.appendChild(newPinInput);
  cell5.appendChild(newCountryInput);
  cell6.appendChild(newActions);
  event.preventDefault();
  form.reset();
}, false);

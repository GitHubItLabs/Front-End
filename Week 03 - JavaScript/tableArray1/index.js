// Get table, table body and form
var table = document.getElementById("table");
var tableBody = table.getElementsByTagName("tbody")[0];
var form = document.querySelector("#form-holder");

// Create variables
var newRow, newIndex, name, address, city, pin, country, newUser;
var cell0, cell1, cell2, cell3, cell4, cell5, cell6;

// Array of users
var users = [{
    id: 1,
    name: "Willie Allen",
    address: "89 Chiaroscuro Rd.",
    city: "Portland",
    pin: 9543,
    country: "USA"
  },
  {
    id: 2,
    name: "Charles Meyer",
    address: "Obere Str. 57",
    city: "Berlin",
    pin: 12209,
    country: "Germany"
  },
  {
    id: 3,
    name: "Emma Morris",
    address: "25, rue Lauriston",
    city: "Paris",
    pin: 75016,
    country: "France"
  }
];

addUsers();


// Submit button
form.addEventListener(
  "submit",
  function (event) {
    // Get all inputs
    let name = document.getElementById("name-form");
    let address = document.getElementById("address");
    let city = document.getElementById("city");
    let pin = document.getElementById("pin-code");
    let country = document.getElementById("country");

    // Check form validity
    if (
      !name.validity.valid ||
      !address.validity.valid ||
      !city.validity.valid ||
      !pin.validity.valid ||
      !country.validity.valid
    ) {
      event.preventDefault();
    } else {
      newUser = {
        name: name.value,
        address: address.value,
        city: city.value,
        pin: pin.value,
        country: country.value
      };
      users.push(newUser);
      addUsers();
    }
    event.preventDefault();
    form.reset();
  },
  false
);

// Add new row with cells
function addRow() {
  newRow = tableBody.insertRow(tableBody.rows.length);
  cell0 = newRow.insertCell(0);
  cell1 = newRow.insertCell(1);
  cell2 = newRow.insertCell(2);
  cell3 = newRow.insertCell(3);
  cell4 = newRow.insertCell(4);
  cell5 = newRow.insertCell(5);
  cell6 = newRow.insertCell(6);
};

function addUsers() {
  tableBody.innerHTML = "";
  users.forEach(user => {
    addRow();
    newIndex = document.createTextNode(tableBody.rows.length);
    cell0.innerHTML = cell0.innerHTML = newIndex.data;
    cell1.innerHTML = `${user.name}`;
    cell2.innerHTML = `${user.address}`;
    cell3.innerHTML = `${user.city}`;
    cell4.innerHTML = `${user.pin}`;
    cell5.innerHTML = `${user.country}`;
    cell6.innerHTML = `<i class="far fa-eye" title="Read" data-toggle="modal" onclick="viewAction(this)" data-target="#exampleModal"></i>
                      <i class="fas fa-edit" title="Update" onclick="editAction(this)"></i>
                      <i class="fas fa-trash-alt" title="Delete" onclick="delAction(this)"></i>`;
  });
}

// View button
function viewAction(event) {
  // View name
  var name = document.createTextNode(`${users[(event.parentNode.parentNode.rowIndex-1)].name}`);
  var modalName = document.getElementById("modalName");
  modalName.appendChild(name);

  // View Address
  var address = document.createTextNode(`${users[(event.parentNode.parentNode.rowIndex - 1)].address}`);
  var modalAddress = document.getElementById("modalAddress");
  modalAddress.appendChild(address);

  // View city
  var city = document.createTextNode(`${users[(event.parentNode.parentNode.rowIndex - 1)].city}`);
  var modalCity = document.getElementById("modalCity");
  modalCity.appendChild(city);

  // View pin code
  var pin = document.createTextNode(`${users[(event.parentNode.parentNode.rowIndex - 1)].pin}`);
  var modalPin = document.getElementById("modalPin");
  modalPin.appendChild(pin);

  // View country
  var country = document.createTextNode(`${users[(event.parentNode.parentNode.rowIndex - 1)].country}`);
  var modalCountry = document.getElementById("modalCountry");
  modalCountry.appendChild(country);
  event;
}

// Delete button
function delAction(event) {
  var i = event.parentNode.parentNode.sectionRowIndex;
  tableBody.deleteRow(i);
}

// Edit button
function editAction(event) {
  let editName = event.parentNode.parentNode.children[1];
  let editAddress = event.parentNode.parentNode.children[2];
  let ediCity = event.parentNode.parentNode.children[3];
  let editPin = event.parentNode.parentNode.children[4];
  let editCountry = event.parentNode.parentNode.children[5];

  editName.innerHTML = `<input value="" type="text" style="max-width: 150px;">`;
  editAddress.innerHTML = `<input value="" type="text" style="max-width: 150px;">`;
  ediCity.innerHTML = `<input value="" type="text" style="max-width: 150px;">`;
  editPin.innerHTML = `<input value="" type="text" style="max-width: 150px;">`;
  editCountry.innerHTML = `<input value="" type="text" style="max-width: 150px;">`;
  event.parentNode.innerHTML = `<i class="far fa-eye fa-disabled" title="Read"></i>
                            <i class="fas fa-save" title="Save" onclick="saveAction(this)"></i>
                            <i class="fas fa-trash-alt fa-disabled" title="Delete"></i>`;
}

// Save button
function saveAction(event) {
  let saveName = event.parentNode.parentNode.children[1].children[0].value;
  let saveAddress = event.parentNode.parentNode.children[2].children[0].value;
  let saveCity = event.parentNode.parentNode.children[3].children[0].value;
  let savePin = event.parentNode.parentNode.children[4].children[0].value;
  let saveCountry = event.parentNode.parentNode.children[5].children[0].value;

  if (saveName == "" || saveAddress == "" || saveCity == "" || savePin == "" || saveCountry == "") {
    alert("Please fill in the input fields");
  } else {

    let namePrint = event.parentNode.parentNode.cells[1];
    let nameAddress = event.parentNode.parentNode.cells[2];
    let nameCity = event.parentNode.parentNode.cells[3];
    let namePin = event.parentNode.parentNode.cells[4];
    let nameCountry = event.parentNode.parentNode.cells[5];

    namePrint.innerHTML = saveName;
    nameAddress.innerHTML = saveAddress;
    nameCity.innerHTML = saveCity;
    namePin.innerHTML = savePin;
    nameCountry.innerHTML = saveCountry;

    event.parentNode.innerHTML = `<i class="far fa-eye" title="Read" data-toggle="modal" onclick="viewAction(this)" data-target="#exampleModal"></i>
                      <i class="fas fa-edit" title="Update" onclick="editAction(this)"></i>
                      <i class="fas fa-trash-alt" title="Delete" onclick="delAction(this)"></i>`;
  }
}
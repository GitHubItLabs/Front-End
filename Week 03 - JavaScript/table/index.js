var table = document.getElementById("table");
var tableBody = table.getElementsByTagName("tbody")[0];
var form = document.querySelector("#form-holder");

var newRow, newIndex, newName, newAddress, newCity, newPin, newCountry;

var clearModal = document.getElementById("exampleModal");
var modalBody = document.querySelector(".modal-body");
clearModal.addEventListener("hide.bs.modal", function () {
  modalBody.removeData("bs.modal");
});

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
      newName = name.value;
      newAddress = address.value;
      newCity = city.value;
      newPin = pin.value;
      newCountry = country.value;
    }
    newRow = tableBody.insertRow(tableBody.rows.length);
    newIndex = document.createTextNode(tableBody.rows.length);
    let cell0 = newRow.insertCell(0);
    let cell1 = newRow.insertCell(1);
    let cell2 = newRow.insertCell(2);
    let cell3 = newRow.insertCell(3);
    let cell4 = newRow.insertCell(4);
    let cell5 = newRow.insertCell(5);
    let cell6 = newRow.insertCell(6);

    cell0.innerHTML = newIndex.data;
    cell1.innerHTML = newName;
    cell2.innerHTML = newAddress;
    cell3.innerHTML = newCity;
    cell4.innerHTML = newPin;
    cell5.innerHTML = newCountry;
    cell6.innerHTML = `<i class="far fa-eye" title="Read" data-toggle="modal" onclick="viewAction(this)" data-target="#exampleModal"></i>
                      <i class="fas fa-edit" title="Update" onclick="editAction(this)"></i>
                      <i class="fas fa-trash-alt" title="Delete" onclick="delAction(this)"></i>`;
    event.preventDefault();
    form.reset();
  },
  false
);

function viewAction(event) {
  // View name
  var name = document.createTextNode(
    event.parentNode.parentNode.children[1].innerHTML
  );
  var modalName = document.getElementById("modalName");
  modalName.appendChild(name);

  // View Address
  var address = document.createTextNode(
    event.parentNode.parentNode.children[2].innerHTML
  );
  var modalAddress = document.getElementById("modalAddress");
  modalAddress.appendChild(address);

  // View city
  var city = document.createTextNode(
    event.parentNode.parentNode.children[3].innerHTML
  );
  var modalCity = document.getElementById("modalCity");
  modalCity.appendChild(city);

  // View pin code
  var pin = document.createTextNode(
    event.parentNode.parentNode.children[4].innerHTML
  );
  var modalPin = document.getElementById("modalPin");
  modalPin.appendChild(pin);

  // View country
  var country = document.createTextNode(
    event.parentNode.parentNode.children[5].innerHTML
  );
  var modalCountry = document.getElementById("modalCountry");
  modalCountry.appendChild(country);
  event;
}

function delAction(event) {
  var i = event.parentNode.parentNode.sectionRowIndex;
  tableBody.deleteRow(i);
}


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
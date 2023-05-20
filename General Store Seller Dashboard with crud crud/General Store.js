
const baseURL = "https://crudcrud.com/api/6299d413281a41f2a59bef336ae15942";

const itemTableBody = document.getElementById("itemTableBody");

// Add item button event listener
document.getElementById("AddItemBtn").addEventListener("click", addItem);

// Edit buttons event listener
itemTableBody.addEventListener("click", e => {
  if (e.target.classList.contains("edit-btn")) {
    editQuantity(e.target.parentElement.parentElement);
  }
});

// Get items and populate table

axios.get(`${baseURL}/items`)
  .then(response => {
    response.data.forEach(item => {
      addItemToTable(item);
    });
  })
  .catch(error => {
    console.error(error);
  });

// Function to add item to the table and save it to crudcrud.com
function addItem() {
  // Get input values
  const itemName = document.getElementById("ItemName").value;
  const description = document.getElementById("Description").value;
  const price = document.getElementById("Price").value;
  const quantity = document.getElementById("Quantity").value;

  // Create item object
  const item = {
    itemName,
    description,
    price,
    quantity
  };

  // Save item to crudcrud.com
  axios.post(`${baseURL}/items`, item)
    .then(response => {
      // Add item to table
      addItemToTable(response.data);

      // Clear input fields
      document.getElementById("ItemName").value = "";
      document.getElementById("Description").value = "";
      document.getElementById("Price").value = "";
      document.getElementById("Quantity").value = "";
    })
    .catch(error => {
      console.error(error);
    });
}

// Function to add item to the table
function addItemToTable(item) {
  const row = document.createElement("tr");
  row.innerHTML = `
      <td>${item._id}</td>
      <td>${item.itemName}</td>
      <td>${item.description}</td>
      <td>${item.price}</td>
      <td>${item.quantity}</td>
      <td><button class="btn btn-primary edit-btn" data-quantity="-1">Buy-1</button></td>
      <td><button class="btn btn-primary edit-btn" data-quantity="-2">Buy-2</button></td>
      <td><button class="btn btn-primary edit-btn" data-quantity="-3">Buy-3</button></td>
    `;
  itemTableBody.appendChild(row);
}

// Function to edit item quantity and update it in crudcrud.com and the table
function editQuantity(row) {
  // Get item ID and quantity
  const itemId = row.cells[0].textContent;
  console.log("Item Id :- " , itemId)
  const quantityChange = parseInt(event.target.dataset.quantity);

  // Get current quantity and calculate new quantity
  const currentQuantity = parseInt(row.cells[4].textContent);
  const newQuantity = currentQuantity + quantityChange;

  // Update quantity in table
  row.cells[4].textContent = newQuantity;


  // Disable buttons if quantity is 0
  if (newQuantity === 0) {
    const buttons = itemTableBody.querySelectorAll(`button[data-row="${itemId}"]`);
    buttons.forEach(button => button.disabled = true);
  }

  // Retrieve item details from table
  const itemName = row.cells[1].textContent;
  const description = row.cells[2].textContent;
  const price = row.cells[3].textContent;
  
  // Update quantity in crudcrud.com
  const item = {
    quantity: newQuantity,
    itemName,
    description,
    price
  };
  axios.put(`${baseURL}/items/${itemId}`, item)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
}

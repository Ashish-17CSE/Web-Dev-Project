const baseURL = "https://crudcrud.com/api/7b563f29b35f4ab7aaf61d6838288884";

const itemTableBody = document.getElementById("itemTableBody");

// Add item button event listener
document.getElementById("AddItemBtn").addEventListener("click", addItem);

// Edit buttons event listener
itemTableBody.addEventListener("click", event => {
    if (event.target.classList.contains("edit-btn")) {
        editQuantity(event.target.parentElement.parentElement);
    }
});

// Get items and populate table
axios.get(`${baseURL}/items`)
    .then(response => {
        const promises = response.data.map(item => addItemToTable(item));
        return Promise.all(promises);
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
            return addItemToTable(response.data);
        })
        .then(() => {
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
    return new Promise((resolve, reject) => {
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
        resolve();
    });
}

// Function to edit item quantity and update it in crudcrud.com and the table
function editQuantity(row) {
    return new Promise((resolve, reject) => {
        // Get item ID and quantity
        const itemId = row.cells[0].textContent;
        const quantityChange = parseInt(event.target.dataset.quantity);

        // Get current quantity and calculate new quantity
        const currentQuantity = parseInt(row.cells[4].textContent);
        const newQuantity = currentQuantity + quantityChange;

        // Update quantity in table
        row.cells[4].textContent = newQuantity;

        // Disable buttons if quantity is 0 or less
        const buttons = itemTableBody.querySelectorAll(`button[data-row="${itemId}"]`);
        
        /*if (newQuantity >= 0) {
            buttons.button.disabled = true;
        } else {
            buttons.forEach((button) => (button.disabled = false));
        }*/

        buttons.forEach((button) => {
            if (newQuantity <= 0) {
              button.disabled = false;
            } else {
              button.disabled = true;
            }
          });
          

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
        axios
            .put(`${baseURL}/items/${itemId}`, item)
            .then(response => {
                console.log(response.data);
                resolve();
            })
            .catch(error => {
                console.error(error);
                reject(error);
            });
    });
}
const baseURL = "https://crudcrud.com/api/8013ebc71c88424da3d4517f49f21ede";

const itemTableBody = document.getElementById("itemTableBody");

// Function to get items and populate table using async/await
async function getItemsAndPopulateTable() {
    try {
        const response = await axios.get(`${baseURL}/items`);
        const items = response.data;
        items.forEach(item => {
            addItemToTable(item);
        });
    } catch (error) {
        console.error(error);
    }
}

// Add item button event listener
document.getElementById("AddItemBtn").addEventListener("click", async () => {
    await addItem();
});

// Function to add item to the table and save it to crudcrud.com
async function addItem() {
    // Get input values
    const tableNo = document.getElementById("TableNo").value;
    const chooseDish = document.getElementById("ChooseDish").value;
    const price = document.getElementById("Price").value;
    const quantity = document.getElementById("Quantity").value;

    // Create item object
    const item = {
        tableNo,
        chooseDish,
        price,
        quantity
    };

    try {
        // Save item to crudcrud.com
        const response = await axios.post(`${baseURL}/items`, item);

        // Add item to table
        addItemToTable(response.data);

        // Clear input fields
        document.getElementById("TableNo").value = "";
        document.getElementById("ChooseDish").value = "";
        document.getElementById("Price").value = "";
        document.getElementById("Quantity").value = "";
    } catch (error) {
        console.error(error);
    }
}

// Function to add item to the table
function addItemToTable(item) {
    const row = document.createElement("tr");
    row.innerHTML = `
<td>${item._id}</td>
<td>${item.tableNo}</td>
<td>${item.chooseDish}</td>
<td>${item.price}</td>
<td>${item.quantity}</td>
<td><button class="btn btn-danger delete-btn">Delete</button></td>
`;
    itemTableBody.appendChild(row);
    // Add event listener to the delete button
    const deleteButton = row.querySelector(".delete-btn");
    deleteButton.addEventListener("click", () => {
        deleteItem(row);
    });
}

// Function to delete item from crudcrud.com and the table
async function deleteItem(row) {
    const itemId = row.cells[0].textContent;
    try {
        // Delete item from crudcrud.com
        await axios.delete(`${baseURL}/items/${itemId}`);

        // Remove the row from the table
        row.remove();
    } catch (error) {
        console.error(error);
    }
}

// Call the function to populate the table on page load
getItemsAndPopulateTable();
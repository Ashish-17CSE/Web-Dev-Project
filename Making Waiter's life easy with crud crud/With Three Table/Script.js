const baseURL = "https://crudcrud.com/api/298e715917324c57893b1dc6b5e1476a";

const itemTableBody1 = document.getElementById("tableNo1Orders");
const itemTableBody2 = document.getElementById("tableNo2Orders");
const itemTableBody3 = document.getElementById("tableNo3Orders");

// Function to get items and populate tables using async/await
async function getItemsAndPopulateTables() {
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

        // Add item to the appropriate table
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

// Function to add item to the appropriate table
function addItemToTable(item) {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td class="hide-id text-center">${item._id}</td>
        <td class="text-center">${item.chooseDish}</td>
        <td class="text-center" >${item.price}</td>
        <td class="text-center" >${item.quantity}</td>
        <td class="text-center" ><button class="btn btn-danger delete-btn">Delete</button></td>
    `;

    // Get the appropriate table body based on the table number
    let tableBody;
    if (item.tableNo === "1") {
        tableBody = itemTableBody1;
    } else if (item.tableNo === "2") {
        tableBody = itemTableBody2;
    } else if (item.tableNo === "3") {
        tableBody = itemTableBody3;
    }

    // Append the row to the corresponding table body
    if (tableBody) {
        tableBody.appendChild(row);
        // Add event listener to the delete button
        const deleteButton = row.querySelector(".delete-btn");
        deleteButton.addEventListener("click", () => {
            deleteItem(row);
        });
    }
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

// Call the function to populate the tables on page load
getItemsAndPopulateTables();

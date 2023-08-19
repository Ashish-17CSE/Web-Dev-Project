$(document).ready(function () {
    // Initialize Select2 on the desired select elements
    $('.select2').select2();

    let allCustomers = []; // Store all fetched customers

    const customersPerPage = 10;
    let currentPage = 1;


    // Fetch data from the URL using Axios
    axios.get('https://64b132c0062767bc4825dac6.mockapi.io/customer')
        .then(function (response) {
            allCustomers = response.data; // Store fetched data
            populateDropdowns(allCustomers); // Populate dropdowns
        })
        .catch(function (error) {
            console.error('Error fetching data:', error);
        });

    let filteredCustomers = []; // Store filtered customers
    // Search button click event handler
    $('#searchButton').click(function () {
        const selectedCustomerName = $('#CustomerName').val();
        const selectedRegion = $('#Region').val();
        const selectedCountry = $('#Country').val();
        const selectedCustomerType = $('#CustomerType').val();
        const isBlockedChecked = $('#IsBlocked').prop('checked');

        // Apply filters based on selected criteria
        filteredCustomers = allCustomers.filter(customer => {
            const nameMatch = selectedCustomerName === 'Select CustomerName' || customer.customerName === selectedCustomerName;
            const regionMatch = selectedRegion === 'Select Region' || customer.region === selectedRegion;
            const countryMatch = selectedCountry === 'Select Country' || customer.country === selectedCountry;
            const typeMatch = selectedCustomerType === 'Select Customer Type' || customer.customerType === selectedCustomerType;
            const blockedMatch = isBlockedChecked;
            // console.log(blockedMatch);

            if (regionMatch === true && countryMatch === true && typeMatch === true && (blockedMatch === true || blockedMatch === false)) {
                return regionMatch && countryMatch && typeMatch && blockedMatch;
            }
            if (regionMatch === true && countryMatch === true) {
                return regionMatch && countryMatch
            }
            else if (nameMatch === true) {
                return nameMatch;
            }
            else if (regionMatch === true) {
                return regionMatch;
            }
            else if (countryMatch === true) {
                return countryMatch;
            }
            else if (typeMatch === true) {
                return typeMatch;
            }
            /*
            if (isBlockedChecked === true) {
               return customer.isBlocked == "true";
           }
           if (isBlockedChecked === false) {
               return customer.isBlocked == "false";
           }*/
        });
        currentPage = 1; // Reset to first page when new search is performed

        // Update the table with filtered results
        populateTable(filteredCustomers, currentPage);
        updatePageNumbers(filteredCustomers.length);
    });

    // Reset button click event handler
    $('#resetButton').click(function () {
        // Clear the form and reset the table to show all customers
        $('#myForm')[0].reset();
        populateTable([]); // Passing an empty array will clear the table 

        // location.reload(); // Reload the page
    });

    // Populate dropdowns with data
    function populateDropdowns(customers) {
        const regions = new Set();
        const countries = new Set();
        const customerTypes = new Set();
        const customerNames = new Set();

        customers.forEach(function (customer) {
            customerNames.add(customer.customerName);
            regions.add(customer.region);
            countries.add(customer.country);
            customerTypes.add(customer.customerType);
        });

        populateDropdownOptions('CustomerName', customerNames);
        populateDropdownOptions('Region', regions);
        populateDropdownOptions('Country', countries);
        populateDropdownOptions('CustomerType', customerTypes);
    }

    // Populate dropdown options
    function populateDropdownOptions(elementId, optionsSet) {
        const dropdown = $('#' + elementId);
        dropdown.empty();
        dropdown.append($('<option>', {
            value: '',
            text: 'Select ' + elementId
        }));

        optionsSet.forEach(function (option) {
            dropdown.append($('<option>', {
                value: option,
                text: option
            }));
        });
    }

    // Populate the table with customer data
    function populateTable(customers, page) {
        const tbody = document.getElementById('myData');
        tbody.innerHTML = ''; // Clear existing table data

        const startIndex = (page - 1) * customersPerPage;
        const endIndex = startIndex + customersPerPage;
        const customersToShow = customers.slice(startIndex, endIndex);

        customersToShow.forEach(function (customer) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${customer.customerId}</td>
                <td>${customer.customerName}</td>
                <td>${customer.region}</td>
                <td>${customer.country}</td>
                <td>${customer.customerType}</td>
                <td>${customer.isBlocked}</td>
            `;

            tbody.appendChild(row);
        });
    }

    // For dynamic page numbering between 'prev' and 'next' buttons,
    function generatePageNumbers(totalCustomers, customersPerPage) {
        const totalPages = Math.ceil(totalCustomers / customersPerPage);
        const pageNumbers = [];

        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }

        return pageNumbers;
    }

    // Pagination button event handlers
    $('#prevPage').click(function () {
        if (currentPage > 1) {
            currentPage--;
            populateTable(filteredCustomers, currentPage);
            updatePageNumbers(filteredCustomers.length);
        }
    });

    // Function to update displayed page numbers
    function updatePageNumbers(totalCustomers) {
        const totalPages = Math.ceil(totalCustomers / customersPerPage);
        const pageNumbers = generatePageNumbers(totalCustomers, customersPerPage);

        const paginationDiv = $('#pagination');
        paginationDiv.empty();

        const prevButton = $('<button>', {
            text: '< Prev',
            class: 'btn btn-outline-info mr-2',
            click: function () {
                if (currentPage > 1) {
                    currentPage--;
                    populateTable(filteredCustomers, currentPage);
                    updatePageNumbers(filteredCustomers.length);
                }
            }
        });

        if (currentPage === 1) {
            prevButton.prop('disabled', true);
        }

        paginationDiv.append(prevButton);

        pageNumbers.forEach(page => {
            const pageNumberButton = $('<button>', {
                text: page,
                class: 'btn btn-outline-secondary mx-2',
                click: function () {
                    currentPage = page;
                    populateTable(filteredCustomers, currentPage);
                    updatePageNumbers(filteredCustomers.length);
                }
            });

            if (page === currentPage) {
                pageNumberButton.addClass('active');
            }

            paginationDiv.append(pageNumberButton);
        });

        const nextButton = $('<button>', {
            text: 'Next >',
            class: 'btn btn-outline-info ml-2', // Add Bootstrap class
            click: function () {
                const totalPages = Math.ceil(filteredCustomers.length / customersPerPage);
                if (currentPage < totalPages) {
                    currentPage++;
                    populateTable(filteredCustomers, currentPage);
                    updatePageNumbers(filteredCustomers.length);
                }
            }
        });

        if (currentPage === totalPages) {
            nextButton.prop('disabled', true);
        }

        paginationDiv.append(nextButton);
    }

    $('#nextPage').click(function () {
        const totalPages = Math.ceil(filteredCustomers.length / customersPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            populateTable(filteredCustomers, currentPage);
            updatePageNumbers(filteredCustomers.length);
        }
    });

});

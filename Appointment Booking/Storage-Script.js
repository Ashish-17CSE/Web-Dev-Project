
    // Retrieving Data
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    // let subject = document.getElementById("people").value;
    let query = document.getElementById("query").value;
    let submit = document.getElementById("submit").value;

// Storing Data
    submit.onclick = function(){
        localStorage.setItem("Name", name);
        localStorage.setItem("Email", email);
        localStorage.setItem("subject", subject);
        localStorage.setItem("Time", time);
        localStorage.setItem("Date", date);
        localStorage.setItem("Number", number);
        localStorage.setItem("query", query);

    }

// Retreiving stored data and using it for calculation
        // localStorage.getItem("Name : ", name);
        // localStorage.getItem("Email : ", email);
        // localStorage.getItem("No Of People : ", people);
        // localStorage.getItem("Time : ", time);
        // localStorage.getItem("Date : ", date);
        // localStorage.getItem("M. Number : ", number);



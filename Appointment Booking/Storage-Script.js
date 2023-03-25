// Storing Data
submit.addEventListener('click', (e) => {

    // Retrieving Data
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let query = document.getElementById("query").value;
    let subject = document.getElementById("subject").value;


//     localStorage.setItem("Name", name);
//     localStorage.setItem("Email", email);
//     localStorage.setItem("Time", time);
//     localStorage.setItem("Date", date);
//     localStorage.setItem("Number", number);
//     localStorage.setItem("Query", query);
//     localStorage.setItem("Subject", subject);
    
    // storing the data in object format
    
    let profile = {
        Name : name, 
        Email : email, 
        Number : number, 
        Data : date,
        Time : time, 
        Query : query, 
        Subject : subject
    }

//     console.log(profile);
    localStorage.setItem("profile_data",JSON.stringify(profile))
    
});

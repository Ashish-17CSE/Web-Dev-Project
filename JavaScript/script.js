//******** DOM Manipulation (Document object model) ********//



// 1. getElementById
/*const heading = document.getElementById('heading');
console.log(heading);*/

// 2. getElementsByTagName
/*const heading = document.getElementsByTagName('h1')
console.log(heading);
console.log(heading[0]);*/

// 3. getElementsByClassName
/*const heading = document.getElementsByClassName('heading2')
console.log(heading)
console.log(heading[0]) */

// 4. querySelecter

/*const heading = document.querySelector('#heading') // Selecting by ID 
console.log(heading);

const heading1 = document.querySelectorAll('.heading2') // Selecting by Class 
console.log(heading1);*/


/*----------------------------------------------------------------------------------*/

// Traverse DOM

// 1. parentNodes

/* const headingP = document.querySelector('.headingP');
const parent = headingP.parentNode;
console.log(parent);*/

// 2. childernNodes
/*const parent = document.querySelector('.parent')
console.log(parent. childNodes); */

// 3. nextElementSiblig
/*const heading = document.querySelector('.headingP');
console.log(heading.nextElementSibling);*/

// 4. previousElementSiblig
/*const subHeading = document.querySelector('h3');
console.log(subHeading.previousElementSibling);*/

/*-----------------------------------------------------------------------------------*/

// * Maipulation

// call by ID
/*const heading = document.querySelector('#heading'); 
heading.innerHTML = 'Web dev is awesome !';
heading.style.color = "red"
heading.style.fontSize = '50px'
heading.classList.add('title')
heading.classList.remove('heading')   
 
// call by class
const heading = document.querySelector('.heading2'); 
heading.innerHTML = 'Web dev is awesome !';
heading.style.color = "red"
heading.style.fontSize = '50px'*/



// Create elements
/*
const heading = document.createElement('h3')
heading.innerHTML = 'This h1-tage added in NewParet "div", by the help of JS'
const NewParet = document.querySelector(".NewParet")
NewParet.appendChild(heading);
console.log(heading)
heading.style.color = 'green'

// If you want to add a aelement in particular position then don't do this

const subheading = document.createElement('h3')
subheading.innerHTML = 'Web Dev is awesome';
//This line will add the element at first position.
NewParet.insertAdjacentElement('beforebegin', subheading); 
console.log(subheading)
subheading.style.color = 'blue'
*/


// DOM Events.
    /*
    const button = document.querySelector("#btn");
    const btnHeading = document.querySelector("#btnHeading");

    button.addEventListener('click', function (event) {
        btnHeading.style.color = 'purple';
        btnHeading.style.boder = solid; 

        console.log("button clicked", event)
    }); */



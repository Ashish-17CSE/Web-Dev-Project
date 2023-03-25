// ES6 AKA Ecmascript 2015

/*//let const
    var productName = 'Laptop';
    //code polute

    function register() {
        var username = 'rakesh';
        var password = 'secret';
    }

    console.log(username);

    let product = 'Laptop';

    console.log(product);
    const product = 'Laptop';
    product = 'Mobile'; */

//----------------------------------------------
    /*//let age = 20; // undefined
    console.log(age);

    const age = {
        years: 19,
    };
    age = 20;

    console.log(age);*/

//Arrow functions--------------------------------

    /*function greet() {
        console.log('Good morning');
    }*/

    /*const greet = () => {
        console.log('Good mornig')
    }
    greet();*/

// Arrow fuction. ------------------------

    /*const addition = a => console.log(a + a);
    addition(5);*/

    /*console.log(this);
    const shop = {
        purchase: () => {
            console.log(this);
        },
    };
    shop.purchase();*/


// "This" with Arrow fuction -------------------
    /*const myBmyButtonn = document.querySelector('#myButton');
    const shop = {
        price: 100,
        buy: function(){
            // myButton.addEventListener('click', function(){
            myButton.addEventListener('click', () => { //Arrow fuction
                console.log(this)
                console.log('I spent' + this.price);
            });
        },
    };
    shop.buy();*/

// Template literals AKA backtricks
    /*const firstName = "Ashish"
    const lastName = "A";
    console.log(firstName +  " " + lastName)

    // const name = `Asish`
    const message =  `Hello ${firstName} ${lastName},
    how are you
    `;
    console.log(message) */


// Enhanced object literals 
    // 1. computed property keys
    // 2. Mathod defination shorthand
        /*
        const keyName = 'name';
        const product = {
            // name: 'Mobile',

            // [keyName] : 'Mobile', //computed property keys
            // price: 100,

            // buy: function () {
            //     console.log('Bought');
            // },

            buy() { //Mathod defination shorthand
                console.log('Bought');
            },

        };
        product.buy()

        console.log(product)
        */

    // 3. Property shorthand
        /*const accessToken = 'fg4zf5g4z1z'
        const refreshToken = 'yzdwg4fz6g'
        const user = {
            // accessToken : accessToken,
            // refreshToken  : refreshToken

            // ---- The new feature is ---- //
            accessToken,
            refreshToken,
        }*/

    // 4. Destructuring
        /*const user = {
            name : 'John Doe',
            age : 30,
        };
        console.log(user)
        // console.log(user.age)
        // console.log(user.name)
        
        // ---- The new feature is ---- //
        const {name, age} = user;
        // const name = user.name;
        // const age = user.age;
        console.log(age);*/

    // 5. Destructuring with Array !

        /*const data = ['Rakesh', 30, 'Engineer'];

        const [name, age, profession] = data;

        // console.log(data[2])
        console.log(profession);
        console.log(age); */

// Default parameters
    /*const register = (name, password, image) => {
        const img = image || "test.png";
        console.log(name, password, image);
    }
    register('Ashish', 'secret'); 

    // ---- The new feature in ES6---- //
    const register = (name, password, image = 'test.png') => {
        // const img = image || "test.png";
        console.log(name, password, image);
    }
    register('Ashish', 'secret'); 
    register('Ashish', 'secret', 'photo.png'); */

// Spread ... 
    
    /*const languages = ['c', 'c++', 'javascript'];
    // const newLanguages = ['typescript', ...languages];
    // ----------OR-----------
    const newLanguages = [...languages, 'typescript'];

    console.log(newLanguages);
    */
  
    
    // Example 2nd
    /*
    const settings = {
        volumn : 10,
        brightness : 80,
    };    
    // ------- vvi -------------
    // const newSetings = settings; // This copy is happening by call by reference.
    // const newSetings = {...settings }; //  Shallow Copy is happenig call by value.
        
        // Shallow Copy :) is a bit-wise copy of an object. A new object is created 
        // that has an exact copy of the values in the original object. If any of the
        // fields of the object are references to other objects, just the reference 
        // addresses are copied i.e., only the memory address is copied.
        
    // If adding new properties

        
    const newSetings = {...settings, contrast: 50 };
    newSetings.volumn = 20;
        
    // console.log(settings === newSetings) // It will show TRUE because both address is same.
    console.log(settings.volumn); // o/p :- 10
    console.log(newSetings.volumn); // o/p :- 20
    console.log(newSetings); */

// Rest ... :) Rest use with fuction.
    /*
    // const addItems = (a, b,  c) => {
    //     console.log(a + b + c);
    // }
    // addItems(5, 2, 6)
    /// When you don't know how many elevens comes in function the use three dort "..."
    
    const addItems = (...items) => {
        console.log(items);
    }
    addItems(5, 2, 6) */

// For of Loop 
    // work with Array, satrig, Object, set, map
        
        // Working with Array 
            /*const number = [2, 3, 4, 5, 7];
            for(const num of number){
                console.log(num);
            }

        // Working with String 
            const language =  'JavaScript';
            for (const char of language){
                console.log(char);
            }
        */

        // Working with Object
        /*    const  person = {
                name : 'Ashish',
                city : 'Hyderabad',
                brand : 'asYou',
            };

            // for (const entries of person){ // it will be through an error
            //     console.log(entries); 
            // }


            // for (const entries of Object.entries(person)){ // so we will add this "Object.entries(person)"
            //     console.log(entries);
            // }

            // We can do like this also
            for (const [kay, value] of Object.entries(person)){
                console.log(kay, value);
            }
        */

    // Working with set & amp




// --: Promises
    
    /*
        function login(cb) {
            setTimeout ( () => {
                console.log('Login....');
                cb();
            }, 0);
        }
        login(() => {
            console.log("Redirecting");
        }); 
        // 1. Call back have a nesting problem
        // 2. code become complicated
        // 3. promises can solve the call back nesting(Hell) problem
    */
    // promises use
        /*function login(cb) {
            return new Promise((resolve, reject) => {
                setTimeout ( () => {
                    console.log('Login....');
                    // resolve();
                    reject();
                }, 0);
            })
        } 
        
        login().then(() => {
            console.log("Redirecting");
        })
        .catch(err => {
            console.log("Error...");
        })*/
    
// find  (Array method)
    /*const users   = [{name : 'Ashish'}, {name : 'Akela'}];
    const user = users.find((users) => {
        return users.name === 'Ashish';
    })
    console.log(user);*/

// findIndex
    /*
    const users   = [{name : 'Ashish'}, {name : 'Akela'}];
    const user = users.findIndex((users) => {
        return users.name === 'Akela';
    })
    console.log(user);*/


//  set

        /*const uniqueNum = new Set()
        uniqueNum.add(3);
        uniqueNum.add(4);
        uniqueNum.add(6);
        uniqueNum.add(7);
        uniqueNum.add(8);
        uniqueNum.add(9);
        uniqueNum.add(10);
        uniqueNum.add(10);
        console.log(uniqueNum);
        console.log(uniqueNum.size);
        console.log(uniqueNum.has(10)); // true :- Because 10 is an element off set
        console.log(uniqueNum.has(11)); // flase :- Because 11 Not is an element off set
        */
  // 2nd use of set
    /*const number = [4, 5, 6, 4, 7, 6];
    const uniqueNumner = new Set(number);
    console.log(uniqueNumner); // Unique element set
    console.log(Array.from(uniqueNumner));  // Unique element array
    */


//  map (Hashtables) --> O(1)-Time Complexity
        /*const urls = new Map()
        urls.set('devlopment', 'dev.example.com')
        urls.set('production', 'prod.example.com')

        console.log(urls);
        console.log(urls.size);
        console.log(urls.get('devlopment'));
        console.log(urls.get('production'));

        for(const url of urls){
            console.log(urls);
        }

        // 2nd method
        for(const[key, value] of urls){
            console.log(key, value);
        }

        // // normal Object
        // const urlsObj = {
        //     devlopment : 'dev.example.com',
        //     production : 'prod.example.com',
        // }

        // console.log(urlsObj);
        */


// Classes
        /*
        // this ia old method
        function Person (name){
            this.name = name;
        }

        const Ashish = new Person("Ashish")
        const akela = Person('Akela')
        Ashish.name = "Learing code";
        console.log(akela);
        */
       
    //ES6 method
        
      /* class person {
            name;
            constructor(name){
            this.name = name
            }
            greet(){
                console.log('Good Morning');
            }
        }
       const ashish = new person('Ashish')
       console.log(ashish);
       const john = new person('John');
       john.name = 'Joy'
       console.log(john);
       console.log(john.greet());
       console.log(ashish.greet());

       // Inheritance method
       class GreatPersong extends person{
        attitude = 'cool';
       }


        const johny = new GreatPersong('johny');
        console.log(johny); */



// ESM (ES6 modules)

    // lib.js filse 
        /* import { libName , login } from "./lib.js";

        console.log(libName)
        login();  
        

        // // Elias
        // import { libName as mylibName } from "./lib.js";
        // console.log(mylibName);
        */
        

    // import myLogin from './lib.js';
    // myLogin();


    // helper.js file 
        import NameFileLogin from './lib.js';
        NameFileLogin();




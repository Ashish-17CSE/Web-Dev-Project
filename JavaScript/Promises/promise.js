
// THEN & CATCH Use in promise 
/*
    let data = new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve({name : "Ashish", age : 29})
            reject("some issues")
        }, 2000)
    })

    data.then((item) => {
        console.log(item)
    }).catch((err) => {
        console.log("catch block -: ", err)
    })
*/



// Promise Channing
/*
    let data = fetch("https://dummyjson.com/users");
    data.then((item) => {
        // console.log(item) // 1st output.
        return item.json()
    }).then((result) => {
        console.log("2nd output ", result)
    })
*/

// promise Channing part-2
/*
    let data = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(10)
        }, 2000)
    })

    // this is call a channing (1st-item, 2nd-item, 3rd-item)
    data.then((item) => {
        console.log("1st : ", item)
        return item*10;
    })
    .then((item) => {
        console.log("2nd : ", item)
        return item*10;
    })
    .then((item) => {
        console.log("3rd : ", item)
    })
    .catch((err) => {
        console.log("cathch block", err)
    })


// finally Keyword
// finally will run in both conditions resolve and reject 
    data.finally((item) => {
        console.log("finally block : ", item)
    })
*/


/* -----------------------------------------------------------------------------------------------------------
|   Promise.all --> if any oe 'promise' is reject then it not show how many pass and how many rejected       |
|   Promise.allsettled --> this can solve the uper problem                                                   |
|   Promise.race --> it will show which 'promise' is resolve/reject/run first                                |          
------------------------------------------------------------------------------------------------------------*/


// let data = Promise.all([ // it will not show the how many 'promise' pass 
                            // it will show only reject 'promise'

// let data = Promise.allSettled([ // it will show both pass and rejecr promise.

let data = Promise.race([ // which 'promise' is redolve/reject first
    new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("2 second")
        }, 2000);
    }),
    new Promise ((resolve, reject) => {
        setTimeout(() => {
            reject("1 second")
        }, 1000);
    }),
    new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("4 second")
        }, 4000);
    })
])

data.then((item) => {
    console.log(item)
}).catch((err) => {
    console.log(err)
})
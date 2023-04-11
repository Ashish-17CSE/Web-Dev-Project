/* // ------------ CALLBACK ------------//
    const posts = [
        {title : 'Post One', body : 'This is post one'},
        {title : 'Post Two', body : 'This is post two'}];


    function getPosts () {
        setTimeout(() => {
            let output = '';
            posts.forEach((post, index) => {
                output += `<li>${post.title}</li>`;
            });
            document.body.innerHTML = output;
        }, 1000)
    }

    function creatPost(post, callback) {
        setTimeout(() =>{
            posts.push(post);
            callback(); // this is call callback fuction
        }, 2000)
    }

    // getPosts();

    creatPost({title : 'Post Three', body : 'This is post three' }, getPosts); 

*/

// ----------- Promises --------------//
/*
const posts = [
    {title : 'Post One', body : 'This is post one'},
    {title : 'Post Two', body : 'This is post two'}];


function getPosts () {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000)
}

function creatPost(post) {
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            posts.push(post);

            const error = false;
            if (!error){
                resolve();
            }
            else{
                reject('Error : Somethign went wrong');
            }
        }, 2000);
    });
}

creatPost({title : 'Post Three', 
    body : "This is post three"})
    .then(getPosts)
    .catch(err => console.log(err));
*/


// ----------- Promise.all --------------//
/*
    const posts = [
        {title : 'Post One', body : 'This is post one'},
        {title : 'Post Two', body : 'This is post two'}];


    function getPosts () {
        setTimeout(() => {
            let output = '';
            posts.forEach((post, index) => {
                output += `<li>${post.title}</li>`;
            });
            document.body.innerHTML = output;
        }, 1000)
    }

    function creatPost(post) {
        return new Promise ((resolve, reject) => {
            setTimeout(() =>{
                posts.push(post);

                const error = false;
                if (!error){
                    resolve();
                }
                else{
                    reject('Error : Somethign went wrong');
                }
            }, 2000);
        });
    }

    const Promise1 = Promise.resolve("Hello It's resolve");
    const Promise2 = 10 ;
    const Promise3 = new Promise((resolve, reject) =>
        setTimeout(resolve, 2000, 'Goodbay')
    );

    const Promise4 = fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json());
    // promise.all use
    Promise.all([Promise1, Promise2, Promise3, Promise4])
    .then(value => console.log(value));
*/




// ----------- Async / Await --------------//

    const posts = [
        {title : 'Post One', body : 'This is post one'},
        {title : 'Post Two', body : 'This is post two'}];


    function getPosts () {
        setTimeout(() => {
            let output = '';
            posts.forEach((post, index) => {
                output += `<li>${post.title}</li>`;
            });
            document.body.innerHTML = output;
        }, 1000)
    }

    function creatPost(post) {
        return new Promise ((resolve, reject) => {
            setTimeout(() =>{
                posts.push(post);

                const error = false;
                if (!error){
                    resolve();
                }
                else{
                    reject('Error : Somethign went wrong');
                }
            }, 2000);
        });
    }

    // async function init(){
    //     await creatPost({title : 'Poat Three' , body : 'This is post three'});

    //     getPosts();
    // }  
    // init();

    // Async/ Await/ Fetch
    async function fetchUsers(){
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        
        const data = await res.json();
        console.log(data);
    }
    fetchUsers();
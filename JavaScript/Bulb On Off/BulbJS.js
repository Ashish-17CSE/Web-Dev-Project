
const bulbBtn = document.querySelector('#BulbBtn')
const bulbImg = document.querySelector('#BulbImg')

let isOff = true;

bulbBtn.addEventListener('click', function () {
    //console.log(bulbImg.src);

    if(isOff){
        bulbImg.src = './bulb-on.gif';
        bulbBtn.innerHTML = "Turn off"
    }
    else{
        bulbImg.src = './bulb-off.gif';
        bulbBtn.innerHTML = "Turn on"
    }
    isOff = !isOff    
});

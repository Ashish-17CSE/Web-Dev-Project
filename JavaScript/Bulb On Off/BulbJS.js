
const bulbBtn = document.querySelector('#BulbBtn')
const bulbImg = document.querySelector('#BulbImg')

bulbBtn.addEventListener('click', function () {
    console.log(bulbImg.src);

    if(bulbImg.src.match('off')){
        bulbImg.src = './bulb-on.gif';
        bulbBtn.innerHTML = "Turn off"
    }
    else{
        bulbImg.src = './bulb-off.gif';
        bulbBtn.innerHTML = "Turn on"
    }
    
});
let lightImg = document.querySelector('img.light'),
switchBtn = document.querySelector('button.switch'),
isLightOff = true;

switchBtn.addEventListener('click', toggleSwitch);

function toggleSwitch(){
    if(isLightOff){
        lightImg.src = "light_on.png";
        switchBtn.innerHTML = "Turn Off";
        isLightOff = false;
    }
    else{
        lightImg.src = "light_off.png";
        switchBtn.innerHTML = "Turn On";
        isLightOff = true;
    }
}
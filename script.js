const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

const play = document.getElementById('play');
const reset = document.getElementById('reset');
const pause = document.getElementById('pause');

const disp = document.getElementById('disp');

var interval = null;
var total = 0;

totalValue = ()=>{
    total = Number(hour.value)*3600 + Number(minute.value)*60 + Number(second.value);
}

Timer = ()=> {
    totalValue();
    total--;

    if(total >= 0){
        var hr = Math.floor(total/3600);
        var mt = Math.floor((total/60) - (hr*60));
        var sc = total - ((hr*3600) + (mt*60));

        hour.value = hr;
        minute.value = mt;
        second.value = sc;
    }
    else {
        disp.innerText = "Finished"
    }
}

play.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(Timer, 1000);

    disp.innerText = "Playing"
});

reset.addEventListener('click',()=>{

    clearInterval(interval);

    hour.value = "Hours";
    minute.value = "Minutes";
    second.value = "Seconds";

    disp.innerText = "Timer";
});

pause.addEventListener('click',()=>{

    clearInterval(interval)
    value = false 

    disp.innerText = "Paused"
});
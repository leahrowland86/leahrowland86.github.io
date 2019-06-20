let currentTime;
let hours;
let minutes;
let seconds;
let animate;

function showCurrentTime(){
    let currentTime = new Date();

    hours=currentTime.getHours();
    minutes=currentTime.getMinutes();
    seconds=currentTime.getSeconds();

    clock();
};

function clock(){
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
            if(hours==24){
                hours=0;
            }
        }
    }
    time('second',seconds);
    time('minute',minutes);
    time('hour',hours);
    animate=setTimeout(clock,1000);
};

function time(id,timeValue){
    if(timeValue<10){
        timeValue='0'+timeValue;
    }
    document.getElementById(id).innerHTML=timeValue;
};

window.onload=showCurrentTime;

'use strict'

const hourHand = document.querySelector('.hour__hand');
const minutesHand = document.querySelector('.min__hand');
const secondsHand = document.querySelector('.sec__hand');


function setDate() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    const hoursDegree =  ( hours / 60 ) * 360 + 90;
    const minutesDegree = ( minutes / 60 ) * 360 + 90;
    const secondsDegree = ( seconds / 60 ) * 360 + 90; // 1초가 지날 떄마다 6도씩 rotate

    updateInClock(hoursDegree, minutesDegree, secondsDegree);
}

setInterval(setDate, 1000);

function updateInClock(h, m ,s) {
    console.log(h, m ,s)
    hourHand.style.transform = `rotate(${h}deg)`;
    minutesHand.style.transform = `rotate(${m}deg)`;
    secondsHand.style.transform = `rotate(${s}deg)`;

}
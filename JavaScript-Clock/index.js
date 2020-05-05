const secondsArrow = document.querySelector('.secondsDiv');
const minutesArrow = document.querySelector('.minuteDiv');
const hoursArrow = document.querySelector('.hourDiv');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) - 90;
    secondsArrow.style.transform = `rotate(${secondsDegrees}deg)`;


    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) - 90;
    minutesArrow.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) - 90;
    hoursArrow.style.transform = `rotate(${hoursDegrees}deg)`;

    if (secondsDegrees > 260) {
        secondsArrow.style.transition = `none`;
    } else {
        secondsArrow.style.transition = `.04s all`;
    }

}

setInterval(setDate, 1000);
const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second');

const timeText = document.getElementById('time');
const dateText = document.getElementById('date');

function updateClock(){
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = (hours % 12) * 30 + minutes * 0.5 - 90;
    const minuteDeg = minutes * 6 - 90;
    const secondDeg = seconds * 6 - 90;

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;

    // digital time (correct)
    timeText.textContent =
        `${String(hours%12).padStart(2,'0')}:${String(minutes).padStart(2,'0')}`;

    dateText.textContent = now.toDateString();
}

setInterval(updateClock, 1000);
updateClock();
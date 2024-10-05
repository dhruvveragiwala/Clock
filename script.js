const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function setClock() {
    const now = new Date(); // Fetches the current time from the system clock
    const seconds = now.getSeconds(); // Gets the current seconds
    const minutes = now.getMinutes(); // Gets the current minutes
    const hours = now.getHours(); // Gets the current hours

    // Calculate degrees for each hand
    const secondsDegrees = ((seconds / 60) * 360) + 90; // Rotates seconds hand
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90; // Rotates minutes hand
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90; // Rotates hour hand

    // Set the transform style to rotate the hands accordingly
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// Call the setClock function every second to keep the time updated
setInterval(setClock, 1000);
setClock(); // Sets initial positions based on current time

// Casing The Dom Elments
const daysEl = document.getElementById('remainderDays');
const hoursEl = document.getElementById('remainderHours');
const minutesEl = document.getElementById('remainderMinutes');
const secondsEl = document.getElementById('remainderSeconds');
const newYear = '1 Jan 2021';

// Counter Function
const counter = () => {
    const nextYear = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = Math.floor(nextYear - currentDate) / 1000

    // Remainder Days
    const days = Math.floor(totalSeconds / 3600 / 24)

    // Remainder Hours
    const hours = Math.floor(totalSeconds / 3600 % 24);

    // Remainder Hours
    const minutes = Math.floor(totalSeconds / 60) % 60

    // Remainder Seconds
    const seconds = Math.floor(totalSeconds) % 60;

    // Set The Values To The Dom Elements
    daysEl.innerHTML = formatValue(days);
    hoursEl.innerHTML = formatValue(hours);
    minutesEl.innerHTML = formatValue(minutes);
    secondsEl.innerHTML = formatValue(seconds);
}

const formatValue = time => {
    return time < 10 ? '0' + time : time;
}

// Intialize The Counter Every One Second
setInterval(counter, 1000);

// Calling The Counter
counter();
function updateTime() {
    const timeZones = {
        "newyork": "America/New_York",
        "bengaluru": "Asia/Kolkata",
        "tokyo": "Asia/Tokyo",
        "hongkong": "Asia/Hong_Kong",
        "sydney": "Australia/Sydney",
        "london": "Europe/London"
    };

    for (const [city, timeZone] of Object.entries(timeZones)) {
        const now = new Date().toLocaleString("en-US", { timeZone: timeZone });
        const time = new Date(now);

        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();

        const hourHand = document.querySelector(`#${city} .hand.hour`);
        const minuteHand = document.querySelector(`#${city} .hand.minute`);
        const secondHand = document.querySelector(`#${city} .hand.second`);
        const digitalTime = document.getElementById(`digital-${city}`);

        const hourDegrees = ((hours % 12) / 12) * 360 + (minutes / 60) * 30;
        const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
        const secondDegrees = (seconds / 60) * 360;

        hourHand.style.transform = `rotate(${hourDegrees}deg)`;
        minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
        secondHand.style.transform = `rotate(${secondDegrees}deg)`;

        digitalTime.textContent = time.toLocaleTimeString();
    }
}

setInterval(updateTime, 1000);
updateTime(); 
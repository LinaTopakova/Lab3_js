class Clock {
    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    displayTime() {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }
}

const myClock = new Clock(9, 5, 30);
myClock.displayTime();

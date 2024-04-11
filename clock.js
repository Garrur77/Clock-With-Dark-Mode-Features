document.addEventListener('DOMContentLoaded', function() {
    const hourHand = document.querySelector('.hand.hour');
    const minuteHand = document.querySelector('.hand.minute');
    const secondHand = document.querySelector('.hand.second');
    const modeSwitch = document.querySelector('.mode-switch');

    function updateClock() {
        const now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();
        const secondDegrees = ((seconds / 60) * 360) + 90;
        const minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
        const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
        secondHand.style.transform = `rotate(${secondDegrees}deg)`; // corrected string interpolation
        minuteHand.style.transform = `rotate(${minuteDegrees}deg)`; // corrected string interpolation
        hourHand.style.transform = `rotate(${hourDegrees}deg)`; // corrected string interpolation
    }

    function toggleDarkMode() {
        document.body.classList.toggle('dark');
        modeSwitch.textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
        localStorage.setItem('mode', document.body.classList.contains('dark') ? 'Dark Mode' : 'Light Mode');
    }

    // Check the stored mode in local storage and update the dark mode accordingly
    if (localStorage.getItem('mode') === 'Dark Mode') {
        document.body.classList.add('dark');
        modeSwitch.textContent = 'Light Mode';
    }

    modeSwitch.addEventListener('click', toggleDarkMode);

    setInterval(updateClock, 1000);
    updateClock(); // Initial call to set the positions immediately
});

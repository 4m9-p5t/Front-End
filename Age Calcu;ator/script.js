document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculate');
    const dayInput = document.getElementById('day');
    const monthInput = document.getElementById('month');
    const yearInput = document.getElementById('year');
    const resultElement = document.getElementById('result');

    calculateBtn.addEventListener('click', function() {
        const day = parseInt(dayInput.value);
        const month = parseInt(monthInput.value);
        const year = parseInt(yearInput.value);

        if (isNaN(day) || isNaN(month) || isNaN(year)) {
            resultElement.textContent = "Please enter valid date values.";
            return;
        }

        const birthdate = luxon.DateTime.local(year, month, day);
        const now = luxon.DateTime.local();

        if (!birthdate.isValid) {
            resultElement.textContent = "Please enter a valid date.";
            return;
        }

        if (birthdate > now) {
            resultElement.textContent = "Birthdate cannot be in the future.";
            return;
        }
        
        const diff = now.diff(birthdate, ['years', 'months', 'days']);
        const years = diff.years;
        const months = diff.months;
        const days = Math.floor(diff.days);

        resultElement.textContent = `Your age is ${years} years, ${months} months, and ${days} days.`;
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const header = dropdown.querySelector('.dropdown-header');
    const selectedOption = header.querySelector('.selected-option');
    const options = dropdown.querySelectorAll('.dropdown-options li');

    header.addEventListener('click', () => {
        dropdown.classList.toggle('open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            const optionText = option.textContent.replace('✓', '').trim();
            selectedOption.textContent = optionText;
            dropdown.classList.remove('open');
            options.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
        });
    });

    document.addEventListener('click', (event) => {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('open');
        }
    });
});
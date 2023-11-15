function validateForm() {
    var emailInput = document.getElementById('email');
    var emailError = document.getElementById('emailError');
    var thankYouMessage = document.getElementById('thankYouMessage');
    var emailValue = emailInput.value.trim();

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === '') {
        emailError.textContent = 'Email is required!';
        emailInput.classList.add('error-input');
        return false;
    } else if (!emailRegex.test(emailValue)) {
        emailError.textContent = 'Invalid email address!';
        emailInput.classList.add('error-input');
        return false;
    } else {
        emailError.textContent = '';
        emailInput.classList.remove('error-input');
        thankYouMessage.style.display = 'block';
        
        var subscribeBox = document.querySelector('.task-wrapper');
        var form = document.querySelector("form");
        form.style.display = 'none';
        subscribeBox.style.display = 'none';

        return false;
    }
}

const formElement = document.querySelector('.login-form');
formElement.addEventListener('submit', event => {
    event.preventDefault();
    const formData = {
        [formElement.elements.email.name]: formElement.elements.email.value.trim(),
        [formElement.elements.password.name]: formElement.elements.password.value.trim(),
    };

    if (formElement.elements.email.value === '' || formElement.elements.password.value === '') {
        alert('All form fields must be filled in');
    }
    else {
        console.log(formData);
        formElement.reset();
    };
});

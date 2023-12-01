function createAccount() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var number = document.getElementById('number').value;
    var termsAndCondChecked = document.getElementById('terms-and-cond').checked;
    var notificationChecked = document.getElementById('notification').checked;

    if (name && email && password && number && termsAndCondChecked) {
        // Assuming account creation logic here

        // Redirect to the next page after successful account creation
        window.location.href = 'next-page.html';
    } else {
        showAlert('Error: Please fill in all required fields and agree to terms and conditions.');
    }
}
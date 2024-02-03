// Updated JavaScript code

// Function to handle form submission
function handleFormSubmission() {
    // Get the email value from the input
    var emailInput = document.getElementById('emailAddress');
    var email = emailInput.value;

     // Display the email in the success message
    const displayEmail = document.getElementById('displayEmail');
    displayEmail.textContent = emailInput.value;
 

    // Check if the input is empty
    if (email.trim() === '') {
        // Display error message and highlight the input in red
        var errorElement = document.getElementById('error');
        errorElement.innerHTML = 'Enter a valid email address';
        
        if (emailInput) {
            emailInput.style.border = '1px solid hsl(4, 100%, 67%)';
            emailInput.style.background = 'hsl(4, 100%, 67%, 0.2)';
        }
    } else {
        // Reset error message and input styles
        var errorElement = document.getElementById('error');
        errorElement.innerHTML = '';

        if (emailInput) {
            emailInput.style.border = '1px solid #ccc';
        }

        // Validate email format
        if (isValidEmail(email)) {
            // Hide the form
            var formElement = document.getElementById('container-all');
            if (formElement) {
                formElement.style.display = 'none';
            }

            // Display success message
            var successMessageElement = document.getElementById('successMessage');
            if (successMessageElement) {
                successMessageElement.style.display = 'flex';
            }
        } else {
            // Display error message for invalid email format
            var errorElement = document.getElementById('error');
            errorElement.innerHTML = 'Invalid email format';
        }
    }
}

// Add event listener for submit button click
document.getElementById('submitBtn').addEventListener('click', function (event) {
    event.preventDefault();
    handleFormSubmission();
});

// Add event listener for pressing enter in the input field
document.getElementById('emailAddress').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        handleFormSubmission();
    }
});

// Function to validate email format
function isValidEmail(email) {
    // Simple email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// JavaScript code to refresh the page
document.getElementById('dismiss_btn').addEventListener('click', function() {
    location.reload(true); // Reload the page
  });

// static/script.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Add client-side validation or additional functionality if needed

        // Submit the form using AJAX (optional)
        submitForm();
    });

    function submitForm() {
        // You can use Fetch API or any other method to submit the form data asynchronously
        fetch('/contact', {
            method: 'POST',
            body: new FormData(form),
        })
        .then(response => response.text())
        .then(data => {
            // Handle the response from the server (e.g., display a thank-you message)
            console.log(data);
        })
        .catch(error => console.error('Error:', error));
    }
});

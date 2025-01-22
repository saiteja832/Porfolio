// portfolio_script.js

// Contact Form Submission
const contactForm = document.querySelector('form');

contactForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
        alert('Please fill out all fields.');
        return;
    }

    try {
        // Simulate form submission (replace with your backend endpoint if needed)
        console.log('Form submitted:', formData);
        alert('Thank you for reaching out! Your message has been sent.');

        // Clear the form
        contactForm.reset();
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('Something went wrong. Please try again later.');
    }
});

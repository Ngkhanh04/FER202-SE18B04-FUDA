document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    
    if (name && email) {
        alert(`Thank you, ${name}, for signing up! We will contact you at ${email}.`);
    } else {
        alert("Please fill in all required fields.");
    }
});
// landing.js
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { // Adjust the scroll threshold as needed
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

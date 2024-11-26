function registerEvent() {
    document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById("event-form").addEventListener("submit", function(event){
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const tickets = document.getElementById("tickets").value;

    if(name && email && tickets) {
        alert(`Thank you, ${name}! You have purchased ${tickets} ticket(s).`);
    } else {
        alert("Please fill in all fields.");
    }
});

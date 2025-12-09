// script.js
document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const amount = document.getElementById('amount').value;

    // Basic validation
    if (name === "" || email === "" || amount === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (isNaN(amount) || parseFloat(amount) <= 0) {
        alert("Please enter a valid donation amount.");
        return;
    }

    // In a real application, you would send this data to a server
    // For demonstration, we'll just log it and show an alert
    console.log("Donation Details:");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Amount: $${amount}`);

    alert(`Thank you, ${name}, for your donation of $${amount}!`);

    // Optionally, clear the form fields after submission
    document.getElementById('donationForm').reset();
});

const contactForm = document.getElementById("contactForm");
const response = document.getElementById("response");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        response.textContent = "Please fill in all fields.";
        response.style.color = "red";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        response.textContent = "Please enter a valid email address.";
        response.style.color = "red";
        return;
    }

    if (message.length < 10) {
        response.textContent = "Your message must be at least 10 characters.";
        response.style.color = "red";
        return;
    }

    response.textContent = `Thank you, ${name}! Your message was received successfully.`;
    response.style.color = "#00e6a8";

    contactForm.reset();
});

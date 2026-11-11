
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("subSmit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    document.getElementById("response").textContent =
        "Thank you, " + name + "! Your message was received.";

    contactForm.reset();
});

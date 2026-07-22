//Hello my docter Script

document.addEventListener("DOMContentLoaded", function () {

    const heroButton = document.querySelector(".hero button");
    const form = document.querySelector(".appointment form");

    // Hero Button Click
    heroButton.addEventListener("click", function () {

        alert("Welcome to MediBook! Book your appointment below.");

        document
            .getElementById("appointment")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

    // Appointment Form Submit
    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const phone = form.querySelector('input[type="tel"]').value;

        if (name === "" || email === "" || phone === "") {

            alert("Please fill all required fields!");

            return;

              }

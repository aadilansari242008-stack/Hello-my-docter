// MediBook JavaScript

document.addEventListener("DOMContentLoaded", function () {

    const heroButton = document.querySelector(".hero button");
    const form = document.querySelector(".appointment form");

    // Hero Button
    heroButton.addEventListener("click", function () {
        alert("Welcome to MediBook!");
    });

    // Appointment Form
    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const phone = form.querySelector('input[type="tel"]').value.trim();
        const doctor = form.querySelector("select").value;
        const date = form.querySelector('input[type="date"]').value;

        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            doctor === "" ||
            date === ""
        ) {
            alert("Please fill all required fields.");
            return;
        }

        alert(
            "Appointment Booked Successfully!\n\n" +
            "Name: " + name +
            "\nDoctor: " + doctor +
            "\nDate: " + date
        );

        form.reset();

    });

});

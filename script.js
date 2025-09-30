document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default submission

  // Input fields
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  // Error messages
  const nameError = name.nextElementSibling;
  const emailError = email.nextElementSibling;
  const messageError = message.nextElementSibling;

  let isValid = true;

  // Name validation
  if (name.value.trim() === "") {
    nameError.textContent = "Name is required";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation using regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!emailPattern.test(email.value.trim())) {
    emailError.textContent = "Enter a valid email";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Message validation
  if (message.value.trim() === "") {
    messageError.textContent = "Message cannot be empty";
    isValid = false;
  } else {
    messageError.textContent = "";
  }

  // Success message
  const successMessage = document.getElementById("successMessage");
  if (isValid) {
    successMessage.textContent = "Form submitted successfully!";
    name.value = "";
    email.value = "";
    message.value = "";
  } else {
    successMessage.textContent = "";
  }
});

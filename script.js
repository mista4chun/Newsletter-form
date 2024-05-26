document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signupForm');
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('emailError');
  const successMessage = document.getElementById('successMessage');
  const successText = document.getElementById('successText');
  const dismissButton = document.getElementById('dismissButton');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Clear previous error states
    emailInput.classList.remove('border-Tomato');
    emailError.classList.add('hidden');

    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      showError(emailInput, emailError, 'Email is required');
    } else if (!emailPattern.test(email)) {
      showError(emailInput, emailError, 'valid email required');
    } else {
      emailInput.removeAttribute('aria-invalid');
      emailInput.focus()

      // Show success message
      successText.innerHTML = `  A confirmation email has been sent to <strong>${email}</strong>. Please open it and click the button inside  to confirm your subscription `;
      successMessage.classList.remove('hidden');
      form.classList.add('hidden');
    }
  });

  dismissButton.addEventListener('click', function () {
    successMessage.classList.add('hidden');
    form.classList.remove('hidden');
    form.reset();
  });

  function showError(input, errorElement, message) {
    input.classList.add('border-Tomato');
    input.classList.remove('border-gray-300');
    errorElement.textContent = message;
    errorElement.classList.remove('hidden');
    input.setAttribute('aria-invalid', 'true');
    input.focus();
  }
});

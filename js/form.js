const form = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Clear previous messages
    formMsg.textContent = '';
    formMsg.style.color = 'red';

    if (name === '' || email === '' || message === '') {
      formMsg.textContent = 'All fields are required.';
      return;
    }

    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailPattern.test(email)) {
      formMsg.textContent = 'Please enter a valid email address.';
      return;
    }

    if (message.length < 10) {
      formMsg.textContent = 'Message must be at least 10 characters long.';
      return;
    }

    // If passed validation
    formMsg.style.color = 'green';
    formMsg.textContent = 'Message sent successfully!';
    form.reset();
  });

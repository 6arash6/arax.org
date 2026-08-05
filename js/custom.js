// ARAX LABS — Reveal.js Initialization & Form Handling

Reveal.initialize({
  hash: true,
  slideNumber: false,
  transition: 'fade',
  transitionSpeed: 'fast',
  backgroundTransition: 'fade',
  center: true,
  width: 1200,
  height: 700,
  margin: 0.04,
  controls: true,
  controlsLayout: 'bottom-right',
  progress: true,
  plugins: []
});

// Formspree contact form handler
document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('contact-form');
  var success = document.getElementById('form-success');

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      var formData = new FormData(form);
      var submitBtn = form.querySelector('.submit-btn');
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
      .then(function(response) {
        if (response.ok) {
          form.style.display = 'none';
          success.style.display = 'block';
        } else {
          response.json().then(function(data) {
            if (data.errors) {
              alert(data.errors.map(function(e) { return e.message; }).join(', '));
            }
          });
          submitBtn.textContent = 'Send Message';
          submitBtn.disabled = false;
        }
      })
      .catch(function() {
        alert('Network error. Please try again.');
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
      });
    });
  }
});

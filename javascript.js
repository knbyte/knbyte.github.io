document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("contact-form").addEventListener("submit", function(event) {
	  event.preventDefault();
	  sendEmail();
	});
  });
  
  function sendEmail() {
	// Get form data
	var formData = {
	  name: document.getElementById("name").value,
	  email: document.getElementById("email").value,
	  message: document.getElementById("message").value
	};
  
	// Send email using EmailJS
	emailjs.send('service_iduecm2', 'template_9m7bipp', formData)
	  .then(function(response) {
		console.log('Email sent successfully:', response);
		alert('Message sent successfully!');
	  }, function(error) {
		console.error('Email sending failed:', error);
		alert('Error: Message could not be sent.');
	  });
  }
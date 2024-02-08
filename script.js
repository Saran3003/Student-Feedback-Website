function signIn() {
    // Implement email authentication logic here
    // Redirect to feedback.html on successful login
    window.location.href = 'feedback.html';
  }
  
  function submitFeedback() {
    // Get feedback form data
    alert('Feedback submitted successfully!');
    var formData = {
      studentName: document.getElementById('studentName').value,
      rollNumber: document.getElementById('rollNumber').value,
      year: document.getElementById('year').value,
      residentialStatus: document.querySelector('input[name="residentialStatus"]:checked').value,
      feedbackMessage: document.getElementById('feedbackMessage').value,
      email: document.getElementById('email').value
    };
  
    // Send feedback data to the server
    fetch('sendFeedback.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.text())
    .then(data => {
      alert(data); // Display server response
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
  
const signupFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();


    console.log(email, username, password);

    if (email && username && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        console.log('gotit')
        // document.location.replace('/');
      } else {
        alert("Failed to signup");
      }
    }
  };

document.querySelector('.signup-form-handler').addEventListener('submit', signupFormHandler);


document.addEventListener('DOMContentLoaded', () => {
  const signupLinks = document.getElementsByClassName('signup-link');

  if (signupLinks.length > 0) {
    signupLinks[0].addEventListener('click', (event) => {
      event.preventDefault(); // Prevents default anchor behavior
      window.location.href = 'signup.html'; // Redirects to sign-up page
    });
  }
});

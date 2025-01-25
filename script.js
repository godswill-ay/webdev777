// to Highlight the current page in the navbar
document.addEventListener('DOMContentLoaded', (event) => {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
  
    navLinks.forEach(link => {
      if (link.href.includes(currentPage)) {
        link.classList.add('active');
      }
    });
  });
  
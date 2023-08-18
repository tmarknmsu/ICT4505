document.addEventListener("DOMContentLoaded", function() {
  document.body.addEventListener('click', (event) => {
    console.log("clicked")
    if (event.target.id === 'hamburger') {
      const navList = document.querySelector('.nav-list');
      navList.classList.toggle('active');
    }
  });
});

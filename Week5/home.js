document.addEventListener("DOMContentLoaded", function () {
    // Load header
    const headerPlaceholder = document.getElementById("header-placeholder");
    fetch("header.html")
      .then(response => response.text())
      .then(content => headerPlaceholder.innerHTML = content);
  
    // Load footer
    const footerPlaceholder = document.getElementById("footer-placeholder");
    fetch("footer.html")
      .then(response => response.text())
      .then(content => footerPlaceholder.innerHTML = content);

    // // Load slideshow
    // const slideshowPlaceholder = document.getElementById("slideshow-placeholder");
    // fetch("slideshow.html")
    //   .then(response => response.text())
    //   .then(content => footerPlaceholder.innerHTML = content);
  
    // Parallax effect for the static picture
    window.addEventListener('scroll', function () {
      const parallax = document.querySelector('.staticPicture');
      let scrollPosition = window.scrollY;
      parallax.style.transform = 'translateY(' + scrollPosition * -0.4 + 'px)';
    });
  
    
  });
  
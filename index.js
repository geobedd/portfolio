const header = document.querySelector('header');

function headerCheck() {
  if (window.scrollY == 0) {
    header.classList.remove('is-stuck');
  } else {
    header.classList.add('is-stuck');
  }
}

headerCheck();

window.onscroll = function (ev) {
  headerCheck();
};

document.getElementById('current-year').innerHTML += new Date().getFullYear();

// Scroll Animations

document.addEventListener('DOMContentLoaded', function (event) {
  // get all of the elements with the 'scroll' class.
  const scrollList = document.querySelectorAll('.scroll-animate');

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('scrolled-in');
      }
    });
  };

  const options = {};

  const myObserver = new IntersectionObserver(callback, options);

  scrollList.forEach((scrollItem) => {
    myObserver.observe(scrollItem);
  });
});

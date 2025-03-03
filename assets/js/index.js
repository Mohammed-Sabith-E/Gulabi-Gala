// Toggle side menu visibility
const menuToggle = document.getElementById("menu-toggle");
const sideMenu = document.getElementById("side-menu");
const closeMenu = document.getElementById("close-menu");
const navLinks = document.querySelectorAll('.nav-link'); 

// Open the side menu when the menu button is clicked
menuToggle.addEventListener("click", () => {
  sideMenu.classList.remove("hidden");
});

// Close the side menu when the close button is clicked
closeMenu.addEventListener("click", () => {
  sideMenu.classList.add("hidden");
});

// Close the side menu when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    sideMenu.classList.add("hidden"); // Hide the side menu after a link is clicked
  });
});




// Countdown function
function countdown() {
    const eventDate = new Date("2025-04-25T00:00:00");
    const now = new Date();
    const remainingTime = eventDate - now;

    if (remainingTime <= 0) {
      document.getElementById("countdown").innerHTML = "Event Started!";
      return;
    }

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days
      .toString()
      .padStart(2, "0");
    document.getElementById("hours").innerHTML = hours
      .toString()
      .padStart(2, "0");
    document.getElementById("minutes").innerHTML = minutes
      .toString()
      .padStart(2, "0");
    document.getElementById("seconds").innerHTML = seconds
      .toString()
      .padStart(2, "0");
  }

  // Update the countdown every second
  setInterval(countdown, 1000);


  // Function to animate numbers
  function animateCounter(id, target, appendSymbol = false) {
    let count = 0;
    const speed = 50; // Adjust speed for slower or faster animation
    const increment = Math.ceil(target / 100); // Increment for smooth animation

    const updateCounter = () => {
      count += increment;
      if (count >= target) {
        count = target;
        if (appendSymbol) {
          document.getElementById(id).textContent = `${count}+`;
        } else {
          document.getElementById(id).textContent = count;
        }
      } else {
        document.getElementById(id).textContent = count;
        requestAnimationFrame(updateCounter);
      }
    };

    updateCounter();
  }

  // Start counters on DOM load
  document.addEventListener("DOMContentLoaded", () => {
    animateCounter("counterDays", 3); // No + symbol for Days
    animateCounter("counterStalls", 120, true); // Add + symbol for Stalls
    animateCounter("counterEntertainment", 10, true); // Add + symbol for Entertainments
  });
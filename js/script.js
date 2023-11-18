// Function to validate email format
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;

  if (!name || !email || !message) {
    alert('Please fill in all required fields');
    return;
  }

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address');
    return;
  }

  if (!isValidPhoneNumber(phone)) {
    alert('Please enter a valid phone number');
    return;
  }

  // Function to validate email format
  function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
  }

// Function to validate phone number format
  function isValidPhoneNumber(phone) {
    // Basic validation: Allows digits, spaces, and hyphens
    var phoneRegex = /^[0-9\s\-]+$/;
    return phoneRegex.test(phone);
  }

  // Process the form data (example: use AJAX to send data to the server)

  alert('Form submitted successfully!');
});

// Smooth scrolling for anchor links
$(document).ready(function() {
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    
    var target = $($(this).attr('href'));
    
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 800);
    }
  });

  $('.mobile-menu').on('click', function () {
    $('.navbar__content').toggleClass('active');
  });

  // Close navigation links when a link is clicked
  $('.navbar__links').on('click', function () {
    $('.navbar__content').removeClass('active');
  });
});


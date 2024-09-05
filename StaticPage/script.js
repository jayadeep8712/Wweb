document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const state = document.getElementById('state').value;
    const message = document.getElementById('message').value;

    // Regular expression for phone number validation (10 digits)
    const phonePattern = /^[0-9]{10}$/;

    // Regular expression for basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === '' || email === '' || phone === '' || state === '' ) {
        alert('Please fill in all fields');
    } else if (!phonePattern.test(phone)) {
        alert('Please enter a valid 10-digit phone number');
    } else if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
    } else {
        alert('Form submitted successfully');
        // Add data to the form or process the form submission here
    }
});

// Function to toggle dark and light mode
function toggleMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Event listener for the toggle switch
document.getElementById('modeToggle').addEventListener('change', toggleMode);

// Check and apply the saved mode on page load
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    document.getElementById('modeToggle').checked = true;
}

// Get the header
const header = document.querySelector('.main-header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
//     // if (window.scrollY > lastScrollY) {
//     //     // Scroll Down
//     //     header.style.top = '-100px'; // Adjust this value based on your header's height
//     // } else  {
//     //     // Scroll Up
//     //     header.style.top = '0';
//     //     header.style.position = fixed
//     // }  
//     // lastScrollY = window.scrollY;

    if (window.scrollY > lastScrollY) {
                // Scroll Up
                header.style.top = '0';
                headerVisible = true;
            } else if (headerVisible && window.scrollY > 100) {
                // Scroll Down and header is already visible
                header.style.top = '-100px';
                headerVisible = false;
            }
            lastScrollY = window.scrollY;
});


 // Scrollup-button
 const scrollUpBtn = document.querySelector('.scrollUpBtn');

 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         scrollUpBtn.style.display = "block";
     } else {
         scrollUpBtn.style.display = "none";
     }
 };

 // When the user clicks on the button, scroll to the top of the document
 scrollUpBtn.onclick = function() {
     window.scrollTo({
         top: 0,
         behavior: 'smooth'
     });
 };

// document.getElementById('modeToggle').addEventListener('click', function() {
//     document.body.classList.toggle('dark-mode');
// });
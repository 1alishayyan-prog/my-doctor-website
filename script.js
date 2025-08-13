document.addEventListener('DOMContentLoaded', function() {

    // Mobile Navigation Toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Simple Image Slider for Facility Section
    const slides = document.querySelectorAll('.facility-slider .slide');
    if (slides.length > 0) {
        const nextBtn = document.querySelector('.facility-slider .next');
        const prevBtn = document.querySelector('.facility-slider .prev');
        let currentSlide = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                if (i === index) {
                    slide.classList.add('active');
                }
            });
        }

        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        });

        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });
        
        // Initialize slider
        showSlide(currentSlide);
    }

    // Appointment Form Validation
    const bookingForm = document.getElementById('booking-form');
    if(bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const fullName = document.getElementById('fullName').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const email = document.getElementById('email').value.trim();
            const date = document.getElementById('date').value;
            
            if (fullName === '' || phone === '' || email === '' || date === '') {
                alert('Please fill in all required fields.');
                return;
            }

            // Simple email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            alert(`Thank you, ${fullName}! Your appointment request for ${date} has been submitted. We will contact you shortly.`);
            bookingForm.reset();
        });
    }

});
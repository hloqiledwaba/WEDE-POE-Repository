// Royal Tech Solutions  JavaScript

document.addEventListener('DOMContentLoaded', function () {

    // 1. Hamburger menu toggle
    var navToggle = document.querySelector('.nav-toggle');
    var navMenu = document.querySelector('#main-nav ul');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            var isOpen = navMenu.classList.toggle('active');
            this.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
        navMenu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // 2. Time-based greeting on homepage
    var greetingEl = document.getElementById('greeting');
    if (greetingEl) {
        var hour = new Date().getHours();
        var greeting;
        if (hour < 12) greeting = 'Good morning, and welcome to Royal Tech Solutions.';
        else if (hour < 18) greeting = 'Good afternoon, and welcome to Royal Tech Solutions.';
        else greeting = 'Good evening, and welcome to Royal Tech Solutions.';
        greetingEl.textContent = greeting;
    }

    // 3. Search filter on products page
    var searchInput = document.getElementById('product-search');
    if (searchInput) {
        var searchableCards = document.querySelectorAll('.service-card, .product-card');
        var noResults = document.getElementById('no-results');
        
        searchInput.addEventListener('input', function () {
            var term = this.value.toLowerCase().trim();
            var visibleCount = 0;

            searchableCards.forEach(function (card) {
                if (term === '' || card.textContent.toLowerCase().indexOf(term) !== -1) {
                    card.style.display = '';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            if (noResults) {
                noResults.style.display = visibleCount === 0 ? 'block' : 'none';
            }
        });
    }

    // 4. Lightbox for gallery images on products page
    var galleryImages = document.querySelectorAll('.gallery-img');
    if (galleryImages.length > 0) {
        var lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.setAttribute('role', 'dialog');
        lightbox.setAttribute('aria-label', 'Image preview');
        lightbox.innerHTML = '<span class="lightbox-close" aria-label="Close image">&times;</span><img class="lightbox-img" src="" alt="">';
        document.body.appendChild(lightbox);

        var lightboxImg = lightbox.querySelector('.lightbox-img');
        var closeBtn = lightbox.querySelector('.lightbox-close');

        function openLightbox(img) {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightbox.classList.add('active');
        }

        function closeLightbox() {
            lightbox.classList.remove('active');
            lightboxImg.src = '';
        }

        galleryImages.forEach(function (img) {
            img.addEventListener('click', function () { openLightbox(img); });
            img.setAttribute('tabindex', '0');
            img.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(img);
                }
            });
        });

        closeBtn.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', function (e) {
            if (e.target === lightbox) closeLightbox();
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeLightbox();
        });
    }

    // 5. Accordion on products page
    var accordionButtons = document.querySelectorAll('.accordion-toggle');
    if (accordionButtons.length > 0) {
        accordionButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                var content = this.nextElementSibling;
                var isOpen = content.classList.contains('open');

                // Close all others
                document.querySelectorAll('.accordion-content').forEach(function (c) {
                    c.classList.remove('open');
                });
                document.querySelectorAll('.accordion-toggle').forEach(function (b) {
                    b.textContent = 'Show Service Details';
                    b.setAttribute('aria-expanded', 'false');
                });

                // Open this one if it wasn't open
                if (!isOpen) {
                    content.classList.add('open');
                    this.textContent = 'Hide Service Details';
                    this.setAttribute('aria-expanded', 'true');
                }
            });
        });
    }

    // 6. Leaflet Map on contact page
    var mapContainer = document.getElementById('interactive-map');
    if (mapContainer && typeof L !== 'undefined') {
        var officeLat = -26.25; 
        var officeLng = 28.15;
        var map = L.map('interactive-map').setView([officeLat, officeLng], 10);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors',
            maxZoom: 18
        }).addTo(map);
        
        L.marker([officeLat, officeLng]).addTo(map)
            .bindPopup('<strong>Royal Tech Solutions Head Office</strong><br>10 Tech Park, Germiston')
            .openPopup();
    }

    // 7. Get directions button
    var directionsBtn = document.getElementById('directions-btn');
    if (directionsBtn) {
        directionsBtn.addEventListener('click', function () {
            var url = 'https://www.google.com/maps/dir/?api=1&destination=Germiston,Johannesburg,South+Africa';
            window.open(url, '_blank', 'noopener');
        });
    }

    // 8. Scroll animations
    var animatedSections = document.querySelectorAll('.animate-on-scroll');
    if (animatedSections.length > 0 && 'IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        animatedSections.forEach(function (s) { observer.observe(s); });
    } else {
        animatedSections.forEach(function (s) { s.classList.add('visible'); });
    }

    // 9. Enquiry form validation and cost estimate
    var enquiryForm = document.getElementById('enquiry-form');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function (e) {
            e.preventDefault();
            handleEnquirySubmit(enquiryForm);
        });
    }

    function handleEnquirySubmit(form) {
        var fullname = document.getElementById('fullname');
        var email = document.getElementById('email');
        var phone = document.getElementById('phone');
        var interest = document.getElementById('interest');
        var message = document.getElementById('message');
        var responseBox = document.getElementById('form-response');
        var isValid = true;

        // Clear previous errors
        form.querySelectorAll('.error-message').forEach(function (el) { el.remove(); });
        form.querySelectorAll('input, select, textarea').forEach(function (el) { el.classList.remove('invalid'); });

        function showError(field, errorMsg) {
            field.classList.add('invalid');
            var error = document.createElement('span');
            error.className = 'error-message';
            error.textContent = errorMsg;
            field.parentNode.appendChild(error);
            isValid = false;
        }

        if (fullname.value.trim().length < 2) showError(fullname, 'Please enter your full name.');
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) showError(email, 'Please enter a valid email address.');
        var phonePattern = /^[0-9+\s\-()]{10,}$/;
        if (!phonePattern.test(phone.value.trim())) showError(phone, 'Please enter a valid phone number.');
        if (interest.value === '') showError(interest, 'Please select a service of interest.');
        if (message.value.trim().length < 10) showError(message, 'Please provide some details (at least 10 characters).');

        if (!isValid) {
            responseBox.textContent = 'Please fix the errors above and try again.';
            responseBox.className = 'form-response error';
            return;
        }

        // Generate Cost Estimate
        var estimates = {
            'it-support': 'Hourly rate from R450',
            'networking': 'Quotation based on requirements (Avg R5,000 - R15,000)',
            'cloud': 'Monthly subscription options starting at R250/user',
            'laptops': 'R12,500 - R25,000 depending on specs',
            'accessories': 'R250 - R5,000 depending on items'
        };
        var estimate = estimates[interest.value] || 'Contact us for a custom quote.';
        var interestText = interest.options[interest.selectedIndex].text;

        responseBox.innerHTML = '<strong>Thank you, ' + fullname.value.trim() + '.</strong><br>' +
            'Your enquiry regarding <strong>' + interestText + '</strong> has been received.<br>' +
            '<strong>Estimated Cost:</strong> ' + estimate + '<br>' +
            'We will contact you within 48 hours.';
        responseBox.className = 'form-response success';
        form.reset();
    }

    // 10. Contact form validation and email compilation
    var contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            handleContactSubmit(contactForm);
        });
    }

    function handleContactSubmit(form) {
        var fullname = document.getElementById('contact-name');
        var email = document.getElementById('contact-email');
        var type = document.getElementById('contact-type');
        var message = document.getElementById('contact-message');
        var responseBox = document.getElementById('contact-response');
        var isValid = true;

        form.querySelectorAll('.error-message').forEach(function (el) { el.remove(); });
        form.querySelectorAll('input, select, textarea').forEach(function (el) { el.classList.remove('invalid'); });

        function showError(field, errorMsg) {
            field.classList.add('invalid');
            var error = document.createElement('span');
            error.className = 'error-message';
            error.textContent = errorMsg;
            field.parentNode.appendChild(error);
            isValid = false;
        }

        if (fullname.value.trim().length < 2) showError(fullname, 'Please enter your full name.');
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) showError(email, 'Please enter a valid email address.');
        if (message.value.trim().length < 10) showError(message, 'Please write a message (at least 10 characters).');

        if (!isValid) {
            responseBox.textContent = 'Please fix the errors above and try again.';
            responseBox.className = 'form-response error';
            return;
        }

        // Compile Email
        var subject = encodeURIComponent(type.value + ' from ' + fullname.value.trim());
        var body = encodeURIComponent(
            'Name: ' + fullname.value.trim() + '\n' +
            'Email: ' + email.value.trim() + '\n' +
            'Type: ' + type.value + '\n\n' +
            'Message:\n' + message.value.trim()
        );

        responseBox.innerHTML = '<strong>Thank you, ' + fullname.value.trim() + '.</strong><br>' +
            'Your message is ready. <a href="mailto:info@royaltechsolutions.co.za?subject=' + subject + '&body=' + body + '">Click here to open it in your email app and send</a>.';
        responseBox.className = 'form-response success';
    }
});
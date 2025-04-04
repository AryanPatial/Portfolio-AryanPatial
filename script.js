// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Hide loader when page is loaded
    window.addEventListener('load', function() {
        const loader = document.querySelector('.loader');
        loader.classList.add('hidden');
    });

    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
    
    // Add shadow to navbar on scroll
    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Add active class to current section in navigation
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 300)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
    
    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-theme');
        
        // Change icon
        const icon = this.querySelector('i');
        if (document.body.classList.contains('light-theme')) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    });
    
    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate hero section
    gsap.from('.hero h1', { 
        opacity: 0, 
        y: 50, 
        duration: 1 
    });
    
    gsap.from('.hero p', { 
        opacity: 0, 
        y: 50, 
        duration: 1, 
        delay: 0.3 
    });
    
    gsap.from('.hero .btn', { 
        opacity: 0, 
        y: 50, 
        duration: 1, 
        delay: 0.6 
    });
    
    // Animate sections on scroll
    gsap.utils.toArray('.section').forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            scrollTrigger: {
                trigger: section,
                start: "top 80%"
            }
        });
    });
    
    // Animate cards sequentially
    gsap.utils.toArray('.exp-card, .project-card, .skill-category, .edu-card, .contact-method').forEach((card, i) => {
        gsap.from(card, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            delay: i * 0.1,
            scrollTrigger: {
                trigger: card,
                start: "top 90%"
            }
        });
    });
    
    // Animate stats
    gsap.utils.toArray('.stat-item').forEach((stat, i) => {
        gsap.from(stat, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            delay: i * 0.2,
            scrollTrigger: {
                trigger: stat,
                start: "top 90%"
            }
        });
    });
});
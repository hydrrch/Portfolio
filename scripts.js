// Reveal animations on scroll
        const reveals = document.querySelectorAll('.reveal');
        
        function revealOnScroll() {
            reveals.forEach(element => {
                const windowHeight = window.innerHeight;
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < windowHeight - elementVisible) {
                    element.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll(); // Initial check

        // Create starry background
        function createStarryBackground() {
            const parallaxBg = document.createElement('div');
            parallaxBg.className = 'parallax-bg';
            document.body.appendChild(parallaxBg);

            for (let i = 0; i < 50; i++) {
                const star = document.createElement('div');
                star.className = 'parallax-star';
                star.style.width = Math.random() * 3 + 'px';
                star.style.height = star.style.width;
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.animationDelay = Math.random() * 4 + 's';
                parallaxBg.appendChild(star);
            }
        }
                // Card tilt effect
        function addTiltEffect() {
            const cards = document.querySelectorAll('.portfolio-card');
    
            cards.forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
            
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
            
                    const rotateX = (y - centerY) / 80;
                    const rotateY = (centerX - x) / 80;
            
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                });
        
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
                });
            });
        }

        // Initialize all effects
        document.addEventListener('DOMContentLoaded', () => {
            createStarryBackground();
            addTiltEffect();
        });

        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

    // View More functionality
    document.querySelector('.view-more-button').addEventListener('click', function() {
        const hiddenItems = document.querySelectorAll('.hidden-portfolio');
        hiddenItems.forEach(item => {
            item.classList.toggle('show');
        });
        
        this.textContent = this.textContent === 'View More Projects' ? 'Show Less' : 'View More Projects';
    });

    // Mobile menu functionality
    document.querySelector('.mobile-menu-button').addEventListener('click', function() {
        document.querySelector('.nav-links').classList.toggle('active');
        document.querySelector('.social-links').classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-bars');
        this.querySelector('i').classList.toggle('fa-times');
    });
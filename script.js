// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Add click event listeners to all link buttons
    const linkButtons = document.querySelectorAll('.link-button');
    
    linkButtons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // You can customize these URLs for each button
            const urls = [
                'https://tharvesh-muhaideen.vercel.app',
                'https://github.com/tharvesh588',
                'https://linkedin.com/in/tharvesh2005',
                'https://instagram.com/tharvesh_muhaideen',
                'mailto:tharvesh2026@gmail.com'
            ];
            
            // Open the corresponding URL
            if (urls[index]) {
                window.open(urls[index], '_blank');
            }
        });
    });
    
    // Add smooth scroll behavior for any anchor links
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
    
    // Add parallax effect to the background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('body');
        const speed = scrolled * 0.5;
        
        if (parallax) {
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });
    
    // Add typing effect to the tagline
    const tagline = document.querySelector('.tagline');
    if (tagline) {
        const originalText = tagline.textContent;
        tagline.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                tagline.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 1000);
    }
    
    // Add hover sound effect (optional - for better UX)
    const buttons = document.querySelectorAll('.link-button, .website-builder-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            // Add a subtle vibration effect
            this.style.animation = 'vibrate 0.1s ease-in-out';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
    });
    
    // Add CSS for vibration animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes vibrate {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-1px); }
            75% { transform: translateX(1px); }
        }
    `;
    document.head.appendChild(style);
    
    // Add loading animation
    const profileCard = document.querySelector('.profile-card');
    if (profileCard) {
        profileCard.style.opacity = '0';
        profileCard.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            profileCard.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            profileCard.style.opacity = '1';
            profileCard.style.transform = 'translateY(0)';
        }, 100);
    }
    
    // Add click tracking for analytics (optional)
    function trackClick(buttonName) {
        // You can integrate with Google Analytics or other tracking services here
        console.log(`Button clicked: ${buttonName}`);
    }
    
    // Track clicks on all buttons
    document.querySelectorAll('.link-button').forEach((button, index) => {
        button.addEventListener('click', () => {
            const buttonNames = ['Portfolio', 'GitHub', 'LinkedIn', 'Instagram', 'Contact', 'View Gallery'];
            trackClick(buttonNames[index]);
        });
    });
    
    document.querySelector('.website-builder-button').addEventListener('click', () => {
        trackClick('Make Your Website');
    });
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        const buttons = document.querySelectorAll('.link-button, .website-builder-button');
        const currentIndex = Array.from(buttons).findIndex(button => button === document.activeElement);
        
        switch(e.key) {
            case 'ArrowDown':
                e.preventDefault();
                if (currentIndex < buttons.length - 1) {
                    buttons[currentIndex + 1].focus();
                }
                break;
            case 'ArrowUp':
                e.preventDefault();
                if (currentIndex > 0) {
                    buttons[currentIndex - 1].focus();
                }
                break;
            case 'Enter':
            case ' ':
                if (document.activeElement.classList.contains('link-button') || 
                    document.activeElement.classList.contains('website-builder-button')) {
                    document.activeElement.click();
                }
                break;
        }
    });
    
    // Add focus styles for better accessibility
    const focusableElements = document.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #667eea';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
    
    // Add a subtle pulse animation to the logo
    const logo = document.querySelector('.logo');
    if (logo) {
        setInterval(() => {
            logo.style.transform = 'scale(1.05)';
            setTimeout(() => {
                logo.style.transform = 'scale(1)';
            }, 200);
        }, 3000);
    }
    
    // Add a "back to top" functionality if the page gets longer
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
    `;
    
    document.body.appendChild(backToTop);
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Show/hide back to top button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
   
    console.log('%c🚀 Welcome to Xplore With Tharvesh!', 'color: #667eea; font-size: 20px; font-weight: bold;');
    console.log('%cThanks for visiting my bio page!', 'color: #764ba2; font-size: 14px;');
}); 
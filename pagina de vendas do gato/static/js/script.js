// No-Face Video Profits - Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for anchor links
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

    // Track CTA button clicks
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', function(e) {
            // Add click tracking analytics here if needed
            console.log('CTA clicked:', this.textContent.trim());
            
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // Video interaction tracking
    const video = document.querySelector('video');
    if (video) {
        video.addEventListener('play', function() {
            console.log('Video started playing');
        });
        
        video.addEventListener('pause', function() {
            console.log('Video paused');
        });
        
        video.addEventListener('ended', function() {
            console.log('Video ended');
            // Could trigger a CTA highlight here
            highlightCTAs();
        });
    }

    // Highlight CTAs after video ends
    function highlightCTAs() {
        const ctas = document.querySelectorAll('.cta-button');
        ctas.forEach(cta => {
            cta.style.animation = 'pulse 1s ease-in-out 3';
        });
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    document.querySelectorAll('.benefit-item, .testimonial-card, .result-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Countdown timer for urgency (optional)
    function startCountdown() {
        const urgencyBadges = document.querySelectorAll('.urgency-badge');
        
        // Set countdown for 24 hours from now
        const now = new Date().getTime();
        const countdownTime = now + (24 * 60 * 60 * 1000);

        function updateCountdown() {
            const currentTime = new Date().getTime();
            const timeLeft = countdownTime - currentTime;

            if (timeLeft > 0) {
                const hours = Math.floor(timeLeft / (1000 * 60 * 60));
                const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

                urgencyBadges.forEach(badge => {
                    const originalText = badge.dataset.originalText || badge.innerHTML;
                    if (!badge.dataset.originalText) {
                        badge.dataset.originalText = originalText;
                    }
                    badge.innerHTML = `${originalText} - ${hours}h ${minutes}m ${seconds}s left!`;
                });
            }
        }

        // Update every second
        setInterval(updateCountdown, 1000);
        updateCountdown(); // Initial call
    }

    // Start countdown if urgency badges exist
    if (document.querySelector('.urgency-badge')) {
        startCountdown();
    }

    // Form validation and enhancement (if needed)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            // Add any form validation here
            console.log('Form submitted');
        });
    });

    // Lazy loading for images (performance optimization)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Escape key to close modals if any
        if (e.key === 'Escape') {
            // Close any open modals
            const modals = document.querySelectorAll('.modal.active');
            modals.forEach(modal => {
                modal.classList.remove('active');
            });
        }
        
        // Enter key on focused CTA buttons
        if (e.key === 'Enter' && e.target.classList.contains('cta-button')) {
            e.target.click();
        }
    });

    // Performance monitoring (optional)
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
            }, 0);
        });
    }

    // Add error handling for video
    if (video) {
        video.addEventListener('error', function(e) {
            console.error('Video error:', e);
            const videoContainer = this.parentElement;
            const errorMessage = document.createElement('div');
            errorMessage.className = 'video-error';
            errorMessage.innerHTML = `
                <i class="fas fa-exclamation-triangle"></i>
                <p>Video temporarily unavailable. Please refresh the page.</p>
            `;
            errorMessage.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-align: center;
                color: white;
                background: rgba(0,0,0,0.8);
                padding: 20px;
                border-radius: 10px;
            `;
            videoContainer.appendChild(errorMessage);
        });
    }

    // Initialize tooltips for guarantee badges
    const guaranteeBadges = document.querySelectorAll('.guarantee-badge, .guarantee-badge-large');
    guaranteeBadges.forEach(badge => {
        badge.title = "100% Risk-Free - Full refund if you're not satisfied within 7 days";
    });

    console.log('No-Face Video Profits landing page initialized successfully!');
});

// Utility functions for potential future use
const NFVPUtils = {
    // Format currency
    formatCurrency: function(amount, currency = 'USD') {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency
        }).format(amount);
    },

    // Track events (placeholder for analytics)
    trackEvent: function(eventName, eventData = {}) {
        console.log('Event tracked:', eventName, eventData);
        // Integrate with Google Analytics, Facebook Pixel, etc.
    },

    // Show notification
    showNotification: function(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#6A0DAD'};
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
};

// Export utils for global access
window.NFVPUtils = NFVPUtils;

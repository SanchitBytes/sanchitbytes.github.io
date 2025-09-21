// Initialize charts
document.addEventListener('DOMContentLoaded', function() {
    initializeCharts();
    setupSmoothScrolling();
    setupIntersectionObserver();
});

// Initialize Chart.js charts with Sanchit's skills
function initializeCharts() {
    // Technical Skills Chart
    const technicalSkillsCtx = document.getElementById('technicalSkillsChart').getContext('2d');
    new Chart(technicalSkillsCtx, {
        type: 'bar',
        data: {
            labels: ['SQL', 'Python', 'R', 'Data Visualization', 'Data Cleaning'],
            datasets: [{
                label: 'Proficiency (%)',
                data: [95, 90, 85, 92, 94],
                backgroundColor: [
                    'rgba(0, 120, 212, 0.8)',
                    'rgba(59, 120, 231, 0.8)',
                    'rgba(233, 118, 43, 0.8)',
                    'rgba(0, 191, 165, 0.8)',
                    'rgba(156, 39, 176, 0.8)'
                ],
                borderColor: [
                    'rgba(0, 120, 212, 1)',
                    'rgba(59, 120, 231, 1)',
                    'rgba(233, 118, 43, 1)',
                    'rgba(0, 191, 165, 1)',
                    'rgba(156, 39, 176, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(18, 18, 18, 0.9)',
                    titleColor: '#ffffff',
                    bodyColor: '#b0b0b0'
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#b0b0b0'
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#b0b0b0'
                    }
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeOutQuart'
            }
        }
    });

    // Tools & Technologies Chart
    const toolsCtx = document.getElementById('toolsChart').getContext('2d');
    new Chart(toolsCtx, {
        type: 'doughnut',
        data: {
            labels: ['Tableau', 'Power BI', 'Excel', 'Jupyter', 'Google Slides'],
            datasets: [{
                data: [90, 88, 95, 92, 85],
                backgroundColor: [
                    'rgba(0, 120, 212, 0.8)',
                    'rgba(233, 118, 43, 0.8)',
                    'rgba(76, 175, 80, 0.8)',
                    'rgba(156, 39, 176, 0.8)',
                    'rgba(0, 191, 165, 0.8)'
                ],
                borderColor: [
                    'rgba(0, 120, 212, 1)',
                    'rgba(233, 118, 43, 1)',
                    'rgba(76, 175, 80, 1)',
                    'rgba(156, 39, 176, 1)',
                    'rgba(0, 191, 165, 1)'
                ],
                borderWidth: 2,
                hoverOffset: 12
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#b0b0b0',
                        font: {
                            size: 12
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(18, 18, 18, 0.9)',
                    titleColor: '#ffffff',
                    bodyColor: '#b0b0b0'
                }
            },
            animation: {
                animateScale: true,
                animateRotate: true,
                duration: 2000,
                easing: 'easeOutQuart'
            }
        }
    });
}

// Smooth scrolling for navigation
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Intersection Observer for animations
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.skill-card, .project-card');
    animateElements.forEach(el => observer.observe(el));
}

// Email functionality
function openEmail() {
    const email = 'sanchitbytes@gmail.com';
    const subject = 'Data Analysis Opportunity';
    const body = 'Hello Sanchit,\n\nI was impressed by your portfolio and would like to discuss potential opportunities. I\'m excited to learn about your data-driven solutions.\n\nBest regards,';
    
    window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
}

// Add CSS for intersection observer animations
const style = document.createElement('style');
style.textContent = `
    .skill-card,
    .project-card {
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.6s ease-out;
    }
    
    .animate-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Add image debug function
function checkImageLoad() {
    const headshot = document.querySelector('.headshot');
    if (headshot) {
        headshot.onerror = function() {
            console.error('Headshot image failed to load');
            this.style.border = '2px solid red';
            this.style.backgroundColor = '#ff000020';
            this.alt = 'Image not found - check images/headshot.jpg path';
        };
        
        headshot.onload = function() {
            console.log('Headshot image loaded successfully');
        };
    }
}

// Call the function when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeCharts();
    setupSmoothScrolling();
    setupIntersectionObserver();
    checkImageLoad(); // Add this line
});

// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.certificate-card');
const track = document.querySelector('.carousel-track');
const indicators = document.querySelectorAll('.indicator');

function moveCarousel(direction) {
    const totalSlides = slides.length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    updateCarousel();
}

function updateCarousel() {
    const slideWidth = slides[0].offsetWidth + 32; // width + gap
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    
    // Update indicators
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

// Auto-play carousel
function startAutoPlay() {
    setInterval(() => {
        moveCarousel(1);
    }, 5000); // Change slide every 5 seconds
}

// Initialize carousel
function initializeCarousel() {
    if (slides.length > 0) {
        // Set initial position
        updateCarousel();
        
        // Add click events to indicators
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                currentSlide = index;
                updateCarousel();
            });
        });
        
        // Start auto-play
        startAutoPlay();
    }
}

// Add touch/swipe support for mobile
function addTouchSupport() {
    let startX, endX;
    const carousel = document.querySelector('.carousel-container');
    
    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });
    
    carousel.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        if (startX - endX > swipeThreshold) {
            moveCarousel(1); // Swipe left - next
        } else if (endX - startX > swipeThreshold) {
            moveCarousel(-1); // Swipe right - previous
        }
    }
}

// Update the DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    initializeCharts();
    setupSmoothScrolling();
    setupIntersectionObserver();
    checkImageLoad();
});

function updateCarousel() {
    const slideWidth = slides[0].offsetWidth + 24; // width + gap (reduced from 32px)
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    
    // Update indicators
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
    
    // Add subtle animation to current slide
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.style.scale = '0.97';
            slide.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.25)';
        } else {
            slide.style.scale = '0.95';
            slide.style.boxShadow = 'none';
        }
    });
}


// Animate skill progress bars
function animateSkillBars() {
    const progressBars = document.querySelectorAll('.skill-progress');
    
    progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
    });
}

// Update the DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    initializeCharts();
    setupSmoothScrolling();
    setupIntersectionObserver();
    checkImageLoad();
    animateSkillBars(); // Add this line
});

// Technical Skills Chart - Compact
new Chart(technicalSkillsCtx, {
    type: 'bar',
    data: {
        labels: ['SQL', 'Python', 'R'],
        datasets: [{
            data: [95, 90, 85],
            backgroundColor: 'rgba(0, 120, 212, 0.8)',
            borderColor: 'rgba(0, 120, 212, 1)',
            borderWidth: 1,
            borderRadius: 4,
            barPercentage: 0.5,
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: 'rgba(18, 18, 18, 0.95)',
                titleColor: '#ffffff',
                bodyColor: '#b0b0b0'
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                max: 100,
                grid: { 
                    color: 'rgba(255, 255, 255, 0.1)',
                    drawBorder: false
                },
                ticks: { 
                    color: '#b0b0b0', 
                    font: { size: 10 },
                    callback: function(value) {
                        return value + '%';
                    }
                }
            },
            y: {
                grid: { 
                    color: 'rgba(255, 255, 255, 0.1)',
                    drawBorder: false
                },
                ticks: { 
                    color: '#b0b0b0', 
                    font: { size: 11, weight: '600' }
                }
            }
        },
        animation: {
            duration: 1200,
            easing: 'easeOutQuart'
        }
    }
});

// Tools Chart - Compact
new Chart(toolsCtx, {
    type: 'doughnut',
    data: {
        labels: ['Tableau', 'Power BI', 'Excel'],
        datasets: [{
            data: [90, 88, 95],
            backgroundColor: [
                'rgba(0, 120, 212, 0.8)',
                'rgba(233, 118, 43, 0.8)',
                'rgba(76, 175, 80, 0.8)'
            ],
            borderWidth: 1,
            borderColor: 'rgba(255, 255, 255, 0.1)',
            hoverOffset: 5
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: '#b0b0b0',
                    font: { size: 10 },
                    padding: 12,
                    usePointStyle: true,
                    pointStyle: 'circle'
                }
            }
        },
        animation: {
            animateScale: true,
            animateRotate: true,
            duration: 1200,
            easing: 'easeOutQuart'
        }
    }
});
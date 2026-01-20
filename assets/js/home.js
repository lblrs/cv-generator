let isSnapping = false;
let lastScrollY = 0;

window.addEventListener('scroll', function() {
    if (isSnapping) return;
    
    const sections = document.querySelectorAll('section');
    const scrollDirection = window.scrollY > lastScrollY ? 1 : -1;
    
    lastScrollY = window.scrollY;
    
    // Trouver quelle section est visible
    let closestSection = 0;
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2) {
            closestSection = index;
        }
    });
    
    // Aller à la section suivante/précédente
    let targetIndex = closestSection;
    if (scrollDirection === 1 && closestSection < sections.length - 1) {
        targetIndex = closestSection + 1;
    } else if (scrollDirection === -1 && closestSection > 0) {
        targetIndex = closestSection - 1;
    }
    
    if (targetIndex !== closestSection) {
        isSnapping = true;
        sections[targetIndex].scrollIntoView({ behavior: 'smooth' });
        
        setTimeout(() => {
            isSnapping = false;
        }, 1000);
    }
});
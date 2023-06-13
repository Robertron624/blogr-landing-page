const mobileMenuModal = document.querySelector('.mobile-menu-modal');

const hamburguerButton = document.querySelector('.hamburger img');

let isMobileMenuOpen = false;

hamburguerButton.addEventListener('click', () => {
    if (!isMobileMenuOpen) {
        mobileMenuModal.showModal();
        isMobileMenuOpen = true;
        hamburguerButton.src = '/images/icon-close.svg';
    }
    else {
        mobileMenuModal.close();
        isMobileMenuOpen = false;
        hamburguerButton.src = '/images/icon-hamburger.svg';
    }
});

// Accordions actions

const accordions = document.querySelectorAll('.mobile-accordion');

function openAccordion (accordion) {
    const content = accordion.querySelector('.mobile-accordion-content');
    const accordionArrow = accordion.querySelector('.mobile-accordion-button img');
    
    accordion.classList.add('accordion-active');

    content.style.maxHeight = content.scrollHeight + 'px';

    accordionArrow.style.transform = 'rotate(180deg)';
}

function closeAccordion (accordion) {
    const content = accordion.querySelector('.mobile-accordion-content');

    const accordionArrow = accordion.querySelector('.mobile-accordion-button img');

    accordion.classList.remove('accordion-active');

    accordionArrow.style.transform = 'rotate(0deg)';

    content.style.maxHeight = null;
}

accordions.forEach(accordion => {

    const accordionTrigger = accordion.querySelector('.mobile-accordion-button');

    const content = accordion.querySelector('.mobile-accordion-content');

    accordionTrigger.addEventListener('click', () => {
    
        if(content.style.maxHeight) {
            closeAccordion(accordion);
        }
        else {
            accordions.forEach(accordion => {
                closeAccordion(accordion);
            });

            openAccordion(accordion);
        }
    });
});

// Close mobile modal when click outside of it
window.addEventListener('click', (e) => {
    if (e.target === mobileMenuModal) {

        // Close all accordions
        accordions.forEach(accordion => {
            closeAccordion(accordion);
        });
    
        mobileMenuModal.close();
        isMobileMenuOpen = false;
        hamburguerButton.src = '/images/icon-hamburger.svg';
    }
});
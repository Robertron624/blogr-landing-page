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


// Desktop header menus

const desktopLinkGroups = document.querySelectorAll('.desktop-link-group');


desktopLinkGroups.forEach(linkGroup => {

    let isLinkGroupOpen = false;

    const linkGroupTrigger = linkGroup.querySelector('button.desktop-link');

    const linkGroupContent = linkGroup.querySelector('.desktop-link-content');

    const linkGroupArrow = linkGroup.querySelector('.desktop-link img');

    linkGroupTrigger.addEventListener('click', () => {

        if (!isLinkGroupOpen) {
            linkGroupContent.classList.add('desktop-link-active');

            linkGroupArrow.style.transform = 'rotate(180deg)';

            isLinkGroupOpen = true;
        }
            
        else {
            linkGroupContent.classList.remove('desktop-link-active');

            linkGroupArrow.style.transform = 'rotate(0deg)';

            isLinkGroupOpen = false;
        }
    });
});

// Get current device width

const deviceWidth = window.innerWidth;

console.log("first device width: " + deviceWidth);

const headerBackgroundShape = document.querySelector('header .background-shape svg');

if (deviceWidth >= 768) {
    headerBackgroundShape.setAttribute('viewBox', '200 200 400 600');
    headerBackgroundShape.setAttribute('width', '1000');
    headerBackgroundShape.setAttribute('height', '480');
}


// Function to toggle visibility of an element
function toggleVisibility(element) {
    element.classList.toggle('hidden');
}
// Function to handle card click events
function handleCardClick(card, attribute) {
    card.addEventListener('click', () => {
        const value = card.getAttribute(attribute);
        if (value) {
            console.log(`Selected ${attribute}: ${value}`);
        }
    });
}
// Function to handle form submissions
function handleFormSubmit(form, onSuccess) {
    form.addEventListener('submit', function (e) {
        e.preventDefault(); 
        const formData = new FormData(form);
        // Log form data or send it to a server
        formData.forEach((value, key) => {
            console.log(`${key}: ${value}`);
        });
        // Execute the provided success callback (if available)
        if (typeof onSuccess === 'function') {
            onSuccess(formData);
        }
    });
}
// Responsive navigation menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('menu-open');
});
// About page functionality
const readMoreBtn = document.getElementById('read-more-btn');
const moreInfo = document.getElementById('more-info');

readMoreBtn.addEventListener('click', () => {
    toggleVisibility(moreInfo);
    readMoreBtn.textContent = moreInfo.classList.contains('hidden') ? 'Read More' : 'Read Less';
});
// Accommodation, Dining, Activities pages
const accommodationCards = document.querySelectorAll('.accommodation-card');
const diningCards = document.querySelectorAll('.dining-card');
const activityCards = document.querySelectorAll('.activity-card');

accommodationCards.forEach(card => {
    handleCardClick(card, 'data-accommodation');
});

diningCards.forEach(card => {
    handleCardClick(card, 'data-dining');
});

activityCards.forEach(card => {
    handleCardClick(card, 'data-activity');
});
// Contact page functionality
const contactForm = document.getElementById('contactForm');
handleFormSubmit(contactForm, (formData) => {
    
    console.log('Form submitted successfully!');
});
// Booking page functionality
const bookingForm = document.getElementById('bookingForm');
handleFormSubmit(bookingForm, (formData) => {
    console.log('Booking form submitted successfully!');
});
// beach bar menu
document.addEventListener("DOMContentLoaded", function () {
    const menuItems = [
        { name: "Cocktail 1", category: "cocktails", description: "Lorem ipsum dolor sit amet.", price: "$10.99", image: "images/cocktail1.jpg" },
        { name: "Appetizer 1", category: "appetizers", description: "Lorem ipsum dolor sit amet.", price: "$7.99", image: "images/appetizer1.jpg" },
        { name: "Dessert 1", category: "desserts", description: "Lorem ipsum dolor sit amet.", price: "$5.99", image: "images/dessert1.jpg" },
    ];

    const menuContainer = document.getElementById("menu-items");
    const categoryButtons = document.querySelectorAll(".category-button");
    // Function to generate menu items based on category
    function generateMenu(category) {
        menuContainer.innerHTML = "";
        menuItems.forEach((item) => {
            if (category === "all" || item.category === category) {
                const menuItem = document.createElement("section");
                menuItem.classList.add("menu-item");
                menuItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <h2>${item.name}</h2>
                    <p>${item.description}</p>
                    <span class="price">${item.price}</span>
                `;
                menuContainer.appendChild(menuItem);
            }
        });
    }
    // Event listener for category buttons
    categoryButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const selectedCategory = button.getAttribute("data-category");
            generateMenu(selectedCategory);
        });
    });
    // Initial menu generation (show all items by default)
    generateMenu("all");
});

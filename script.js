//your code here!
// Get references to the DOM elements
const list = document.getElementById("infi-list");

// Helper function to create a list item
function createListItem(index) {
    const listItem = document.createElement("li");
    listItem.textContent = `Item ${index}`;
    return listItem;
}

// Add initial items to the list
let itemCount = 10; // Keeps track of the number of items
for (let i = 1; i <= itemCount; i++) {
    list.appendChild(createListItem(i));
}

// Function to add more items when needed
function addMoreItems() {
    for (let i = 1; i <= 2; i++) {
        itemCount++;
        list.appendChild(createListItem(itemCount));
    }
}

// Set up the IntersectionObserver to detect when the last item is visible
const observer = new IntersectionObserver((entries) => {
    const lastItem = entries[0];
    if (lastItem.isIntersecting) {
        addMoreItems();
    }
}, {
    root: null, // Use the viewport as the root
    rootMargin: "0px",
    threshold: 1.0 // Trigger when the entire element is visible
});

// Observe the last list item
observer.observe(list.lastElementChild);


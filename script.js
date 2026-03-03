
// Waste data
const wasteData = {
    "banana peel": { category: "Organic Waste", color: "green", description: "Perfect for composting! Place in your green/wet waste bin." },
    "plastic bottle": { category: "Recyclable Waste", color: "blue", description: "Rinse and recycle in blue bin." },
    "old phone": { category: "Hazardous Waste", color: "red", description: "Take to e-waste recycling center." },
    "used tissues": { category: "Non-Recyclable Waste", color: "black", description: "Dispose in general waste bin." }
    // ... add the rest from your React code
};

// Make lookupWaste available globally
function lookupWaste() {
    const input = document.getElementById('waste-input').value.trim().toLowerCase();
    const resultsDiv = document.getElementById('lookup-results');
    resultsDiv.innerHTML = '';
    resultsDiv.classList.add('hidden');

    if (!input) {
        resultsDiv.innerHTML = `<p class="text-orange-700">Please enter an item.</p>`;
        resultsDiv.classList.remove('hidden');
        return;
    }

    const item = wasteData[input];
    if (item) {
        resultsDiv.innerHTML = `
            <div class="p-6 border-2 rounded-xl">
                <h3 class="text-xl font-bold">${item.category}</h3>
                <p>${item.description}</p>
            </div>
        `;
    } else {
        resultsDiv.innerHTML = `<p class="text-red-700">Item not found. Try again.</p>`;
    }
    resultsDiv.classList.remove('hidden');
}
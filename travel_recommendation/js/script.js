const recommendations = {
    beach: {
        title: "Top Beach Destinations",
        description: "Relax at world-famous beaches with crystal clear water.",
        images: ["images/beach1.jpeg", "images/beach2.jpg"],
    },
    temple: {
        title: "Historic Temple Sites",
        description: "Explore spiritual and architectural wonders at these temples.",
        images: ["images/temple1.jpg", "images/temple2.jpeg"],
    },
    country: {
        title: "Amazing Places by Country",
        description: "Find exciting destinations tailored to your favorite countries.",
        images: ["images/country1.jpg", "images/country2.jpg"],
    },
};

function showRecommendation(type) {
    const rec = recommendations[type];
    const container = document.getElementById('destination-display');
    container.innerHTML = `<h3>${rec.title}</h3>
        <p>${rec.description}</p>
        <img src="${rec.images[0]}" alt="${type}-1">
        <img src="${rec.images[1]}" alt="${type}-2">`;
}

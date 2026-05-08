function showFact() {
    const facts = [
        "Some snakes can sense heat using special organs.",
        "Pythons kill prey by constriction, not poison.",
        "The black mamba is among the fastest snakes in the world.",
        "Snakes smell using their tongues.",
        "King cobras can grow over 5 meters long."
    ];

    const randomFact = facts[Math.floor(Math.random() * facts.length)];

    document.getElementById("fact-box").innerText = randomFact;
}
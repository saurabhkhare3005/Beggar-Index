document.addEventListener("DOMContentLoaded", function() {
    // Simulate live token price and market cap update
    setInterval(function() {
        document.getElementById('token-price').innerText = "Token Price: $0.01";
        document.getElementById('market-cap').innerText = "Market Cap: $10,000";
    }, 1000);
});

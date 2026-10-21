const fetchBtn = document.getElementById("fetchBtn");
const statusElement = document.getElementById("status");
const addressElement = document.getElementById("address");

console.log("app.js loaded");
console.log("Fetch button:", fetchBtn);

fetchBtn.addEventListener("click", async function () {
    console.log("Button clicked!");

    fetchBtn.disabled = true;
    statusElement.textContent = "Checking wallet...";
    addressElement.textContent = "Checking...";

    try {
        console.log("Checking wallet provider...");

        if (!window.ethereum) {
            console.log("window.ethereum not found");

            statusElement.textContent =
                "Wallet provider not detected. Open this page in a compatible wallet browser.";

            addressElement.textContent = "Not available";
            return;
        }

        console.log("Wallet provider found!");
        console.log("Requesting existing authorized accounts...");

        const accounts = await window.ethereum.request({
            method: "eth_accounts"
        });

        console.log("Accounts returned:", accounts);

        if (!Array.isArray(accounts) || accounts.length === 0) {
            statusElement.textContent =
                "No authorized account available.";

            addressElement.textContent = "Not available";
            return;
        }

        addressElement.textContent = accounts[0];

        statusElement.textContent =
            "Wallet address fetched successfully.";

    } catch (error) {
        console.error("Wallet error:", error);

        statusElement.textContent =
            "Unable to fetch wallet address. Check the console.";

        addressElement.textContent = "Not available";

    } finally {
        fetchBtn.disabled = false;
    }
});
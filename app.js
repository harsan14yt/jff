const fetchBtn = document.getElementById("fetchBtn");
const statusElement = document.getElementById("status");
const addressElement = document.getElementById("address");

fetchBtn.addEventListener("click", async function () {

```
// Prevent repeated clicks while checking.
fetchBtn.disabled = true;

statusElement.textContent = "Checking wallet...";
addressElement.textContent = "Checking...";

try {

    // Look for an EVM-compatible wallet provider.
    if (!window.ethereum) {
        statusElement.textContent =
            "No compatible wallet provider detected.";

        addressElement.textContent = "Not available";
        return;
    }

    // Read accounts already authorized for this website.
    // This does not request new account permissions.
    const accounts = await window.ethereum.request({
        method: "eth_accounts"
    });

    if (!Array.isArray(accounts) || accounts.length === 0) {
        statusElement.textContent =
            "No authorized wallet account is available.";

        addressElement.textContent = "Not available";
        return;
    }

    // Display the available public address.
    const walletAddress = accounts[0];

    addressElement.textContent = walletAddress;
    statusElement.textContent =
        "Wallet address fetched successfully.";

} catch (error) {

    console.error("Wallet address lookup failed:", error);

    statusElement.textContent =
        "Unable to fetch wallet address.";

    addressElement.textContent = "Not available";

} finally {

    // Allow the user to try again.
    fetchBtn.disabled = false;
}
```

});

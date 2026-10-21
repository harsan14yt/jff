```javascript
const fetchBtn = document.getElementById("fetchBtn");
const statusElement = document.getElementById("status");
const addressElement = document.getElementById("address");

fetchBtn.addEventListener("click", function () {
    const result = {
        ethereum: typeof window.ethereum !== "undefined",
        tronWeb: typeof window.tronWeb !== "undefined",
        tronLink: typeof window.tronLink !== "undefined",
        ethereumIsTrust: !!window.ethereum?.isTrust,
        providers: []
    };

    if (Array.isArray(window.ethereum?.providers)) {
        result.providers = window.ethereum.providers.map((provider) => ({
            isTrust: !!provider.isTrust,
            isTronLink: !!provider.isTronLink
        }));
    }

    console.log("Wallet provider diagnostic:", result);

    statusElement.textContent = "Diagnostic completed:";

    addressElement.textContent = JSON.stringify(result, null, 2);
});
```

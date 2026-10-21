```javascript
document.addEventListener("DOMContentLoaded", function () {
    const fetchBtn = document.getElementById("fetchBtn");
    const statusElement = document.getElementById("status");
    const addressElement = document.getElementById("address");

    if (!fetchBtn || !statusElement || !addressElement) {
        return;
    }

    statusElement.textContent = "JavaScript loaded successfully.";

    fetchBtn.addEventListener("click", function () {
        try {
            const result = {
                ethereum: typeof window.ethereum !== "undefined",
                tronWeb: typeof window.tronWeb !== "undefined",
                tronLink: typeof window.tronLink !== "undefined"
            };

            addressElement.textContent = JSON.stringify(result, null, 2);
            statusElement.textContent = "Provider check completed.";
        } catch (error) {
            statusElement.textContent = "Diagnostic failed.";
            addressElement.textContent = String(error);
        }
    });
});
```

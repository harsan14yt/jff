```javascript
alert("JAVASCRIPT FILE LOADED");

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("fetchBtn");
    const status = document.getElementById("status");
    const address = document.getElementById("address");

    if (!button || !status || !address) {
        alert("ERROR: HTML elements not found");
        return;
    }

    button.addEventListener("click", function () {
        status.textContent = "BUTTON WORKS";
        address.textContent = "JavaScript is working correctly!";
        alert("BUTTON CLICK DETECTED");
    });
});
```

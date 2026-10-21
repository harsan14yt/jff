const fetchBtn = document.getElementById("fetchBtn");
const statusElement = document.getElementById("status");
const addressElement = document.getElementById("address");

fetchBtn.addEventListener("click", async function () {
    fetchBtn.disabled = true;

    statusElement.textContent = "Checking TRON wallet...";
    addressElement.textContent = "Not available";

    try {
        let tronWeb = null;

        // Look for an already available TRON provider.
        if (window.tronWeb && window.tronWeb.defaultAddress) {
            tronWeb = window.tronWeb;
        } else if (
            window.tronLink &&
            window.tronLink.tronWeb
        ) {
            tronWeb = window.tronLink.tronWeb;
        }

        if (!tronWeb) {
            statusElement.textContent =
                "No compatible TRON wallet provider detected.";

            return;
        }

        // Read an address only if the provider already exposes one.
        const address =
            tronWeb.defaultAddress &&
            tronWeb.defaultAddress.base58;

        if (!address) {
            statusElement.textContent =
                "No TRON address is currently available.";

            return;
        }

        // Confirm that the exposed value is a valid TRON address.
        if (
            !tronWeb.isAddress ||
            !tronWeb.isAddress(address)
        ) {
            statusElement.textContent =
                "The available address could not be verified.";

            return;
        }

        addressElement.textContent = address;
        statusElement.textContent =
            "TRON address fetched successfully.";

    } catch (error) {
        console.error("TRON address lookup error:", error);

        statusElement.textContent =
            "Unable to read the TRON address.";

    } finally {
        fetchBtn.disabled = false;
    }
});
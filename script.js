
document.addEventListener("DOMContentLoaded", function () {
    const PHONE = "27765081149"; // WhatsApp number (no + sign)

    // Select every "Rent now" button inside a fridge card
    document.querySelectorAll(".fridge-card .fridge-foot a.btn").forEach(function (btn) {
      const card = btn.closest(".fridge-card");
      const name = card.querySelector(".fridge-head h3").textContent.trim();
      const priceEl = card.querySelector(".price");
      const price = priceEl ? priceEl.textContent.trim() : "";

      const message =
        "Hi MSM Rentals! 👋\n\n" +
        "I'd like to rent the following:\n" +
        "📦 Product: " + name + "\n" +
        "💰 Price: " + price + "/month\n\n" +
        "Please confirm availability and delivery cost to my area.";

      btn.href = "https://wa.me/" + PHONE + "?text=" + encodeURIComponent(message);
      btn.target = "_blank";
      btn.rel = "noopener";
    });
  });

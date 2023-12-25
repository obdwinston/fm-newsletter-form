var form = document.querySelector("form");
var email = document.querySelector("#email");
var card = document.querySelector(".card");
var leftCard = document.querySelector(".card-left");
var rightCard = document.querySelector(".card-right");
var successCard = document.querySelector(".card-success");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  card.style.maxWidth = "450px";
  card.style.padding = "50px";

  leftCard.style.display = "none";
  rightCard.style.display = "none";

  successCard.style.display = "block";
  successCard.innerHTML = `
  <img
    class="card-icon"
    src="assets/images/icon-success.svg"
    alt="card-icon"
  />
  <h1 class="card-title">Thanks for subscribing!</h1>
  <p class="card-subtitle">
    A confirmation email has been sent to <strong>${email.value}</strong>.
    Please open it and click the button inside to confirm your
    subscription.
  </p>
  <button id="dismiss">Dismiss message</button>
  `;

  document.querySelector("#dismiss").addEventListener("click", handleDismiss);
}

function handleDismiss() {
  card.style.maxWidth = "800px";
  card.style.padding = "20px";

  leftCard.style.display = "block";
  rightCard.style.display = "block";
  successCard.style.display = "none";
}

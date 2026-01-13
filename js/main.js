const ticketData = document.getElementById("ticket-data");
const usernameInput = document.getElementById("username-input");
const ageInput = document.getElementById("age-input");
const kmInput = document.getElementById("km-input");
const send = document.getElementById("send-btn");
const ticket = document.getElementById("outcome");

ticketData.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("username:", usernameInput.value);
  console.log("age:", ageInput.value);
  console.log("km:", kmInput.value);
});

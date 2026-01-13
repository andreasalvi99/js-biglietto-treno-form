// ?? Recupero le keyword dall'html
const ticketData = document.getElementById("ticket-data");
const usernameInput = document.getElementById("username-input");
const ageInput = document.getElementById("age-input");
const kmInput = document.getElementById("km-input");
const send = document.getElementById("send-btn");
const ticket = document.getElementById("outcome");

// ?? prevengo il comportamento di defasult del form
ticketData.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("username:", usernameInput.value);
  console.log("age:", ageInput.value);
  console.log("km:", kmInput.value);
});

// ?? Faccio sparire la sezione del biglietto in fase di apertura della pagina
ticket.style.display += "none";

// ?? Recupero le keyword dall'html
const ticketData = document.getElementById("ticket-data");
const usernameInput = document.getElementById("username-input");
const ageInput = document.getElementById("age-input");
const kmInput = document.getElementById("km-input");
const send = document.getElementById("send-btn");
const ticket = document.getElementById("outcome");
const ownersname = document.getElementById("owners-name");
const fareName = document.getElementById("fare");
const ticketPriceValue = document.getElementById("ticket-price-value");
const user = usernameInput.value;
const ageInfo = ageInput.value;

// ticket.style.display += "none";

// ?? prevengo il comportamento di defasult del form
ticketData.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(ageInput.value);
  console.log(kmInput.value);
  console.log(usernameInput.value);
  let ticketPrice = kmInput.value * 0.21;
  console.log("ticketPrice:", ticketPrice.toFixed(2) + "€");

  if ()






});

// ?? Faccio sparire la sezione del biglietto in fase di apertura della pagina
// ?? Il programma già chiede all'utente i dati tramite gli imput
// ?? Procedo al calcolo del prezzo del biglietto sulla base dei km da fare

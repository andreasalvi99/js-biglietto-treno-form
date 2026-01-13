// ?? Recupero le keyword dall'html
const ticketData = document.getElementById("ticket-data");
const usernameInput = document.getElementById("username-input");
const ageInput = document.getElementById("age-input");
const kmInput = parseInt(document.getElementById("km-input"));
console.log(typeof kmInput);

const send = document.getElementById("send-btn");
const ticket = document.getElementById("outcome");
const ownersname = document.getElementById("owners-name");
const fareName = document.getElementById("fare");
const ticketPriceValue = document.getElementById("ticket-price-value");

// ?? prevengo il comportamento di defasult del form
ticketData.addEventListener("submit", (e) => {
  e.preventDefault();
});

const user = usernameInput.value;
const ageInfo = ageInput.value;
// const kmNum = parseInt(kmInput.value);
// console.log(typeof kmInput);

// ?? Faccio sparire la sezione del biglietto in fase di apertura della pagina
// ticket.style.display += "none";
// ?? Il programma già chiede all'utente i dati tramite gli imput
// ?? Procedo al calcolo del prezzo del biglietto sulla base dei km da fare
let ticketPrice = parseInt((kmInput * 0.21).toFixed(2));
console.log("ticketPrice:", ticketPrice + "€");
console.log(typeof ticketPrice);

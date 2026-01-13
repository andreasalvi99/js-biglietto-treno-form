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

// ticket.classList.add("d-none");

// ?? prevengo il comportamento di defasult del form
ticketData.addEventListener("submit", (e) => {
  e.preventDefault();

  if (kmInput.value < 0) {
    alert("Il valore inserito non è ammesso");
    throw new Error("Value in less than 0");
  }

  if (!usernameInput.value || !ageInput.value || !kmInput.value) {
    alert("Hai dimenticato qualcosa :(");
    return;
  }

  console.log(ageInput.value);
  console.log(kmInput.value);
  console.log(usernameInput.value);
  let ticketPrice = kmInput.value * 0.21;
  console.log("ticketPrice:", ticketPrice.toFixed(2) + "€");

  ownersname.innerHTML += `
  <img src="./img/person-fill.svg" alt="" />
  ${usernameInput.value}`;

  let outputMessage = "";

  if (ageInput.value === "Maggiorenne") {
    ticketPriceValue.innerHTML += `
      <img src="./img/currency-exchange.svg" alt="" />  ${ticketPrice}€`;
    fareName.innerHTML = `<img src="./img/tag-fill.svg" alt=""> Biglietto standard`;
    outputMessage =
      "Il prezzo del tuo biglietto è " + ticketPriceValue.innerText;
  } else if (ageInput.value === "Minorenne") {
    ticketPriceValue.innerHTML += `<img src="./img/currency-exchange.svg" alt="" />
      ${(ticketPrice - (ticketPrice * 20) / 100).toFixed(2)} €`;
    fareName.innerHTML = `<img src="./img/tag-fill.svg" alt=""> Sconto Under18`;
    outputMessage =
      "Il prezzo del tuo biglietto è " + ticketPriceValue.innerText;
  } else if (ageInput.value === "Over65") {
    ticketPriceValue.innerHTML += `<img src="./img/currency-exchange.svg" alt="" />
      ${(ticketPrice - (ticketPrice * 40) / 100).toFixed(2)} €`;
    fareName.innerHTML = `<img src="./img/tag-fill.svg" alt=""> Sconto Over65`;
    outputMessage =
      "Il prezzo del tuo biglietto è " + ticketPriceValue.innerText;
  }

  ticket.classList.remove("d-none");

  console.log(outputMessage);

  usernameInput.value = "";
  ageInput.value = "";
  kmInput.value = "";
});

// ?? Faccio sparire la sezione del biglietto in fase di apertura della pagina
// ?? Il programma già chiede all'utente i dati tramite gli imput
// ?? Procedo al calcolo del prezzo del biglietto sulla base dei km da fare

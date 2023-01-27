const ListOfTowns = document.getElementById("townList");

const threeTowns = document.getElementById("threeTowns");

const fiveTowns = document.getElementById("fiveTowns");

const townArray = [
  "Tønsberg",
  "Sandefjord",
  "Tromsø",
  "Harstad",
  "Trondheim",
  "Oslo",
  "Porsgrunn",
  "Skien",
  "Drammen",
  "Stavanger",
];

for (let i = 0; i < townArray.length; i++) {
  /* Merk: Hvis man kun bruker = her, erstatter man kun ett array-element med et nytt inne i html-elementet. Bruker man +=, legger man til */
  ListOfTowns.innerHTML += "<li>" + townArray[i] + "</li>";
}

for (let i = 0; i <= 2; i++) {
  threeTowns.innerHTML += "<li>" + townArray[i] + "</li>";
}

for (let i = 5; i <= 9; i++) {
  fiveTowns.innerHTML += "<li>" + townArray[i] + "</li>";
}

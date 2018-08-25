var słowa = [
    "javascript",
    "monter",
    "niesamowity",
    "lampart"
];
var słowo = słowa[Math.floor(Math.random() * słowa.length)];

var odpowiedzi = [];
for (var i = 0; i < słowo.length; i++) {
    odpowiedzi[i] = "_";
}
var pozostałeLitery = słowo.length;

while (pozostałeLitery > 0) {
    alert(odpowiedzi.join(" "));
    var strzał = prompt("Podaj literę albo kliknij Anuluj, aby zakończyć grę.");
    if (strzał === null) {
        break;
    } else if (strzał.length !== 1) {
        alert("Podaj proszę tylko jedną literę.");
    } else {
        for (var j = 0; j < słowo.length; j++) {
            if (słowo[j] === strzał) {
                odpowiedzi[j] = strzał;
                pozostałeLitery--;
            }
        }
    }
}
alert(odpowiedzi.join(" "));
alert("Dobra robota! Szukane słowo to " + słowo);
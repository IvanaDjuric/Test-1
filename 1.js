
let kolicina = 3
let cenaPoKomadu = 150
let godina = 21

let racun = cenaPoKomadu * kolicina

if (godina < 18) {
    console.log('Zabranjen ulaz mladjima od 18');
}
if (godina > 18 && godina % 7 === 0) {
    racun = racun * 0.85
}

if (godina > 18 && godina % 11 === 0) {
    racun = racun * 0.75
}

console.log(racun);


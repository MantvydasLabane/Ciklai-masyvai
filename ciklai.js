// 1
//console.log’e, naudojant ciklą atspausdinti penkias eilutes ‘Labas’;

//for (let i = 0; i < 5; i++) {
//    console.log("labas");
//}

// 2
//console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje);

//for (let i = 0; i<=4; i++) {
//  console.log(i)
//}

// 3
//console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje);

//for (let i = 0; i<=40; i += 10) {
//    console.log(i)
//}

// 4
//console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 4 3 2 1 0 (vienas skaičius vienoje eilutėje);

//for (let i = 4; i>=0; i--) {
//    console.log(i)
//}

// 5
//console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 2 4 6 8 (vienas skaičius vienoje eilutėje, daugybos konsolėje nenaudoti!, if’ų nenaudoti, ciklas for);

//for (let i = 0; i<=8; i += 2) {
//    console.log(i)
//}

// 6
//console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje);

//let
//for (let i = 0; i < 5; i++) {
//    console.log(i)
//}

// 7
//console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje);

// for (let i = 0; i < 5; i++) {
//     random = Math.random (0, 10);
//     trunck = Math.trunc (random * 11)
//         console.log(trunck)
//     }

// 8
// console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5;

// let raandom;
// while (raandom != 5) {
//     raandom = Math.trunc(Math.random () * 11);
//         console.log(raandom)
//     }

// 9
// console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;

// let raaandom;
// let suma = 0;
// while (suma <= 100) {
// raaandom = Math.trunc(Math.random () * 11);
// suma += raaandom;
// }
// console.log(raaandom, suma)

// 10
//console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko;

// let raaaandom;
// let ciklas = 0;
// while (raaaandom !== 5 && raaaandom !== 7) {
//   ciklas = ciklas + 1;
//   raaaandom = Math.trunc(Math.random() * 11);
//   console.log(raaaandom);
// }
// console.log("----------");
// console.log(ciklas);

// 11
// console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 20, bet ne anksčiau nei po 11 ciklų;

// let random1;
// let suma = 0;
// let ciklas1 = 0;
// while(suma < 20 && ciklas1 <= 11) {
//     random1 = Math.trunc(Math.random () * 11);
//     suma += random1;
//     ciklas1++
//     console.log(random1)
// }
// console.log("--------")
// console.log(ciklas1)
// console.log("-------")
// console.log(suma)


// 12
// console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklą kartoti kol bus sugeneruoti trys nelyginiai skaičiai;

// let random2;
// let nelyg = 0;
// while(nelyg < 3) {
//     random2 = Math.trunc(Math.random() * (10 + 1));
//     console.log(random2);
//     if (random2 % 2 !== 0) {
//         nelyg++
//     }
// }


// 13
// console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti tol, kol neiškris abu vienodi skaičiai;

// let random3 = 0;
// let rrandom3 = 1;
// while (random3 !== rrandom3) {
//     random3 = Math.trunc(Math.random() * (10 + 1));
//     rrandom3 = Math.trunc(Math.random() * (10 + 1)); 
//     console.log(random3, rrandom3)
// }


// 14
// console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Skaičiuoti abiejų skaičių sumas skirtinguose kintamuosiuose (skaičiuoti skaičių stulpelių sumas). Ciklą kartoti tol, kol kiekviena iš sumų bus daugiau nei 100;

// let skaicius;
// let skaicius2;
// let skaiciusSuma = 0;
// let skaicius2Suma = 0;
// while (skaiciusSuma <= 100 || skaicius2Suma <= 100) {
//     skaicius = Math.trunc(Math.random() * (10 + 1));
//     skaiciusSuma += skaicius
//     skaicius2 = Math.trunc(Math.random() * (10 + 1));
//     skaicius2Suma += skaicius2
//     console.log(skaicius, skaicius2);
// }
//     console.log('------------');
//     console.log(skaiciusSuma, skaicius2Suma)


// 15
// console.log’e,naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti kol bus sugeneruota po tris arba daugiau nelyginių skaičių  (skaičiai atskiruose stulpeliuose).


let sskaicius;
let sskaicius2;
let nelyginis = 0;
let nelyginis1 = 0;
while(nelyginis < 3 && nelyginis1 < 3) {
    sskaicius = Math.trunc(Math.random() * (10 + 1));
    sskaicius2 = Math.trunc(Math.random() * (10 + 1));
    console.log(sskaicius, sskaicius2)
    if (sskaicius % 2 == 1) {
        nelyginis++
    }
    if (sskaicius2 % 2 == 1) {
        nelyginis1++
    }
}
// 1
// Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);

let pinigine = [];
    min = Math.ceil(10);
    max = Math.floor(30);

    const length = Math.floor(Math.random() * (max - min + 1)) + min;
for (let i = 0; i < length; i++) {
    pinigine.push(Math.trunc(Math.random() * 11))
}
    // console.log(length);
    // console.log(pinigine)

// 2
// Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą;


let suma = 0;
for (let i = 0; i < pinigine.length; i++) {
        suma = suma + pinigine[i]
}
//     console.log(pinigine);
//     console.log(suma)

//3
// Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;


let popieriniai = 0;
for (let i = 0; i < pinigine.length; i++) {
        if (pinigine[i] > 2) {
            popieriniai = popieriniai + pinigine[i]
        }
}
    // console.log(pinigine);
    // console.log(popieriniai)

//4
//Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;



for (let i = 0; i < pinigine.length; i++) {
        if (pinigine[i] <= 2) {
            pinigine[i] = 0;
        }
}
    // console.log(pinigine)

//5
// Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra;


let didziausia = (Math.max(...pinigine));
let kartai = 0;

pinigine.forEach((element) => {
    if (didziausia === element) {
        kartai++;
    }
});
// console.log(pinigine)
// console.log(didziausia)
// console.log(kartai);

//6
//Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes;

for (let i = 0; i < pinigine.length; i++) {
    if (pinigine[i] === 0 ) {
        pinigine[i] = i;
    }
}

// console.log(pinigine)

//7
//Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30;

for (let i = pinigine.length; i < 30; i++) {
    pinigine[i] = Math.floor(Math.random() * (max - min + 1)) + min;

}
// console.log(pinigine)
// console.log(pinigine.length)

//8
//Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus. Į vieną iš 1 uždavinio masyvo pridėti reikšmes mažesnes arba lygias 2 (monetas), o į kitą didesnes nei 2 (popierinius pinigus);

let kapeikos = [];
let popierinius = [];

for (let i = 0; i < pinigine.length; i++) {
    if (pinigine[i] > 2) {
        popierinius.push(pinigine[i])
    }
    if (pinigine[i] <= 2) {
        kapeikos.push(pinigine[i])
    }
}
// console.log(popierinius)
// console.log(kapeikos)

//9
//Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų, kurio pirmas elementas būtų masyvas iš 8 uždavinio su monetom, o antras elementas masyvas iš 8 uždavinio su popieriniais pinigais;

let pinigine2 = [];

pinigine2.push(kapeikos, popierinius)

// console.log(pinigine2)

// 10
// Į 9 uždavinio masyvą, piniginę su dviem skyreliais, pridėti trečią skyrelį- masyvą su kortelėm: ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];

let korteles = [];
korteles.push('KIKA', 'Euro vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI')
// console.log(korteles)

pinigine2.push(korteles)
// console.log(pinigine2)


//11
//Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę;

pinigine2[2].sort()
// console.log(korteles)

//12
//Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 'Visa' (su rand generuokite atsitiktines reikšmes 'MasterCard' arba 'Visa' ir rašykite į masyvą) iš skirtingų bankų tiek, kad skyrelis (masyvo ilgis) pasidarytų lygus 20;

for (let i = pinigine2[2].length; i < 20; i++) {
    if (Math.trunc(Math.random() * 2) < 1) {
        pinigine2[2][i] = "Visa";
    } else {
        pinigine2[2][i] = "MasterCard";
    }
}
// console.log(pinigine2[2].length)
// console.log(pinigine2[2])

//13
//Paskaičiuokite, kokio tipo kortelių ('MasterCard' arba 'Visa') yra daugiau;
// console.log(pinigine2[2])
let visaCount = 0;
let masterCardCount = 0;

for (let i = 0; i < pinigine2[2].length; i++) {
    if (pinigine2[2][i] ==='Visa') {
        visaCount++
    }
    if (pinigine2[2][i] === 'MasterCard') {
        masterCardCount++
    }
}

// console.log(visaCount, masterCardCount)

//14
//Sukurkite masyve (piniginėje) ketvirtą elementą (skyrelį) į kurį įdėkite 10 loterijos bilietų, kurių numerius sugeneruokite atsitiktinai su rand funkcija nuo 1000000000 iki 9999999999;

let bilieteliai = [];
let bilietai = 0;
for (let i = 0; i < 10; i++) {
    bilietai = Math.trunc(Math.random() * (9999999999 - 1000000000) + 1000000000);
    bilieteliai.push(bilietai)    
}
pinigine2.push(bilieteliai)
// console.log(bilieteliai)

// 15
// Loterijos bilietų masyvą išrūšiuoti nuo didžiausio numerio iki mažiausio;

pinigine2[3].sort()
// console.log(bilieteliai)

//16
//Į piniginės popierinių pinigų skyrelį įdėti 500 pinigų mažom kupiūrom ( generuoti atsitiktinius skaičius nuo 3 iki 10 ir dėti kaip naujus elementus, kol įdėta suma bus lygi 500);

let popieriniusSuma = 0;
let banknotas;

for (let i = pinigine2[1].length; i <500; i++ ) {
    banknotas = Math.trunc(Math.random() * (10 - 3)) + 3;
    popieriniusSuma += banknotas;
    popierinius.push(banknotas) 
}
// console.log(pinigine2[1])

//17
//Patikrinti ar ką nors laimėjote. Bilieto numerius dalinkite iš 777 ir jeigu numeris išsidalins be liekanos - jūs laimėjote! Suskaičiuokite, kiek buvo laimingų bilietų.
//  console.log(pinigine2[3])

 let laimingi = 0;

 for (let i = 0; i < pinigine2[3]; i++) {
    if (pinigine2[3][i] % 777 === 0) {
        laimingi++
    }    
 }

//  console.log(laimingi)

//18
// Sukurkite penktą skyrelį ir į jį sudėkite nuotraukas: ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'] ir jas išrūšiuokite pagal žodžių ilgį taip, kad pirma eitų trumpiausi žodžiai;


let nuotraukos = [];

nuotraukos.push('šuo', 'katė', 'automobilis', 'namas', 'kiemas')
// console.log(nuotraukos)
pinigine2.push(nuotraukos)

// console.log(nuotraukos)

pinigine2[4].sort((a,b) => a.length - b.length);

// console.log(pinigine2[4])


console.log(pinigine2)

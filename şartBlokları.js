
var sayilar = [70,80,55,100,35,54,32,49,61,59];

function maximum(dizi) {
    var maximumSayi = dizi[0];
    for(var i = 0; i < dizi.length; i++) {
        if (maximumSayi < dizi[i]) {
            maximumSayi = dizi[i+1];
        }
    }

    console.log(maximumSayi);
}

function maximumObj(dizi) {
    var maximumKisi = dizi[0];
    for(var i = 0; i < dizi.length; i++) {
        if ((maximumKisi.not) < (dizi[i].not)) {
            maximumKisi = dizi[i];
        }
    }

    console.log(maximumKisi);

   
}

var ogrenciler = [
    {
        isim: "Öğrenci1",
        not: 55
    },
    {
        isim: "Öğrenci2",
        not: 99
    },
    {
        isim: "Öğrenci3",
        not: 100
    }
];

maximumObj(ogrenciler);
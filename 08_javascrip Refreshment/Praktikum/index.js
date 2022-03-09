
console.log("jawaban no 2")

var a = 5;
let b = "Kampus merdeka";
const nama = "budi"
let terdaftar = true;
let lengkap_arr = [a,b,nama, terdaftar];


if (terdaftar == true){
    console.log(nama + "terdaftar sebagai kegiatan kampus merdeka");
}

// 1.a
console.log("array = "  + lengkap_arr[2]);
var a = b;

console.log("a adalah = " + a);
console.log("b adalah = " + b);


function perkenalan(){
    let asal = "indonesia";
    return console.log(
        "perkenalkan nama saya "+
         nama + 
         "nomor Urut" + 
         a + 
         "sekarang sedang mengikuti" + 
         b + 
         "berasal dari " 
         + asal 
    );
}

let panggil = perkenalan();
console.log(panggil);

console.log("jawaban no 2")
    a. jelaskan kenapa baris 21,22,23, tidak dapat tampil ?
    jawabannya : karena terdaftar merupakan deklarasi dari fals dan kita harus menggantinya dengan true
    b. karena pada variable nama menggunakan const, cosnt tidak dapat di reasisigment

    c. tidak bisa karena variable asal berada di variable function, jiak dia ada di global maka dia bisa di akses


const x = ["budi", "sita", "ayu"];
const [a,b,c] = x;

console.log("jawaban no 3")
console.log(a);
console.log(b);
console.log(c); 


let bdays = ['10-17','05-19','20-19'];
bdays = ['10/17', '05/19', '20/19'];

console.log("Jawaban Nomor 4");
console.log(bdays);

let value = [1,2,3,4,5,6];
let mapvalue = value.map(x => x * 2);

console.log("Jawaban Nomor 5");
console.log(mapvalue)


let arr = [1.5,2.56,5.1, 12.33];
let bulat = arr.map(Math.round);

console.log("Jawaban Nomor 6");
console.log(bulat);












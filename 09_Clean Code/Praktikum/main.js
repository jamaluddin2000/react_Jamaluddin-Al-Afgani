// problem 1 - Analysis

// 1. class pada user (U) lebih baik menggunakan kapital
// 2. class pada userservice seharusya Service saja
// 3. di dalam class userservice (service []) di hilangka
// 4. users sebaiknya di ganti dengan UserService
// 5. getalluser sebaiknya menggunakan getAllUser
// 6. getuserbyid seharusnya menggunakan getUserById


// Problem 2 - rewrite

class kendaraan {
    var totalRoda = 0;
    var kecepatanPerjam = 0;
}

class mobil extends kendaraan {
    void berjalan() {
        tambahKecepatan(10);
    }
// kecepatan mobil akan bertambah 10 jika mobil menambah kecepatan
    tambahKecepatan(var kecepatanBaru) {
        kecepatanPerjam = kecepatanPerjam + kecepatanBaru;
    }
}

void main() {
    mobilCepat = new mobil();
    mobilCepat.berjalan();
    mobilCepat.berjalan();
    mobilCepat.berjalan();

    mobilLamban = new mobil();
    mobilLamban.berjalan();
}
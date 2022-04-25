GraphQL adalah bahasa Query untuk API Anda, dan runtime side-server untuk mengeksekusi query dengan menggunakan sistem tipe yang Anda tetapkan untuk data Anda. GraphQL meminimalkan jumlah data yang perlu ditransfer melalui jaringan. Dengan graphQL kita dapat menggunakan satu endpoint( /graphQL ) untuk setiap permintaan yang diperlukan.

3 fitur utama dalam GraphQL Client:

Query, mendapatkan data berdasarkan query tertentu yang kita definisikan.
Mutation, masukkan, perbarui, hapus data.
Subscription, mendapatkan data secara realtime.
Hasura adalah layanan yang menyediakan graphql dan rest api. Dikelola penuh di cloud hasura atau dihosting sendiri.

Heroku adalah platform cloud sebagai layanan yang mendukung beberapa bahasa pemrograman. Heroku juga menyediakan database postgres gratis.

Apollo Client adalah perpustakaan manajemen status komprehensif untuk JavaScript yang memungkinkan kami mengelola data lokal dan jarak jauh dengan GraphQL. Gunakan untuk mengambil, menyimpan, dan memodifikasi data aplikasi, sambil memperbarui UI secara otomatis. Library inti @apollo/client menyediakan integrasi bawaan dengan React. Kami menggunakan klien Apollo untuk melakukan operasi GraphQL (query, mutation, dan subscription) di dalam aplikasi React atau Next JS. Klien Apollo bekerja dengan baik dengan server GraphQL (Hasura, Apollo Server, dll).

useLazyQuery merupakan hook sempurna untuk mengeksekusi kueri sebagai respons terhadap peristiwa selain rendering komponen. Tidak seperti useQuery, saat Anda memanggil useLazyQuery, ia tidak segera mengeksekusi kueri terkaitnya. Sebaliknya, ia mengembalikan fungsi kueri dalam tupel hasil yang Anda panggil kapan pun Anda siap untuk mengeksekusi kueri.

Mutation pada dasarnya adalah fungsi untuk memperbarui, menyisipkan dan menghapus data. Kita perlu mendefinisikan operasi apa yang ingin kita lakukan (berdasarkan operasi yang tersedia di server graphql Anda) dan kemudian menentukan data apa yang GraphQL perlu kembalikan.

refetchQueries merupakan Array (atau fungsi yang mengembalikan array) yang menentukan kueri mana yang ingin Anda ambil kembali setelah mutasi terjadi.
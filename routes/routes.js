// import express 
import express from "express"; 

// init express router 
const router = express.Router(); 

router.get('/biodata/:nama/:tempat_lahir/:tanggal_lahir/:jenis_kelamin/:agama/:alamat/:telepon/:email/:hobi/:cita_cita', (req, res) => {


    var nama = req.params.nama; 
    var tempat_lahir = req.params.tempat_lahir;
    var tanggal_Lahir = req.params.tanggal_Lahir;
    var jenis_Kelamin = req.params.jenis_Kelamin;
    var agama = req.params.agama;
    var alamat = req.params.alamat;
    var telepon = req.params.telepon; 
    var email = req.params.email;
    var hobi = req.params.hobi;
    var cita_cita = req.params.cita_cita;

    res.send(
        'Nama :' + nama + '<br>'+
        'Tempat Lahir :' + tempat_lahir + '<br>'+
        'Tanggal Lahir :' + tanggal_Lahir + '<br>'+
        'Jenis Kelamin :' + jenis_Kelamin +'<br>'+
        'Agama :' + agama +'<br>'+
        'Alamat :' + alamat + '<br>'+ 
        'Telepon :' + telepon +'<br>'+
        'Email :' + email +'<br>'+ 
        'Hobi :' + hobi + '<br>'+ 
        'Cita-cita :' + cita_cita 
    ) 

}); 


router.get('/aritmatika', (req, res) => {
    var bilangan1 = 10; 
    var bilangan2 = 5; 
    var tambah = bilangan1 + bilangan2; 
    var bilangan3 = 20
    var bilangan4 = 15 
    var kurang = bilangan3 - bilangan4;
    var bilangan5 = 2
    var bilangan6 = 4 
    var kali = bilangan5 * bilangan6; 
    var bilangan7 = 2 
    var bilangan8 = 2 
    var bagi = bilangan7 / bilangan8;


    res.send(
        '<h3>Penjumlahan</h3>' +
        'Bilangan ke 1 : ' + bilangan1 + '<br>' +
        'Bilangan ke 2 : ' + bilangan2 + '<br>' + 
        'Hasil: ' + tambah + '<hr>'+
        
    
        '<h3>Pengurangan</h3>' +
        'Bilangan ke 1 : ' + bilangan3 + '<br>' +
        'Bilangan ke 2 : ' + bilangan4 + '<br>' + 
        'Hasil: ' + kurang + '<br>'+ 

        '<h3>Perkalian</h3>' +
        'Bilangan ke 1 : ' + bilangan5 + '<br>' +
        'Bilangan ke 2 : ' + bilangan6 + '<br>' + 
        'Hasil: ' + kali + '<br>'+  

        '<h3>Pembagian</h3>' +
        'Bilangan ke 1 : ' + bilangan7 + '<br>' +
        'Bilangan ke 2 : ' + bilangan8 + '<br>' + 
        'Hasil: ' + bagi + '<br>' 


        
    
    ); 


}); 

router.get('/bangun_datar', (req, res) => {

    //PERSEGI
    var sisipersegi = 5 
    var hasilpersegi = sisipersegi * sisipersegi
    
    //PERSEGI PANJANG
    var panjangpersegipanjang = 8 
    var lebarpersegipanjang = 4 
    var hasilpersegipanjang = panjangpersegipanjang * lebarpersegipanjang
    
    //SEGITIGA
    var alassegitiga = 10 
    var tinggisegitiga = 15 
    var hasilsegitiga = alassegitiga * tinggisegitiga

    //LINGKARAN
    var jarijarilingkaran = 10
    var hasillingkaran = jarijarilingkaran * jarijarilingkaran * 3.14

    res.send(
        '<h3>Persegi</h3>' + 
        'Sisi persegi : ' + sisipersegi + '<br>' + 
        'Hasil : ' + hasilpersegi +
    
        '<h3>Persegi Panjang</h3>' + 
        'Panjang Persegi Panjang : ' + panjangpersegipanjang + '<br>' + 
        'Lebar Persegi Panjang : ' + lebarpersegipanjang + '<br>' +
        'Hasil : ' + hasilpersegipanjang +
    
        '<h3>Segitiga</h3>' + 
        'Alas Segitiga :' + alassegitiga + '<br>' + 
        'Tinggi Segitiga :' + tinggisegitiga + '<br>'+ 
        'Hasil : ' + hasilsegitiga +
    
        '<h3>Lingkaran</h3>' + 
        'Jari-jari Lingkaran :' + jarijarilingkaran + '<br>' + 
        'Hasil Lingkaran :' + hasillingkaran
    );
});

router.get('/tes/:nama/:kelas/:pts/:pas' , (req, res) => {
    var nama = req.params.nama; 
    var kelas = req.params.kelas; 
    var pts = parseInt(req.params.pts);
    var pas = parseInt(req.params.pas); 
    var raport = (pts + pas) /2; 

   
   if (raport >= 90 && raport <= 100) {
        var grade = "Grade A"; 
    } else if (raport >= 80) {
        var grade = "Grade B"; 
    } else if (raport >= 70) {
        var grade = "Grade C"; 
    } else if (raport >= 60) {
        var grade = "Grade D"; 
    } else if (raport >= 50) {
        var grade = "Grade E";
    } else if (raport >= 0) {
        var grade = "Sing getol diajar";
    } else {
        var grade = "Nilai tidak valid";
    }

   
    
    res.send( 
        'Nama : ' + nama + '<br>' + 
        'Kelas: ' + kelas + '<br>' +               
        'Nilai PTS: ' + pts + '<br>' + 
        'Nilai PAS: ' + pas + '<br>' + 
        'Nilai raport: ' + raport + '<br>' + 
        'Keterangan : ' + grade

 


    );
}); 

router.get('/bersarang/:nama/:jurusan/:kelas', (req, res) => {
    var nama = req.params.nama;
    var jurusan = req.params.jurusan; 
    var kelas = req.params.kelas;
   

    if(jurusan == 'RPL') {
        if (kelas == '10 RPL') {
            var ket = "Anda Kelas 10 RPL";
        } else if (kelas == '11 RPL') {
            var ket = "Anda Kelas 11 RPL";
        } else if (kelas == '12 RPL') {
            var ket = "Anda Kelas 12 RPL";
        } else {
            var ket = "Anda alumni cuyyy";
        }
    } else 
        if (jurusan == 'TKRO') {
            if (kelas == '10 TKRO') {
                var ket = "Anda Kelas 10 TKRO";
            } else if (kelas == '11 TKRO') {
                var ket = "Anda Kelas 11 TKRO";
            } else if (kelas == '12 TKRO') {
                var ket = "Anda Kelas 12 TKRO";
            } else {
                var ket = "Anda alumni cuyyy";
            }
        } else
            if (jurusan == 'TBSM') {
                if(kelas == '10 TBSM') {
                    var ket = "Anda Kelas 10 TBSM";
                } else if (kelas == '11 TBSM') {
                    var ket = "Anda Kelas 11 TBSM";
                } else if (kelas == '12 TBSM') {
                    var ket = "Anda Kelas 12 TBSM"
                } else {
                    var ket = "Anda alumni cuyyy";
                }
            } 

        res.send(
            'Nama :' + nama + '<br>' +
            'Jurusan :' + jurusan + '<br>' +
            'Kelas :' + kelas + '<br>' 
            
        );
    });

    router.get('/latihan/:nama/:tanggal/:jenis/:pesanan/:jumlah', (req, res) => {
        var nama = req.params.nama; 
        var tanggal = req.params.tanggal; 
        var jenis = req.params.jenis; 
        var pesanan = req.params.pesanan;
        var jumlah = req.params.jumlah;

        if (jenis == 'Makanan') {
            if(pesanan == 'Nasi Goreng') {
                var harga = 20000;
            } else if(pesanan == 'Mie Goreng') {
                var harga = 30000;
            } else if(pesanan == 'Ayam Goreng') {
                var harga = 40000;
            } else { 
                var harga = 'Tidak Ada Di dalam Daftar Menu'

            }
        } else if (jenis == 'Minuman') {
            if(pesanan == 'Air Mineral') {
                var harga = 10000;
            } else if(pesanan == 'Jus') {
                var harga = 20000;
            } else if(pesanan == 'Kopi') {
                var harga = 30000;
            } else { 
                var harga = 'Tidak Ada Di dalam Daftar Menu'

            } 
        }   
        var total = jumlah * harga
        if (total >= 100000) {
            var diskon = total * 0.5
        } else {
            var diskon = 0
        } 
        var totalbayar = total - diskon

        res.send(
            '<h3>Starbuck Lokal</h3>' +
            'Nama :' + nama + '<br>' + 
            'Tanggal :' + tanggal + '<br>' +
            'Jenis :' + jenis + '<br>' +
            'Pesanan :' + pesanan + '<br>' + 
            'Harga :' + harga + '<br>' +
            'Jumlah :' + jumlah + '<br>' +
            '-------------------------------- <br>'+
            'Total :' + total + '<br>' + 
            'Diskon 50% :' + diskon + '<br>' +
            'Total pembayaran :' + totalbayar + '<br>' +
            '-------------------------------- <br>' +
            '>>>>>>>>>> TERIMA KASIH <<<<<<<<<<'

        );
        }); 

        router.get('/sample', (req, res) => {
            res.send(
                '<h3>Selamat Datang</h3>'
            );
        });

// export default router 
export default router;
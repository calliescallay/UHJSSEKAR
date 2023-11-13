// script.js
function buatKalimat(nama, umur, alamat, hobby) {
    return `Nama saya ${nama} umur saya ${umur} tahun, alamat saya di ${alamat}, dan saya punya hobby yaitu ${hobby}`;
  }
  
  // Event listener untuk tombol
  document.getElementById('tampilkanKalimat').addEventListener('click', function() {
    // Mendapatkan nilai input (dalam kasus ini, input statis sebagai contoh)
    const nama = 'John Doe';
    const umur = 30;
    const alamat = 'Jln. Malioboro Yogyakarta';
    const hobby = 'gaming';
  
    // Memanggil fungsi buatKalimat
    const kalimat = buatKalimat(nama, umur, alamat, hobby);
  
    // Menampilkan hasil pada elemen dengan id 'kalimatOutput'
    document.getElementById('kalimatOutput').innerText = kalimat;
  });
  
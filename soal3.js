function showMenu() {
    var menuType = document.getElementById("menuType").value;
    var menuList = document.getElementById("menuList");

    if (menuType === "makanan") {
        menuList.innerHTML = "<h2>Daftar Makanan:</h2><ul><li>Bakso</li><li>Mie Ayam</li><li>Soto</li><li>Kambing Guling</li><li>Ayam Bakar</li><li>Sate</li><li>Mie Goreng</li><li>Nendoan</li></ul>";
    } else if (menuType === "minuman") {
        menuList.innerHTML = "<h2>Daftar Minuman:</h2><ul><li>Es Milo</li><li>Es Teh Manis</li><li>Es Jeruk</li><li>Es Campur</li><li>Es Kopi Susu</li><li>Es Teh Tawar</li><li>Es Dawet</li></ul>";
    } else {
        menuList.innerHTML = "<p>Pilihan tidak valid. Silahkan pilih menu yang benar.</p>";
    }
}

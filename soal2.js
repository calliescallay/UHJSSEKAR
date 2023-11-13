function generateText() {
    // Mendapatkan nilai input dari pengguna
    var repeatCount = document.getElementById('repeatCount').value;

    // Mendapatkan container output
    var outputContainer = document.getElementById('outputContainer');

    // Mengosongkan output sebelumnya
    outputContainer.innerHTML = '';

    // Melakukan perulangan dan menambahkan kalimat ke dalam container output
    for (var i = 0; i < repeatCount; i++) {
        var sentence = document.createElement('p');
        sentence.textContent = "Saya orang yang sabar, ramah, dan tidak membenci orang";
        outputContainer.appendChild(sentence);
    }
}

function hitung() {
    const a = parseInt(document.getElementById("Tambahan1").value);
    const b = parseInt(document.getElementById("Tambahan2").value);
    const hasil = a + b;
    document.getElementById("hasil").innerText = hasil;

}

function Pengurangan() {
    const a = parseInt(document.getElementById("Pengurangan1").value);
    const b = parseInt(document.getElementById("Pengurangan2").value);
    const hasil = a - b;
    document.getElementById("hasil-Pengurangan").innerText = hasil;
}

function Perkalian() {
    const a = parseInt(document.getElementById("Perkalian1").value);
    const b = parseInt(document.getElementById("Perkalian2").value);
    const hasil = a * b;
    document.getElementById("hasil-Perkalian").innerText = hasil;
}

function Pembagian() {
    const a = parseInt(document.getElementById("Pembagian1").value);
    const b = parseInt(document.getElementById("Pembagian2").value);
    const hasil = a / b;
    document.getElementById("hasil-Pembagian").innerText = hasil;
}

function gantiWarna (warna) {
        document.getElementById('rumah').style.backgroundColor = warna;
        document.getElementById('teks').style.color = 'white';

}     











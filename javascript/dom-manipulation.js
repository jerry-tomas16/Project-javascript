function changeText() {
    document.getElementById("demo").innerHTML = "Hello Javascript";
}

function changeValue(response) {
    if (response === "yes") {
        document.getElementById("feeling").innerHTML ="saya juga mencintai dirimu";
        document.getElementById("feeling").style.color = "red";
        document.getElementById("feeling").style.fontSize = "20px";
        document.getElementById("feeling").style.fontWeight = "bold";
    } else {
        document.getElementById("feeling").innerHTML =
         "oh,aku juga tidak mencintai dirimu";
        document.getElementById("feeling").style.color = "blue";
        document.getElementById("feeling").style.fontSize = "16px";
        document.getElementById("feeling").style.fontWeight = "normal";
    }
}
function cekForm() {
    let nama = document.getElementById("nama").value;
    if (nama === "") {
        alert("Nama wajib diisi!");
        return false;
    }
    return true;
}
document.getElementById("tombol").addEventListener("click",function () {
    alert("Tombol diklik!");
});

function hitung() {
    const a = parseInt(document.getElementById("angka1").value);
    const b = parseInt(document.getElementById("angka2").value);
    const hasil = a + b;
    document.getElementById("hasil").innerText = hasil;
}

function tambahAngka (operator) {
    let angka = parseInt(document.getElementById("angka").innerText);
    if (operator === "tambah") {
        angka += 1;
    } else {
        angka -= 1;
    }
    document.getElementById("angka").innerText =angka;

    if (angka >= 80) {
        document.getElementById("angka").style.color = "red";
        document.getElementById("Grade").style.color = "red";
        document.getElementById("Grade").innerText = "A";
    } else if (angka >= 65 && angka < 80) {
        document.getElementById("angka").style.color = "orange";
        document.getElementById("Grade").style.color = "orange";
        document.getElementById("Grade").innerText = "B";
    } else if (angka >= 45 && angka < 65) {
        document.getElementById("angka").style.color = "green";
        document.getElementById("Grade").style.color = "green";
        document.getElementById("Grade").innerText = "C";
    } else if (angka >= 30 && angka < 45) {
        document.getElementById("angka").style.color = "blue";
        document.getElementById("Grade").style.color = "blue";
        document.getElementById("Grade").innerText = "D";
    } else {
        document.getElementById("angka").style.color = "black";
        document.getElementById("Grade").style.color = "black";
        document.getElementById("Grade").innerText = "E";
    } 
        
}

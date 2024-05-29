// script.js
function tampilkanNilai() {
    const nim = document.getElementById("nim").value;
    const nama = document.getElementById("nama").value;
    const matakuliah = document.getElementById("matakuliah").value;
    const nilaiakhir = parseFloat(document.getElementById("nilaiakhir").value);

    let nilaiHuruf;
    let indeksNilai;
    let keterangan;

    if (nilaiakhir >= 85 && nilaiakhir <= 100) {
        nilaiHuruf = "A";
        indeksNilai = 4.00;
        keterangan = "Pujian (Sangat Memuaskan)";
    } else if (nilaiakhir >= 79) {
        nilaiHuruf = "A-";
        indeksNilai = 3.67;
        keterangan = "Sangat Memuaskan";
    } else if (nilaiakhir >= 74) {
        nilaiHuruf = "B+";
        indeksNilai = 3.33;
        keterangan = "Memuaskan";
    } else if (nilaiakhir >= 69) {
        nilaiHuruf = "B";
        indeksNilai = 3.00;
        keterangan = "Memuaskan";
    } else if (nilaiakhir >= 64) {
        nilaiHuruf = "B-";
        indeksNilai = 2.67;
        keterangan = "Memuaskan";
    } else if (nilaiakhir >= 59) {
        nilaiHuruf = "C+";
        indeksNilai = 2.33;
        keterangan = "Cukup";
    } else if (nilaiakhir >= 54) {
        nilaiHuruf = "C";
        indeksNilai = 2.00;
        keterangan = "Cukup";
    } else if (nilaiakhir >= 41) {
        nilaiHuruf = "D";
        indeksNilai = 1.00;
        keterangan = "Kurang";
    } else {
        nilaiHuruf = "E";
        indeksNilai = 0.00;
        keterangan = "Sangat Kurang";
    }

    const hasilHTML = `
        <h2>Hasil</h2>
        <p>NIM: ${nim}</p>
        <p>Nama: ${nama}</p>
        <p>Mata Kuliah: ${matakuliah}</p>
        <p>Nilai Akhir: ${nilaiakhir}</p>
        <p>Nilai Huruf: ${nilaiHuruf}</p>
        <p>Indeks Nilai: ${indeksNilai}</p>
        <p>Keterangan: ${keterangan}</p>
    `;

    document.getElementById("hasil").innerHTML = hasilHTML;
}

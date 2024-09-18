function hitungTinggi() {
    // Ambil nilai volume dari input
    const volume = parseFloat(document.getElementById("volume").value);

    // Asumsikan nilai-nilai lain (sesuaikan dengan kebutuhan Anda)
    const jariJari = 2.35; // Contoh: Jari-jari 2.35 meter
    const volumeTotal = 104; // Contoh: Volume total 104 meter kubik

    // Konversi volume ke meter kubik
    const volumeM3 = volume / 1000;

    // Hitung tinggi cairan
    const pi = 3.14;
    const tinggi = volumeM3 / (pi * jariJari * jariJari);

    // Tampilkan hasil
    document.getElementById("hasil").textContent = "Ketinggian cairan: " + tinggi.toFixed(2) + " meter";
}
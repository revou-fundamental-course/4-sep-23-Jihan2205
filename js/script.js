function hitungLuasKeliling()
    {
        var Panjang, Lebar, Keliling, Luas;
 
        Panjang = parseInt(document.getElementById("panjang").value);
        Lebar = parseInt(document.getElementById("lebar").value);
        Keliling = 2 * (Panjang + Lebar);
        Luas = Panjang * Lebar;
        document.getElementById("keliling").value = Keliling;
        document.getElementById("luas").value = Luas;
}
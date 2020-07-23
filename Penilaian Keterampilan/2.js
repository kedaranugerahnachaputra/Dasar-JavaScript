const barang = [
    {nama : "Beras", harga : 10000, jumlah:5},
    {nama : "Gula", harga : 14000, jumlah:5},
    {nama : "Telur", harga : 20000, jumlah:2},
    {nama : "Minyak Goreng", harga : 9000, jumlah:10}
]
const semua = barang.reduce((semua,barang) => {
    return semua+(barang.harga * barang.jumlah)
}, 0);

console.log(semua)

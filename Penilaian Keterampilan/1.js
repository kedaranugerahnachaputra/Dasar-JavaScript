semua = (p,l) => {
    let awal = p * l * 1500000
    let akhir = awal * 15 / 100
    return awal + akhir
}
console.log(semua(30,20.5))
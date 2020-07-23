DeretGeometri = (a,r,n) => {
    for(let i=1; i <= 10; i++){
        let hasil =+ a*(r**(n-1))
        return hasil
    }
}

console.log(DeretGeometri(4,3,10))
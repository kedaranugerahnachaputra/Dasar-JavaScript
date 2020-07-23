BMI = (tb,b) => {
    let bmi = b / (tb ** 2)
    if (bmi >= 30){
        return "Kegemukan(Obesitas)"
    }
    else if (bmi < 30 && bmi >= 25){
        return "Kelebihan Berat Badan"
    }
    else if (bmi < 25 && bmi >= 18.5){
        return "Normal"
    }
    else {
        return "Kekurangan Berat Badan"
    }
}

console.log(BMI(1.7,90))
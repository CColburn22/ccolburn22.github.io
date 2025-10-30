document.getElementById("btn").addEventListener ("click", onclick)

function onclick () {
    let first_number = document.getElementById("fn").valueAsNumber
    let second_number = document.getElementById("sn").valueAsNumber
    let third_number = document.getElementById("tn").valueAsNumber
    let max
    if (first_number >= second_number) {
        max = first_number
    } else {
        max = second_number
    }
    if (max >= third_number) {
        max = max
    } else {
        max = third_number
    }
    document.getElementById("result").innerHTML = max
}
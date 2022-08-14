let Name = prompt("Lütfen adınızı giriniz:")
let myName = document.querySelector("#myName")

if (Name) {
    myName.innerHTML = `${Name}`
} else {
    alert("Lütfen adınızı giriniz:")
    location.reload()
}

let days = ["Pazar", "Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]

function clockFunction () {
    let dateTime = new Date();
    let day = days[dateTime.getDay()];
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    document.querySelector("#myClock").innerHTML = `${hrs} : ${min} : ${sec} ${day}`
}

setInterval(clockFunction, 1000);
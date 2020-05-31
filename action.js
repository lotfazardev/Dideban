// init tabel
const tabel = document.getElementById('tabel')
const validData = {
    "price_dollar_rl" : "دلار آمریکا",
    "price_eur" : "یورو اروپا",
    "price_gbp":"پوند انگلیس",
    "price_kwd" : "دینار کویت",
    "price_aed" : "درهم امارات",
    "sekee":"سکه امامی",
    "sekeb" : "سکه بهار آزادی",
    "nim" : "نیم سکه",
    "rob" : "ربع سکه",
    "gerami" : "سکه گرمی",
    "ons" : "انس طلا",
    "silver" : "انس نقره",
    "platinum" : "انس پلاتین",
    "palladium" : "انس پالادیوم",
}
const refreshData = () => {
    let data = {} ;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', atob("aHR0cHM6Ly9jYWxsNS50Z2p1Lm9yZy9hamF4Lmpzb24=")); 
    xhr.onload = function(){
        data = JSON.parse(xhr.response);
        let current = data["current"]
        for(let i in validData){
            tabel.innerHTML += `
            <tr>
                <td>${validData[i]}</td>
                <td>${current[i].p}</td>
                <td>${current[i].l}</td>
                <td>${current[i].h}</td>
                <td>${current[i]["t-g"]}</td>
            </tr>
            `
            console.log(current[i]);
        }
    }
    xhr.send();
}
refreshData()
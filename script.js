const pawn = document.getElementById('pawn');
    const pawn2 = document.createElement('div');
    pawn2.classList.add('pawn2');
    const divi = document.createElement('h3');
    divi.innerText = 'No data available'

setInterval(() => {let user_info = JSON.parse(localStorage.getItem("weatherData")) ? JSON.parse(localStorage.getItem("weatherData")) : [];
if (user_info.length < 1) {
    pawn2.appendChild(divi)
    pawn.appendChild(pawn2);
    // console.log(user_info);
}
else pawn2.remove();
},1000)
    

// Make a request for a user with a given ID
const data = async (cityName) => {

    try {
        const response = await fetch(`https://python3-dot-parul-arena-2.appspot.com/test?cityname=${cityName}`)
        const data = await response.json()
        return data;
    }
    catch (error) {
        // console.error(error);
        return error;
    }
}

const london = document.getElementById('london');
const nyc = document.getElementById('nyc');
const la = document.getElementById('la'); 
const vegas = document.getElementById('vegas');


async function information() {
    pawn2.remove();
    let cityName = document.getElementById("city-name").value;
    let cityName2 = document.getElementById("get-weather").value;
    if (cityName == '') cityName = cityName2;
    let city = cityName.split(" ").map(e => e.charAt(0).toUpperCase() + e.substring(1, e.length).toLowerCase()).join(" ");
    // console.log(city);
    const entries = document.querySelectorAll('.cities');
    // console.log(entries);

    entries.forEach(e => {
        if (e.innerText === city) {
            e.parentNode.classList.add("yellow-background")
            setTimeout(() => {
                e.parentElement.classList.toggle("yellow-background")
            }, 3000)
        };
    })

    const info = await data(city);
    // console.log(info);

    if (info.status === undefined) {
        const table = document.getElementById("weather-table");
        const row = document.createElement("tr");
        const c1 = document.createElement("td");
        c1.style.width = '10rem';
        c1.classList.add('cities');
        const c2 = document.createElement("td");
        const c3 = document.createElement("td");
        const c4 = document.createElement("td");
        const c5 = document.createElement("td");
        const c6 = document.createElement("td");

        const txt = document.createElement("input");
        txt.setAttribute("type", "text");
        txt.style.width = '6.9rem';


        const btn = document.createElement("button");
        btn.innerText = "❌";

        c1.innerText = city;
        txt.value = info.description;
        c3.innerText = info.temp_in_celsius;
        c4.innerText = info.pressure_in_hPa;

        const date1 = new Date(info.date_and_time);
        const date2 = new Date();

        let user_info = new Array();
        user_info = JSON.parse(localStorage.getItem("weatherData")) ? JSON.parse(localStorage.getItem("weatherData")) : [];
        if (user_info.some((e) => { return e.city == city })) {
            console.log("duplicate data, use the ❌ button or delete from your local storage");
        }
        else {
            user_info.push({
                "city": city,
                "description": info.description,
                "Temp": info.temp_in_celsius,
            });

            const timeDiff = parseInt((date2.getTime() - date1.getTime()) / (1000 * 60 * 60));
            // console.log(timeDiff);

            c5.innerText = timeDiff;

            c6.appendChild(btn);
            c2.appendChild(txt);

            row.appendChild(c1);
            row.appendChild(c2);
            row.appendChild(c3);
            row.appendChild(c4);
            row.appendChild(c5);
            row.appendChild(c6);

            table.appendChild(row);

            btn.addEventListener("click", () => {
                row.remove();
                let user_info = JSON.parse(localStorage.getItem("weatherData")) ? JSON.parse(localStorage.getItem("weatherData")) : [];
                user_info = user_info.filter((e) => { return e.city !== c1.innerText });
                localStorage.setItem("weatherData", JSON.stringify(user_info));

                if(c1.innerText === "London")  london.classList.toggle('heighlight');
                else if(c1.innerText === "New York") nyc.classList.toggle('heighlight');
                else if(c1.innerText === "Los Angeles") la.classList.toggle('heighlight');
                else vegas.classList.toggle('heighlight');
            })
        }
        getWeather.value = '';
        localStorage.setItem("weatherData", JSON.stringify(user_info));



    }

    else alert(info.message);


}


const getWeather = document.getElementById('get-weather');


function setLondon() {
    getWeather.value = 'London';
    london.classList.add('heighlight')
}

function setNewYork() {
    getWeather.value = 'New York';
    nyc.classList.add('heighlight')
}

function setLosAngeles() {
    getWeather.value = 'Los Angeles';
    la.classList.add('heighlight')
}

function setLasVegas() {
    getWeather.value = 'Las Vegas';
    vegas.classList.add('heighlight')
}



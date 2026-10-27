
function fetchData() {
    fetch("http://localhost:3000/Data")
        .then((res) => res.json())
        .then((data) => displayData(data))
        .catch((err) => console.log(err));
}

fetchData();

function displayData(data) {
    document.getElementById("container").innerHTML = "";

    data.map((el) =>
        card(el.city, el.country, el.temperature, el.weather)
    );
}

function card(city, country, temperature, weather) {
    let store = `
        <div style="
            width: 250px;
            padding: 25px;
            text-align: center;
            background-color: white;
            border-radius: 15px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        ">

            <h3 style="color: #333; margin-bottom: 5px;">
                ${city}, ${country}
            </h3>

            <p style="
                font-size: 48px;
                font-weight: bold;
                color: #f59e0b;
                margin: 15px 0;
            ">
                ${temperature}°C
            </p>

            <p style="font-size: 18px; color: #555;">
                ${weather}
            </p>

        </div>
    `;

    document.getElementById("container").innerHTML += store;
}

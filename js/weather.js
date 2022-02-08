const cities = [
    {la: '37.5683', lo: '126.9778'},
    {la: '37.7556', lo: '128.8961'},
    {la: '35.8', lo: '128.55'},
    {la: '36.3333', lo: '127.4167'},
    {la: '35.1547', lo: '126.9156'},
    {la: '35.5372', lo: '129.3167'},
    {la: '35.1028', lo: '129.0403'},
    {la: '33.5097', lo: '126.5219'}
]


const API_KEY = '0b3a674d3de2f007ab1a10ca090415ef'

function weather() {
    city_num = Math.floor(Math.random() * cities.length)
    const lat = cities[city_num].la;
    const lon = cities[city_num].lo;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json().then(data => {
        const city = data.name; 
        const weather = data.weather[0].main; 
        const temp = data.main.temp;
        const quote = document.getElementById('weather');
        quote.innerText = `${weather}, ${temp}℃ @${city}`;
    }));
}

weather();
setInterval(weather, 10000);

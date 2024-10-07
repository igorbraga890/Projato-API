async function getWeather() {

    var city = document.getElementById('City').value

    var resposta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`);

    var tempCelsius = resposta.data.main.temp;

    document.getElementById('Clima').innerHTML = `A temperatura atual de ${city} é de ${tempCelsius.toFixed(2)} °C`;
 }

getWeather();
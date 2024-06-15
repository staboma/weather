async function getWeather() {
    const apiKey = 'YOUR_API_KEY';
    const city = 'YOUR_CITY'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const weatherInfo = `
            <p>Şehir: ${data.name}</p>
            <p>Hava Durumu: ${data.weather[0].description}</p>
            <p>Sıcaklık: ${data.main.temp} °C</p>
            <p>Rüzgar Hızı: ${data.wind.speed} m/s</p>
        `;
        document.getElementById('weather').innerHTML = weatherInfo;
    } catch (error) {
        console.log('Hava durumu alınamadı.', error);
    }
}

getWeather(); // Sayfa yüklendiğinde hava durumu verilerini almak için çağrılır

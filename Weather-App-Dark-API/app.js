window.addEventListener("load", ()=>{
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let temperatureSection = document.querySelector('.temperature-section');
    let temperatureSpan = document.querySelector('.temperature-section span');

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
            long = pos.coords.longitude;
            lat = pos.coords.latitude;
            const API_KEY = 'YOUR_DARKSKY_API_KEY';
            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}https://api.darksky.net/forecast/${API_KEY}/${lat},${long}`;
            
            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const {temperature, icon, summary} =  data.currently;

                    //set DOM elements from the API
                    temperatureDegree.textContent = temperature;
                    temperatureDescription.textContent = summary;
                    locationTimezone.textContent = data.timezone;
                    //F degree to C degree
                    let celsius = (temperature - 32) * (5/9);
                    //set icon
                    setIcons(icon, document.querySelector(".icon"));
                    //change temp to celsius
                    temperatureSection.addEventListener("click", () => {
                        if(temperatureSpan.textContent === "F") {
                            temperatureDegree.textContent = Math.floor(celsius);
                            temperatureSpan.textContent = "C";
                        } else {
                            temperatureDegree.textContent = temperature;
                            temperatureSpan.textContent = "F";
                        }
                        
                    })
                });

            });
    }

    function setIcons(icon, iconId){
        const skycons = new Skycons({"color": "white"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconId, Skycons[currentIcon]);
    }

    
});
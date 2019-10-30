const weatherBalloon = (cityName: string) => {
    return fetch(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=68c24b19a0f082eb5868d192ef1bc194&units=metric`)
        .then((resp) => resp.json())
        .catch(function () {
            // catch any errors
        });
};

export default weatherBalloon;
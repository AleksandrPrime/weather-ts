export default class WeatherServices {
    _apiBase = 'api.openweathermap.org/data/2.5/forecast?q=';
    _apiId = '&appid=68c24b19a0f082eb5868d192ef1bc194';
    _prourl = 'https://cors-anywhere.herokuapp.com/';
    _units = '&units=metric';

    weatherBalloon = ( cityName: string = 'Sevastopol' ) => {
        return fetch(`${this._prourl}${this._apiBase}${cityName}${this._apiId}${this._units}`)
            .then((resp) => resp.json())
            .catch(function() {
                // catch any errors
            });
    }
}
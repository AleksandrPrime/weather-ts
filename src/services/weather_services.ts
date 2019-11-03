import axios from 'axios'

const weatherBalloon = (cityName?: string): Promise<WeatherType> => {
    return axios
        .get(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=68c24b19a0f082eb5868d192ef1bc194&units=metric`)
        .then((resp) => resp.data)
        .catch((err) => console.log(err.toJSON()));
};

type WeatherType = {
    city: object,
    name: string,
    list: Array<object>,
    temp:number,
    temp_max: number,
    temp_min: number,
    dt_txt: string
}

export default weatherBalloon;
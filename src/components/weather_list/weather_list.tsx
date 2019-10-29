import React, { Component } from 'react';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error_indicator/error_indicator';
import InputForm from '../input_form/input_form'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WeatherServices from '../../services/weather_services';

const WeatherList = ({weather, settings, fetchWeather} : any) => {

    return (
        <div>
            <InputForm fetchWeather={fetchWeather}/>
            <h2 className="center-block text-center">{weather.city.name}</h2>
            <Slider {...settings} className="weather-list row">
                {
                    weather.list.map((item, idx) => {
                        if (idx % 8 === 0)
                        {return (
                            <div className="center-block" key={item.dt}>
                                <WeatherListItem
                                    item={item}/>
                            </div>

                        )}
                        return null
                    })
                }
            </Slider>
        </div>
    );
};

const WeatherListItem = ({ item }) => {
    const { main: {temp, temp_max, temp_min}, dt_txt} = item;
    return (
        <div className="book-list-item list-group">
            <ul className="list-group">
                <li className="list-group-item">Temp: {temp} C&deg;</li>
                <li className="list-group-item">Max. Temp: {temp_max} C&deg;</li>
                <li className="list-group-item">Min. Temp: {temp_min} C&deg;</li>
                <li className="list-group-item">Date: {dt_txt.substring(0,10)}</li>
            </ul>
        </div>
    )
};

class WeatherListContainer extends Component {
    weatherServices = new WeatherServices ();

    state = {
        weather: [],
        loading: true,
        error: null,
    };

    fetchWeather = (city: string = 'Sevastopol' ) =>  {
        this.weatherServices.weatherBalloon(city)
            .then((data) => this.setState({
                weather: data,
                loading: false
            }))
            .catch((err) => this.setState({
                loading: false,
                error: err
            }));
    };

    componentDidMount() {
        this.fetchWeather();
    }

    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        const { weather, loading, error } = this.state;

        if(loading) {
            return <Spinner/>;
        }

        if(error) {
            return <ErrorIndicator />;
        }
        console.log(weather);
        return <WeatherList weather={weather} settings={settings} fetchWeather={this.fetchWeather}/>
    }
}

export default WeatherListContainer;
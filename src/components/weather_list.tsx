import React, { Component } from 'react';
import Spinner from './spinner';
import ErrorIndicator from './error_indicator';
import InputForm from './input_form';
import weatherBalloon from '../services/weather_services';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WeatherList = ({weather, settings, fetchWeather} : any) => {

    return (
        <div>
            <InputForm fetchWeather={fetchWeather}/>
            <h2 className="center-block text-center">{weather.city.name}</h2>
            <Slider {...settings} className="weather-list row">
                {
                    weather.list.map((item: any, idx: number) => {
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

const WeatherListItem = ({ item }: any) => {
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

    state = {
        weather: [],
        loading: false,
        error: null,
    };

    fetchWeather = (city: string = 'Sevastopol' ): void =>  {
        this.setState({
            loading: false
        });
        weatherBalloon(city)
            .then((data) => this.setState({
                weather: data,
                loading: true
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

        if(!loading) {
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
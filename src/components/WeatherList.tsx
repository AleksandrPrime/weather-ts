import React, { Component } from 'react';
import Spinner from './spinner';
import ErrorIndicator from './ErrorIndicator';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type WeatherListContainerProps = {
    state: {weather: {
            city: {
                name: string
            },
            list: ItemType[]
        },
        loading: boolean,
        error: boolean},
    fetchWeather: Function
}

type WeatherListProps = {
    weather: {
        city: {
            name: string
        },
        list: ItemType[]
    }
    settings: {
        dots: boolean,
        infinite: boolean,
        speed: number,
        slidesToShow: number,
        slidesToScroll: number
    }
}

export interface ItemType {
    clouds: {all: number}
    dt: number
    dt_txt: string
    main: {
        grnd_level: number,
        humidity: number,
        pressure: number,
        sea_level: number,
        temp: number,
        temp_kf: number,
        temp_max: number,
        temp_min: number
    }
    sys: {pod: string}
    weather: Array<[]>
    wind: {
        speed: number, deg: number
    }
}

type WeatcherListItemProps = {
    item: {
        clouds: {all: number}
        dt: number
        dt_txt: string
        main: {
            grnd_level: number,
            humidity: number,
            pressure: number,
            sea_level: number,
            temp: number,
            temp_kf: number,
            temp_max: number,
            temp_min: number
        }
        sys: {pod: string}
        weather: Array<[]>
        wind: {
            speed: number, deg: number
        }
    }
}

const WeatherList = ({weather, settings}: WeatherListProps) => {
    return (
        <div>
            <h2 className="center-block text-center">{weather.city.name}</h2>
            <Slider {...settings} className="weather-list row">
                {
                    weather.list.map((item: ItemType, idx: number) => {
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

const WeatherListItem = ( {item}: WeatcherListItemProps) => {

    const { main: { temp, temp_max, temp_min}, dt_txt} = item;

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

class WeatherListContainer extends Component<WeatherListContainerProps> {

    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        const { state:{weather, loading, error}} = this.props;

        if(!loading) {
            return <Spinner/>;
        }

        if(error) {
            return <ErrorIndicator />;
        }
        console.log(weather);
        return <WeatherList weather={weather} settings={settings} />
    }
}

export default WeatherListContainer;
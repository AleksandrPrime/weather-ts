import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import WeatherListContainer, {ItemType} from "./WeatherList";
import weatherBalloon from "../services/weather_services";
import InputForm from "./InputForm";

const Header = styled.header`
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
`;

const Logo = styled.div`
    font-family: "Playfair Display", Georgia, serif;
    font-size: 2.5rem;
    padding-left: 1rem;
    `;

const WeatherHeader = () => {
    return (
        <Header className="row">
            <Link to="/">
                <Logo className="text-dark">Weather-ts</Logo>
            </Link>
        </Header>
    );
};

const Wrapper = styled.div`
    max-width: 800px;
    margin: auto;
`;

type IState = {
    weather: {
        city: {
            name: string
        },
        list: ItemType[]
    },
    loading: boolean,
    temperature: boolean,
    error: boolean
}

export default class App extends Component {

    state: IState = {
        weather: {
            city: {
                name: ''
            },
            list: []
        },
        loading: false,
        temperature: true,
        error: false,
    };

    switchTempMod = (): void => {
        if (this.state.temperature) {
            this.setState({
                ...this.state,
                weather: {...this.state.weather,
                        city: {...this.state.weather.city},
                        list:
                            this.state.weather.list.map((item, idx) => {
                                    return{

                                            clouds: {all: this.state.weather.list[idx].clouds.all},
                                            dt: this.state.weather.list[idx].dt,
                                            dt_txt: this.state.weather.list[idx].dt_txt,
                                            main: {
                                                grnd_level: this.state.weather.list[idx].main.grnd_level,
                                                humidity: this.state.weather.list[idx].main.humidity,
                                                pressure: this.state.weather.list[idx].main.pressure,
                                                sea_level: this.state.weather.list[idx].main.sea_level,
                                                temp: Math.round((this.state.weather.list[idx].main.temp* 9 / 5) + 32),
                                                temp_kf: this.state.weather.list[idx].main.temp_kf,
                                                temp_max: Math.round((this.state.weather.list[idx].main.temp_max* 9 / 5) + 32),
                                                temp_min: Math.round((this.state.weather.list[idx].main.temp_min* 9 / 5) + 32)
                                            },
                                            sys: {pod: this.state.weather.list[idx].sys.pod},
                                            weather: {...this.state.weather.list[idx].weather},
                                            wind: {...this.state.weather.list[idx].wind}

                                    }
                            })

                    },
                temperature: false

            })
        } else {
            this.setState({
                ...this.state,
                weather: {...this.state.weather,
                    city: {...this.state.weather.city},
                    list:
                        this.state.weather.list.map((item, idx) => {
                            return{

                                clouds: {all: this.state.weather.list[idx].clouds.all},
                                dt: this.state.weather.list[idx].dt,
                                dt_txt: this.state.weather.list[idx].dt_txt,
                                main: {
                                    grnd_level: this.state.weather.list[idx].main.grnd_level,
                                    humidity: this.state.weather.list[idx].main.humidity,
                                    pressure: this.state.weather.list[idx].main.pressure,
                                    sea_level: this.state.weather.list[idx].main.sea_level,
                                    temp: Math.round((this.state.weather.list[idx].main.temp- 32) * 5 / 9),
                                    temp_kf: this.state.weather.list[idx].main.temp_kf,
                                    temp_max: Math.round((this.state.weather.list[idx].main.temp_max- 32) * 5 / 9),
                                    temp_min: Math.round((this.state.weather.list[idx].main.temp_min- 32) * 5 / 9)
                                },
                                sys: {pod: this.state.weather.list[idx].sys.pod},
                                weather: {...this.state.weather.list[idx].weather},
                                wind: {...this.state.weather.list[idx].wind}

                            }
                        })

                },
                temperature: true

            })
        }
    };

    fetchWeather = (city: string): void =>  {
        if(!city) {city = 'Sevastopol'}
        this.setState({
            loading: false
        });
        weatherBalloon(city)
            .then((data) => this.setState({
                weather: data,
                loading: true
            }))
            .catch(() => this.setState({
                loading: false,
                error: true
            }))
            .catch((err) => console.log('ошибка', err.cod));
    };

    render() {
        return (
            <Wrapper>
                <WeatherHeader/>
                <InputForm fetchWeather={this.fetchWeather}/>
                <WeatherListContainer state={this.state} fetchWeather={this.fetchWeather} switchTempMod={this.switchTempMod}/>
            </Wrapper>
        )
    }
}


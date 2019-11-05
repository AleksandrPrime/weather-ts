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
        error: false,
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
                <WeatherListContainer state={this.state} fetchWeather={this.fetchWeather}/>
            </Wrapper>
        )
    }
}


import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import WeatherServices from '../../services/weather_services';

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
export default class App extends Component{
    weatherServices = new WeatherServices ();

    state = {
        weather: [],
        loading: true,
        error: null,
    };

    fetchWeather = (city: string) =>  {
        this.weatherServices.weatherBalloon(city)
            .then((data) => this.setState({
                weather: data,
                loading: true
            }))
            .catch((err) => this.setState({
                loading: false,
                error: err
            }));
    };

    render() {
      return (
          <WeatherHeader />
      )
    }
}


import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import WeatherListContainer from "../weather_list/weather_list";

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

export default class App extends Component {

    render() {
        return (
            <Wrapper>
                <WeatherHeader/>
                <WeatherListContainer/>
            </Wrapper>
        )
    }
}


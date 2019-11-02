import React, {useState} from 'react';
import styled from 'styled-components';

const FormStyle = styled.form`
    margin-top: 10px;
`;

const InputStyle = styled.input`
    margin-right: 3px;
    width: 76.4%;
`;

const InputForm = ({fetchWeather}: InputFormProps) => {

    let [label, setLabel] = useState('');


    const onLabelChange=(e: React.FormEvent<HTMLInputElement>)=>{
        setLabel(capitalize(e.currentTarget.value))
    };

    const capitalize = (s: string) => {
        return s && s[0].toUpperCase() + s.slice(1);
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        if(label){
            e.preventDefault();
            fetchWeather(label);
            setLabel('');
        } else e.preventDefault();
    };
        return(
            <FormStyle className="d-flex"
                  onSubmit={onSubmit}>
                <InputStyle type="text"
                       onChange={onLabelChange}
                       placeholder="Enter the name of the city"
                       value={label}/>
                <button className="btn btn-outline-secondary">
                    Show the weather
                </button>
            </FormStyle>
        )
};

type InputFormProps = {fetchWeather: Function}

export default InputForm;
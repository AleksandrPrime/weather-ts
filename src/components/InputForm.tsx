import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useDebounce } from 'use-lodash-debounce'

const FormStyle = styled.form`
    margin-top: 10px;
`;

const InputStyle = styled.input`
    margin: 0 auto;
    width: 76.4%;
`;

const InputForm = ({fetchWeather}: InputFormProps) => {
    const [value, setValue] = useState();
    const debouncedValue = useDebounce(value, 2000);

    useEffect(() => {
        fetchWeather(value)
    }, [debouncedValue]);

    const capitalize = (s: string) => {
        return s && s[0].toUpperCase() + s.slice(1);
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();
    };
        return(
            <FormStyle className="d-flex"
                  onSubmit={onSubmit}>
                <InputStyle type="text"
                       onChange={e => setValue(capitalize(e.target.value))}
                       placeholder="Enter the name of the city"
                       value={value || ''}/>
            </FormStyle>
        )
};

type InputFormProps = {fetchWeather: Function}

export default InputForm;
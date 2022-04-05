import styled from 'styled-components';

const SliderComponent = styled.input`
    width: 320px;
    margin: 100px;
    background: linear-gradient(90deg, #FA3E59 16.43%, #FFFFFF 100%);
    -webkit-appearance: none;
    border-radius: 16px;
    padding: 5px;
    transition: opacity 0.5s;
    position: relative;
    &:before {
        color: #FA3E59;
        position: absolute;
        left: 100px;
        top: 10px;
        z-index: 1;
        font-size: 32px;
    }
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        border-radius: 16px;
        /* background: #FA3E59; */
        opacity: 0.75;
        background: -webkit-linear-gradient(top, #fafafa 0%,#dedede 50%,#cfcfcf 51%,#a3a3a3 100%);
        z-index: 1;
        width: 75px;
        position: relative;
        height: 50px;
    }
    &::-webkit-slider-thumb:before {
        color: #FA3E59;
        position: absolute;
        left: 5px;
        top: -10px;
        z-index: 1;
        font-size: 56px;
        font-weight: bold;
        content: "->";
    }              
`;

const SliderComponentSuccess = styled.input`
width: 320px;
margin: 100px;
background: #0EB60B;
-webkit-appearance: none;
border-radius: 16px;
padding: 5px;
opacity: 0.5;
transition: opacity 0.5s;
position: relative;
content: "Realizado com Sucesso";
&::-webkit-slider-thumb {
    -webkit-appearance: none;
    position: relative;
    height: 50px;
}                   
`;

export { SliderComponent, SliderComponentSuccess };
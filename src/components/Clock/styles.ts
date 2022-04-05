import styled from 'styled-components';

const AnalogClock = styled.div`
    width: 350px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #033549 url(src/assets/clock.png);
    background-size: cover;
    border-radius: 50%;
    border: 4px solid #091921;
    box-shadow: 0 -15px 15px rgba(255, 255, 255, 0.05),
        0 20px 20px rgba(0, 0, 0, 0.3),
        inset 0 -15px 15px rgba(255, 255, 255, 0.05),
        inset 0 20px 20px rgba(0, 0, 0, 0.3);
    &:before {
        content: '';
        position: absolute;
        width: 15px;
        height: 15px;
        background: #fff;
        z-index: 100000;
        border-radius: 50%;
    }            
`;

const Hour = styled.div`
    position: absolute;
    width: 160px;
    height: 160px;    
`;

const Hr = styled.div`
    width: 160px;
    height: 160px;
    display: flex;
    justify-content: center;
    position: absolute;
    border-radius: 50%;
    &:before {
        content: '';
        position: absolute;
        width: 8px;
        height: 80px;
        background: #f0821a;
        z-index: 10;
        border-radius: 6px 6px 0 0;
    }     
`;

const Min = styled.div`
    position: absolute;
    width: 190px;
    height: 190px;    
`;

const Mn = styled.div`
    width: 190px;
    height: 190px;
    display: flex;
    justify-content: center;
    position: absolute;
    border-radius: 50%; 
    &:before {
        content: '';
        position: absolute;
        width: 4px;
        height: 90px;
        background: #ffffff;
        z-index: 11;
        border-radius: 6px 6px 0 0;
    }        
`;

const Sec = styled.div`
    position: absolute;
    width: 230px;
    height: 230px;    
`;

const Sc = styled.div`
    width: 230px;
    height: 230px;
    display: flex;
    justify-content: center;
    position: absolute;
    border-radius: 50%;
    &:before {
        content: '';
        position: absolute;
        width: 2px;
        height: 150px;
        background: #008eff;
        z-index: 12;
        border-radius: 6px 6px 0 0;
    }         
`;

const DigitalClock = styled.div`
    position: absolute;
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 59px;
    opacity: 0.8;
    // color: #033549;          
`;

const StringDate = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;         
`;


export { AnalogClock, Hour, Min, Sec, Hr, Mn, Sc, DigitalClock, StringDate };
import React, { useState, useEffect, FC } from 'react';
import { AnalogClock, Hour, Min, Sec, Hr, Mn, Sc, DigitalClock, StringDate } from './styles';
import { transform } from "typescript";

const Clock: FC<any> = (): JSX.Element => {


    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');
    const [dayWeek, setDayWeek] = useState('');
    const [dayMonth, setDayMonth] = useState('');
    const [year, setYear] = useState(0);
    const [hourTransform, setHourTransform] = useState('');
    const [minTransform, setMinTransform] = useState('');
    const [secTransform, setSecTransform] = useState('');

    // Função para formatar 1 em 01
    function zeroFill(n: number) {
        return ('0' + n).slice(-2);
    }

    const days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    function refreshClock() {
        const deg = 6;

        const now = new Date();

        let day = days[now.getDay()];
        let month = zeroFill(now.getUTCDate()) + ' ' + months[now.getMonth()];
        let year = now.getFullYear();

        setDayWeek(day);
        setDayMonth(month);
        setYear(year);
        setHours(zeroFill(now.getHours()));
        setMinutes(zeroFill(now.getMinutes()));
        setSeconds(zeroFill(now.getSeconds()));

        let hh = now.getHours() * 30;
        let mm = now.getMinutes() * deg;
        let ss = now.getSeconds() * deg;

        setHourTransform(`rotateZ(${hh + (mm / 12)}deg)`);
        setMinTransform(`rotateZ(${mm}deg)`);
        setSecTransform(`rotateZ(${ss}deg)`);
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);

        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);


    return (
        <>
            <AnalogClock>
                <Hour><Hr style={{ transform: hourTransform }}></Hr></Hour>
                <Min><Mn style={{ transform: minTransform }}></Mn></Min>
                <Sec><Sc style={{ transform: secTransform }}></Sc></Sec>
            </AnalogClock>
            <DigitalClock>{hours}:{minutes}</DigitalClock>
            <StringDate>{dayWeek}., {dayMonth} de {year}</StringDate>
        </>
    );
}

export default Clock;
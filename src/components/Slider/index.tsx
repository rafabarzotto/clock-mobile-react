import React, { useState, useEffect, FC, ChangeEvent, MouseEventHandler } from 'react';
import { SliderComponent, SliderComponentSuccess } from './styles';


const Slider: FC<any> = (): JSX.Element => {

    const [rangeMin, setRangeMin] = useState(0);
    const [rangeMax, setRangeMax] = useState(100);
    const [rangeValue, setRangeValue] = useState(0);
    const [rangeEnd, setRangeEnd] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(parseInt(e.target.value));
        setRangeValue(parseInt(e.target.value));
        e.preventDefault();
    }

    const punchStartHandler = (e: MouseEvent) => {
        console.log('apertou');
    }

    const punchEndHandler = (e: MouseEvent) => {
        console.log('largou');
        if (rangeValue == rangeMax) {
            successHandler();
        } else {
            setRangeValue(0);
        }
    }

    const successHandler = () => {
        setRangeEnd(true);
        const interval = setInterval(() => {
            setRangeEnd(false);
            setRangeValue(0);
        }, 3000);

        console.log('bater ponto');
    }


    useEffect(() => {

    }, []);

    return (
        <>
            {rangeEnd ? <SliderComponentSuccess type="range"></SliderComponentSuccess>
                : <SliderComponent type="range" min={rangeMin} max={rangeMax} value={rangeValue} onChange={handleChange} onMouseDown={punchStartHandler} onMouseUp={punchEndHandler}></SliderComponent>}
        </>
    );
}

export default Slider;
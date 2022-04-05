import { useContext, useEffect, useState } from 'react';
import Clock from '../../components/Clock';
import Slider from '../../components/Slider';


function HomePage() {

    useEffect(() => {

    }, []);

    return (
        <>
            <Clock></Clock>
            <Slider></Slider>
        </>
    );
}

export default HomePage;
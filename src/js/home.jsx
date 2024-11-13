import React, { useState, useEffect } from "react";
import SimpleCounter from "./SimpleCounter";
import "../styles/index.css";

function Home() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Calcular los dígitos individuales
    const digitOne = Math.floor(seconds % 10);
    const digitTwo = Math.floor((seconds / 10) % 10);
    const digitThree = Math.floor((seconds / 100) % 10);
    const digitFour = Math.floor((seconds / 1000) % 10);
    const digitFive = Math.floor((seconds / 10000) % 10);
    const digitSix = Math.floor((seconds / 100000) % 10);

    return (
        <div className="container">
            <h1>Contador de Segundos</h1>
            <SimpleCounter
                digitOne={digitOne}
                digitTwo={digitTwo}
                digitThree={digitThree}
                digitFour={digitFour}
                digitFive={digitFive}
                digitSix={digitSix}
            />
        </div>
    );
}

export default Home;

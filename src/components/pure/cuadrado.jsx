import React, { useState } from 'react';


function generarNumero(numero) {
    return (Math.random() * numero).toFixed(0);
}


function mouseOver() {
    let randomColor
    return randomColor = generarNumero(255) + "," + generarNumero(255) + "," + generarNumero(255)

}




const Cuadrado = () => {

    const [colorR, setColor] = useState('');


    const styleDiv = {
        background: 'black',
        width: '250px',
        height: '250px'

    }


    return (
        <div>

            {colorR !== '0,0,0' ?<div style={styleDiv}  onMouseMove={(e) => {
                let color = mouseOver();
                setColor(color)
                e.target.style.background = `rgb(${color})`;

            }} onDoubleClick={(e) => {
                setColor('0,0,0')
            }}></div> : <div  style={styleDiv}  onDoubleClick={(e) => {
                e.target.style.background = `rgb(${colorR})`
                setColor(generarNumero())
            }}></div> }



        </div>
    );
}

export default Cuadrado;

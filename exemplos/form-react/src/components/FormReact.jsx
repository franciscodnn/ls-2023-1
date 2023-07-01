'use client';

import { useEffect, useState } from "react";

export default function FormReact() {
    const [qtdRecheio, setQtdRecheio] = useState(0);
    // const [recheio1, setRecheio1] = useState('');
    const [recheios, setRecheios] = useState([]);

    function handleQtdRecheio(event) {
        setQtdRecheio(Number(event.target.value));

        console.log(qtdRecheio);
    }

    useEffect( () => {
        let iniArray = [];

        if(qtdRecheio == 0) iniArray = [];
        else if(qtdRecheio == 1) iniArray = [''];
        else if(qtdRecheio == 2) iniArray = ['', ''];
        else iniArray = ['', '', ''];

        setRecheios(iniArray);
    }, [qtdRecheio]);

    function handleRecheios(event) {
        const { name, value } = event.target;
        const previousRecheios = recheios;

        if(name == 'recheio-1') previousRecheios.splice(0, 1, value);
        else if(name == 'recheio-2') previousRecheios.splice(1, 1, value);
        else if(name == 'recheio-3') previousRecheios.splice(2, 1, value);

        setRecheios(previousRecheios);
        // setRecheio1(event.target.value);

        // console.log(recheio1);
    }

    return (
        <form>
            <div>
                <label htmlFor="qtd-recheio">Quantidade de recheio</label>
                <select id="qtd-recheio" value={qtdRecheio} onChange={ handleQtdRecheio }>
                    <option value="0">Nenhuma</option>
                    <option value="1">Um recheio</option>
                    <option value="2">Dois recheios</option>
                    <option value="3">Três recheios</option>
                </select>
            </div>
            {
                recheios.map( (recheio, index) => {
                return (
                    <div key={index}>
                        <label htmlFor={`recheio-${index + 1}`}>Recheio {index + 1}</label>
                        <input type="text" id={`recheio-${index + 1}`} name={`recheio-${index + 1}`} value={recheio} onChange={ handleRecheios }/>
                    </div>
                ) })
            }
            {/* <div style={ qtdRecheio >= 1?{display: 'block'}:{display: 'none' } }>
                <label htmlFor="recheio-1">Primeiro recheio</label>
                <input type="text" id="recheio-1" name="recheio-1" value={recheio1} onChange={ handleRecheios }/>
            </div>
            <div style={ qtdRecheio >= 1?{display: 'block'}:{display: 'none' } }>
                <label htmlFor="recheio-1">Primeiro recheio</label>
                <input type="text" id="recheio-1" name="recheio-1" value={recheio1} onChange={ handleRecheios }/>
            </div>
            <div style={ qtdRecheio >= 1?{display: 'block'}:{display: 'none' } }>
                <label htmlFor="recheio-1">Primeiro recheio</label>
                <input type="text" id="recheio-1" name="recheio-1" value={recheio1} onChange={ handleRecheios }/>
            </div> */}
        </form>
    );
}
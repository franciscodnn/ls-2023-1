'use client';

import { useEffect } from 'react';

export default function LocaisDescartes() {
    useEffect( () => {
        async function loadData() {
            const url = 'http://localhost:3001/locais-descartes';
            const response = await fetch(`${url}`);
            const json = await response.json();

            console.log(json);
        }

        loadData();
    }, []);

    return (
        <div>
            <h2>Dados impressos no console</h2>
        </div>
    );
}
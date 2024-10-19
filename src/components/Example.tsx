// src/App.tsx
import React, { useEffect, useState } from 'react';
import api from '../api';

interface DataType {
    id: number;
    name: string;
    // Agrega otros campos según tu respuesta
}

const ExampleComponent: React.FC = () => {
    const [data, setData] = useState<DataType[]>([]);

    useEffect(() => {
        api.get<DataType[]>('/ruta-del-endpoint')
            .then((response: any) => {
                setData(response.data);
            })
            .catch((error: any) => {
                console.error('Error al obtener datos:', error);
            });
    }, []);

    return (
        <div>
            <h1>Datos del Backend</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ExampleComponent;

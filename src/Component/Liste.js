import React, { useEffect, useState } from "react";
import axios from "axios";

function Liste() {
    const [liste, setListe] = useState([]);

    useEffect(() => {
        const fetchListe = async () => {
            const { data } = await axios.get("http://127.0.0.1:8000/api/clients?page=1");
            setListe(data['hydra:member']);
        };
        fetchListe();
    }, []);

    return (
        <div className="Liste">
            <ul>
                {liste.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Liste;

import React, { useEffect, useState } from "react";
import axios from "axios";

function Infos() {
    const [infos, setInfos] = useState([]);

    useEffect(() => {
        const fetchInfos = async () => {
            const { data } = await axios.get("http://127.0.0.1:8000/api/infos_clients?page=1");
            console.log(data['hydra:member'])
            setInfos(data['hydra:member']);
        };
        fetchInfos();
    }, []);

    return (
        <div className="Infos">
            <ul>
                {infos.map((item, index) => (
                    <React.Fragment key={index}>
                    <li>{item.ipAdress}</li>
                    <li>{item.clientId}</li>
                    </React.Fragment>
                    ))}
            </ul>
        </div>
    );
}

export default Infos;
